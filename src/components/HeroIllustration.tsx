export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto lg:max-w-lg min-w-0" aria-hidden>
      <div className="aspect-square max-h-[280px] sm:max-h-none rounded-2xl sm:rounded-3xl bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/30 dark:to-gray-700 p-6 sm:p-8 shadow-soft-lg flex items-center justify-center">
        {/* Abstract healthcare shapes */}
        <div className="relative w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-2xl bg-teal-400/30 dark:bg-teal-500/25 rotate-12" />
          <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-accent-orange/40 dark:bg-accent-orange/30" />
          <div className="absolute bottom-1/3 left-1/3 w-20 h-3 rounded-full bg-teal-500/20 dark:bg-teal-400/20" />
          <div className="absolute bottom-1/4 right-1/3 w-14 h-14 rounded-2xl bg-teal-300/25 dark:bg-teal-600/20 -rotate-6" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-teal-400/40 dark:border-teal-500/30 border-dashed" />
          <div className="absolute top-2/3 left-1/4 w-8 h-8 rounded-lg bg-teal-500/20 dark:bg-teal-400/25" />
          <div className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full bg-accent-orange/30 dark:bg-accent-orange/25" />
        </div>
      </div>
    </div>
  );
}
