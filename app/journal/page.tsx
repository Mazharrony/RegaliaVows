import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Regalia Vows — on design, weddings, hospitality, and the slow craft of celebration.",
};

const posts = [
  {
    slug: "the-quiet-luxury-wedding",
    title: "The Quiet Luxury Wedding — and Why It Is Anything But",
    excerpt: "Restraint as the most expensive choice of all.",
    date: "April 2026",
    category: "Design",
  },
  {
    slug: "florals-without-flowers",
    title: "Florals Without Flowers",
    excerpt: "Architectural installations replacing the centrepiece.",
    date: "March 2026",
    category: "Florals",
  },
  {
    slug: "guest-letters-as-a-medium",
    title: "The Letter to Your Guests — A Forgotten Medium",
    excerpt: "How a handwritten note can outshine a save-the-date film.",
    date: "February 2026",
    category: "Hospitality",
  },
  {
    slug: "the-two-minute-rule",
    title: "The Two-Minute Rule for First Dances",
    excerpt: "The shortest cinematic moment of a wedding is also the most rehearsed.",
    date: "January 2026",
    category: "Choreography",
  },
];

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from Regalia Vows."
      />

      <Section theme="ink" className="!pt-0">
        <Container>
          <ul className="divide-y divide-pearl/10 border-y border-pearl/10">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} as="li">
                <Link
                  href={`/journal/${p.slug}`}
                  data-cursor="view"
                  data-cursor-label="Read"
                  className="group grid grid-cols-1 items-end gap-3 py-10 md:grid-cols-[1fr_2fr_auto] md:gap-10 md:py-14"
                >
                  <div className="flex items-center gap-4">
                    <span className="eyebrow">{p.category}</span>
                    <span className="text-sm text-pearl/40">{p.date}</span>
                  </div>
                  <h3 className="font-display text-3xl italic text-pearl transition-colors group-hover:text-gilded md:text-5xl">
                    {p.title}
                  </h3>
                  <p className="hidden text-sm italic text-pearl/80 lg:block">
                    {p.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
