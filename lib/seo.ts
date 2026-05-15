import { site } from "@/lib/site";

/**
 * Centralised JSON-LD builders. Keep schema bodies here so we can iterate on
 * structured-data rules in one place without touching individual route files.
 */

const ORG_ID = `${site.url}/#organization`;
const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

export function organizationLd() {
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
    description: site.description,
    sameAs: Object.values(site.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.contact.email,
        telephone: site.contact.phone,
        areaServed: ["AE", "GCC", "Worldwide"],
        availableLanguage: ["en", "ar"],
      },
    ],
  } as const;
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": BUSINESS_ID,
    name: site.name,
    description: site.description,
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
    knowsAbout: [
      "Luxury wedding planning",
      "Destination weddings",
      "Cinematic proposals",
      "Corporate event planning",
      "Brand activations",
      "Hospitality openings",
      "Private gala production",
    ],
    parentOrganization: { "@id": ORG_ID },
  } as const;
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: site.locale,
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
export function faqPageLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
