import { useState, useEffect } from "react";

export const BRAND_THEMES = [
  { id: "heritage", label: "Heritage Gold", colors: ["#a71930", "#d4af37", "#1f7a73"] },
  { id: "air-france", label: "Air France", colors: ["#002654", "#ffffff", "#ed2939"] },
  { id: "qantas", label: "Qantas", colors: ["#e4002b", "#ffffff", "#222222"] },
];

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("brand-theme");
    return BRAND_THEMES.some((item) => item.id === storedTheme) ? storedTheme : "heritage";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    root.dataset.brandTheme = theme;
    localStorage.setItem("brand-theme", theme);
  }, [theme]);

  const activeTheme = BRAND_THEMES.find((item) => item.id === theme) || BRAND_THEMES[0];

  return { theme, activeTheme, setTheme, themes: BRAND_THEMES };
}
