import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BgImage } from "@/components/ui/BgImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { journal } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal — Notes on Luxury Weddings in Dubai & the UAE",
  description:
    "The Regalia Vows Journal — senior-planner notes on luxury weddings in Dubai, destination weddings across the UAE, venues, cinema, and the craft of celebration.",
  keywords: [
    "luxury wedding journal dubai",
    "wedding planner blog UAE",
    "destination wedding tips dubai",
    "indian wedding planner dubai blog",
    "wedding venues dubai notes",
  ],
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Journal — Notes on Luxury Weddings in Dubai & the UAE",
    description:
      "Editorial notes from a senior wedding planner in Dubai. Venues, design, cinema, and the slow craft of celebration.",
    type: "website",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function JournalPage() {
  const [featured, ...rest] = journal;

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from the studio."
        description="Senior-planner notes on luxury weddings in Dubai, destination events across the UAE, design, cinema and the quiet craft of celebration."
      />

      {/* Featured */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <Reveal>
            <Link
              href={`/journal/${featured.slug}`}
              data-cursor="view"
              data-cursor-label="Read"
              className="group grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16 md:items-center"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-card border border-ink/10">
                <BgImage
                  src={featured.image}
                  alt={`${featured.title} — Regalia Vows journal`}
                  priority
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="transition-transform duration-[1200ms] ease-silk group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(11,11,13,0.5)_100%)]" />
                <span className="absolute left-6 top-6 inline-flex items-center gap-3 rounded-full bg-cream/85 px-4 py-1.5 text-eyebrow uppercase tracking-widest2 text-ink/85 backdrop-blur md:left-8 md:top-8">
                  Featured · {featured.category}
                </span>
              </div>
              <div>
                <Eyebrow className="!text-gilded-800">
                  {formatDate(featured.dateISO)} · {featured.readMinutes} min read
                </Eyebrow>
                <h2 className="mt-6 font-display text-display-md italic text-ink transition-colors duration-500 ease-silk group-hover:text-gilded-700 md:text-display-lg">
                  {featured.title}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75">
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 text-eyebrow uppercase tracking-widest2 text-gilded-700">
                  <span className="h-px w-10 bg-gold-flow transition-all duration-500 ease-silk group-hover:w-20" />
                  Read the note
                  <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Grid */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="hairline mb-16" />
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow className="!text-gilded-800">All Notes</Eyebrow>
              <h2 className="mt-3 font-display text-display-sm italic text-ink md:text-display-md">
                Fifteen short reads.
              </h2>
            </div>
            <span className="hidden text-sm text-ink/65 md:block">
              {journal.length} entries · updated this season
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/journal/${post.slug}`}
                  data-cursor="view"
                  data-cursor-label="Read"
                  className="group flex h-full flex-col"
                >
                  <div className="relative aspect-[5/4] overflow-hidden rounded-card border border-ink/10">
                    <BgImage
                      src={post.image}
                      alt={`${post.title} — Regalia Vows journal`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="transition-transform duration-[1200ms] ease-silk group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink/85 backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-col">
                    <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
                      {formatDate(post.dateISO)} · {post.readMinutes} min
                    </span>
                    <h3 className="mt-3 font-display text-2xl italic text-ink transition-colors duration-500 ease-silk group-hover:text-gilded-700 md:text-3xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest2 text-gilded-700">
                      Read
                      <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="hairline" />
          <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow className="!text-gilded-800">Begin Your Brief</Eyebrow>
              <h2 className="mt-4 max-w-xl font-display text-display-sm italic text-ink md:text-display-md">
                If a note resonated, the conversation starts here.
              </h2>
            </div>
            <Button href="/contact" data-cursor="link">
              Begin a private enquiry
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
