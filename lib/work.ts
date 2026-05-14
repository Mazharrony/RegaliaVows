// Work archive. Weddings remain the bulk; secondary pillars seeded with
// representative entries so the case-studies index has visual proof across
// every sector. Items keep their wedding-portfolio shape (couple/place) plus
// a `sector` tag and a more flexible `title` for non-wedding entries.

export type WorkSector =
  | "weddings"
  | "corporate"
  | "brand-experiential"
  | "private-social"
  | "hospitality";

export type WorkItem = {
  slug: string;
  sector: WorkSector;
  // Headline (couple name for weddings, project/brand name for others).
  title: string;
  place: string;
  year: number;
  palette: string;
  // Sub-label: "Modern Emirati", "Brand Launch", "Hotel Opening"…
  style: string;
  image: string;
};

export const work: readonly WorkItem[] = [
  // ── Weddings ────────────────────────────────────────────────────────
  {
    slug: "amira-rashid-bvlgari-resort",
    sector: "weddings",
    title: "Amira & Rashid",
    place: "Bvlgari Resort · Dubai",
    year: 2025,
    palette: "from-[#2a1d18] via-[#5c3a2a] to-[#c9a96a]",
    style: "Modern Emirati",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "yara-kareem-al-maha-desert",
    sector: "weddings",
    title: "Yara & Kareem",
    place: "Al Maha Desert · Dubai",
    year: 2025,
    palette: "from-[#1a1612] via-[#6e4a2b] to-[#e9d7b2]",
    style: "Indo-Arabic Fusion",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "noor-alex-lake-como",
    sector: "weddings",
    title: "Noor & Alex",
    place: "Villa Sola Cabiati · Lake Como",
    year: 2024,
    palette: "from-[#0e1a1a] via-[#3a5a4a] to-[#e8c9c2]",
    style: "Italian Romantic",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "leila-omar-jumeirah-al-naseem",
    sector: "weddings",
    title: "Leila & Omar",
    place: "Jumeirah Al Naseem · Dubai",
    year: 2024,
    palette: "from-[#1a1a2a] via-[#3a3a5a] to-[#c9a96a]",
    style: "Black-tie Coastal",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "anya-vikram-udaipur",
    sector: "weddings",
    title: "Anya & Vikram",
    place: "Taj Lake Palace · Udaipur",
    year: 2024,
    palette: "from-[#2a1a1a] via-[#7a3a4a] to-[#e8c9c2]",
    style: "South-Asian Heritage",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "sara-faisal-marrakech",
    sector: "weddings",
    title: "Sara & Faisal",
    place: "La Mamounia · Marrakech",
    year: 2023,
    palette: "from-[#2a1a14] via-[#7a4a2a] to-[#c9a96a]",
    style: "Moorish Garden",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1400&q=75",
  },

  // ── Corporate ───────────────────────────────────────────────────────
  {
    slug: "maison-aurum-flagship-reveal",
    sector: "corporate",
    title: "Maison Aurum",
    place: "Museum of the Future · Dubai",
    year: 2025,
    palette: "from-[#1a1a2a] via-[#3a3a5a] to-[#c9a96a]",
    style: "Brand Reveal · 600 guests",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "atlas-capital-annual-gala",
    sector: "corporate",
    title: "Atlas Capital",
    place: "Ritz-Carlton DIFC · Dubai",
    year: 2024,
    palette: "from-[#0e1a1a] via-[#2a3a4a] to-[#c9a96a]",
    style: "Annual Gala · 420 guests",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=75",
  },

  // ── Brand & Experiential ────────────────────────────────────────────
  {
    slug: "atelier-noire-pop-up",
    sector: "brand-experiential",
    title: "Atelier Noire",
    place: "Alserkal Avenue · Dubai",
    year: 2025,
    palette: "from-[#2a1d18] via-[#5c3a2a] to-[#c9a96a]",
    style: "Immersive Pop-up",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=75",
  },

  // ── Private & Social ────────────────────────────────────────────────
  {
    slug: "private-fortieth-emirates-palace",
    sector: "private-social",
    title: "A Fortieth at the Palace",
    place: "Emirates Palace · Abu Dhabi",
    year: 2024,
    palette: "from-[#2a1a14] via-[#7a4a2a] to-[#c9a96a]",
    style: "Milestone Birthday · 180 guests",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1400&q=75",
  },

  // ── Hospitality Launches ────────────────────────────────────────────
  {
    slug: "siro-residence-opening",
    sector: "hospitality",
    title: "Siro Residence",
    place: "One Za'abeel · Dubai",
    year: 2025,
    palette: "from-[#0e1a1a] via-[#3a5a4a] to-[#e8c9c2]",
    style: "Hotel Opening",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=75",
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
