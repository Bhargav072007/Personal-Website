import { useState, useEffect } from "react";

export const BRAND_THEMES = [
  { id: "light", label: "Light Mode" },
  { id: "dark", label: "Dark Mode" },
];

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("brand-theme");
    return storedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.brandTheme = theme;
    localStorage.setItem("brand-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const activeTheme = BRAND_THEMES.find((item) => item.id === theme) || BRAND_THEMES[0];

  return { theme, activeTheme, setTheme, toggleTheme, themes: BRAND_THEMES };
}
