import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./config";

// Translated (Cyrillic) URL segments for each canonical EN route. Keys are
// the *internal* path template (always EN); values map each locale to its
// public-facing segment. next-intl middleware handles the rewrite/redirect
// between the two — the locale-aware <Link> in `./navigation.ts` resolves
// these automatically so component code keeps writing English hrefs.
export const pathnames = {
  "/": "/",
  "/about": { en: "/about", ru: "/о-нас" },
  "/experience": { en: "/experience", ru: "/опыт" },
  "/services": { en: "/services", ru: "/услуги" },
  "/services/[slug]": {
    en: "/services/[slug]",
    ru: "/услуги/[slug]",
  },
  "/sectors": { en: "/sectors", ru: "/направления" },
  "/sectors/[slug]": {
    en: "/sectors/[slug]",
    ru: "/направления/[slug]",
  },
  "/case-studies": { en: "/case-studies", ru: "/проекты" },
  "/case-studies/[slug]": {
    en: "/case-studies/[slug]",
    ru: "/проекты/[slug]",
  },
  "/venues": { en: "/venues", ru: "/площадки" },
  "/journal": { en: "/journal", ru: "/журнал" },
  "/journal/[slug]": {
    en: "/journal/[slug]",
    ru: "/журнал/[slug]",
  },
  "/press": { en: "/press", ru: "/пресса" },
  "/contact": { en: "/contact", ru: "/контакты" },
  "/contact/corporate": {
    en: "/contact/corporate",
    ru: "/контакты/корпоративные",
  },
  "/legal/privacy": {
    en: "/legal/privacy",
    ru: "/правовое/конфиденциальность",
  },
  "/legal/terms": {
    en: "/legal/terms",
    ru: "/правовое/условия",
  },
} as const;

// next-intl routing definition. `localePrefix: "as-needed"` keeps English at
// the bare root (e.g. `/about`) and prefixes Russian (`/ru/about`), which is
// the cleanest hreflang topology for a launch with one non-default locale.
// Cyrillic slugs are declared in `pathnames` above and resolved by the
// localized <Link> + middleware.
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  pathnames,
  // Persist the user's locale choice for one year so the Accept-Language
  // redirect runs only on the first visit.
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  },
  // Show the default locale prefix only when the user explicitly types `/en`
  // — we want EN as the un-prefixed canonical.
  localeDetection: true,
});

export type Pathnames = keyof typeof pathnames;
