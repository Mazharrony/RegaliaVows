# Regalia Vows

Luxury wedding planning, Dubai. Cinematic, WebGL-accented Next.js 15 site.

## Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript** (strict)
- **Tailwind CSS 3.4** with a custom luxury design system (Ink Noir / Champagne / Gilded Sand)
- **Framer Motion** + **GSAP** + **Lenis** for cinematic scroll & micro-motion
- **React Three Fiber** + **drei** + **postprocessing** for the hero scene (gold rings + drifting petals)
- **react-hook-form** + **zod** for the multi-step bespoke enquiry form
- **sonner** for elegant toasts

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

## Routes

`/` · `/about` · `/services` (+ `weddings`, `proposals`, `destination-weddings`, `private-events`) · `/experience` · `/portfolio` (+ `[slug]`) · `/venues` · `/journal` · `/press` · `/contact` · `/legal/{privacy,terms}` · API: `POST /api/enquiry`

## Design tokens

| Token | Hex |
| --- | --- |
| Ink Noir | `#0B0B0D` |
| Pearl | `#F4EFE7` |
| Champagne | `#E9D7B2` |
| Gilded Sand | `#C9A96A` |
| Rose Veil | `#E8C9C2` |
| Verdant Olive | `#5C6A4A` |

Fonts (via `next/font/google`): **Cormorant Garamond** (display, italic-led) · **Inter Tight** (sub) · **Inter** (body).

## Roadmap (next milestones)

1. Sanity Studio at `/studio` + `realWedding`, `service`, `venue`, `journalPost`, `testimonial`, `pressItem` schemas; ISR via `revalidateTag` webhook.
2. Resend email + Sanity submission doc for `/api/enquiry`; Cloudflare Turnstile; Upstash Redis rate limit.
3. `PortfolioOrb` R3F component + filterable case studies.
4. `next-intl` Arabic (RTL) locale.
5. Vercel Analytics + Plausible; Klaro cookie consent.
6. Replace all gradient placeholders with photography hand-off from the client.

## License

© Regalia Vows. All rights reserved.
