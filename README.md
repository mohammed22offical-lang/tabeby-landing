# Tabeby — Landing Page

Landing page for **Tabeby**: smart clinic booking and live queue tracking. Three languages (Arabic default, English, Kurdish), RTL/LTR, dark mode. Launching in Karbala, Iraq.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Fonts: Cairo (Arabic), Noto Sans Arabic (Kurdish), Inter (English)

## Quick start (للمبرمج / For developer)

```bash
# Install
npm install

# Development
npm run dev          # http://localhost:3000

# Production build & run
npm run build
npm start

# Lint
npm run lint
```

**No environment variables are required.** The site works out of the box.

## Project structure

| Path | Description |
|------|-------------|
| `src/app/` | Layout, home page, `/privacy`, `/terms` |
| `src/components/` | Header, Footer, HeroIllustration, LocaleScript, BackToTop, SyncFromUrl |
| `src/contexts/` | LocaleContext, ThemeContext |
| `src/data/` | content.ts (UI strings), legal.ts (Privacy & Terms) |
| `public/` | tabeby-logo.png |

## Features

- **Languages:** Arabic (RTL), English (LTR), Kurdish (RTL). Kurdish uses Noto Sans Arabic for clear, readable script. Persisted via cookie; URL params `?locale=ar|en|ku` and `?theme=dark|light` for sharing.
- **Theme:** Dark mode (gray) by default; persisted via cookie.
- **Responsive:** Mobile menu, safe-area, touch-friendly.
- **SEO:** Metadata set; no env vars needed for deploy.

## Deploy (رفع الموقع حي)

- **Vercel:** Connect repo → Build command: `npm run build` → Output: Next.js (default). No env vars.
- **Netlify:** Build command: `npm run build`, Publish directory: `.next` (use Next runtime or `npm run build && npm run start` with Node).
- **Any Node host:** Run `npm run build` then `npm start`; set port via `PORT` if needed.

After deploy, the site is ready for production use.
