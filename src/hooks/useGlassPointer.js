import { useEffect } from "react";

/**
 * Lightweight, dependency-free pointer tracking for liquid-glass surfaces.
 * One passive document listener updates `--mx`/`--my` (0-100%) on whichever
 * `.glass-interactive` element is under the pointer, driving the specular
 * sweep in CSS. Honors prefers-reduced-motion by skipping updates.
 */
export function useGlassPointer() {
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (reduce?.matches) return;

    const onMove = (event) => {
      const el = event.target?.closest?.(".glass-interactive");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}
