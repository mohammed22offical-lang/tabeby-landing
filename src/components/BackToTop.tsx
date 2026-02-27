"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { content } from "@/data/content";

const SCROLL_THRESHOLD = 150;

function getScrollY(): number {
  if (typeof window === "undefined") return 0;
  return window.scrollY ?? document.documentElement.scrollTop ?? 0;
}

export default function BackToTop() {
  const { locale } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(getScrollY() > SCROLL_THRESHOLD);
    onScroll();
    const t = setTimeout(onScroll, 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const label = content[locale].nav.backToTop;

  if (!visible) return null;

  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      }}
      aria-label={label}
      className="fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg hover:opacity-95 active:opacity-90 transition-all touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
      style={{
        bottom: "max(1.5rem, env(safe-area-inset-bottom))",
        right: "1.5rem",
      }}
    >
      <svg
        aria-hidden
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </a>
  );
}
