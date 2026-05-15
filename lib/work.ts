// Work archive. Six placeholder commissions across the UAE, written in the
// discreet voice the studio uses publicly: initials-only for private couples,
// house names for corporate / brand / hospitality work. Each entry carries
// its own hero image, gallery, brief quote, narrative arc, chaptered story
// and a row of factual notes — so each /case-studies/[slug] page reads as
// its own composition. Swap individual fields as real commissions are
// cleared for publication.

export type WorkSector =
  | "weddings"
  | "corporate"
  | "brand-experiential"
  | "private-social"
  | "hospitality";

export type WorkChapter = { title: string; body: string };
export type WorkFact = { label: string; value: string };

export type WorkItem = {
  slug: string;
  sector: WorkSector;
  // Headline. Couple initials for weddings, project / house name otherwise.
  title: string;
  // Venue or neighbourhood + emirate. Neighbourhoods over hotel brand names.
  place: string;
  year: number;
  // Tailwind gradient utility (`from-… via-… to-…`) used as a soft overlay.
  palette: string;
  // Sub-label: "Modern Emirati", "Brand Launch", "Hotel Opening"…
  style: string;
  // Hero / card image.
  image: string;
  // 4 images shown in the slug page mosaic. First two get the wider slots.
  gallery: readonly string[];
  // The couple / client / partner sentence we returned to throughout.
  brief: string;
  // The studio's one-paragraph description of how the day was composed.
  arc: string;
  // 2–3 chapters describing the arc in motion.
  chapters: readonly WorkChapter[];
  // The factual notes line (place, guests, duration, team, etc.).
  facts: readonly WorkFact[];
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const work: readonly WorkItem[] = [
  {
    slug: "a-and-m-palm-jumeirah",
    sector: "weddings",
    title: "A & M",
    place: "Palm Jumeirah · Dubai",
    year: 2025,
    palette: "from-[#1a1612] via-[#3a2a1a] to-[#c9a96a]",
    style: "Modern Emirati · Three-day arc",
    image: img("1519741497674-611481863552"),
    gallery: [
      img("1519741497674-611481863552"),
      img("1583939003579-730e3918a45a", 1200),
      img("1591604466107-ec97de577aff", 1200),
      img("1604017011826-d3b4c23f8914"),
    ],
    brief:
      "Two families, three languages, one sentence we wanted every guest to leave with — we have never felt this held.",
    arc:
      "A three-day arc on the Palm: a private welcome dinner on the second night, a sunset ceremony in a flower-walled courtyard, and a twelve-course reception scored by a live ensemble of oud, strings and a soft jazz trio.",
    chapters: [
      {
        title: "Night One — Welcome",
        body:
          "An open-air majlis on the Palm crescent. Long tables in champagne linen, votives down the centre, a slow procession of mezze and grilled seafood. The night closed with a single Emirati poet reading verses gifted by both families.",
      },
      {
        title: "Night Two — Ceremony",
        body:
          "A flower-walled courtyard staged inside the resort's private garden — three thousand cream peonies, magnolia and Italian ruscus. The bride entered to a string sextet; the vows were read in three languages; the recessional moved guests into a champagne tower under string lights.",
      },
      {
        title: "Night Three — Reception",
        body:
          "Twelve courses across four hours, a live oud + strings ensemble for dinner, a jazz trio for the seated portion, and a closing set held until 4am. We managed transport for one hundred and twenty out-of-town guests across four hotels.",
      },
    ],
    facts: [
      { label: "Sector", value: "Weddings" },
      { label: "Guests", value: "240" },
      { label: "Duration", value: "Three days" },
      { label: "Place", value: "Palm Jumeirah · Dubai" },
      { label: "Year", value: "2025" },
    ],
  },
  {
    slug: "l-and-h-jumeirah-bay",
    sector: "weddings",
    title: "L & H",
    place: "Jumeirah Bay · Dubai",
    year: 2024,
    palette: "from-[#1b1f1a] via-[#2e3b2a] to-[#cfd6b0]",
    style: "Coastal Ceremony · 180 guests",
    image: img("1511795409834-ef04bbd61622"),
    gallery: [
      img("1511795409834-ef04bbd61622"),
      img("1465495976277-4387d4b0e4a6", 1200),
      img("1502635385003-ee1e6a1a742d", 1200),
      img("1519225421980-715cb0215aed"),
    ],
    brief:
      "We wanted the sea to be a third guest — close enough to hear, far enough to whisper.",
    arc:
      "A coastal ceremony on a private stretch of Jumeirah Bay. Linen and oyster tones, the ceremony staged so the horizon line sat exactly behind the couple at golden hour; a long-table dinner under olive trees, a single string quartet for the recessional.",
    chapters: [
      {
        title: "The Ceremony",
        body:
          "An aisle of crushed shell flanked by potted olive trees. The ceremony arch was a single asymmetric sweep of pampas, hydrangea and white wisteria. Vows were timed to the last twelve minutes before sunset; recessional confetti was pressed white rose petals only.",
      },
      {
        title: "The Dinner",
        body:
          "A single 36-metre table under a canopy of fig and olive. Twelve courses, Mediterranean-led with a quiet Levantine accent. Service paced so the entrée arrived as the sky turned violet — a moment we had rehearsed three times in the week before.",
      },
    ],
    facts: [
      { label: "Sector", value: "Weddings" },
      { label: "Guests", value: "180" },
      { label: "Duration", value: "One evening" },
      { label: "Place", value: "Jumeirah Bay · Dubai" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    slug: "maison-aureol-atelier-reveal",
    sector: "brand-experiential",
    title: "Maison Auréol",
    place: "DIFC · Dubai",
    year: 2025,
    palette: "from-[#120f1a] via-[#2a1f3a] to-[#d6b8c9]",
    style: "Atelier Reveal · Two evenings",
    image: img("1464366400600-7168b8af9bc3"),
    gallery: [
      img("1464366400600-7168b8af9bc3"),
      img("1492684223066-81342ee5ff30", 1200),
      img("1505236858219-8359eb29e329", 1200),
      img("1517248135467-4c7edcad34c4"),
    ],
    brief:
      "Bring an editorial story into a physical room for forty-eight hours — and let the press write themselves.",
    arc:
      "A two-night atelier reveal staged inside a DIFC gallery shell. A single scenographic walk: five chapters, five rooms, scored and scented end-to-end. Press, regional clients and partners moved through the house on the first night; private collectors on the second.",
    chapters: [
      {
        title: "Night One — Press & Partners",
        body:
          "A choreographed walk for ninety editors and partners. Each room held one object, one light, one scent. A short address from the founder closed the route; a quiet aperitivo extended the evening for another two hours.",
      },
      {
        title: "Night Two — Collectors",
        body:
          "A seated dinner for forty in the final room, the installation deliberately undimmed behind the table. Service was paced so the second course landed under the room's only programmed lighting cue — a slow ten-second fade we built with the lighting designer.",
      },
    ],
    facts: [
      { label: "Sector", value: "Brand · Experiential" },
      { label: "Guests", value: "130 across two nights" },
      { label: "Duration", value: "Two evenings" },
      { label: "Place", value: "DIFC · Dubai" },
      { label: "Year", value: "2025" },
    ],
  },
  {
    slug: "sovereign-partners-annual-salon",
    sector: "corporate",
    title: "Sovereign Partners",
    place: "Saadiyat Island · Abu Dhabi",
    year: 2024,
    palette: "from-[#0f1418] via-[#1f2a30] to-[#a6b8c6]",
    style: "Annual Salon · Seated dinner",
    image: img("1525772764200-be829a350797"),
    gallery: [
      img("1525772764200-be829a350797"),
      img("1519225421980-715cb0215aed", 1200),
      img("1517248135467-4c7edcad34c4", 1200),
      img("1464366400600-7168b8af9bc3"),
    ],
    brief:
      "Reveal the year to a room of clients, partners and press — and have every one of them remember a single image when they leave.",
    arc:
      "An annual salon for a sovereign-led investment house, staged on Saadiyat Island. A slow architectural reveal, a curated walk, a seated dinner choreographed to the second. Press were briefed inside a separate suite ninety minutes before doors.",
    chapters: [
      {
        title: "The Reveal",
        body:
          "Guests arrived through a single backlit corridor, the year's headline numbers projected in slow rotation onto a sand-cast concrete wall. The principal's address was eight minutes, paced against three lighting cues.",
      },
      {
        title: "The Dinner",
        body:
          "Two hundred at four long tables, a single resident pianist for the seated portion, no microphone. Closing remarks were held to the dessert course; the room cleared in under twenty minutes by design.",
      },
    ],
    facts: [
      { label: "Sector", value: "Corporate" },
      { label: "Guests", value: "200" },
      { label: "Duration", value: "One evening" },
      { label: "Place", value: "Saadiyat Island · Abu Dhabi" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    slug: "a-silver-jubilee-al-wadi",
    sector: "private-social",
    title: "A Silver Jubilee",
    place: "Al Wadi Desert · Ras Al Khaimah",
    year: 2024,
    palette: "from-[#161210] via-[#3a261c] to-[#e8c9c2]",
    style: "Milestone Dinner · 60 guests",
    image: img("1469371670807-013ccf25f16a"),
    gallery: [
      img("1469371670807-013ccf25f16a"),
      img("1469854523086-cc02fe5d8800", 1200),
      img("1547381244-9ef13dde64bf", 1200),
      img("1518684079-3c830dcef090"),
    ],
    brief:
      "A milestone the host had been quietly imagining for a decade — held by people who already knew how the family hosts.",
    arc:
      "A twenty-fifth anniversary dinner staged in the Al Wadi reserve. Cocktails at a private oryx outlook, a seated dinner for sixty under a Bedouin-inspired open-sided canopy, and a single string-and-oud duet that played through dessert.",
    chapters: [
      {
        title: "Sundown",
        body:
          "Guests were driven into the reserve at golden hour; cocktails were served on a sandstone outcrop chosen for the line of the dunes behind it. A single falconer closed the cocktail hour with a five-minute demonstration agreed with the reserve weeks in advance.",
      },
      {
        title: "Dinner under canvas",
        body:
          "Sixty guests at a single curved table beneath a hand-stitched canopy. The menu folded the family's history into seven courses; speeches were limited to two, both under three minutes. The night closed with a small fire pit and a string-and-oud duet.",
      },
    ],
    facts: [
      { label: "Sector", value: "Private · Social" },
      { label: "Guests", value: "60" },
      { label: "Duration", value: "One evening" },
      { label: "Place", value: "Al Wadi Desert · Ras Al Khaimah" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    slug: "maison-solenne-opening-night",
    sector: "hospitality",
    title: "Maison Solenne",
    place: "Bluewaters Island · Dubai",
    year: 2025,
    palette: "from-[#0e1614] via-[#1f3330] to-[#cfd6c8]",
    style: "Opening Night · Three rooms",
    image: img("1520854221256-17451cc331bf"),
    gallery: [
      img("1520854221256-17451cc331bf"),
      img("1582719508461-905c673771fd", 1200),
      img("1564501049412-61c2a3083791", 1200),
      img("1551918120-9739cb430c6d"),
    ],
    brief:
      "Open the house the way it wants to be remembered — by the guests, by the press, and by the team who built it.",
    arc:
      "Opening night for a small private hotel on Bluewaters Island. Three rooms, three audiences, one continuous evening. A media morning, a partners' aperitivo, and a guest-of-honour dinner staged inside the property's most photographed suite.",
    chapters: [
      {
        title: "Media Morning",
        body:
          "A tight forty-person press call across the property's three signature spaces. Each journalist left with a hand-bound itinerary of the house's commissioning credits — the architects, the artisans, the lighting designer.",
      },
      {
        title: "Partners' Aperitivo",
        body:
          "An early-evening pour for investors, neighbours and trade. A single sommelier-led tasting flight ran through the room; the founder's address was held to four minutes.",
      },
      {
        title: "The Dinner",
        body:
          "A seated dinner for fifty inside the penthouse suite, staged so the city skyline sat in frame behind the principal seat. A four-course menu by the house's incoming executive chef opened the kitchen for the first time.",
      },
    ],
    facts: [
      { label: "Sector", value: "Hospitality" },
      { label: "Guests", value: "180 across the evening" },
      { label: "Duration", value: "One evening, three rooms" },
      { label: "Place", value: "Bluewaters Island · Dubai" },
      { label: "Year", value: "2025" },
    ],
  },
] as const;

export const sectorFilters: { value: WorkSector | "all"; label: string }[] = [
  { value: "weddings", label: "Weddings" },
  { value: "corporate", label: "Corporate" },
  { value: "brand-experiential", label: "Brand" },
  { value: "private-social", label: "Private" },
  { value: "hospitality", label: "Hospitality" },
  { value: "all", label: "All" },
];

export function getWorkItem(slug: string): WorkItem | undefined {
  return work.find((w) => w.slug === slug);
}
