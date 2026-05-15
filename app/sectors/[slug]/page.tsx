import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BgImage } from "@/components/ui/BgImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import {
  PhilosophyBlock,
  SignaturesGrid,
  ProcessTimeline,
} from "@/components/sections/DetailBlocks";
import { sectors, getSector } from "@/lib/sectors";
import { work } from "@/lib/work";
import { site } from "@/lib/site";
import { breadcrumbLd, jsonLd, serviceLd } from "@/lib/seo";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSector(slug);
  if (!s) return {};
  const title = s.title.replace(/\.$/, "");
  return {
    title,
    description: s.description,
    alternates: { canonical: `/sectors/${slug}` },
    openGraph: {
      type: "website",
      url: `${site.url}/sectors/${slug}`,
      title: `${title} \u00B7 ${site.name}`,
      description: s.description,
      images: [s.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} \u00B7 ${site.name}`,
      description: s.description,
      images: [s.image],
    },
  };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSector(slug);
  if (!s) notFound();

  const examples = work.filter((w) => w.sector === s.slug).slice(0, 3);

  const title = s.title.replace(/\.$/, "");
  const ldService = serviceLd({
    name: title,
    description: s.description,
    url: `/sectors/${s.slug}`,
    image: s.image,
    serviceType: title,
  });
  const ldBreadcrumb = breadcrumbLd([
    { name: "Home", url: "/" },
    { name: "Sectors", url: "/sectors" },
    { name: title, url: `/sectors/${s.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ldService)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ldBreadcrumb)} />
      <PageHero
        eyebrow={s.eyebrow}
        title={s.title}
        description={s.description}
      />

      <Section theme="pearl" className="!pt-0 !pb-0">
        <Container>
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-card border border-pearl/10">
              <BgImage
                src={s.image}
                alt={`${title} at Regalia Vows`}
                priority
                sizes="100vw"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-30 mix-blend-soft-light`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(11,11,13,0.7)_100%)]" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <PhilosophyBlock
        heading={`Why ${s.shortTitle.toLowerCase()}.`}
        body={s.philosophy}
      />

      <SignaturesGrid
        heading="The signatures."
        intro="Four hallmarks that separate a Regalia Vows commission in this sector from the agency template."
        items={s.signatures}
      />

      <ProcessTimeline
        heading="From brief to handover."
        steps={s.process}
      />

      <Section theme="pearl">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <Eyebrow className="!text-gilded-800">Inclusions</Eyebrow>
              <h2 className="display mt-8 text-display-md italic text-ink">
                What is included.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/85">
                Every commission is custom-scoped — these are the foundations
                every client receives.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {s.inclusions.map((line, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[60px_1fr] items-center gap-6 py-6"
                  >
                    <span className="font-display text-xl italic text-gilded-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl italic text-ink">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="hairline mt-24 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Eyebrow className="!text-gilded-800">Investment</Eyebrow>
              <p className="mt-6 font-display text-3xl italic text-ink md:text-4xl">
                {s.investment}
              </p>
            </div>
            <Button
              href="/contact/corporate"
              variant="gilded"
              size="lg"
              withArrow
            >
              Brief us
            </Button>
          </div>
        </Container>
      </Section>

      {examples.length > 0 && (
        <Section theme="pearl">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-2">
              <Reveal>
                <Eyebrow>Recent work</Eyebrow>
                <h2 className="display mt-8 text-display-md italic">
                  A selection from this sector.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <Link
                  href={`/case-studies?sector=${s.slug}`}
                  data-cursor="link"
                  className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/75 hover:text-gilded md:ml-auto"
                >
                  See all {s.shortTitle.toLowerCase()} →
                </Link>
              </Reveal>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {examples.map((w, i) => (
                <Reveal key={w.slug} delay={i * 0.08}>
                  <Link
                    href={`/case-studies/${w.slug}`}
                    data-cursor="view"
                    data-cursor-label="Open"
                    className="group relative block aspect-[4/5] overflow-hidden rounded-card border border-pearl/10 transition-colors duration-700 ease-silk hover:border-gilded/50"
                  >
                    <BgImage
                      src={w.image}
                      alt={`${w.title} — ${w.style}, ${w.place}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="transition-transform duration-[1200ms] ease-silk group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${w.palette} opacity-30 mix-blend-soft-light`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.9)_100%)]" />
                    <div className="dark-panel relative flex h-full flex-col justify-between p-8 text-pearl">
                      <span className="eyebrow !text-pearl/85">{w.style}</span>
                      <div>
                        <h3 className="font-display text-3xl italic text-white md:text-4xl">
                          {w.title}
                        </h3>
                        <p className="mt-2 text-sm text-pearl/85">{w.place}</p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
