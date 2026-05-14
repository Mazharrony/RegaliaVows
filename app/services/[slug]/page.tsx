import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

const data = {
  weddings: {
    eyebrow: "Service I",
    title: "Bespoke Weddings.",
    description:
      "Two to seven-day celebrations across the UAE — palaces, private islands, desert estates and rooftop ballrooms.",
    inclusions: [
      "Signature design treatment & creative direction",
      "Venue scouting & negotiation across the GCC",
      "Floral, fashion & set design",
      "Multi-cultural ceremony choreography",
      "Guest concierge & multilingual hosting",
      "Cinematography & archival book",
      "Optional honeymoon planning (see Service VI)",
    ],
    investment: "From AED 750,000 · Production from AED 1.8M",
  },
  proposals: {
    eyebrow: "Service II",
    title: "Cinematic Proposals.",
    description:
      "A single perfect moment, engineered as a film. Helicopter approaches, private skyline takeovers, surprise musicians.",
    inclusions: [
      "Concept treatment & secret logistics",
      "Location securing (rooftops, deserts, yachts)",
      "Film & still photography crew",
      "Florals, lighting, score",
      "Surprise vendor concierge (jeweller, sommelier, chef)",
      "Post-moment celebration handoff",
    ],
    investment: "From AED 95,000",
  },
  "destination-weddings": {
    eyebrow: "Service III",
    title: "Destination Weddings.",
    description:
      "We open passports together. Regalia Vows flies with the couple and stages the celebration on location.",
    inclusions: [
      "International venue scouting & contracts",
      "Local vendor curation & quality control",
      "Customs, visa & guest logistics",
      "On-ground production team for two weeks",
      "Cultural & legal ceremony compliance",
      "Travel concierge for VIP guests",
      "Optional honeymoon planning (see Service VI)",
    ],
    investment: "From AED 1.2M · plus travel & venue",
  },
  "private-events": {
    eyebrow: "Service IV",
    title: "Private Events.",
    description:
      "Engagements, vow renewals, anniversary galas and the after-party that becomes the legend.",
    inclusions: [
      "Concept & creative direction",
      "Venue, florals, fashion & set",
      "Talent booking (DJs, ensembles, performers)",
      "Production & technical direction",
      "Catering & beverage curation",
      "Guest experience design",
    ],
    investment: "From AED 250,000",
    video: "/videos/private-event.mp4",
  },
  "corporate-and-private": {
    eyebrow: "Service V",
    title: "Corporate & Private Events.",
    description:
      "Brand launches, galas, conferences and family-office commissions — the same craft Regalia Vows brings to a wedding, applied to the moments a brand or a private office wants to remember.",
    inclusions: [
      "Creative direction & narrative treatment",
      "Venue scouting — ballrooms, ADNEC, DWTC, Dubai Opera, private estates",
      "Production, AV, lighting & scenographic build",
      "Talent, keynote & performer concierge",
      "F&B programme & guest journey choreography",
      "Permits, security, VIP protocol & press handling",
    ],
    investment: "From AED 400,000 · per-event basis",
  },
  honeymoons: {
    eyebrow: "Service VI",
    title: "Honeymoons.",
    description:
      "The week after the wedding, planned with the same hand. Private residencies, multi-stop itineraries and quiet places to disappear together — paired with a Regalia Vows commission or taken on its own.",
    inclusions: [
      "Itinerary design & destination strategy",
      "Private villa, château & over-water residency curation",
      "Flights, transfers, yacht & helicopter logistics",
      "Visa, vaccination & travel-document handling",
      "In-destination concierge — chef, sommelier, photographer, guides",
      "Surprise moments & vow-renewal staging on location",
    ],
    investment: "From AED 120,000 · plus travel & accommodation",
  },
} as const;

type Slug = keyof typeof data;

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = data[slug as Slug];
  if (!item) return {};
  return { title: item.title.replace(/\.$/, ""), description: item.description };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data[slug as Slug];
  if (!item) notFound();
  const video = "video" in item ? (item as { video?: string }).video : undefined;

  return (
    <>
      <PageHero
        eyebrow={item.eyebrow}
        title={item.title}
        description={item.description}
      />

      {video && (
        <Section theme="ink" className="!pt-0 !pb-0">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-sm shadow-2xl ring-1 ring-gilded-600/20">
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="aspect-video h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" aria-hidden />
              </div>
            </Reveal>
          </Container>
        </Section>
      )}

      <Section theme="pearl">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <Eyebrow className="!text-gilded-800">Inclusions</Eyebrow>
              <h2 className="display mt-8 text-display-md italic text-ink">
                What is included.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/85">
                Each commission is custom-priced and custom-scoped — these are
                the foundations every couple receives.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {item.inclusions.map((line, i) => (
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
                {item.investment}
              </p>
            </div>
            <Button href={slug === "corporate-and-private" ? "/contact/corporate" : "/contact"} variant="gilded" size="lg" withArrow>
              Begin Your Enquiry
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
