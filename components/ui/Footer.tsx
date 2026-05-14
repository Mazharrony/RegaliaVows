import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";
import { Monogram } from "./Monogram";

const cols = [
  {
    title: "Regalia Vows",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/experience", label: "The Process" },
      { href: "/press", label: "Press" },
      { href: "/journal", label: "Journal" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/weddings", label: "Weddings" },
      { href: "/services/proposals", label: "Proposals" },
      { href: "/services/destination-weddings", label: "Destination" },
      { href: "/services/private-events", label: "Private Events" },
      { href: "/services/corporate-and-private", label: "Corporate & Private" },
      { href: "/services/honeymoons", label: "Honeymoons" },
    ],
  },
  {
    title: "Discover",
    links: [
      { href: "/portfolio", label: "Real Weddings" },
      { href: "/venues", label: "Venues" },
      { href: "/contact", label: "Enquire" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-pearl/5 bg-ink py-20 text-pearl">
      <div className="pointer-events-none absolute inset-0 bg-gold-foil opacity-30" aria-hidden />
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Monogram className="h-10 w-10 text-gilded" />
              <span className="font-display text-2xl italic">{site.name}</span>
            </div>
            <p className="mt-6 max-w-sm font-display text-2xl italic text-pearl/80">
              {site.tagline}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-pearl/80">
              {site.description}
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-eyebrow uppercase tracking-widest2 text-gold">{col.title}</h4>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      data-cursor="link"
                      className="text-base text-pearl/80 transition-colors hover:text-gilded"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mt-20" />

        <div className="mt-8 flex flex-col gap-6 text-xs uppercase tracking-widest2 text-pearl/85 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Crafted in {site.city}.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={site.social.instagram} target="_blank" className="hover:text-gilded">
              Instagram
            </Link>
            <Link href={site.social.pinterest} target="_blank" className="hover:text-gilded">
              Pinterest
            </Link>
            <Link href={site.social.vimeo} target="_blank" className="hover:text-gilded">
              Vimeo
            </Link>
            <Link href="/legal/privacy" className="hover:text-gilded">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-gilded">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
