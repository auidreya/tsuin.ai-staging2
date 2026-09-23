# tsuin.ai

Marketing site for tsuin (Cognitive AI Twin). Next.js 16 App Router, React 19,
TypeScript, CSS Modules. Deployed on Vercel.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages prerender as static HTML)
npm run lint
npm run typecheck
```

## Environment

`/api/waitlist` writes signups to Supabase. Set these in Vercel (and in
`.env.local` for local testing):

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only; never prefix with `NEXT_PUBLIC_`)

The table schema is in `supabase/schema.sql`.

## Layout

```
app/
  layout.tsx          fonts, analytics (GTM + GA4), default metadata
  globals.css         base styles; imports tokens.css (design tokens)
  page.tsx            home  (/)
  about/ pricing/ culture/ manifesto/
  api/waitlist/       POST handler -> Supabase
  sitemap.ts robots.ts manifest.ts
components/
  site/               header, footer, logo, nav
  ui/                 Button / ButtonLink, Input, Label
  youtube-embed.tsx   click-to-play video (loads YouTube only on click)
  analytics-events.tsx  GA4 click events (begin_checkout, select_content)
lib/                  site constants (Stripe URL, socials, nav), metadata helper
images/               artwork imported by next/image (resized WebP)
public/assets/        favicons, app icons, Open Graph images
design-source/        full-size original artwork (not deployed)
```

## Conventions

- Pages are Server Components. Client components (`"use client"`) only for
  interactive leaves: mobile menu, twin toggle, chat demo, waitlist form, video.
- Styling uses the design tokens in `app/tokens.css` (`var(--paper)`,
  `var(--font-human)`, ...). Put the `dark` class on a wrapper to switch a
  region to the twin palette.
- Images go through `next/image`. Exactly one `preload` image per page (the
  above-the-fold hero); everything else lazy-loads.
- Site copy: no em dashes in new copy; use brackets instead.
