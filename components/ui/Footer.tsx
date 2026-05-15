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
    title: "Weddings",
    links: [
      { href: "/services/weddings", label: "Bespoke Weddings" },
      { href: "/services/proposals", label: "Cinematic Proposals" },
      { href: "/services/destination-weddings", label: "Destination" },
      { href: "/services/private-events", label: "Private Events" },
      { href: "/services/honeymoons", label: "Honeymoons" },
    ],
  },
  {
    title: "Also Offered",
    links: [
      { href: "/sectors/corporate", label: "Corporate Events" },
      { href: "/sectors/brand-experiential", label: "Brand & Experiential" },
      { href: "/sectors/private-social", label: "Private & Social" },
      { href: "/sectors/hospitality", label: "Hospitality Launches" },
      { href: "/sectors", label: "All Sectors" },
    ],
  },
  {
    title: "Discover",
    links: [
      { href: "/case-studies", label: "Case Studies" },
      { href: "/venues", label: "Venues" },
      { href: "/contact", label: "Enquire" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-ink/10 bg-cream-100 py-20 text-ink">
      <div className="pointer-events-none absolute inset-0 bg-gold-foil opacity-30" aria-hidden />
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
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

            <dl className="mt-8 space-y-3 text-sm text-pearl/85">
              <div>
                <dt className="text-eyebrow uppercase tracking-widest2 text-gilded-800">Studio</dt>
                <dd className="mt-1 max-w-xs text-ink/80">{site.contact.address}</dd>
              </div>
              <div>
                <dt className="text-eyebrow uppercase tracking-widest2 text-gilded-800">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.contact.email}`}
                    data-cursor="link"
                    className="text-ink/80 transition-colors hover:text-gilded-600"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-eyebrow uppercase tracking-widest2 text-gilded-800">Telephone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    data-cursor="link"
                    className="text-ink/80 transition-colors hover:text-gilded-600"
                  >
                    {site.contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-eyebrow uppercase tracking-widest2 text-gilded-800">{col.title}</h4>
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
