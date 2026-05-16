import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import { display, sans, tight } from "@/lib/fonts";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Footer } from "@/components/ui/Footer";
import { Monogram } from "@/components/ui/Monogram";
import { jsonLd, localBusinessLd, organizationLd, websiteLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
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
    locale: site.locale,
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  alternates: { canonical: "/" },
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  category: "Wedding planning",
};

export const viewport: Viewport = {
  themeColor: "#FAF6EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      translate="no"
      suppressHydrationWarning
      className={cn(display.variable, sans.variable, tight.variable, "notranslate bg-cream text-ink")}
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
        <header className="fixed inset-x-0 top-0 z-50 bg-cream/85 backdrop-blur-lg border-b border-ink/10">
          <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 md:px-10 3xl:max-w-[1800px] 3xl:px-16 4xl:max-w-[2200px] 4xl:h-24">
            <Link
              href="/"
              aria-label={site.name}
              className="flex items-center gap-2 whitespace-nowrap text-ink/95 sm:gap-3"
            >
              <Monogram className="h-8 w-8 sm:h-9 sm:w-9" />
              <span className="font-display text-base italic sm:text-lg">{site.name}</span>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex xl:gap-8 2xl:gap-10">
              <Link href="/about" className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:text-gilded">Story</Link>
              <Link href="/services" className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:text-gilded">Services</Link>
              <Link href="/sectors" className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:text-gilded">Sectors</Link>
              <Link href="/experience" className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:text-gilded">Experience</Link>
              <Link href="/case-studies" className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:text-gilded">Portfolio</Link>
              <Link href="/venues" className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:text-gilded">Venues</Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-gilded font-tight text-eyebrow uppercase tracking-widest2 text-ink hover:bg-gilded/90 px-4 py-2.5 sm:px-5 sm:py-3 lg:px-7 lg:py-3.5"
              >
                <span className="hidden sm:inline">Begin Enquiry</span>
                <span className="sm:hidden">Enquire</span>
              </Link>

              {/* CSS-only mobile/tablet menu (no client component needed). */}
              <details className="relative lg:hidden">
                <summary
                  aria-label="Open menu"
                  className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-ink/15 text-ink/80 marker:hidden [&::-webkit-details-marker]:hidden hover:border-gilded hover:text-gilded"
                >
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                    <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </summary>
                <nav className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-ink/10 bg-cream/95 p-3 shadow-xl backdrop-blur-lg">
                  <Link href="/about" className="block rounded-xl px-4 py-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:bg-ink/5 hover:text-gilded">Story</Link>
                  <Link href="/services" className="block rounded-xl px-4 py-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:bg-ink/5 hover:text-gilded">Services</Link>
                  <Link href="/sectors" className="block rounded-xl px-4 py-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:bg-ink/5 hover:text-gilded">Sectors</Link>
                  <Link href="/experience" className="block rounded-xl px-4 py-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:bg-ink/5 hover:text-gilded">Experience</Link>
                  <Link href="/case-studies" className="block rounded-xl px-4 py-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:bg-ink/5 hover:text-gilded">Portfolio</Link>
                  <Link href="/venues" className="block rounded-xl px-4 py-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:bg-ink/5 hover:text-gilded">Venues</Link>
                  <Link href="/journal" className="block rounded-xl px-4 py-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:bg-ink/5 hover:text-gilded">Journal</Link>
                  <Link href="/contact" className="block rounded-xl px-4 py-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink/80 hover:bg-ink/5 hover:text-gilded">Contact</Link>
                </nav>
              </details>
            </div>
          </div>
        </header>
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationLd())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessLd())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(websiteLd())}
        />
      </body>
    </html>
  );
}
