"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocale } from "@/contexts/LocaleContext";
import type { Locale } from "@/data/content";

const COOKIE_THEME = "tabeby-theme";
const COOKIE_LOCALE = "tabeby-locale";
const MAX_AGE = 365 * 24 * 60 * 60;

export default function SyncFromUrl() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { setTheme } = useTheme();
  const { setLocale } = useLocale();

  useEffect(() => {
    const theme = searchParams.get("theme");
    const locale = searchParams.get("locale");
    const updates: string[] = [];

    if (theme === "light" || theme === "dark") {
      document.cookie = `${COOKIE_THEME}=${theme}; path=/; max-age=${MAX_AGE}; SameSite=Lax`;
      document.documentElement.classList.toggle("dark", theme === "dark");
      setTheme(theme);
      updates.push("theme");
    }

    if (locale === "ar" || locale === "en" || locale === "ku") {
      document.cookie = `${COOKIE_LOCALE}=${locale}; path=/; max-age=${MAX_AGE}; SameSite=Lax`;
      document.documentElement.setAttribute("dir", locale === "en" ? "ltr" : "rtl");
      document.documentElement.setAttribute("lang", locale);
      document.documentElement.classList.remove("locale-ar", "locale-en", "locale-ku");
      document.documentElement.classList.add("locale-" + locale);
      setLocale(locale as Locale);
      updates.push("locale");
    }

    if (updates.length > 0) {
      const next = new URLSearchParams(searchParams.toString());
      updates.forEach((u) => next.delete(u));
      const q = next.toString();
      router.replace(q ? `${pathname}?${q}` : pathname);
    }
  }, [searchParams, pathname, router, setTheme, setLocale]);

  return null;
}
