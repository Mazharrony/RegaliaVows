# Regalia Vows

Luxury wedding planning, Dubai. Cinematic, editorial Next.js 15 site for a private commissioning house.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS 3.4** with a custom luxury design system (Ink / Pearl / Champagne / Gilded)
- **Framer Motion** + **GSAP / ScrollTrigger** + **Lenis** for cinematic scroll & micro-motion
- **react-hook-form** + **zod** for the multi-step bespoke and corporate enquiry forms
- **sonner** for elegant toasts; **lucide-react** for line iconography

## Develop

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Build

```bash
pnpm build
pnpm start
```

## Quality gates

```bash
pnpm typecheck
pnpm lint
```

## Routes

`/` · `/about` · `/services` (+ `[slug]`) · `/sectors` (+ `[slug]`) · `/experience` · `/case-studies` (+ `[slug]`) · `/venues` · `/journal` · `/press` · `/contact` (+ `/contact/corporate`) · `/legal/{privacy,terms}` · API: `POST /api/enquiry`

`/portfolio` and `/portfolio/[slug]` are 301-redirected to `/case-studies`.

## Design tokens (Tailwind theme)

| Token | Hex |
| --- | --- |
| Ink | `#111216` |
| Pearl | `#FFFFFF` |
| Champagne | `#F0D08C` |
| Gilded | `#D6A140` |
| Rose Veil | `#E8C9C2` |
| Verdant Olive | `#5C6A4A` |

Shaded scales for `ink` (50/100/900), `pearl` (50/100/200) and `gilded` (100/200/400/600/800) live in `tailwind.config.ts`.

Fonts (via `next/font/google`): **Cormorant Garamond** (display, italic-led) · **Inter Tight** (sub) · **Inter** (body).

## Content posture

The site ships with **no fabricated client work, press coverage, testimonials or journal entries**. Surfaces that depend on real content (Case Studies, Press, Journal, Testimonials) render quiet "Forthcoming — by private viewing on request" panels via `components/ui/EmptyState.tsx`. Drop real content into:

- `lib/work.ts` &mdash; case-study items (any of five sectors)
- `lib/sectors.ts` &mdash; sector philosophy & inclusions (currently neutral; `investment` reads "On request")
- `lib/site.ts` &mdash; brand metadata + concierge contact details (placeholders until provided)
- `app/journal/page.tsx`, `app/press/page.tsx` &mdash; replace the `EmptyState` with a real list once content exists

## Project structure

```
app/                  App Router pages and the /api/enquiry route handler
components/
  motion/             Cursor, LenisProvider, Magnetic, Reveal, SplitText
  sections/           Page-level composed sections (HomeHero, Manifesto, …)
    enquiry/          Shared primitives (Field, RadioGroup, Stepper) for the two enquiry forms
  ui/                 Section, Container, Button, Eyebrow, Nav, Footer, EmptyState, Monogram
lib/                  cn, fonts, schemas (zod), sectors, site, work
public/               robots.txt, textures/, videos/
```

## Roadmap (next milestones)

1. Sanity Studio at `/studio` + `realWedding`, `service`, `venue`, `journalPost`, `testimonial`, `pressItem` schemas; ISR via `revalidateTag` webhook.
2. Resend email + Sanity submission doc for `/api/enquiry`; Cloudflare Turnstile; Upstash Redis rate limit.
3. Filterable case-studies grid populated from CMS.
4. `next-intl` Arabic (RTL) locale.
5. Vercel Analytics + Plausible; Klaro cookie consent.
6. Photography hand-off to replace gradient placeholders on case-study and sector imagery.

## License

© Regalia Vows. All rights reserved.
