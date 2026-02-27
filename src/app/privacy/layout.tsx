import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy / سياسة الخصوصية — Tabeby",
  description: "Tabeby LLC Privacy Policy. سياسة الخصوصية لـ Tabeby.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
