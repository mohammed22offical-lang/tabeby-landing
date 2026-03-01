"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full rounded-2xl bg-[var(--bg-card)] dark:bg-gray-700 border border-[var(--border-subtle)] dark:border-gray-600 p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-2">
          لوحة التحكم
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-6">
          هذه الصفحة جاهزة لتطوير تسجيل الدخول والوحة التحكم لاحقاً.
        </p>
        <div className="flex flex-col gap-3">
          <div className="h-10 rounded-lg bg-gray-100 dark:bg-gray-600 animate-pulse" />
          <div className="h-10 rounded-lg bg-gray-100 dark:bg-gray-600 animate-pulse" />
          <button
            type="button"
            className="mt-2 h-11 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium"
          >
            دخول (قريباً)
          </button>
        </div>
        <Link
          href="/"
          className="mt-6 block text-center text-sm text-teal-600 dark:text-teal-400 hover:underline"
        >
          ← العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
