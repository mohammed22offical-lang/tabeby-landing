"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroIllustration from "@/components/HeroIllustration";
import { useLocale } from "@/contexts/LocaleContext";
import { content } from "@/data/content";

const WHATSAPP_NUMBER = "9647781664994";
const WHATSAPP_URL = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
const EMAIL = "support@tabeby-app.com";

export default function Home() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <>
      <Header />
      <main className="min-w-0 overflow-x-hidden">
        {/* Hero */}
        <section className="min-h-screen min-h-[100dvh] flex flex-col justify-center pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom))] px-4 sm:px-6 bg-[var(--bg-subtle)] dark:bg-gray-800">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-4">
                {t.hero.badge}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight tracking-tight break-words">
                {t.hero.headline}{" "}
                <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                  {t.hero.headlineAccent}
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                {t.hero.subtext}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#join-patients"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3.5 min-h-[48px] text-base font-medium bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-soft hover:shadow-soft-lg active:opacity-90 transition touch-manipulation"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href="#for-clinics"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3.5 min-h-[48px] text-base font-medium bg-[var(--bg-card)] dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-[var(--border-subtle)] dark:border-gray-600 hover:border-teal-300 hover:text-teal-600 dark:hover:text-teal-400 active:opacity-90 transition shadow-card touch-manipulation"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  {t.hero.downloadApp}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://apps.apple.com/app/tabeby/id6754250812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 min-h-[48px] text-sm font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:opacity-90 active:opacity-95 transition touch-manipulation"
                    aria-label="App Store"
                  >
                    <span aria-hidden className="text-lg">🍎</span>
                    {t.hero.appStore}
                  </a>
                  <span
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 min-h-[48px] text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    aria-label={t.hero.comingSoon}
                    title={t.hero.comingSoon}
                  >
                    <span aria-hidden className="text-lg">▶</span>
                    {t.hero.googlePlay}
                    <span className="text-xs font-normal opacity-90">({t.hero.comingSoon})</span>
                  </span>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                {t.hero.freeNote}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--bg-card)] dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              {t.problem.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{t.problem.subtitle}</p>
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {t.problem.points.map((point, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 bg-gray-50/80 dark:bg-gray-700 border border-[var(--border-subtle)] dark:border-gray-600"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-600 dark:text-red-400 text-xl font-bold mx-auto">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--bg-subtle)] dark:bg-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {t.solution.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t.solution.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {t.solution.steps.map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[var(--bg-card)] dark:bg-gray-700 p-6 sm:p-8 shadow-card border border-[var(--border-subtle)] dark:border-gray-600"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--bg-card)] dark:bg-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {t.features.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t.features.subtitle}
              </p>
            </div>

            {/* Patient benefits */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-2">
                {t.features.patientTitle}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-8 max-w-xl mx-auto">
                {t.features.patientSubtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {t.features.patientCards.map((card, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 border border-[var(--border-subtle)] dark:border-gray-600 bg-gray-50/80 dark:bg-gray-700/50 hover:shadow-card hover:border-teal-100 dark:hover:border-teal-900/50 transition"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900/40 dark:to-teal-800/40 flex items-center justify-center text-teal-600 dark:text-teal-400 text-lg">
                      {["◉", "◈", "◇"][i]}
                    </div>
                    <h4 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinic benefits */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-2">
                {t.features.clinicTitle}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-8 max-w-xl mx-auto">
                {t.features.clinicSubtitle}
              </p>
              <div className="grid sm:grid-cols-1 max-w-md mx-auto">
                {t.features.clinicCards.map((card, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 border border-[var(--border-subtle)] dark:border-gray-600 bg-gray-50/80 dark:bg-gray-700/50 hover:shadow-card hover:border-teal-100 dark:hover:border-teal-900/50 transition"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 dark:from-teal-900/40 dark:to-teal-800/40 flex items-center justify-center text-teal-600 dark:text-teal-400 text-lg">
                      ▣
                    </div>
                    <h4 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For Clinics */}
        <section id="for-clinics" className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--bg-subtle)] dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl bg-[var(--bg-card)] dark:bg-gray-700 p-6 sm:p-10 md:p-12 shadow-soft-lg border border-[var(--border-subtle)] dark:border-gray-600">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
                {t.forClinics.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
                {t.forClinics.subtitle}
              </p>
              <ul className="mt-10 space-y-4 max-w-xl mx-auto">
                {t.forClinics.points.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-sm font-medium">
                      ✓
                    </span>
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 sm:mt-10 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                {t.forClinicsJoin.contactChoice}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={WHATSAPP_URL(locale === "ar" ? "عيادة - أريد الانضمام لطبيبي" : locale === "ku" ? "کلینیک - دەمەوێت بەشداری طبیبی بکەم" : "Clinic - I want to join Tabeby")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 min-h-[48px] text-sm font-medium bg-[#25D366] text-white hover:opacity-90 active:opacity-95 transition touch-manipulation"
                >
                  {t.footer.whatsapp}
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=${locale === "ar" ? "انضمام عيادة - طبيبي" : locale === "ku" ? "Clinic join - Tabeby" : "Clinic join - Tabeby"}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 min-h-[48px] text-sm font-medium bg-[var(--bg-card)] dark:bg-gray-600 text-gray-700 dark:text-gray-200 border border-[var(--border-subtle)] dark:border-gray-500 hover:border-teal-300 hover:text-teal-600 dark:hover:text-teal-400 transition touch-manipulation"
                >
                  {t.footer.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Join as patient (مراجعين) */}
        <section id="join-patients" className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--bg-subtle)] dark:bg-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
              {t.joinPatients.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              {t.joinPatients.subtitle}
            </p>
            <p className="mt-6 text-sm font-medium text-gray-600 dark:text-gray-400">
              {t.joinPatients.contactChoice}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL(locale === "ar" ? "مراجع - أريد الانضمام لطبيبي" : locale === "ku" ? "سەردانکەر - دەمەوێت بەشداری طبیبی بکەم" : "Patient - I want to join Tabeby")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 min-h-[48px] text-sm font-medium bg-[#25D366] text-white hover:opacity-90 active:opacity-95 transition touch-manipulation"
              >
                {t.footer.whatsapp}
              </a>
              <a
                href={`mailto:${EMAIL}?subject=${locale === "ar" ? "انضمام مراجع - طبيبي" : locale === "ku" ? "Patient join - Tabeby" : "Patient join - Tabeby"}`}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 min-h-[48px] text-sm font-medium bg-[var(--bg-card)] dark:bg-gray-600 text-gray-700 dark:text-gray-200 border border-[var(--border-subtle)] dark:border-gray-500 hover:border-teal-300 hover:text-teal-600 dark:hover:text-teal-400 transition touch-manipulation"
              >
                {t.footer.email}
              </a>
            </div>
          </div>
        </section>

        {/* Expansion Note */}
        <section className="py-10 sm:py-12 px-4 sm:px-6 bg-[var(--bg-card)] dark:bg-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium px-2">
              {t.expansion.text}
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
