// The four secondary pillars Regalia Vows extends beyond weddings.
// Weddings & Proposals remain the primary niche and live under /services.

export type SectorSlug =
  | "corporate"
  | "brand-experiential"
  | "private-social"
  | "hospitality";

export type Sector = {
  slug: SectorSlug;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  oneLiner: string;
  description: string;
  inclusions: readonly string[];
  investment: string;
  image: string;
  accent: string;
};

export const sectors: readonly Sector[] = [
  {
    slug: "corporate",
    number: "I",
    title: "Corporate Events.",
    shortTitle: "Corporate Events",
    eyebrow: "Sector I",
    oneLiner: "Brand launches, galas, conferences, AGMs and family-office commissions.",
    description:
      "The same composition we bring to a wedding, applied to the moments a brand or a private office wants to remember. Treated with the discretion of a private commission.",
    inclusions: [
      "Creative direction & narrative treatment",
      "Venue scouting — ballrooms, ADNEC, DWTC, Dubai Opera, private estates",
      "Production, AV, lighting & scenographic build",
      "Talent, keynote & performer concierge",
      "F&B programme & guest journey choreography",
      "Permits, security, VIP protocol & press handling",
    ],
    investment: "From AED 400,000 · per-event basis",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=75",
    accent: "from-[#1a1a2a] via-[#3a3a5a] to-[#c9a96a]",
  },
  {
    slug: "brand-experiential",
    number: "II",
    title: "Brand & Experiential.",
    shortTitle: "Brand & Experiential",
    eyebrow: "Sector II",
    oneLiner: "Activations, pop-ups, immersive previews and cultural collaborations.",
    description:
      "For maisons and ateliers staging a moment the press will write about. We build the room, the story and the choreography around the object — never the other way around.",
    inclusions: [
      "Concept treatment & moodfilm",
      "Set design & scenography",
      "Immersive lighting, scent & sound",
      "Influencer & press concierge",
      "Talent booking & cultural partnerships",
      "Photo, film & social capture direction",
    ],
    investment: "From AED 300,000",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=75",
    accent: "from-[#2a1d18] via-[#5c3a2a] to-[#c9a96a]",
  },
  {
    slug: "private-social",
    number: "III",
    title: "Private & Social.",
    shortTitle: "Private & Social",
    eyebrow: "Sector III",
    oneLiner: "Milestone birthdays, anniversaries, baby celebrations and family galas.",
    description:
      "The same hush of a Regalia Vows wedding, scaled to the year's most meaningful private nights. Designed for families and households who entertain often, and never twice the same way.",
    inclusions: [
      "Creative direction & guest-list strategy",
      "Florals, fashion, set & table design",
      "Talent — DJs, ensembles, private performers",
      "Catering & beverage curation",
      "Guest concierge & multilingual hosting",
      "Cinematography & private archive",
    ],
    investment: "From AED 200,000",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=75",
    accent: "from-[#2a1a14] via-[#7a4a2a] to-[#c9a96a]",
  },
  {
    slug: "hospitality",
    number: "IV",
    title: "Hospitality Launches.",
    shortTitle: "Hospitality Launches",
    eyebrow: "Sector IV",
    oneLiner: "Hotel openings, restaurant reveals and resort previews.",
    description:
      "For the houses we know best — staged from the inside. We open hotels, restaurants and residences with the same hand we use to compose a wedding inside them.",
    inclusions: [
      "Pre-opening narrative & press strategy",
      "Guest-of-honour curation & seating",
      "F&B reveal choreography & menu collaboration",
      "Brand house build — set, scent, sound",
      "Media, talent & influencer concierge",
      "Editorial photo & film direction",
    ],
    investment: "From AED 500,000",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=75",
    accent: "from-[#0e1a1a] via-[#3a5a4a] to-[#e8c9c2]",
  },
] as const;

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
