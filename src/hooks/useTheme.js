import { useState, useEffect } from "react";

export const BRAND_THEMES = [
  { id: "liquid-glass", label: "Liquid Glass Light", colors: ["#112244", "#ffffff", "#2563d8"] },
  { id: "heritage", label: "Heritage Gold", colors: ["#a71930", "#d4af37", "#1f7a73"] },
  { id: "dark", label: "Dark Mode", colors: ["#0d0d0d", "#f5f5f5", "#dc354c"] },
  { id: "bold", label: "Bold Theme", colors: ["#e4002b", "#ffffff", "#222222"] },
];

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("brand-theme");
    if (storedTheme === "default") return "liquid-glass";
    return BRAND_THEMES.some((item) => item.id === storedTheme) ? storedTheme : "liquid-glass";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.brandTheme = theme;
    localStorage.setItem("brand-theme", theme);
  }, [theme]);

  const activeTheme = BRAND_THEMES.find((item) => item.id === theme) || BRAND_THEMES[0];

  return { theme, activeTheme, setTheme, themes: BRAND_THEMES };
}
