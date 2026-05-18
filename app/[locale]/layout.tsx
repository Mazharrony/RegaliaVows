import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "../globals.css";
import { display, sans, tight } from "@/lib/fonts";
import { site, getSiteCopy } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Footer } from "@/components/ui/Footer";
import { Nav } from "@/components/ui/Nav";
import { jsonLd, localBusinessLd, organizationLd, websiteLd, hreflangAlternates } from "@/lib/seo";
import { routing } from "@/lib/i18n/routing";
import { htmlLang, ogLocale, siteLocale, locales, defaultLocale, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "seo" });
  const copy = getSiteCopy(locale);
  // Fall back to the site copy if the seo namespace doesn't define these keys.
  let title: string;
  let description: string;
  try {
    title = t("home.title");
  } catch {
    title = `${site.name} — ${copy.tagline}`;
  }
  try {
    description = t("home.description");
  } catch {
    description = copy.description;
  }
  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s · ${site.name}`,
    },
    description,
    applicationName: site.name,
    authors: [{ name: site.name }],
    keywords: [
      "luxury wedding planner dubai",
      "luxury wedding planner",
      "destination weddings",
      "bespoke weddings UAE",
      "cinematic proposals dubai",
      "luxury event planner dubai",
      "corporate event planner UAE",
      "brand activations dubai",
      "hotel opening event planner",
      "private events dubai",
    ],
    openGraph: {
      type: "website",
      locale: ogLocale[locale as Locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocale[l]),
      url: locale === defaultLocale ? site.url : `${site.url}/${locale}`,
      title,
      description,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: locale === defaultLocale ? "/" : `/${locale}`,
      languages: hreflangAlternates("/"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: "Zf7Ol3qMWGs4HCJhLOrdSV5M6XczkHtI9Czy0wsr6Jg",
      other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : undefined,
    },
    category: "Wedding planning",
  };
}

export const viewport: Viewport = {
  themeColor: "#FAF6EE",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html
      lang={htmlLang[locale]}
      translate="no"
      suppressHydrationWarning
      className={cn(
        display.variable,
        sans.variable,
        tight.variable,
        "notranslate bg-cream text-ink",
      )}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body
        suppressHydrationWarning
        translate="no"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        className="font-sans antialiased selection:bg-gilded/30 notranslate"
      >
        <NextIntlClientProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationLd(locale))}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessLd(locale))}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(websiteLd(locale))}
        />
        <meta name="x-site-locale" content={siteLocale[locale]} />
      </body>
    </html>
  );
}
