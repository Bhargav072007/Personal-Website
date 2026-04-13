import { useEffect, useRef, useState } from "react";
import { Check, Palette } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, activeTheme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((value) => !value)}
        aria-label="Change visual theme"
        aria-expanded={open}
        className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
      >
        <Palette className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-56 rounded-md border border-border bg-popover p-2 text-popover-foreground shadow-xl">
          <p className="px-3 py-2 text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Theme
          </p>
          <div className="space-y-1">
            {themes.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setTheme(item.id);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-accent transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="flex overflow-hidden rounded-full border border-border">
                    {item.colors.map((color) => (
                      <span
                        key={color}
                        className="h-4 w-4"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </span>
                  {item.label}
                </span>
                {theme === item.id && <Check className="h-4 w-4 text-chart-1" />}
              </button>
            ))}
          </div>
          <p className="px-3 pt-2 text-[11px] text-muted-foreground">
            Current: {activeTheme.label}
          </p>
        </div>
      )}
    </div>
  );
}
