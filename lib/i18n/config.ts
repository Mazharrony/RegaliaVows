// Centralised locale definitions for Regalia Vows. The site is bilingual
// (English + Russian) — English remains the default at the root path and
// Russian is served from `/ru/...`. Add additional locales here and they
// will flow through routing, middleware and SEO automatically.

export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** ISO BCP-47 tag emitted on <html lang> and <link hreflang>. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  ru: "ru",
};

/** Region-tagged locale used inside JSON-LD `inLanguage` and metadata. */
export const siteLocale: Record<Locale, string> = {
  en: "en-AE",
  ru: "ru-RU",
};

/** Open Graph locale codes. */
export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  ru: "ru_RU",
};

/** Human label used in the language switcher. */
export const localeLabel: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
};

/** Long-form name (used in alt/title attributes and a11y announcements). */
export const localeName: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
};
