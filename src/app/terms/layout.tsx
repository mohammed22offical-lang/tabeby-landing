import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service / شروط الخدمة — Tabeby",
  description: "Tabeby LLC Terms of Service. شروط الخدمة لـ Tabeby.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
