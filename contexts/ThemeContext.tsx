"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { palettes } from "@/lib/theme/palettes";

type Theme = "light" | "dark";

const DEFAULT_PALETTE_ID = "notuser-blue";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  paletteId: string;
  setPaletteId: (id: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [paletteId, setPaletteIdState] = useState<string>(DEFAULT_PALETTE_ID);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const palette = palettes.find((p) => p.id === paletteId);
    if (!palette) return;

    const colors = theme === "light" ? palette.light : palette.dark;
    const root = document.documentElement;
    const brandBlueStart = colors.brandBlueStart ?? colors.primary;
    const brandBlueMid = colors.brandBlueMid ?? colors.accent;
    const brandBlueEnd = colors.brandBlueEnd ?? colors.primary;
    const bannerBlueStart = colors.bannerBlueStart ?? brandBlueStart;
    const bannerBlueMid = colors.bannerBlueMid ?? brandBlueMid;
    const bannerBlueEnd = colors.bannerBlueEnd ?? brandBlueEnd;

    root.style.setProperty("--brand-blue-start", brandBlueStart);
    root.style.setProperty("--brand-blue-mid", brandBlueMid);
    root.style.setProperty("--brand-blue-end", brandBlueEnd);
    root.style.setProperty("--banner-blue-start", bannerBlueStart);
    root.style.setProperty("--banner-blue-mid", bannerBlueMid);
    root.style.setProperty("--banner-blue-end", bannerBlueEnd);
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty(
      "--primary-foreground",
      colors.primaryForeground ?? (theme === "light" ? "0 0% 100%" : "0 0% 6%")
    );
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--accent-foreground", colors.accentForeground ?? colors.foreground);
    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--foreground", colors.foreground);
    root.style.setProperty("--card", colors.background);
    root.style.setProperty("--card-foreground", colors.foreground);
    root.style.setProperty("--popover", colors.background);
    root.style.setProperty("--popover-foreground", colors.foreground);
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty("--secondary-foreground", colors.foreground);
    root.style.setProperty("--muted", colors.muted);
    root.style.setProperty("--muted-foreground", theme === "light" ? "0 0% 40%" : "0 0% 60%");
    root.style.setProperty("--border", colors.border);
    root.style.setProperty("--input", colors.border);
    root.style.setProperty("--ring", colors.primary);
    root.style.setProperty("--selection", colors.selection);
    root.style.setProperty("--selection-foreground", colors.selectionForeground);
    root.style.setProperty(
      "--gradient-accent",
      `linear-gradient(135deg, hsl(${brandBlueStart}), hsl(${brandBlueEnd}))`
    );
    root.style.setProperty(
      "--banner-gradient",
      `linear-gradient(135deg, hsl(${bannerBlueStart}) 0%, hsl(${bannerBlueMid}) 48%, hsl(${bannerBlueEnd}) 100%)`
    );
    root.style.setProperty(
      "--blue-section-wash",
      `linear-gradient(to bottom, hsl(${bannerBlueStart} / ${theme === "light" ? "0.16" : "0.2"}), hsl(${bannerBlueStart} / ${theme === "light" ? "0.06" : "0.1"}), transparent)`
    );
    root.style.setProperty(
      "--shadow-glow",
      `0 0 40px -10px hsl(${brandBlueStart} / ${theme === "light" ? "0.22" : "0.28"})`
    );
  }, [paletteId, theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setPaletteId = (id: string) => {
    setPaletteIdState(id);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, paletteId, setPaletteId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
