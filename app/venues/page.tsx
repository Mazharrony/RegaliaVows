import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Venues",
  description:
    "A private list of venues curated by Regalia Vows — across the UAE, the Mediterranean, South Asia and Japan.",
};

type Venue = {
  name: string;
  region: string;
  capacity: string;
  note: string;
};

type VenueGroup = {
  eyebrow: string;
  title: string;
  description: string;
  venues: Venue[];
};

const groups: VenueGroup[] = [
  {
    eyebrow: "UAE · Palaces & Ballrooms",
    title: "Five-star houses we stage at most often.",
    description:
      "Hotel and palace ballrooms across Dubai and Abu Dhabi — chosen for architecture, service standards and the discretion they extend to a private commission.",
    venues: [
      {
        name: "Burj Al Arab Jumeirah",
        region: "Dubai · Umm Suqeim",
        capacity: "10–600",
        note: "Al Falak Ballroom — a two-tier Viennese-opera-inspired room with crystal chandeliers and panoramic Gulf views. 27th-floor boardrooms for intimate dinners.",
      },
      {
        name: "Madinat Jumeirah",
        region: "Dubai · Umm Suqeim",
        capacity: "40–3,000",
        note: "A 40-hectare resort modelled on a traditional souk and fort. Waterways, abra transfers, and Fort Island — an exclusive water-bound outdoor venue with Burj Al Arab as backdrop.",
      },
      {
        name: "Atlantis, The Palm",
        region: "Dubai · Palm Jumeirah",
        capacity: "120–2,500",
        note: "Pillar-free Atlantis Ballroom and the Asateer Tent — a spectacular semi-outdoor beachfront pavilion with direct sand access.",
      },
      {
        name: "Palazzo Versace Dubai",
        region: "Dubai · Jaddaf Waterfront",
        capacity: "60–900",
        note: "Neoclassical palace on the Jaddaf. Pillar-free Gala Ballroom with Versace-fabric furnishings, Italian marble, monumental chandelier and a landscaped patio.",
      },
      {
        name: "Armani Hotel Dubai",
        region: "Dubai · Burj Khalifa",
        capacity: "20–300",
        note: "The only hotel personally designed by Giorgio Armani — clean lines, muted palettes, bespoke furnishings. Rooftop terrace with Fountain and Downtown views.",
      },
      {
        name: "The Ritz-Carlton Dubai DIFC",
        region: "Dubai · DIFC",
        capacity: "20–1,100",
        note: "Prestige financial-district address. Samaya Ballroom anchors galas and corporate dinners; Club Level suite for board commissions.",
      },
      {
        name: "JW Marriott Marquis Dubai",
        region: "Dubai · Business Bay",
        capacity: "40–1,500",
        note: "Twin towers above the Dubai Water Canal. Pillar-free Al Joud and Dubai Ballrooms plus a pool deck for al fresco receptions.",
      },
      {
        name: "Grand Hyatt Dubai",
        region: "Dubai · Umm Hurair",
        capacity: "40–1,400",
        note: "Particularly suited to large multicultural weddings. Shahrayar Ballroom — one of Dubai's highest-capacity rooms — with garden terraces and pool deck alternatives.",
      },
      {
        name: "Hilton Dubai Al Habtoor City",
        region: "Dubai · Sheikh Zayed Road",
        capacity: "60–1,200",
        note: "Home to the 1,000-seat Habtoor Theatre — a permanent performance venue for cinematic launches and award nights.",
      },
      {
        name: "Emirates Palace Mandarin Oriental",
        region: "Abu Dhabi · West Corniche",
        capacity: "40–2,500",
        note: "One of the world's most lavish palace hotels — 1.3 km of private beach, gilded corridors, sea-view terraces and a Grand Ballroom seating 2,500.",
      },
    ],
  },
  {
    eyebrow: "UAE · Unique Spaces",
    title: "Settings beyond the conventional ballroom.",
    description:
      "Outdoor, heritage and architectural venues we use when a commission calls for something the eye does not expect.",
    venues: [
      {
        name: "Fort Island, Madinat Jumeirah",
        region: "Dubai · Umm Suqeim",
        capacity: "60–500",
        note: "An island within Madinat Jumeirah's waterways, reached by private abra. Surrounded by water with the Burj Al Arab on the horizon.",
      },
      {
        name: "The Asateer Tent",
        region: "Dubai · Palm Jumeirah",
        capacity: "200–2,500",
        note: "Beachfront semi-permanent tent at Atlantis. Unobstructed sea views, Arabian-themed décor, and direct beach access for ceremony arrivals.",
      },
      {
        name: "Dubai Opera",
        region: "Dubai · Downtown",
        capacity: "80–2,000",
        note: "Performing-arts landmark shaped as an Arabian dhow. Auditorium converts between concert, theatre and flat-floor banquet. Sky Garden rooftop with Burj Khalifa views.",
      },
      {
        name: "Dubai Polo & Equestrian Club",
        region: "Dubai · Al Qudra",
        capacity: "80–1,500",
        note: "Polo grounds, garden lawns and indoor club facilities — a destination feel without leaving the city. Favoured for two-day arcs.",
      },
      {
        name: "Museum of the Future",
        region: "Dubai · Trade Centre",
        capacity: "40–500",
        note: "The Arabic-calligraphy torus on Sheikh Zayed Road. Select interior spaces released for prestigious functions — sculptural geometry and cinematic interiors.",
      },
      {
        name: "Al Fahidi Historical Neighbourhood",
        region: "Dubai · Creek",
        capacity: "40–300",
        note: "Wind-tower architecture, coral-and-gypsum buildings and Arabian souks along the creek — for cultural ceremonies and heritage receptions.",
      },
      {
        name: "Al Seef Heritage District",
        region: "Dubai · Creek",
        capacity: "40–400",
        note: "Restored creek houses, traditional promenades and abra water taxis — daytime cultural richness, ambient evening lighting.",
      },
      {
        name: "Dubai Desert Conservation Reserve",
        region: "Dubai · Desert",
        capacity: "12–200",
        note: "Sweeping dunes and complete isolation under a golden sky. Permitted private staging — best between October and March.",
      },
      {
        name: "Hatta Mountains & Dam",
        region: "Dubai · Hatta",
        capacity: "40–200",
        note: "Ninety minutes from the city — dramatic rocky terrain, turquoise dam water and traditional mountain-village architecture.",
      },
    ],
  },
  {
    eyebrow: "UAE · Beyond Dubai",
    title: "Northern Emirates & natural backdrops.",
    description:
      "Nature-led venues we recommend for couples seeking quietude, mountain air or a beach without a skyline.",
    venues: [
      {
        name: "Waldorf Astoria Ras Al Khaimah",
        region: "Ras Al Khaimah · Coast",
        capacity: "80–1,200",
        note: "Beachfront luxury with a Hajar mountain backdrop. Multiple ballrooms and gardens — a more secluded alternative to Dubai's coast.",
      },
      {
        name: "InterContinental RAK Resort",
        region: "Ras Al Khaimah · Coast",
        capacity: "60–800",
        note: "Private beach resort with multiple ballrooms and outdoor lawns — well suited to multi-day celebrations.",
      },
      {
        name: "Jebel Jais",
        region: "Ras Al Khaimah · Mountains",
        capacity: "20–300",
        note: "The UAE's highest peak. Cool mountain air, aerial venue options and panoramic terraces for daylight ceremonies.",
      },
      {
        name: "Fujairah Fort & Heritage Quarter",
        region: "Fujairah · East Coast",
        capacity: "60–500",
        note: "Historic fort and surrounding heritage grounds — outdoor staging on the Gulf of Oman.",
      },
    ],
  },
  {
    eyebrow: "International",
    title: "Properties we keep returning to.",
    description:
      "Houses, palaces and resorts beyond the Emirates that we travel with the couple to — the rest of the book opens in the second conversation.",
    venues: [
      {
        name: "Villa Sola Cabiati",
        region: "Italy · Lake Como",
        capacity: "40–180",
        note: "A private 18th-century villa with frescoed salons, lakefront gardens and a single-couple residency model.",
      },
      {
        name: "La Mamounia",
        region: "Morocco · Marrakech",
        capacity: "60–400",
        note: "Legendary Moorish palace-hotel — courtyards, riad gardens and a century of grand-event craft.",
      },
      {
        name: "Taj Lake Palace",
        region: "India · Udaipur",
        capacity: "80–350",
        note: "A floating marble palace on Lake Pichola, reached only by private launch. Multi-day Indian-wedding choreography at its most cinematic.",
      },
      {
        name: "Aman Kyoto",
        region: "Japan · Kyoto",
        capacity: "20–80",
        note: "A secret garden in north Kyoto — moss, maple and minka pavilions for the most intimate ceremonies.",
      },
      {
        name: "Six Senses Zighy Bay",
        region: "Oman · Musandam",
        capacity: "40–160",
        note: "A bay rimmed by Hajar mountains, accessed by paraglide, speedboat or mountain road. Privacy as architecture.",
      },
    ],
  },
];

export default function VenuesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Venues"
        title="A private little black book."
        description="Properties we have staged at — and the ones we keep returning to. Capacities and signature notes appear below; full dossiers are shared in the second conversation."
      />

      <Section theme="pearl">
        <Container>
          <div className="space-y-24 md:space-y-32">
            {groups.map((g, gi) => (
              <div key={g.title}>
                <Reveal>
                  <Eyebrow className="!text-gilded-800">{g.eyebrow}</Eyebrow>
                  <h2 className="display mt-6 max-w-3xl text-3xl italic leading-[1.1] text-ink md:text-5xl">
                    {g.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75">
                    {g.description}
                  </p>
                </Reveal>

                <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
                  {g.venues.map((v, i) => (
                    <Reveal key={v.name} delay={Math.min(i * 0.04, 0.32)} as="li">
                      <div className="grid grid-cols-1 items-start gap-3 py-8 md:grid-cols-[1.1fr_1.4fr_auto] md:gap-12 md:py-10">
                        <h3 className="font-display text-3xl italic leading-[1.05] text-ink md:text-4xl">
                          {v.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink/75 md:text-base">
                          <span className="block text-eyebrow uppercase tracking-widest2 text-ink/60 md:hidden">
                            {v.region}
                          </span>
                          <span className="mb-2 hidden text-eyebrow uppercase tracking-widest2 text-ink/60 md:block">
                            {v.region}
                          </span>
                          {v.note}
                        </p>
                        <span className="text-sm uppercase tracking-widest2 text-gilded-600 md:self-center md:whitespace-nowrap">
                          {v.capacity} guests
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </ul>

                {gi < groups.length - 1 && (
                  <div className="hairline mt-16 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />
                )}
              </div>
            ))}
          </div>

          <p className="mt-24 max-w-2xl text-sm leading-relaxed text-ink/60">
            Capacities are indicative ranges drawn from publicly available
            information and our own production notes. Every venue is reviewed
            in detail — access, acoustics, light, kitchen — before it appears
            on a couple&apos;s shortlist. The same book is opened for
            <a href="/services/corporate-and-private" className="text-gilded-600 hover:text-gilded-800"> corporate &amp; private commissions</a>.
          </p>
        </Container>
      </Section>
    </>
  );
}
