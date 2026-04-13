import { useState, useEffect } from "react";

export const BRAND_THEMES = [
  { id: "default", label: "Default", colors: ["#111827", "#ffffff", "#2aa198"] },
  { id: "heritage", label: "Heritage Gold", colors: ["#a71930", "#d4af37", "#1f7a73"] },
  { id: "dark", label: "Dark Mode", colors: ["#07111f", "#f1f5f9", "#dc354c"] },
  { id: "clear", label: "Clear", colors: ["#f8fbff", "#b9e8ff", "#007aff"] },
  { id: "bold", label: "Bold Theme", colors: ["#e4002b", "#ffffff", "#222222"] },
];

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("brand-theme");
    return BRAND_THEMES.some((item) => item.id === storedTheme) ? storedTheme : "default";
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
