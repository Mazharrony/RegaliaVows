import { site, getSiteCopy } from "@/lib/site";
import { siteLocale, locales, defaultLocale, type Locale } from "@/lib/i18n/config";
import { pathnames as routePathnames } from "@/lib/i18n/routing";
import type { Metadata } from "next";

/**
 * Translate a canonical (EN-rooted) path into the public path for `locale`,
 * consulting the `pathnames` table from next-intl routing. Supports dynamic
 * segments declared as `[slug]` — the captured value is preserved verbatim
 * in the translated path. Falls back to the original path if no entry
 * matches.
 */
function translatePath(locale: Locale, canonicalPath: string): string {
  if (locale === defaultLocale) return canonicalPath;
  const [pathOnly, query = ""] = canonicalPath.split("?");
  const qs = query ? `?${query}` : "";

  // Exact match first (covers all static routes).
  const exact = (routePathnames as Record<string, unknown>)[pathOnly];
  if (exact && typeof exact === "object") {
    const tr = (exact as Record<string, string>)[locale];
    if (tr) return `${tr}${qs}`;
  }

  // Dynamic match — walk templates and substitute captured segments.
  for (const [key, value] of Object.entries(routePathnames)) {
    if (typeof value === "string" || !key.includes("[")) continue;
    const re = new RegExp(
      "^" + key.replace(/\[[^\]]+\]/g, "([^/]+)") + "$",
    );
    const m = pathOnly.match(re);
    if (!m) continue;
    let translated = (value as Record<string, string>)[locale];
    let i = 1;
    translated = translated.replace(/\[[^\]]+\]/g, () => m[i++]);
    return `${translated}${qs}`;
  }
  return canonicalPath;
}

/**
 * Centralised JSON-LD builders. Each builder accepts a `locale` and renders
 * the language-dependent fields (name, description, knowsAbout) in that
 * locale while keeping the single-business identity (`@id`, address, phone,
 * geo) constant — Google treats `@id` as the entity key and merges locale
 * variants under one knowledge-graph node.
 */

const ORG_ID = `${site.url}/#organization`;
const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

const KNOWS_ABOUT: Record<Locale, readonly string[]> = {
  en: [
    "Luxury wedding planning",
    "Destination weddings",
    "Cinematic proposals",
    "Corporate event planning",
    "Brand activations",
    "Hospitality openings",
    "Private gala production",
  ],
  // TODO(ru): review — drafted Russian; native pass required before launch.
  ru: [
    "Планирование люксовых свадеб",
    "Свадьбы за рубежом",
    "Кинематографичные предложения руки и сердца",
    "Корпоративные мероприятия",
    "Бренд-активации",
    "Открытия отелей и ресторанов",
    "Частные гала-приёмы",
  ],
};

export function organizationLd(locale: Locale = defaultLocale) {
  const copy = getSiteCopy(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: site.logo,
    },
    image: site.ogImage,
    description: copy.description,
    sameAs: Object.values(site.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.contact.email,
        telephone: site.contact.phone,
        areaServed: ["AE", "GCC", "Worldwide"],
        availableLanguage: ["en", "ar", "ru"],
      },
    ],
  } as const;
}

export function localBusinessLd(locale: Locale = defaultLocale) {
  const copy = getSiteCopy(locale);
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": BUSINESS_ID,
    name: site.name,
    description: copy.description,
    url: site.url,
    image: site.ogImage,
    logo: site.logo,
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: "$$$$",
    currenciesAccepted: "AED, USD, EUR, GBP",
    paymentAccepted: "Bank transfer, Wire",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.streetAddress,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.mapsUrl,
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Place", name: "GCC" },
      { "@type": "Place", name: "Worldwide" },
    ],
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: Object.values(site.social),
    knowsAbout: KNOWS_ABOUT[locale],
    parentOrganization: { "@id": ORG_ID },
  } as const;
}

export function websiteLd(locale: Locale = defaultLocale) {
  const copy = getSiteCopy(locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: copy.description,
    inLanguage: siteLocale[locale],
    publisher: { "@id": ORG_ID },
  } as const;
}

export type Crumb = { name: string; url: string };

export function breadcrumbLd(items: readonly Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${site.url}${c.url}`,
    })),
  } as const;
}

export type ServiceLdInput = {
  name: string;
  description: string;
  url: string;
  image?: string;
  serviceType?: string;
  priceRange?: string;
  locale?: Locale;
};

export function serviceLd(input: ServiceLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url.startsWith("http") ? input.url : `${site.url}${input.url}`,
    serviceType: input.serviceType ?? "Event planning",
    image: input.image ?? site.ogImage,
    provider: { "@id": ORG_ID },
    inLanguage: siteLocale[input.locale ?? defaultLocale],
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Place", name: "Worldwide" },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Private commissions, family offices, maisons",
    },
  } as const;
}

/** Inline helper: serialise JSON-LD safely for dangerouslySetInnerHTML. */
export function jsonLd(node: unknown) {
  return { __html: JSON.stringify(node).replace(/</g, "\\u003c") };
}

export type FaqItem = { q: string; a: string };

/**
 * FAQPage JSON-LD. Google's policy requires that every question + answer
 * pair is *visibly* rendered on the same page — render <FaqBlock> alongside
 * this schema. Strip markdown/HTML from `a` before passing in; Google reads
 * the `text` field as plain text.
 */
export function faqPageLd(
  items: readonly FaqItem[],
  locale: Locale = defaultLocale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: siteLocale[locale],
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  } as const;
}

/**
 * Build the per-locale URL for a canonical (English) path. EN is served at
 * the bare path, other locales are prefixed (`/ru/...`).
 */
export function urlForLocale(locale: Locale, canonicalPath: string) {
  const path = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const localized = translatePath(locale, path);
  if (locale === defaultLocale) return `${site.url}${localized}`;
  return `${site.url}/${locale}${localized === "/" ? "" : localized}`;
}

/**
 * Build the `alternates.languages` map used by `generateMetadata`. Pass the
 * canonical path (e.g. `/about` or `/case-studies/a-and-m-palm-jumeirah`),
 * not the locale-prefixed URL.
 */
export function hreflangAlternates(canonicalPath: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[siteLocale[l]] = urlForLocale(l, canonicalPath);
  }
  languages["x-default"] = urlForLocale(defaultLocale, canonicalPath);
  return languages;
}

/**
 * Convenience builder for the `alternates` block of `generateMetadata`.
 * Always pass the canonical (EN-rooted) path — the helper handles locale
 * prefixing for `canonical` and emits the full hreflang map for crawlers.
 */
export function localeAlternates(locale: Locale, canonicalPath: string) {
  return {
    canonical: urlForLocale(locale, canonicalPath),
    languages: hreflangAlternates(canonicalPath),
  };
}

/**
 * Build a locale-aware `generateMetadata` function from a static base. Pass
 * the canonical (EN-rooted) path and the fields you'd normally export as
 * `metadata`; the returned async function injects locale-correct `alternates`
 * and rewrites `openGraph.url` to the per-locale canonical.
 */
export function localePageMetadata(
  canonicalPath: string,
  base: Omit<Metadata, "alternates">,
) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: Locale }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    const ogBase = base.openGraph ?? {};
    return {
      ...base,
      alternates: localeAlternates(locale, canonicalPath),
      openGraph: {
        ...ogBase,
        url: urlForLocale(locale, canonicalPath),
      },
    };
  };
}
