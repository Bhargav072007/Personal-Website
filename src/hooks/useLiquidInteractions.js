import { useEffect } from "react";

export function useLiquidInteractions() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (reduceMotion?.matches) return;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const onPointerMove = (event) => {
      const glass = event.target?.closest?.(".glass, .glass-nav, .affiliations-strip");
      if (glass) {
        const rect = glass.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        glass.style.setProperty("--mx", `${x}%`);
        glass.style.setProperty("--my", `${y}%`);
      }

      const magnetic = event.target?.closest?.(".glass-interactive");
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const x = clamp(((event.clientX - rect.left) / rect.width - 0.5) * 14, -7, 7);
        const y = clamp(((event.clientY - rect.top) / rect.height - 0.5) * 14, -7, 7);
        magnetic.style.setProperty("--magnet-x", `${x}px`);
        magnetic.style.setProperty("--magnet-y", `${y}px`);
      }

      const tilt = event.target?.closest?.(".liquid-tilt");
      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
        tilt.style.setProperty("--tilt-x", `${y}deg`);
        tilt.style.setProperty("--tilt-y", `${x}deg`);
      }
    };

    const onPointerOut = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const glass = target.closest(".glass, .glass-nav, .affiliations-strip");
      if (glass && !glass.contains(event.relatedTarget)) {
        glass.style.setProperty("--mx", "50%");
        glass.style.setProperty("--my", "0%");
      }

      const magnetic = target.closest(".glass-interactive");
      if (magnetic && !magnetic.contains(event.relatedTarget)) {
        magnetic.style.setProperty("--magnet-x", "0px");
        magnetic.style.setProperty("--magnet-y", "0px");
      }

      const tilt = target.closest(".liquid-tilt");
      if (tilt && !tilt.contains(event.relatedTarget)) {
        tilt.style.setProperty("--tilt-x", "0deg");
        tilt.style.setProperty("--tilt-y", "0deg");
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, []);
}
