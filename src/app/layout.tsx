import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter, Cairo, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import LocaleScript from "@/components/LocaleScript";
import BackToTop from "@/components/BackToTop";
import SyncFromUrl from "@/components/SyncFromUrl";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f3f5" },
    { media: "(prefers-color-scheme: dark)", color: "#374151" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-kurdish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tabeby",
  description:
    "حجز مواعيد العيادات وتتبع الدور مباشرة. انطلاق من كربلاء وتوسع في العراق. Tabeby — Smart clinic booking and queue tracking. Karbala, Iraq.",
  keywords: ["طبيبي", "عيادة", "حجز مواعيد", "كربلاء", "العراق", "clinic", "appointment", "Karbala", "Iraq"],
  icons: {
    icon: [
      { url: "/tabeby-logo.png", sizes: "48x48", type: "image/png" },
      { url: "/tabeby-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/tabeby-logo.png",
  },
  openGraph: {
    title: "Tabeby — Smart Clinic Booking & Queue | Iraq",
    description: "Digital clinic booking and live queue tracking. Launching in Karbala, expanding across Iraq.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${cairo.variable} ${notoSansArabic.variable} dark`} suppressHydrationWarning>
      <body id="top" className="font-sans">
        <LocaleScript />
        <ThemeProvider>
          <LocaleProvider>
            <Suspense fallback={null}>
              <SyncFromUrl />
            </Suspense>
            {children}
            <BackToTop />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
