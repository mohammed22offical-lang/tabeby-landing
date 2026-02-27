"use client";

import Script from "next/script";

export default function LocaleScript() {
  return (
    // Required for correct RTL/theme before first paint (App Router has no _document)
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      id="locale-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
__html: `
(function() {
  var root = document.documentElement;
  var localeMatch = document.cookie.match(/(?:^| )tabeby-locale=([^;]+)/);
  var locale = (localeMatch && localeMatch[1]) ? localeMatch[1] : 'ar';
  if (locale !== 'ar' && locale !== 'en' && locale !== 'ku') locale = 'ar';
  root.setAttribute('dir', locale === 'en' ? 'ltr' : 'rtl');
  root.setAttribute('lang', locale === 'en' ? 'en' : (locale === 'ku' ? 'ku' : 'ar'));
  root.classList.add('locale-' + locale);
  var themeMatch = document.cookie.match(/(?:^| )tabeby-theme=([^;]+)/);
  var theme = (themeMatch && themeMatch[1]) ? themeMatch[1] : 'dark';
  if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
})();
        `.trim(),
      }}
    />
  );
}
