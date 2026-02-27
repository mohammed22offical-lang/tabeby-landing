"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Locale } from "@/data/content";

const COOKIE_NAME = "tabeby-locale";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

function getInitialLocale(): Locale {
  if (typeof document === "undefined") return "ar";
  const match = document.cookie.match(new RegExp(`(?:^| )${COOKIE_NAME}=([^;]+)`));
  const value = match?.[1];
  if (value === "en" || value === "ar" || value === "ku") return value;
  return "ar";
}

function setLocaleCookie(locale: Locale) {
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute("dir", locale === "en" ? "ltr" : "rtl");
    root.setAttribute("lang", locale === "en" ? "en" : locale === "ku" ? "ku" : "ar");
    root.classList.toggle("locale-ar", locale === "ar");
    root.classList.toggle("locale-en", locale === "en");
    root.classList.toggle("locale-ku", locale === "ku");
  }, [locale, mounted]);

  useEffect(() => {
    const handler = (e: CustomEvent<Locale>) => {
      if (e.detail === "ar" || e.detail === "en" || e.detail === "ku") setLocaleState(e.detail);
    };
    window.addEventListener("tabeby-locale-change", handler as EventListener);
    return () => window.removeEventListener("tabeby-locale-change", handler as EventListener);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    setLocaleCookie(next);
  }, []);

  const value: LocaleContextValue = { locale, setLocale };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
