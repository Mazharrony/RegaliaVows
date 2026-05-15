import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, sans, tight } from "@/lib/fonts";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Toaster } from "sonner";

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
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#111216",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(display.variable, sans.variable, tight.variable, "bg-ink text-pearl")}
    >
      <body className="font-sans antialiased selection:bg-gilded/30">
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#181922",
              color: "#FFFFFF",
              border: "1px solid rgba(230,207,153,0.35)",
            },
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: site.name,
              description: site.description,
              url: site.url,
              telephone: site.contact.phone,
              email: site.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.contact.address,
                addressLocality: site.city,
                addressCountry: site.country,
              },
              areaServed: "Worldwide",
              priceRange: "$$$$",
              sameAs: Object.values(site.social),
            }),
          }}
        />
      </body>
    </html>
  );
}
