"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const COOKIE_NAME = "tabeby-theme";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

export type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const m = document.cookie.match(new RegExp(`(?:^| )${COOKIE_NAME}=([^;]+)`));
  const v = m?.[1];
  if (v === "dark" || v === "light") return v;
  return "dark";
}

function setThemeCookie(theme: Theme) {
  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

type ThemeContextValue = { theme: Theme; setTheme: (t: Theme) => void };

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme, mounted]);

  useEffect(() => {
    const handler = (e: CustomEvent<Theme>) => {
      if (e.detail === "dark" || e.detail === "light") setThemeState(e.detail);
    };
    window.addEventListener("tabeby-theme-change", handler as EventListener);
    return () => window.removeEventListener("tabeby-theme-change", handler as EventListener);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    setThemeCookie(next);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
