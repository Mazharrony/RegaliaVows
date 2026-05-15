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
    description: `${w.style} composed by Regalia Vows at ${w.place}.`,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWorkItem(slug);
  if (!w) notFound();

  const peers = work.filter((x) => x.sector === w.sector && x.slug !== w.slug);
  const next =
    peers[0] ??
    work[(work.findIndex((x) => x.slug === w.slug) + 1) % work.length];

  const gallerySpans = [
    "col-span-12 aspect-[16/10] md:col-span-8",
    "col-span-12 aspect-[3/4] md:col-span-4",
    "col-span-12 aspect-[3/4] md:col-span-4",
    "col-span-12 aspect-[16/10] md:col-span-8",
  ];

  return (
    <>
      <PageHero
        eyebrow={`${w.place} · ${w.year}`}
        title={`${w.title}.`}
        description={w.style}
      />

      {/* Hero plate */}
      <Section theme="pearl" className="!py-0">
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

      {/* Brief + arc */}
      <Section theme="pearl">
        <Container size="narrow">
          <Reveal>
            <Eyebrow>The Brief</Eyebrow>
            <p className="mt-8 font-display text-3xl italic leading-snug text-pearl md:text-4xl">
              &ldquo;{w.brief}&rdquo;
            </p>
            <p className="mt-10 text-base leading-relaxed text-pearl/85">
              {w.arc}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Facts row */}
      <Section theme="pearl" className="!pt-0">
        <Container size="wide">
          <Reveal>
            <dl className="grid grid-cols-2 gap-y-8 border-t border-pearl/10 pt-12 md:grid-cols-5">
              {w.facts.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow !text-pearl/55">{f.label}</dt>
                  <dd className="mt-3 font-display text-xl italic text-pearl">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      {/* Chapters */}
      <Section theme="pearl">
        <Container size="narrow">
          <Reveal>
            <Eyebrow>The Arc</Eyebrow>
          </Reveal>
          <div className="mt-12 space-y-16">
            {w.chapters.map((c, idx) => (
              <Reveal key={c.title} delay={idx * 0.05}>
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-12">
                  <span className="font-display text-3xl italic text-gilded md:text-4xl">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl italic text-pearl md:text-3xl">
                      {c.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-pearl/85">
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery mosaic */}
      <Section theme="pearl" className="!py-0">
        <Container size="wide">
          <div className="grid grid-cols-12 gap-6">
            {w.gallery.slice(0, 4).map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className={`relative overflow-hidden rounded-card ${gallerySpans[idx] ?? gallerySpans[0]}`}
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
        </Container>
      </Section>

      {/* Next */}
      <Section theme="pearl">
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
          <p className="mt-6 text-sm text-pearl/60">
            {next.place} · {next.year}
          </p>
        </Container>
      </Section>
    </>
  );
}
