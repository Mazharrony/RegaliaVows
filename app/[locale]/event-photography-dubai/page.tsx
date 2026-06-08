import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import {
  eventCoverageTypes,
  eventPhotographyServices,
} from "@/lib/event-photography";
import { site } from "@/lib/site";
import {
  breadcrumbLd,
  jsonLd,
  serviceLd,
  localeAlternates,
  urlForLocale,
} from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

// TODO(ru): translate copy — currently English-only for both locales.

const PAGE_TITLE = "Event Photography Dubai";
const PAGE_DESCRIPTION =
  "Editorial event photography across Dubai and the UAE — exhibitions, galas, concerts, graduations, brand reveals and private commissions, composed with the discretion of a Regalia Vows wedding.";
const CANONICAL_PATH = "/event-photography-dubai";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return {
    title: `${PAGE_TITLE} — ${site.name}`,
    description: PAGE_DESCRIPTION,
    alternates: localeAlternates(locale, CANONICAL_PATH),
    openGraph: {
      type: "website" as const,
      url: urlForLocale(locale, CANONICAL_PATH),
      title: `${PAGE_TITLE} \u00B7 ${site.name}`,
      description: PAGE_DESCRIPTION,
      images: [site.ogImage],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${PAGE_TITLE} \u00B7 ${site.name}`,
      description: PAGE_DESCRIPTION,
      images: [site.ogImage],
    },
  };
}

export default async function EventPhotographyDubaiPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const ldService = serviceLd({
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_PATH,
    serviceType: "Event photography",
    locale,
  });
  const ldBreadcrumb = breadcrumbLd([
    { name: "Home", url: "/" },
    { name: PAGE_TITLE, url: CANONICAL_PATH },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(ldService)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(ldBreadcrumb)}
      />

      <PageHero
        eyebrow="Event Photography · Dubai"
        title="Comprehensive event photography across Dubai."
        description="From the keynote halls of DWTC and ADNEC to private gala dinners, graduations and Burj Khalifa projections — Regalia Vows photographers cover the city's full event calendar with the same eye we bring to the aisle."
      />

      <Section theme="pearl">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <Eyebrow className="!text-gilded-800">What We Cover</Eyebrow>
              <h2 className="display mt-8 text-display-md italic text-ink">
                Every kind of event.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/85">
                Nine event categories regularly captured by the Regalia Vows
                photography desk across Dubai, Abu Dhabi and the wider UAE.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {eventCoverageTypes.map((line, i) => (
                  <li
                    key={line}
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
        </Container>
      </Section>

      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow className="!text-gilded-800">The Services</Eyebrow>
              <h2 className="display mt-8 text-display-md italic text-ink">
                Types of event photography services.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/85">
                Six focused service lines, each priced and crewed for the
                room it serves. Brief us once and a senior photographer is
                assigned for the duration of the commission.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventPhotographyServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <article className="flex h-full flex-col gap-6 rounded-card border border-ink/10 bg-pearl/40 p-8 transition-colors duration-500 ease-silk hover:border-gilded/50">
                  <span className="font-tight text-eyebrow uppercase tracking-widest2 text-gilded-700">
                    {`No. ${String(i + 1).padStart(2, "0")}`}
                  </span>
                  <h3 className="font-display text-2xl italic text-ink md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink/80">
                    {s.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="hairline mt-24 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Eyebrow className="!text-gilded-800">Brief Us</Eyebrow>
              <p className="mt-6 max-w-xl font-display text-3xl italic text-ink md:text-4xl">
                Tell us the venue, the guest list and the moment — we will
                reply within two working days.
              </p>
            </div>
            <Button
              href="/contact/corporate"
              variant="gilded"
              size="lg"
              withArrow
            >
              Begin Your Enquiry
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
