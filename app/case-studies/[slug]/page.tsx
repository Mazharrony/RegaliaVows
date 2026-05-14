import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { work, getWorkItem } from "@/lib/work";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWorkItem(slug);
  if (!w) return {};
  return {
    title: `${w.title} — ${w.place}`,
    description: `A ${w.style.toLowerCase()} composed by Regalia Vows at ${w.place}.`,
  };
}

const briefCopy: Record<string, { brief: string; arc: string }> = {
  weddings: {
    brief:
      "Two families, three languages, one sentence we wanted every guest to leave with — we have never felt this held.",
    arc: "Regalia Vows composed a three-day arc — a private welcome dinner, a sunset ceremony in a flower-walled courtyard, and a twelve-course reception scored by a live ensemble.",
  },
  corporate: {
    brief:
      "Reveal a flagship to a room of clients, press and partners — and have every one of them remember a single image when they leave.",
    arc: "Regalia Vows composed the evening around a single scenographic moment — a slow architectural reveal, a curated walk, a seated dinner choreographed to the second.",
  },
  "brand-experiential": {
    brief:
      "Bring an editorial story into a physical room for forty-eight hours — and let the press write themselves.",
    arc: "An immersive installation, scented and scored, with a guest list curated like a dinner. Press, talent and clients moved through five chapters across two nights.",
  },
  "private-social": {
    brief:
      "A milestone the host has been quietly imagining for a decade — held by people who already know how the family hosts.",
    arc: "A private cocktail in a sculpture courtyard, a seated dinner in a transformed ballroom, an after-hours room scored by a single resident DJ.",
  },
  hospitality: {
    brief:
      "Open the house the way it wants to be remembered — by the guests, by the press, and by the team who built it.",
    arc: "Regalia Vows composed the opening across three rooms — a media morning, a partners' aperitivo, and a guest-of-honour dinner staged inside the property's most photographed suite.",
  },
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWorkItem(slug);
  if (!w) notFound();

  const copy = briefCopy[w.sector];
  const peers = work.filter((x) => x.sector === w.sector && x.slug !== w.slug);
  const next = peers[0] ?? work[(work.findIndex((x) => x.slug === w.slug) + 1) % work.length];

  return (
    <>
      <PageHero
        eyebrow={`${w.place} · ${w.year}`}
        title={`${w.title}.`}
        description={`A ${w.style.toLowerCase()} composed by Regalia Vows.`}
      />

      <Section theme="ink" className="!py-0">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${w.image})` }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${w.palette} opacity-30 mix-blend-soft-light`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.55)_100%)]" />
        </div>
      </Section>

      <Section theme="ink">
        <Container size="narrow">
          <Reveal>
            <Eyebrow>The Brief</Eyebrow>
            <p className="mt-8 font-display text-3xl italic leading-snug text-pearl md:text-4xl">
              &ldquo;{copy.brief}&rdquo;
            </p>
            <p className="mt-10 text-base leading-relaxed text-pearl/85">
              {copy.arc}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section theme="ink" className="!py-0">
        <Container size="wide">
          {(() => {
            const gallery = [
              "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=75",
              "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=75",
              "https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1200&q=75",
              "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=75",
            ];
            const spans = [
              "col-span-12 aspect-[16/10] md:col-span-8",
              "col-span-12 aspect-[3/4] md:col-span-4",
              "col-span-12 aspect-[3/4] md:col-span-4",
              "col-span-12 aspect-[16/10] md:col-span-8",
            ];
            return (
              <div className="grid grid-cols-12 gap-6">
                {gallery.map((src, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-card ${spans[idx]}`}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${w.palette} opacity-25 mix-blend-soft-light`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.5)_100%)]" />
                  </div>
                ))}
              </div>
            );
          })()}
        </Container>
      </Section>

      <Section theme="ink">
        <Container size="narrow" className="text-center">
          <Eyebrow className="!justify-center">Next Composition</Eyebrow>
          <Link
            href={`/case-studies/${next.slug}`}
            data-cursor="view"
            data-cursor-label="Open"
            className="mt-10 inline-block font-display text-5xl italic text-pearl hover:text-gilded md:text-7xl"
          >
            {next.title} →
          </Link>
        </Container>
      </Section>
    </>
  );
}
