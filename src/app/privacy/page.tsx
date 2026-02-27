"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocale } from "@/contexts/LocaleContext";
import { legalContent } from "@/data/legal";

export default function PrivacyPage() {
  const { locale } = useLocale();
  const { privacy: t } = legalContent[locale];

  return (
    <>
      <Header />
      <main className="min-h-screen min-h-[100dvh] min-w-0 overflow-x-hidden pt-24 pb-[max(4rem,env(safe-area-inset-bottom))] px-4 sm:px-6 bg-[var(--bg-subtle)] dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t.updated}</p>

          <div className="mt-10 space-y-8 text-gray-600 dark:text-gray-300">
            {t.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8">
                  {section.title}
                </h2>
                {section.body.map((p, j) => (
                  <p key={j} className="mt-2">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <p className="mt-12">
            <Link
              href="/"
              className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
            >
              {t.back}
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
