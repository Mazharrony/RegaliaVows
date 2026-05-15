import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, sans, tight } from "@/lib/fonts";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Toaster } from "sonner";
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
        className="font-sans antialiased selection:bg-gilded/30"
      >
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Toaster
          theme="light"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#FFFDF7",
              color: "#0B0B0D",
              border: "1px solid rgba(214,161,64,0.35)",
            },
          }}
        />
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
