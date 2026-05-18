import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/lib/i18n/routing";

// Server-side message loader. next-intl reads this on every server-rendered
// request to resolve which messages to hydrate. We merge per-namespace JSON
// catalogs under `messages/{locale}/` so each page can scope `useTranslations`
// to a single namespace and we don't ship a single mega-bundle to the client.
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const namespaces = [
    "common",
    "seo",
    "home",
    "about",
    "services",
    "sectors",
    "venues",
    "experience",
    "caseStudies",
    "journal",
    "press",
    "contact",
    "legal",
    "forms",
    "errors",
  ];

  const messages: Record<string, unknown> = {};
  for (const ns of namespaces) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      messages[ns] = (await import(`../messages/${locale}/${ns}.json`)).default;
    } catch {
      // Namespace not yet authored for this locale — fall back to default
      // locale so the route still renders while translation work proceeds.
      try {
        messages[ns] = (
          await import(`../messages/${routing.defaultLocale}/${ns}.json`)
        ).default;
      } catch {
        messages[ns] = {};
      }
    }
  }

  return {
    locale,
    messages,
    timeZone: "Asia/Dubai",
    now: new Date(),
  };
});
