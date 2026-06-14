/**
 * Physically-based Liquid Glass engine.
 *
 * Implements the technique from https://kube.io/blog/liquid-glass-css-svg/:
 * a refraction profile derived from Snell-Descartes' law over a convex-squircle
 * surface is baked into a per-element displacement map (R = x-shift, G = y-shift)
 * plus a specular rim map. These feed an SVG <filter> that is applied to each
 * glass surface's ::before plane via the `--lg-filter` custom property.
 *
 * The ::before plane already samples + blurs the backdrop (backdrop-filter),
 * so a plain `filter:` (not backdrop-filter) does the displacement — which works
 * in Chromium, Firefox and Safari, unlike SVG backdrop-filters.
 *
 * Filters are deduplicated by a (w × h × radius × variant × theme) signature so
 * the many same-sized surfaces (buttons, badges) share a single filter.
 */

// Surface height profiles (normalised across the bezel, 0 = outer edge, 1 = flat).
const SURFACE_FNS = {
  convex_squircle: (x) => Math.pow(1 - Math.pow(1 - x, 4), 0.25),
  convex_circle: (x) => Math.sqrt(1 - (1 - x) * (1 - x)),
  lip: (x) => {
    const convex = Math.pow(1 - Math.pow(1 - Math.min(x * 2, 1), 4), 0.25);
    const concave = 1 - Math.sqrt(1 - (1 - x) * (1 - x)) + 0.1;
    const t = 6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3;
    return convex * (1 - t) + concave * t;
  },
};

// Per-sample refracted offset (in px) across the bezel, via the vector form of
// Snell's law on the glass surface normal.
function calculateRefractionProfile(glassThickness, bezelWidth, heightFn, ior, samples = 128) {
  const eta = 1 / ior;
  const refract = (nx, ny) => {
    const dot = ny;
    const k = 1 - eta * eta * (1 - dot * dot);
    if (k < 0) return null; // total internal reflection
    const sq = Math.sqrt(k);
    return [-(eta * dot + sq) * nx, eta - (eta * dot + sq) * ny];
  };
  const profile = new Float64Array(samples);
  for (let i = 0; i < samples; i++) {
    const x = i / samples;
    const y = heightFn(x);
    const dx = x < 1 ? 0.0001 : -0.0001;
    const y2 = heightFn(x + dx);
    const deriv = (y2 - y) / dx;
    const mag = Math.sqrt(deriv * deriv + 1);
    const ref = refract(-deriv / mag, -1 / mag);
    profile[i] = ref ? ref[0] * ((y * bezelWidth + glassThickness) / ref[1]) : 0;
  }
  return profile;
}

// Rounded-rectangle displacement map. Distance to the nearest edge collapses to
// a radial distance in the corners and a 1-D distance along straight edges; the
// precomputed refraction profile is sampled by distance from the outer edge.
function generateDisplacementMap(w, h, radius, bezelWidth, profile, maxDisp) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  const img = ctx.createImageData(w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    d[i] = 128;
    d[i + 1] = 128;
    d[i + 2] = 0;
    d[i + 3] = 255;
  }

  const r = radius;
  const rSq = r * r;
  const r1Sq = (r + 1) ** 2;
  const rBSq = Math.max(r - bezelWidth, 0) ** 2;
  const wB = w - r * 2;
  const hB = h - r * 2;
  const S = profile.length;
  const rRoot = Math.sqrt(rSq);
  const r1Root = Math.sqrt(r1Sq);

  for (let y1 = 0; y1 < h; y1++) {
    for (let x1 = 0; x1 < w; x1++) {
      const x = x1 < r ? x1 - r : x1 >= w - r ? x1 - r - wB : 0;
      const y = y1 < r ? y1 - r : y1 >= h - r ? y1 - r - hB : 0;
      const dSq = x * x + y * y;
      if (dSq > r1Sq || dSq < rBSq) continue;
      const dist = Math.sqrt(dSq);
      if (dist === 0) continue;
      const fromSide = r - dist;
      const op = dSq < rSq ? 1 : 1 - (dist - rRoot) / (r1Root - rRoot);
      if (op <= 0) continue;
      const cos = x / dist;
      const sin = y / dist;
      const bi = Math.min(((fromSide / bezelWidth) * S) | 0, S - 1);
      const disp = profile[bi] || 0;
      const dX = (-cos * disp) / maxDisp;
      const dY = (-sin * disp) / maxDisp;
      const idx = (y1 * w + x1) * 4;
      d[idx] = (128 + dX * 127 * op + 0.5) | 0;
      d[idx + 1] = (128 + dY * 127 * op + 0.5) | 0;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL();
}

// Rim specular highlight: brightest where the surface normal aligns with the
// light direction `angle`, fading toward the flat interior.
function generateSpecularMap(w, h, radius, bezelWidth, angle) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  const img = ctx.createImageData(w, h);
  const d = img.data;
  d.fill(0);

  const r = radius;
  const rSq = r * r;
  const r1Sq = (r + 1) ** 2;
  const rBSq = Math.max(r - bezelWidth, 0) ** 2;
  const wB = w - r * 2;
  const hB = h - r * 2;
  const rRoot = Math.sqrt(rSq);
  const r1Root = Math.sqrt(r1Sq);
  const sv = [Math.cos(angle), Math.sin(angle)];

  for (let y1 = 0; y1 < h; y1++) {
    for (let x1 = 0; x1 < w; x1++) {
      const x = x1 < r ? x1 - r : x1 >= w - r ? x1 - r - wB : 0;
      const y = y1 < r ? y1 - r : y1 >= h - r ? y1 - r - hB : 0;
      const dSq = x * x + y * y;
      if (dSq > r1Sq || dSq < rBSq) continue;
      const dist = Math.sqrt(dSq);
      if (dist === 0) continue;
      const fromSide = r - dist;
      const op = dSq < rSq ? 1 : 1 - (dist - rRoot) / (r1Root - rRoot);
      if (op <= 0) continue;
      const cos = x / dist;
      const sin = -y / dist;
      const dot = Math.abs(cos * sv[0] + sin * sv[1]);
      const edge = Math.sqrt(Math.max(0, 1 - (1 - fromSide) ** 2));
      const coeff = dot * edge;
      const col = (255 * coeff) | 0;
      const alpha = (col * coeff * op) | 0;
      const idx = (y1 * w + x1) * 4;
      d[idx] = col;
      d[idx + 1] = col;
      d[idx + 2] = col;
      d[idx + 3] = alpha;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL();
}

const SVG_NS = "http://www.w3.org/2000/svg";

function readNumber(styles, name, fallback) {
  const n = parseFloat(styles.getPropertyValue(name));
  return Number.isFinite(n) ? n : fallback;
}

// Variant overrides let specific surfaces (panels, nav, media) be thicker or
// shinier than the base read from CSS custom properties.
const VARIANTS = {
  base: {},
  panel: { thicknessMul: 1.15, specMul: 1.1 },
  nav: { thicknessMul: 0.7, bezelMul: 0.8 },
  media: { thicknessMul: 1.25, specMul: 1.2 },
};

function classifyVariant(el) {
  if (el.classList.contains("glass-nav")) return "nav";
  if (el.classList.contains("glass-media") || el.classList.contains("affiliations-strip")) return "media";
  if (el.classList.contains("glass-panel") || el.classList.contains("glass-strong")) return "panel";
  return "base";
}

// Refraction is GPU-expensive (per-element backdrop sampling + SVG displacement),
// so it is reserved for larger, mostly-static surfaces — cards, panels, modals.
// Smaller/numerous/animated elements (buttons, pills, badges, nav) keep the
// cheap blur+tint glass, which is what keeps the page smooth.
const MIN_REFRACT_W = 200;
const MIN_REFRACT_H = 150;
const MIN_REFRACT_AREA = 200 * 150; // ~30k px²

export class LiquidGlassController {
  constructor() {
    this.supported =
      typeof window !== "undefined" &&
      typeof document !== "undefined" &&
      typeof ResizeObserver !== "undefined" &&
      !!document.createElement("canvas").getContext;

    this.selector = ".glass, .glass-nav, .affiliations-strip";
    this.seq = 0;
    this.theme = "light";
    this.params = null;
    this.cache = new Map(); // signature -> filterId
    this.entries = new Map(); // el -> { sig, raf }

    if (!this.supported) return;

    this.svg = document.createElementNS(SVG_NS, "svg");
    this.svg.setAttribute("aria-hidden", "true");
    this.svg.setAttribute("width", "0");
    this.svg.setAttribute("height", "0");
    this.svg.setAttribute("color-interpolation-filters", "sRGB");
    this.svg.style.cssText =
      "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;";
    this.defs = document.createElementNS(SVG_NS, "defs");
    this.svg.appendChild(this.defs);

    this.ro = new ResizeObserver((records) => {
      for (const rec of records) this.schedule(rec.target);
    });
    this.mo = new MutationObserver(() => this.scan());
  }

  start() {
    if (!this.supported) return () => {};
    if (!document.body.contains(this.svg)) document.body.appendChild(this.svg);
    document.documentElement.setAttribute("data-lg-runtime", "on");

    this.readTheme();
    this.scan();
    this.mo.observe(document.body, { childList: true, subtree: true });

    // Regenerate everything when the theme (class / brand attribute) changes.
    this.themeObserver = new MutationObserver(() => this.onThemeChange());
    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-brand-theme"],
    });

    return () => this.destroy();
  }

  readTheme() {
    const root = document.documentElement;
    this.theme = root.classList.contains("dark") ? "dark" : "light";
    // Refraction only renders for the glass themes (light "liquid-glass" + dark);
    // Heritage/Bold use solid surfaces and ignore --lg-filter.
    this.glassMode =
      root.classList.contains("dark") || root.dataset.brandTheme === "liquid-glass";
    this.params = this.readParams();
  }

  readParams() {
    const s = getComputedStyle(document.documentElement);
    return {
      thickness: readNumber(s, "--lg-thickness", this.theme === "dark" ? 58 : 66),
      bezel: readNumber(s, "--lg-bezel", 22),
      ior: readNumber(s, "--lg-ior", 1.5),
      scale: readNumber(s, "--lg-scale", 1),
      blur: readNumber(s, "--lg-blur", 1.1),
      specOpacity: readNumber(s, "--lg-spec-opacity", this.theme === "dark" ? 0.42 : 0.6),
      specSat: readNumber(s, "--lg-spec-sat", 6),
      specAngle: readNumber(s, "--lg-spec-angle", 60),
      surface: "convex_squircle",
    };
  }

  onThemeChange() {
    this.readTheme();
    // Invalidate caches and rebuild every tracked element for the new theme.
    this.cache.clear();
    this.defs.textContent = "";
    for (const el of this.entries.keys()) {
      this.entries.get(el).sig = null;
      this.schedule(el);
    }
  }

  scan() {
    if (!this.supported) return;
    const found = new Set();
    document.querySelectorAll(this.selector).forEach((el) => {
      found.add(el);
      if (!this.entries.has(el)) {
        this.entries.set(el, { sig: null, raf: 0 });
        this.ro.observe(el);
        this.schedule(el);
      }
    });
    for (const el of [...this.entries.keys()]) {
      if (!found.has(el) && !document.body.contains(el)) {
        const entry = this.entries.get(el);
        if (entry.raf) cancelAnimationFrame(entry.raf);
        this.ro.unobserve(el);
        this.entries.delete(el);
      }
    }
  }

  schedule(el) {
    const entry = this.entries.get(el);
    if (!entry) return;
    if (entry.raf) cancelAnimationFrame(entry.raf);
    entry.raf = requestAnimationFrame(() => {
      entry.raf = 0;
      this.build(el);
    });
  }

  build(el) {
    const entry = this.entries.get(el);
    if (!entry) return;

    const rect = el.getBoundingClientRect();
    const w = Math.round(rect.width);
    const h = Math.round(rect.height);

    // Only large, static surfaces get true refraction; everything else stays
    // cheap blur-glass (and in non-glass themes nothing is refractive).
    const eligible =
      this.glassMode &&
      w >= MIN_REFRACT_W &&
      h >= MIN_REFRACT_H &&
      w * h >= MIN_REFRACT_AREA;

    if (!eligible) {
      if (entry.sig !== "off") {
        entry.sig = "off";
        el.style.removeProperty("--lg-filter");
        el.removeAttribute("data-lg-refract");
      }
      return;
    }

    const cs = getComputedStyle(el);
    const cssRadius = parseFloat(cs.borderTopLeftRadius) || 0;
    const maxRadius = Math.max(2, Math.min(cssRadius || 16, Math.min(w, h) / 2 - 1));
    const variant = classifyVariant(el);

    const sig = `${w}x${h}x${Math.round(maxRadius)}x${variant}x${this.theme}`;
    if (entry.sig === sig) return;
    entry.sig = sig;

    let filterId = this.cache.get(sig);
    if (!filterId) {
      filterId = this.createFilter(w, h, maxRadius, variant);
      if (!filterId) return;
      this.cache.set(sig, filterId);
    }
    el.style.setProperty("--lg-filter", `url("#${filterId}")`);
    el.setAttribute("data-lg-refract", "");
  }

  createFilter(w, h, radius, variant) {
    const p = this.params || this.readParams();
    const v = VARIANTS[variant] || VARIANTS.base;
    const thickness = p.thickness * (v.thicknessMul || 1);
    const bezelReq = p.bezel * (v.bezelMul || 1);
    const bezel = Math.min(bezelReq, radius - 1, Math.min(w, h) / 2 - 1);
    if (bezel < 1) return null;

    const heightFn = SURFACE_FNS[p.surface] || SURFACE_FNS.convex_squircle;
    const profile = calculateRefractionProfile(thickness, bezel, heightFn, p.ior, 128);
    const maxDisp = Math.max(...Array.from(profile, Math.abs)) || 1;
    const dispUrl = generateDisplacementMap(w, h, radius, bezel, profile, maxDisp);
    const specUrl = generateSpecularMap(
      w,
      h,
      radius,
      Math.min(bezel * 2.5, radius),
      (p.specAngle * Math.PI) / 180,
    );
    const scale = maxDisp * p.scale;
    const specOpacity = Math.min(1, p.specOpacity * (v.specMul || 1));

    const id = `lg-${++this.seq}`;
    const filter = document.createElementNS(SVG_NS, "filter");
    filter.setAttribute("id", id);
    filter.setAttribute("x", "0%");
    filter.setAttribute("y", "0%");
    filter.setAttribute("width", "100%");
    filter.setAttribute("height", "100%");
    filter.setAttribute("color-interpolation-filters", "sRGB");
    filter.innerHTML = `
      <feGaussianBlur in="SourceGraphic" stdDeviation="${p.blur}" result="blurred" />
      <feImage href="${dispUrl}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="disp" />
      <feDisplacementMap in="blurred" in2="disp" scale="${scale}" xChannelSelector="R" yChannelSelector="G" result="displaced" />
      <feColorMatrix in="displaced" type="saturate" values="${p.specSat}" result="displaced_sat" />
      <feImage href="${specUrl}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="spec" />
      <feComposite in="displaced_sat" in2="spec" operator="in" result="spec_masked" />
      <feComponentTransfer in="spec" result="spec_faded">
        <feFuncA type="linear" slope="${specOpacity}" />
      </feComponentTransfer>
      <feBlend in="spec_masked" in2="displaced" mode="normal" result="with_sat" />
      <feBlend in="spec_faded" in2="with_sat" mode="screen" />
    `;
    this.defs.appendChild(filter);
    return id;
  }

  destroy() {
    if (!this.supported) return;
    this.mo.disconnect();
    this.ro.disconnect();
    this.themeObserver?.disconnect();
    for (const el of this.entries.keys()) {
      el.style.removeProperty("--lg-filter");
      el.removeAttribute("data-lg-refract");
    }
    this.entries.clear();
    this.cache.clear();
    if (this.svg.parentNode) this.svg.parentNode.removeChild(this.svg);
    document.documentElement.removeAttribute("data-lg-runtime");
  }
}
