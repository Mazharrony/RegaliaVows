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
  philosophy: string;
  signatures: readonly { title: string; body: string }[];
  process: readonly { step: string; title: string; body: string }[];
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
    philosophy:
      "Most agencies treat a corporate event as a budget to deploy. We treat it as a narrative to compose. Before a single supplier is briefed, the Regalia Vows team sits with the principal — chairman, CMO, founder, family-office head — and listens for what this evening needs to do for the business or the household. Only once that single thread is found do we open the venue file. The result is an evening that closes with handshakes, not press releases — and a guest list that asks, quietly, who composed it.",
    signatures: [
      {
        title: "Discretion First",
        body: "Most of our corporate commissions are never published. We sign before we brief and we run a private vendor list.",
      },
      {
        title: "Protocol & Press",
        body: "Royal-protocol-trained ushers, a managed press pen and a stage manager who has worked Davos, Cannes and the Élysée.",
      },
      {
        title: "Senior-Led",
        body: "Every commission is owned by a Regalia Vows director from the first call through the post-event report. No account-coordinator handoffs.",
      },
      {
        title: "One Roof",
        body: "Creative, production, talent and F&B sit on one team — so what is promised in the deck is what walks onto the stage.",
      },
    ],
    process: [
      {
        step: "I",
        title: "Introduction",
        body: "A private meeting at the studio or your office. We listen, ask the awkward question, and confirm the brief is one we should accept.",
      },
      {
        step: "II",
        title: "Treatment",
        body: "Within ten working days, a bound document: narrative, scenography references, run-of-show, talent shortlist and a fully-costed budget.",
      },
      {
        step: "III",
        title: "Composition",
        body: "Six to twelve weeks of build — venue, set, AV, talent, F&B, press — managed by one senior producer with weekly principal check-ins.",
      },
      {
        step: "IV",
        title: "Staging",
        body: "Two directors and a tested ground crew on site from rigging through wrap. A written post-event report follows within seven days.",
      },
    ],
    inclusions: [
      "Creative direction & narrative treatment",
      "Venue scouting — ballrooms, ADNEC, DWTC, Dubai Opera, private estates",
      "Production, AV, lighting & scenographic build",
      "Talent, keynote & performer concierge",
      "F&B programme & guest journey choreography",
      "Permits, security, VIP protocol & press handling",
    ],
    investment: "On request",
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
    philosophy:
      "The luxury press has been to a thousand pop-ups. They have been to very few rooms they remember. A Regalia Vows activation begins not with a layout but with a question: what does the object — the bottle, the bag, the watch, the perfume — want to confess about itself? We build the room as a confessional, the lighting as a witness and the guest path as a slow, single sentence. By the time the editor reaches the centrepiece, the story has already been told.",
    signatures: [
      {
        title: "Object-First Scenography",
        body: "Every set sketch begins with the object on the table and the camera angle that will define the campaign image.",
      },
      {
        title: "Scent, Sound, Surface",
        body: "We commission bespoke scent compositions and original scores per activation — never library tracks, never diffused florals.",
      },
      {
        title: "Editorial Capture",
        body: "Photo and film direction handled in-house, with title-tier publishers briefed before the doors open.",
      },
      {
        title: "Cultural Anchors",
        body: "Long-standing relationships with the GCC art, fashion and gastronomy circuit — the guest list arrives, every time.",
      },
    ],
    process: [
      {
        step: "I",
        title: "Brief & Object",
        body: "Studio session with the maison's creative and brand teams. We handle the object, read the campaign and confirm the moment to be made.",
      },
      {
        step: "II",
        title: "Moodfilm",
        body: "A three-minute reference film, a scenography sketch and a guest-journey treatment. Press list, talent list and budget delivered in parallel.",
      },
      {
        step: "III",
        title: "Build",
        body: "Six to ten weeks of fabrication, scenting, sound design, signage and rehearsal. We hold one private walkthrough with the principal before doors.",
      },
      {
        step: "IV",
        title: "Reveal & Wake",
        body: "We run the event, capture it and deliver a press-ready edit and final report within fourteen days of close.",
      },
    ],
    inclusions: [
      "Concept treatment & moodfilm",
      "Set design & scenography",
      "Immersive lighting, scent & sound",
      "Influencer & press concierge",
      "Talent booking & cultural partnerships",
      "Photo, film & social capture direction",
    ],
    investment: "On request",
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
    philosophy:
      "Households who entertain well do not want a theme. They want an evening that feels like an extension of the family — the same hush, the same humour, the same wine that has been on the table for thirty years — composed with the discipline of a wedding. Regalia Vows arrives quietly, learns the household, and stages the night the family would have staged for itself if the family had had three more months and a hundred more hands.",
    signatures: [
      {
        title: "Household Liaison",
        body: "We work with majordomos, principals and family offices — never around them. The household stays in command of its own evening.",
      },
      {
        title: "Cellar & Kitchen",
        body: "Catering and beverage tailored to the family's chef and sommelier; menus signed off in person, not by email.",
      },
      {
        title: "Guest Concierge",
        body: "Multilingual hosts, private transfers, in-residence guest folios — the practical detail that separates a good evening from a great one.",
      },
      {
        title: "Private Archive",
        body: "Cinematography and stills delivered as a bound book — never uploaded, never shared without written consent.",
      },
    ],
    process: [
      {
        step: "I",
        title: "Tea at the Residence",
        body: "An informal visit. We meet the principal, walk the house and listen for the room that already wants to host the evening.",
      },
      {
        step: "II",
        title: "Treatment",
        body: "A short, hand-bound document: design direction, menu, music, talent and a calm budget — delivered within three weeks.",
      },
      {
        step: "III",
        title: "Composition",
        body: "Two to four months of quiet work alongside the household team. One Regalia Vows director, one production lead.",
      },
      {
        step: "IV",
        title: "The Night",
        body: "We arrive at dawn, leave at sunrise. The house wakes the next morning exactly as it was found — minus the music.",
      },
    ],
    inclusions: [
      "Creative direction & guest-list strategy",
      "Florals, fashion, set & table design",
      "Talent — DJs, ensembles, private performers",
      "Catering & beverage curation",
      "Guest concierge & multilingual hosting",
      "Cinematography & private archive",
    ],
    investment: "On request",
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
    philosophy:
      "A hotel opening is a first impression that will be quoted for a decade. Most are squandered on noise — a list of celebrities, a fireworks display, a press release nobody finishes. A Regalia Vows opening is staged the way the hotel intends to operate for the next ten years: the lobby greets, the F&B confesses, the corridors lead. We open the house from the inside out, so the journalist's first sentence is the one the brand spent two years writing.",
    signatures: [
      {
        title: "Brand House Build",
        body: "We translate the brand book into set, scent, light and sound — the same alphabet the housekeeper, the bartender and the GM will use forever.",
      },
      {
        title: "Editorial-Grade Press",
        body: "Title-tier journalist relationships across hospitality, design and travel. We invite few, brief deeply, and let the room do the rest.",
      },
      {
        title: "F&B as Narrative",
        body: "The opening menu is a thesis, written with the executive chef and beverage director — never a buffet, never a sampler.",
      },
      {
        title: "Quiet Continuity",
        body: "Many of our hospitality clients return for the relaunch, the anniversary and the residency programme. The relationship is the product.",
      },
    ],
    process: [
      {
        step: "I",
        title: "Site Visit",
        body: "Walkthrough with the GM, brand director and executive chef while the property is still in commissioning. We taste, we sit, we listen.",
      },
      {
        step: "II",
        title: "Treatment",
        body: "A narrative document and a phased opening plan — friends & family, press preview, soft launch, public reveal — each with its own composition.",
      },
      {
        step: "III",
        title: "Composition",
        body: "Eight to sixteen weeks of build alongside the hotel's marketing and F&B teams. We embed, we don't deliver-and-leave.",
      },
      {
        step: "IV",
        title: "Reveal",
        body: "Each opening night is run by a senior Regalia Vows director. A written report and editorial-grade asset library follows within ten days.",
      },
    ],
    inclusions: [
      "Pre-opening narrative & press strategy",
      "Guest-of-honour curation & seating",
      "F&B reveal choreography & menu collaboration",
      "Brand house build — set, scent, sound",
      "Media, talent & influencer concierge",
      "Editorial photo & film direction",
    ],
    investment: "On request",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=75",
    accent: "from-[#0e1a1a] via-[#3a5a4a] to-[#e8c9c2]",
  },
] as const;

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
