import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "./Container";
import { Monogram } from "./Monogram";

// Threads & X have no first-party lucide icons — inline brand-accurate SVGs.
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.067-2.361-.218-3.259-.802-1.063-.69-1.685-1.745-1.752-2.974-.065-1.19.397-2.284 1.302-3.082.864-.764 2.082-1.213 3.52-1.292.95-.052 1.85-.011 2.66.111-.144-1.123-.45-1.985-.927-2.582-.65-.825-1.65-1.241-2.967-1.25h-.038c-1.087 0-2.456.21-3.32 1.499L8.04 7.073c1.158-1.725 3.034-2.677 5.275-2.677h.052c3.751.023 5.984 2.337 6.207 6.4.135.06.27.122.405.187 1.879.879 3.255 2.215 3.961 3.85.964 2.279.954 5.946-1.84 8.7-2.135 2.103-4.728 3.116-7.943 3.137zm.949-12.06c-.21 0-.42.005-.633.017-1.797.098-2.84.97-2.789 1.913.05.939 1.105 1.379 2.083 1.326 1.013-.054 2.213-.479 2.347-3.218a8.842 8.842 0 0 0-1.008-.038z"/>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

const socials = [
  { href: "instagram", label: "Instagram", Icon: Instagram },
  { href: "facebook", label: "Facebook", Icon: Facebook },
  { href: "threads", label: "Threads", Icon: ThreadsIcon },
  { href: "x", label: "X (Twitter)", Icon: XIcon },
] as const;

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
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {socials.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={site.social[href]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                data-cursor="link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-gilded hover:text-gilded"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
            <span aria-hidden className="mx-1 hidden h-4 w-px bg-ink/15 sm:block" />
            <Link href="/legal/privacy" className="hover:text-gilded">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-gilded">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
