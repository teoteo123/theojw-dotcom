# Site fundamentals implementation plan

Handoff doc for a coding agent. Read `CLAUDE.md` first — this plan assumes and builds on top of
everything there. It does not replace it.

## Scope: what this is and isn't

Two Instagram checklists prompted this (technical/structural "does a real site have these
plumbing pieces" checklists — a site's SEO/metadata/error-page/form fundamentals). A third,
more stylistic checklist ("30 reasons your site looks vibecoded" — gradients, bento grids,
pastel colors, sparkle icons, etc.) is **intentionally excluded**: this site already follows a
deliberate design system (see `CLAUDE.md`'s "Design system fundamentals"), and its choices
(Lucide icons, ink primary buttons, no shadows on static cards) are correct for this project even
though they appear on that list out of context. **Do not reflexively "fix" anything that list
would flag — if a style choice conflicts with `CLAUDE.md`, `CLAUDE.md` wins.**

This plan only covers structural/technical gaps: metadata, crawlability, error pages, form
robustness. No visual redesign is in scope.

## Current state audit (as of 2026-09-13)

| Item | Status | Where |
|---|---|---|
| `<html lang>` | ✅ done | `app/layout.tsx` |
| Mobile breakpoints | ✅ done | `styles/ds/kit.css`, mobile-first, 640/900px |
| Favicon | ⚠️ partial | `app/favicon.ico` only — no apple touch icon, no manifest |
| Meta title per page | ⚠️ partial | Set per-route in `app/*/layout.tsx`, but home (`app/page.tsx`) only inherits the root title |
| Meta description per page | ❌ missing | Only the root layout has one description, shared by every route |
| Open Graph / Twitter card | ❌ missing | No `openGraph`/`twitter` metadata anywhere |
| OG image | ❌ missing | — |
| Canonical tags | ❌ missing | No `metadataBase` or `alternates.canonical` |
| `robots.txt` | ❌ missing | — |
| `sitemap.xml` | ❌ missing | — |
| Custom 404 page | ❌ missing | Falls back to Next.js's default |
| Structured data (JSON-LD) | ❌ missing | — |
| Alt text on images | N/A | No real photos yet — every image slot is a `Placeholder` div (tracked as a known gap in `CLAUDE.md`). Revisit when real photography lands. |
| Form field-level errors | ⚠️ partial | `app/contact/page.tsx` only validates email manually; Name/Select/Textarea rely on the browser's native `required` validation, which doesn't match the design system's `error` prop styling |
| Submit pending/loading state | ❌ missing | Submit → dialog → toast is instant; no disabled/pending state on `Button` during the transition |
| Analytics | ❌ missing | — |
| Privacy / Terms pages | ❌ missing | Arguably fine for now — contact form has no backend yet (`CLAUDE.md` known gap), so no data actually leaves the browser |
| Cookie banner | N/A | Only needed if an analytics choice requires consent |
| View-source / SSR content | ✅ fine | Next.js App Router server-renders by default — the "empty view-source" giveaway is a Vite SPA problem, not applicable here |

## Prioritized tasks

### P0 — do first (cheap, no design decisions needed)

1. **`app/robots.ts`** — allow all, point to the sitemap.
2. **`app/sitemap.ts`** — list all five routes (`/`, `/about`, `/services`, `/work`, `/contact`).
3. **`app/not-found.tsx`** — custom 404 built from existing `ds` components (`Card`, `Button`,
   `Icon`), following the voice rules in `CLAUDE.md` (sentence case, no exclamation marks, a verb
   button like "Back to home" rather than "Go home").
4. **Per-route metadata** — give every route its own `title` + `description` (and fix `app/page.tsx`,
   which currently has none of its own). Extend the existing `layout.tsx` metadata exports rather
   than introducing a new pattern.
5. **`metadataBase` + canonical** — set `metadataBase` in `app/layout.tsx` once a production domain
   is known (see Open questions), and add `alternates.canonical` per route.
6. **Favicon set** — add `app/icon.svg` (or `apple-icon.png`) and a `site.webmanifest` so the icon
   shows correctly on iOS/Android home screens, not just browser tabs.

### P1 — next

7. **OG image** — either a static `public/og.png` (1200×630) or a dynamic `app/opengraph-image.tsx`
   using `next/og`, styled with the site's actual tokens (ink background, Schibsted Grotesk
   headline, name + one-line description). Wire it into each route's `openGraph`/`twitter` metadata.
8. **JSON-LD `Person` structured data** on the home and about pages — name, job title, url, and
   `sameAs` pointing at the LinkedIn/GitHub links already in `data/site.ts`.
9. **Field-level form validation** in `app/contact/page.tsx` — surface errors on Name, the Select,
   and the Textarea the same way `Input`'s `error` prop already does for Email, instead of relying
   on native browser validation (which doesn't match the design system visually).
10. **Submit pending state** — disable the submit `Button` and show a pending state between
    "Send request" and the toast. There's no real network call yet (contact form backend is a known
    gap in `CLAUDE.md`), but structure the state machine (`idle → pending → sent`) now so wiring a
    real `fetch` later is a one-line change.

### P2 — optional, needs a product decision from Theo first (see below)

11. **Analytics** — recommend `@vercel/analytics` if this deploys on Vercel (cookie-less, no
    consent banner required). Do not add GA4/GTM without explicit sign-off — that requires a cookie
    consent banner, which is a bigger scope increase than it looks.
12. **Privacy policy / Terms pages** — defer until the contact form actually sends data somewhere.
    Adding these now would be documenting a data flow that doesn't exist yet.
13. **Cookie banner** — only build this if the analytics choice in #11 actually requires one.

## Open questions for Theo (resolve before starting P0.5 / P1)

- **Production domain** — nothing in the repo currently references a real domain (checked
  `package.json`, `next.config.ts`, all of `data/`, `.claude/launch.json`). Needed for
  `metadataBase`, `sitemap.xml`, `robots.txt`'s sitemap pointer, and absolute OG image URLs.
- **Analytics preference** — Vercel Analytics (no banner) vs. GA4 (needs a banner) vs. none for now.
- **Confirm deferring privacy/terms pages** is acceptable until the contact form has a backend.

## Verification

- `npm run build` — no metadata warnings.
- `npm run lint` / `npx tsc --noEmit` — stay clean (already required by `CLAUDE.md`).
- After `npm run build && npm run start`: `curl` (or view-source) each of the five routes and
  confirm `<title>`, `<meta name="description">`, `og:*`, `twitter:*`, and the canonical `<link>`
  are all present and route-specific, not just inherited from the root layout.
- Visit `/robots.txt` and `/sitemap.xml` directly and confirm they resolve.
- Visit a nonexistent path (e.g. `/does-not-exist`) and confirm the custom 404 renders, styled with
  `ds` components, not Next's default error page.
