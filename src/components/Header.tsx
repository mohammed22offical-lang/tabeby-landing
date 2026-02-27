"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { useTheme } from "@/contexts/ThemeContext";
import { content } from "@/data/content";

const navLinks = [
  { id: "problem", key: "problem" as const },
  { id: "solution", key: "solution" as const },
  { id: "features", key: "features" as const },
  { id: "for-clinics", key: "forClinics" as const },
] as const;

export default function Header() {
  const pathname = usePathname() ?? "/";
  const { locale } = useLocale();
  const { theme } = useTheme();
  const t = content[locale].nav;
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const base = pathname || "/";
  const themeHref = (t: "light" | "dark") => `${base}?theme=${t}`;
  const localeHref = (loc: string) => `${base}?locale=${loc}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-card)]/95 dark:bg-gray-800/95 backdrop-blur-md border-b border-[var(--border-subtle)] dark:border-gray-600 safe-area-padding">
      <div dir="ltr" className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3 text-left">
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 min-w-0 shrink-0"
          aria-label={locale === "ar" ? "طبيبي الرئيسية" : locale === "ku" ? "طبیبی سەرەتا" : "Tabeby Home"}
          onClick={closeMenu}
        >
          <span className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/tabeby-logo.png"
              alt=""
              width={88}
              height={88}
              className="object-contain w-full h-full dark:opacity-95"
              quality={100}
              priority
              unoptimized
            />
          </span>
          <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent tracking-tight truncate">
            Tabeby
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition min-h-[44px] flex items-center"
            >
              {t[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center rounded-xl bg-gray-100/80 dark:bg-gray-700/50 p-1 gap-0.5">
            <Link
              href={themeHref(theme === "dark" ? "light" : "dark")}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition touch-manipulation"
              aria-label={theme === "dark" ? "وضع فاتح" : "وضع داكن"}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </Link>
            {(["ar", "en", "ku"] as const).map((loc) => (
              <Link
                key={loc}
                href={localeHref(loc)}
                title={loc === "ar" ? "العربية" : loc === "en" ? "English" : "کوردی"}
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center px-2 py-2 rounded-lg text-sm font-medium touch-manipulation transition ${
                  locale === loc
                    ? "bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
                aria-label={loc === "ar" ? "العربية" : loc === "en" ? "English" : "کوردی"}
              >
                {loc === "ar" ? "ع" : loc === "en" ? "En" : "Ku"}
              </Link>
            ))}
          </div>
          <Link
            href="#for-clinics"
            className="hidden sm:inline-flex px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition min-h-[44px] items-center"
            onClick={closeMenu}
          >
            {t.forClinics}
          </Link>
          <a
            href="#join-patients"
            className="inline-flex items-center justify-center rounded-xl px-4 sm:px-5 py-3 min-h-[44px] text-sm font-semibold bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-soft hover:shadow-soft-lg hover:opacity-95 active:opacity-90 transition touch-manipulation"
            onClick={closeMenu}
          >
            {t.earlyAccess}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition touch-manipulation"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
          >
            <span className={`w-5 h-0.5 rounded-full bg-current transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 rounded-full bg-current transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed left-0 right-0 bottom-0 mobile-menu-top z-40 bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
        aria-hidden
      />
      <nav
        className={`md:hidden fixed left-4 right-4 z-50 rounded-2xl bg-[var(--bg-card)] dark:bg-gray-800 border border-[var(--border-subtle)] dark:border-gray-600 shadow-xl overflow-hidden transition-all duration-200 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"} mobile-menu-top`}
        aria-label="القائمة الرئيسية"
      >
        <div dir="ltr" className="text-left">
          {navLinks.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="block px-5 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 active:bg-gray-100 dark:active:bg-gray-700 border-b border-[var(--border-subtle)] dark:border-gray-700 last:border-0 min-h-[48px] flex items-center"
            >
              {t[key]}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
