import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six chapters of service — bespoke weddings, cinematic proposals, destination weddings, private events, corporate commissions and post-wedding honeymoons.",
};

const services = [
  {
    n: "I",
    slug: "weddings",
    title: "Bespoke Weddings",
    body: "End-to-end design and production for celebrations in the UAE and beyond.",
  },
  {
    n: "II",
    slug: "proposals",
    title: "Cinematic Proposals",
    body: "Single-moment commissions — engineered like films, kept secret like state.",
  },
  {
    n: "III",
    slug: "destination-weddings",
    title: "Destination Weddings",
    body: "We travel with you. Lake Como, Marrakech, Udaipur, Kyoto, anywhere.",
  },
  {
    n: "IV",
    slug: "private-events",
    title: "Private Events",
    body: "Engagements, vow renewals, anniversary galas, after-parties.",
  },
  {
    n: "V",
    slug: "corporate-and-private",
    title: "Corporate & Private Events",
    body: "Brand launches, galas, conferences and family-office commissions — the same craft, applied beyond the aisle.",
  },
  {
    n: "VI",
    slug: "honeymoons",
    title: "Honeymoons",
    body: "The week after the wedding, planned with the same hand. Itineraries, residencies and quiet places to disappear together.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Services"
        title="Six chapters, one signature."
        description="Every commission begins with the same conversation — and ends, no two ever alike."
      />

      <Section theme="ink" className="!pt-0">
        <Container>
          <ul className="divide-y divide-pearl/10 border-y border-pearl/10">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06} as="li">
                <Link
                  href={`/services/${s.slug}`}
                  data-cursor="view"
                  data-cursor-label="View"
                  className="group grid grid-cols-[80px_1fr_auto] items-center gap-6 py-10 md:grid-cols-[120px_1.4fr_1fr_auto] md:py-14"
                >
                  <span className="font-display text-3xl italic text-gilded md:text-4xl">
                    {s.n}
                  </span>
                  <h3 className="font-display text-4xl italic text-pearl transition-all duration-500 ease-silk group-hover:translate-x-2 group-hover:text-gilded md:text-6xl">
                    {s.title}
                  </h3>
                  <p className="hidden text-base text-pearl/80 md:block">
                    {s.body}
                  </p>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-pearl/20 text-pearl transition-all duration-500 ease-silk group-hover:border-gilded group-hover:bg-gilded group-hover:text-ink">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
