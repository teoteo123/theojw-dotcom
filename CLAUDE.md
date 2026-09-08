# theojw-dotcom

Theo Wallace's personal site. Next.js 15 (App Router) + React 19 + TypeScript, ported from the
"Theo Wallace" Claude Design system (design project `6e758f38-9032-473f-bcf0-867e7c230cc6`,
`templates/marketing-page/MarketingPage.dc.html`). Tailwind is installed but unused — all styling
comes from the design system below.

## Structure

```
app/
  layout.tsx        Root layout: theme init script, ThemeProvider, Header, Footer
  page.tsx           Home
  about/page.tsx      About (bio, experience, principles)
  services/           Services (tabbed detail + full list) — has its own layout.tsx for metadata
  work/page.tsx       Work / portfolio (real projects)
  contact/            Contact (form → confirm dialog → toast) — has its own layout.tsx for metadata
components/
  ds/                 The 13 ported design-system primitives (see below)
  site/               Header, Footer, SectionHead, Placeholder, ThemeProvider
data/
  site.ts             NAV list, contact info (email/LinkedIn/GitHub)
  services.ts         The five services (verbatim brief copy)
  projects.ts          Real projects, experience, skills
styles/ds/
  tokens/*.css        Design tokens: colors, typography, spacing, radius, shadows, motion, fonts, base
  components.css      All component CSS (.tw-btn, .tw-card, .tw-field, etc.)
  kit.css             Page furniture: header, hero, grids, ruled lists, CTA band, footer — mobile-first
  index.css           Single entry point, imported once from app/globals.css
```

## Design system fundamentals

Read `styles/ds/tokens/colors.css` and `styles/ds/components.css` before styling anything new — every
value should come from a CSS custom property, never a literal color/size. The three rules most easily
broken:

1. **Primary buttons are ink (`--action`, near-black), not green.** Green (`--accent`) is reserved for
   links, focus rings, the active-tab marker, and small marks. At most one `variant="accent"` button
   per page, only on a real conversion moment.
2. **A static `Card` gets no shadow** — a 1px `--border-subtle` edge at 6px radius. Shadow
   (`--shadow-2/3/4`) is reserved for things that float: dialogs, toasts, and a `Card interactive`
   hover lift only.
3. **No emoji, ever.** Icons are `<Icon name="…" />` only (Lucide outline set, loaded from
   `unpkg.com/lucide-static`, masked to `currentColor`) — never a hand-rolled SVG or emoji glyph.

Voice/copy rules (see the original design system `readme.md` for the full brief): second person,
sentence case everywhere, no exclamation marks, no superlatives, short paragraphs, headline shape is
one clause under 12 words naming an outcome. Buttons are verbs a person would say ("Book an intro
call", "Send it"), never "Learn more" / "Submit".

## Components (`components/ds/`)

Import from `@/components/ds` (barrel) or the individual file. Props mirror the source `.jsx`
components closely; typed with TypeScript.

- **Button** — `variant`: primary | accent | secondary | ghost | inverse | danger | link · `size`: sm | md | lg ·
  `iconLeft` / `iconRight` (Lucide name) · `href` renders an `<a>` instead of `<button>`.
- **IconButton** — icon-only, `icon` + required `label` (used as `aria-label` and `title`).
- **Icon** — `name` (Lucide icon name, e.g. `"arrow-right"`), `size`. Renders as a CSS mask, so set
  color on the parent/wrapper, not the icon.
- **Card** — `eyebrow`, `title`, `variant`: default | flat | sunken | inverse | accent ·
  `padding`: none | sm | md | lg · `interactive` (hover lift) · `href` renders an `<a>`.
- **Badge** — small status pill. `tone`: neutral | accent | success | warning | danger | info | outline ·
  `dot` renders a small status dot.
- **Tag** — `selected`, `onClick` (renders as a button), `onRemove` (adds an ✕ affordance).
- **Stat** — `label`, `value`, `caption`, `size`: sm | lg, `ruled` (top hairline).
- **Input / Textarea / Select** — `label`, `hint`, `error`, `required`. Select takes `options`
  (`{value, label}[]` or `string[]`) and `placeholder`.
- **Checkbox / Radio / Switch** — `label`, `description`. Checkbox/Switch work uncontrolled if you
  don't pass `checked`.
- **Tabs** — `items` (`{value,label,count?}[]` or `string[]`), `value`, `onChange`, `variant`:
  underline | enclosed.
- **Dialog** — `open`, `title`, `description`, `footer`, `onClose`. Renders a scrim + centered panel;
  closes on Escape if `onClose` is passed.
- **Toast** — `title`, `message`, `tone`: default | success | danger | warning, `onClose`. You control
  placement (see `app/contact/page.tsx` for a fixed bottom-right example).
- **Tooltip** — wraps a single child, shows `label` on hover/focus. `placement`: top | bottom | left | right.

Interactive primitives (`Checkbox`, `Switch`, `Tabs`, `Dialog`, `Tooltip`, `Input`/`Textarea`/`Select`)
are `"use client"`. Stateless ones (`Icon`, `Card`, `Badge`, `Tag`, `Stat`, `Button`, `IconButton`,
`Toast`, `Radio`) have no directive and can be used from Server or Client components.

## Layout classes (`styles/ds/kit.css`)

Page-furniture classes, mobile-first (base rules are the small-screen layout; `min-width` queries
widen from there — breakpoints at 640px and 900px):

- `.wrap` — max-width container with responsive gutter.
- `.section` / `.section--tight` — vertical rhythm between page sections.
- `.hero`, `.hero__h1`, `.hero__lead`, `.hero__cta` — hero block.
- `.g2` / `.g3` / `.g4` — grids that stack to 1 column (2 for `.g4`) on mobile, expand at 640/900px.
- `.split` — asymmetric two-column layout (1 : 1.35), stacks on mobile.
- `.shead`, `.shead__k`, `.shead__t` — section header (eyebrow + title + optional aside).
- `.rlist`, `.rlist__row`, `.rlist__n/__t/__d` — ruled numbered list (process steps, service list).
- `.band`, `.band__h`, `.band__p` — dark CTA band.
- `.ph`, `.ph__cap` — dotted-grid placeholder media block (no photography was supplied — see below).
- `.hdr*`, `.mnav*` — sticky header + the mobile nav sheet (hamburger below 820px, inline nav above).
- `.ftr*` — footer.

## Known gaps / follow-ups

- **No real photography.** Every image slot (`Placeholder` component) is a labelled dotted-grid box.
  Drop real screenshots/portraits into `public/` and swap them in on `app/work/page.tsx` and
  `app/about/page.tsx`.
- **Contact form doesn't send anywhere yet.** `app/contact/page.tsx` validates, opens a confirm
  dialog, and fires a success toast, but there's no backend — wire it to an API route, or a service
  like Formspree/Resend, before relying on it for real inquiries.
- **Fonts load from Google's CDN** (`styles/ds/tokens/fonts.css`, Schibsted Grotesk + IBM Plex Mono).
  Swapping to `next/font/google` would self-host them and avoid the render-blocking `@import`, at the
  cost of deviating from the source design system's own approach.
- **Tailwind is still installed** (`package.json`, `postcss.config.mjs`) but no longer used anywhere —
  safe to remove (`npm uninstall tailwindcss @tailwindcss/postcss`) once you're sure nothing depends on it.
- The "Services" copy (GA4/GTM, CMS setups, API integrations) is the source design system's brief
  verbatim, positioning this as a small-business web/AI consultancy. If that's not the intended framing
  going forward, `data/services.ts` is the one file to rewrite — everything else consumes it.

## Working in this repo

- `npm run dev` — dev server (Next.js + Turbopack).
- `npm run lint` / `npx tsc --noEmit` — both should stay clean; run them after touching `components/ds`
  or the token CSS.
- When adding a new primitive from the design system, mirror the pattern above: a `.tsx` file in
  `components/ds/`, its CSS added to `styles/ds/components.css` (tokens only, no literal values),
  and an export added to `components/ds/index.ts`.
