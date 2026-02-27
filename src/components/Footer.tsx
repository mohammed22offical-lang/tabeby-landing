"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";
import { content } from "@/data/content";

const WHATSAPP_NUMBER = "9647781664994";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "support@tabeby-app.com";
const INSTAGRAM_URL = "https://www.instagram.com/tabeby.iq?igsh=eHE5bTk0aTdyamow";
const APP_STORE_URL = "https://apps.apple.com/app/tabeby/id6754250812";

export default function Footer() {
  const { locale } = useLocale();
  const t = content[locale].footer;

  return (
    <footer className="bg-[var(--bg-card)] dark:bg-gray-800 border-t border-[var(--border-subtle)] dark:border-gray-600 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="flex items-baseline gap-2 text-lg font-bold bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent"
            >
              <span className="relative w-6 h-6 flex-shrink-0 mt-0.5 self-center">
                <Image
                  src="/tabeby-logo.png"
                  alt="Tabeby"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full dark:opacity-95"
                  quality={100}
                  unoptimized
                />
              </span>
              Tabeby
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.operational}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.registered}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {t.contactUs}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 min-h-[48px] text-sm font-medium bg-[#25D366] text-white hover:opacity-90 active:opacity-95 transition shadow-sm touch-manipulation"
                aria-label="WhatsApp"
              >
                <span aria-hidden>WhatsApp</span>
                <span className="text-white/90 text-xs">+964 778 166 4994</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 min-h-[48px] text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 active:opacity-90 transition border border-gray-200 dark:border-gray-600 touch-manipulation"
                aria-label="Email"
              >
                {t.email}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 min-h-[48px] text-sm font-medium bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-90 active:opacity-95 transition shadow-sm touch-manipulation"
                aria-label="Instagram"
              >
                {t.instagram}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {t.appSection}
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-3 min-h-[44px] text-xs font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:opacity-90 active:opacity-95 transition touch-manipulation"
              >
                🍎 {t.appStore}
              </a>
              <span
                className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-3 min-h-[44px] text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                title={t.comingSoon}
              >
                ▶ {t.googlePlay} ({t.comingSoon})
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition"
            >
              {t.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition"
            >
              {t.terms}
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] dark:border-gray-600 space-y-2">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Tabeby LLC. {t.rights}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {t.developedBy}: <span className="text-teal-600 dark:text-teal-400 font-medium">{t.codeCore}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
