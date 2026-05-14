import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { sectors } from "@/lib/sectors";

export const metadata: Metadata = {
  title: "Sectors — Beyond the Aisle",
  description:
    "Weddings remain our primary craft. On request, Regalia Vows extends the same hand to corporate events, brand activations, private celebrations and hospitality launches.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Beyond the Aisle"
        title="The occasions that follow."
        description="Weddings & proposals remain our primary craft. The clients we compose them for ask us, year after year, to stage the launches, galas, milestone nights and hotel openings that come next. These are the four disciplines we extend, on request."
      />

      <Section theme="ink" className="!pt-0">
        <Container>
          <ul className="divide-y divide-pearl/10 border-y border-pearl/10">
            {sectors.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06} as="li">
                <Link
                  href={`/sectors/${s.slug}`}
                  data-cursor="view"
                  data-cursor-label="View"
                  className="group grid grid-cols-[80px_1fr_auto] items-center gap-6 py-10 md:grid-cols-[120px_1.4fr_1fr_auto] md:py-14"
                >
                  <span className="font-display text-3xl italic text-gilded md:text-4xl">
                    {s.number}
                  </span>
                  <h3 className="font-display text-4xl italic text-pearl transition-all duration-500 ease-silk group-hover:translate-x-2 group-hover:text-gilded md:text-6xl">
                    {s.shortTitle}
                  </h3>
                  <p className="hidden text-base text-pearl/80 md:block">
                    {s.oneLiner}
                  </p>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-pearl/20 text-pearl transition-all duration-500 ease-silk group-hover:rotate-45 group-hover:border-gilded group-hover:bg-gilded group-hover:text-ink">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <div className="mt-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-md text-base leading-relaxed text-pearl/75">
              Looking for a wedding or a proposal?{" "}
              <Link
                href="/services"
                data-cursor="link"
                className="text-gilded underline-offset-4 hover:underline"
              >
                Return to the Services
              </Link>
              .
            </p>
            <Link
              href="/contact"
              data-cursor="link"
              className="inline-flex items-center gap-4 font-tight text-eyebrow uppercase tracking-widest2 text-pearl hover:text-gilded"
            >
              <span className="h-px w-12 bg-gilded transition-all duration-500 ease-silk group-hover:w-24" />
              Brief us on an event
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
