export const site = {
  name: "Regalia Vows",
  legalName: "Regalia Vows",
  tagline: "Weddings, composed — and the occasions that follow.",
  description:
    "Regalia Vows composes once-in-a-lifetime weddings and proposals from Dubai, staged across the Emirates and the world. On request, the same hand designs the corporate launches, private galas, brand activations and hospitality openings our clients ask for next.",
  url: "https://regaliavows.com",
  locale: "en-AE",
  city: "Dubai",
  region: "Dubai",
  country: "United Arab Emirates",
  countryCode: "AE",
  // Default share image (1200x630). A dynamic OG card is also generated at
  // /opengraph-image. Update when bespoke photography is approved for SEO use.
  ogImage: "https://regaliavows.com/opengraph-image",
  // Logo URL (absolute, for JSON-LD).
  logo: "https://regaliavows.com/icon.svg",
  // Approximate coordinates for Al Fahidi, Bur Dubai. Replace with surveyed
  // values from Google Business Profile once verified.
  geo: { latitude: 25.2628, longitude: 55.2972 },
  // Public Google Maps share link (replace once GBP is live).
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Al+Fahidi+Plaza+Dubai",
  // Google Business Profile share URL (placeholder — fill once claimed).
  gbpUrl: "",
  contact: {
    email: "Info@Regaliavows.com",
    phone: "+971 56 264 6341",
    whatsapp: "+971 56 264 6341",
    address: "14 66 Street, Al Souq Al Kabeer, Al Fahidi Plaza, Dubai, UAE",
    streetAddress: "14 66 Street, Al Souq Al Kabeer, Al Fahidi Plaza",
  },
  // By-appointment studio. Times kept generous to cover crews and concierge.
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      open: "09:00",
      close: "21:00",
    },
  ],
  social: {
    instagram: "https://www.instagram.com/regaliavows_dubai",
    facebook: "https://www.facebook.com/share/1CZoZr1ZPT/",
    threads: "https://www.threads.com/@regaliavows_dubai",
    x: "https://x.com/Regalia_VowsHQ",
  },
} as const;

export type Site = typeof site;

// Localized narrative fields. Identity (name, contact, social, address) is
// language-agnostic and stays on `site`; tagline / description / city / region
// vary by locale and are read through `siteCopy(locale)`.
//
// TODO(ru): review — drafted Russian; native pass required before launch.
export const siteCopy = {
  en: {
    tagline: site.tagline,
    description: site.description,
    city: site.city,
    region: site.region,
    country: site.country,
  },
  ru: {
    tagline: "Свадьбы, выстроенные как произведение — и торжества, которые следуют за ними.",
    description:
      "Regalia Vows проектирует свадьбы и предложения руки и сердца, какие случаются раз в жизни — из Дубая, по всем Эмиратам и по всему миру. По отдельному запросу — корпоративные открытия, частные гала-приёмы, бренд-активации и запуски гостиниц для тех же клиентов.",
    city: "Дубай",
    region: "Дубай",
    country: "Объединённые Арабские Эмираты",
  },
} as const;

export type SiteCopy = (typeof siteCopy)[keyof typeof siteCopy];

/** Resolve the localized narrative copy for the active locale. */
export function getSiteCopy(locale: string): SiteCopy {
  return (siteCopy as Record<string, SiteCopy>)[locale] ?? siteCopy.en;
}
