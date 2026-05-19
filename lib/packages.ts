// Proposal packages — three signature tiers, add-ons, comparison, permits,
// booking process, trust stats and FAQ. Light-theme rendering downstream.

export type Currency = "AED" | "USD";
export type PackageTier = "intimate" | "signature" | "regalia";

export type Package = {
  tier: PackageTier;
  roman: string;
  name: string;
  tagline: string;
  priceFrom: { AED: number; USD: number };
  priceNote: string;
  ctaLabel: string;
  featured?: boolean;
  badge?: string;
  description: string;
  inclusions: readonly string[];
  exclusions: readonly string[];
  permit: { title: string; body: string };
  perfectFor: string;
  timeline: readonly { label: string; value: string }[];
  image: string;
};

export type AddOn = {
  name: string;
  description: string;
  price: { AED: number; USD: number };
  unit: string;
  tag?: string;
};

export type ComparisonRow = {
  label: string;
  intimate: string;
  signature: string;
  regalia: string;
};

export type ComparisonGroup = { category: string; rows: readonly ComparisonRow[] };
export type PermitNote = { title: string; body: string; note: string };
export type ProcessStep = { n: string; title: string; body: string };
export type TrustStat = { value: string; label: string };
export type Faq = { q: string; a: string };

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const packages: readonly Package[] = [
  {
    tier: "intimate",
    roman: "I",
    name: "The Intimate Edit",
    tagline:
      "For those who believe beauty lives in the quiet moments — intimate, heartfelt and entirely yours.",
    priceFrom: { AED: 3500, USD: 953 },
    priceNote: "Prices vary by location and date. No hidden fees.",
    ctaLabel: "Begin My Intimate Proposal",
    description:
      "A composed, intimate proposal — designed around the two of you, with no distractions and no audience.",
    image: img("1519741497674-611481863552"),
    inclusions: [
      "Private venue coordination and access (hotel suite, garden, rooftop)",
      "Curated floral arrangement — white and ivory florals, seasonal blooms",
      "50-candle setup with warm ambient lighting",
      "Rose petal floor arrangement",
      "Professional photographer — 2 hours, hidden positioning",
      "Champagne setup for two (Moët & Chandon or equivalent)",
      "Day-of coordinator on-site throughout",
      "Surprise execution management — full logistics handled",
      "24-hour edited highlight photos (15–20 images)",
      "WhatsApp support 48 hours before proposal day",
      "Full venue clear-up and restoration after",
    ],
    exclusions: [
      "Videography or drone footage",
      "Live musician or entertainment",
      "Custom décor theme design",
      "Restaurant or dinner reservation",
      "Transportation arrangements",
      "Permit fees (charged separately if required)",
    ],
    permit: {
      title: "Permit — usually not required",
      body:
        "Private venues (hotel rooms, gardens, private terraces) typically need only venue manager approval, included in our coordination. Public spaces may require a permit, which we manage.",
    },
    perfectFor:
      "Couples who value intimacy over spectacle. First-time visitors to Dubai who want a magical moment without complexity. Those with a focused budget who refuse to compromise on quality.",
    timeline: [
      { label: "Book in advance", value: "7–10 days" },
      { label: "Setup time", value: "90 minutes" },
      { label: "Experience duration", value: "2–3 hours" },
      { label: "Photos delivered", value: "Within 24 hours" },
    ],
  },
  {
    tier: "signature",
    roman: "II",
    name: "The Signature Vow",
    tagline:
      "The perfect balance of romance, visual grandeur and unforgettable emotion — designed around your story.",
    priceFrom: { AED: 8000, USD: 2178 },
    priceNote: "Prices vary by location and date. No hidden fees.",
    ctaLabel: "Begin My Signature Proposal",
    featured: true,
    badge: "Most Chosen",
    description:
      "Our signature proposal — premium venue, custom design, cinematic film, and a backup plan you will never see.",
    image: img("1583939003579-730e3918a45a"),
    inclusions: [
      "Premium venue selection from our exclusive partner network",
      "Custom décor theme designed around your partner's personality",
      "Full floral installation — custom arrangement, seasonal and premium blooms",
      "100+ candles, lanterns and ambient lighting design",
      "Floral arch or statement décor centrepiece",
      "Professional photographer — 3 hours, hidden plus portrait session",
      "Videographer — 60-second cinematic highlight reel",
      "Champagne and celebration setup (premium selection)",
      "Permit application and management (where required)",
      "Senior coordinator on-site plus backup coordinator on standby",
      "Full gallery (100+ edited images) within 48 hours",
      "Highlight reel delivered within 5 days",
      "Concierge support from booking to post-proposal",
      "Backup location on standby (weather or venue contingency)",
    ],
    exclusions: [
      "Live musician (available as add-on from AED 1,500)",
      "Private dining reservation (available as add-on)",
      "Drone footage (available as add-on from AED 1,200)",
      "Private transportation",
      "Family surprise coordination",
    ],
    permit: {
      title: "Permit — fully managed by us",
      body:
        "All permit applications, authority approvals and venue access agreements are handled entirely by the Regalia Vows team. You do nothing.",
    },
    perfectFor:
      "Couples who want a truly cinematic proposal with professional content they can treasure forever. Those who have dreamed of a specific location type. Anyone who wants the visual impact of luxury without the full bespoke commission.",
    timeline: [
      { label: "Book in advance", value: "14–21 days" },
      { label: "Setup time", value: "2.5–3 hours" },
      { label: "Experience duration", value: "3–4 hours" },
      { label: "Photos delivered", value: "Within 48 hours" },
      { label: "Film delivered", value: "Within 5 days" },
    ],
  },
  {
    tier: "regalia",
    roman: "III",
    name: "The Regalia Experience",
    tagline:
      "When only the extraordinary will do — a fully bespoke, cinematic proposal that will be spoken about for generations.",
    priceFrom: { AED: 18000, USD: 4900 },
    priceNote: "Fully bespoke. Price confirmed after consultation.",
    ctaLabel: "Request Private Consultation",
    description:
      "A fully bespoke commission — exclusive location, master florist, full cinematic film, live musician and a dedicated producer.",
    image: img("1530023367847-a683933f4172"),
    inclusions: [
      "Everything in The Signature Vow, plus —",
      "Exclusive private location access (rooftop, yacht, desert, suite)",
      "Fully bespoke décor concept — designed from scratch, no shared elements",
      "Master florist with premium international blooms (orchids, peonies, garden roses)",
      "Lead cinematographer plus drone footage (where permits allow)",
      "Full cinematic proposal film — 3 to 5 minute edited feature",
      "Live musician — violinist, pianist or acoustic guitarist",
      "Private chef (canapés or full celebration dinner on-site)",
      "Family surprise coordination (fly in surprise guests if desired)",
      "Luxury gifting — customised ring presentation box, keepsake",
      "Private car collection for both partners",
      "Post-proposal celebratory dinner reservation at a 5-star restaurant",
      "All permit applications and authority coordination",
      "Dedicated senior producer assigned exclusively to your event",
      "Two in-person consultation sessions before the event",
      "Unlimited revisions to design concept before confirmation",
      "Full gallery (200+ images) plus cinematic film within 7 days",
    ],
    exclusions: [],
    permit: {
      title: "Permit — white-glove authority management",
      body:
        "We handle every permit, approval and authority relationship — including DTCM, Dubai Municipality and private authority access. Nothing is your responsibility.",
    },
    perfectFor:
      "Those for whom this is a once-in-a-lifetime occasion and budget is secondary to perfection. Ultra-luxury clients. High-profile individuals requiring discretion. Destination couples who have flown to Dubai specifically for this moment.",
    timeline: [
      { label: "Book in advance", value: "3–4 weeks" },
      { label: "Setup time", value: "3–5 hours" },
      { label: "Experience duration", value: "4–8 hours" },
      { label: "Photos delivered", value: "Within 48 hours" },
      { label: "Full film delivered", value: "Within 7 days" },
    ],
  },
];

export const addOns: readonly AddOn[] = [
  { name: "Live Violinist", description: "A professional violinist plays as she arrives and throughout the proposal — from romantic classical to contemporary pieces tailored to your taste.", price: { AED: 1500, USD: 408 }, unit: "/ 90 min" },
  { name: "Drone Videography", description: "Aerial footage of your setup and the Dubai skyline creates a cinematic film no editor could replicate. Subject to location permit approval.", price: { AED: 1200, USD: 327 }, unit: "/ session" },
  { name: "Private Chef", description: "A Michelin-trained private chef prepares a three-course celebration meal on-site — from canapés during the setup reveal to a full dinner after the yes.", price: { AED: 2500, USD: 681 }, unit: "/ couple · menu TBC" },
  { name: "Extra Photography Hours", description: "Extend your photographer's session for longer golden-hour portraits, family arrival shots, or a post-proposal walk through the city.", price: { AED: 600, USD: 164 }, unit: "/ additional hour" },
  { name: "Premium Florals Upgrade", description: "Upgrade to international premium blooms — garden roses, peonies, orchids — or a completely bespoke floral installation by our master florist.", price: { AED: 800, USD: 218 }, unit: "/ upgrade · from" },
  { name: "Drone Light Show", description: "A custom drone light formation spells out her name or a short message in the night sky above Dubai. Requires four weeks notice and a GCAA permit.", price: { AED: 4500, USD: 1225 }, unit: "/ show · from", tag: "New" },
  { name: "Custom Ring Presentation", description: "A bespoke wooden or velvet ring presentation box, laser-engraved with your initials, date and a short message — a keepsake she will keep forever.", price: { AED: 350, USD: 95 }, unit: "/ piece" },
  { name: "Family Surprise Coordination", description: "We coordinate the arrival of family members — parents, siblings, close friends — to witness the proposal or join the celebration immediately after.", price: { AED: 1800, USD: 490 }, unit: "/ coordination" },
  { name: "His & Hers Gifting Set", description: "A curated luxury gift box — personalised fragrance, chocolates, a handwritten calligraphy note, and a keepsake card commemorating the date and location.", price: { AED: 550, USD: 150 }, unit: "/ set" },
  { name: "Private Dining Reservation", description: "A private table at one of Dubai's finest restaurants — Nobu, Zuma, Atmosphere, Ossiano — decorated with florals from your proposal setup, already waiting.", price: { AED: 400, USD: 109 }, unit: "/ reservation + dining" },
  { name: "Engagement Shoot Next Day", description: "A full three-hour golden-hour engagement shoot at a second Dubai location the day after the proposal — while the emotions are still electric.", price: { AED: 2200, USD: 599 }, unit: "/ 3-hr session" },
  { name: "Luxury Transfer", description: "A private luxury vehicle (Range Rover, Mercedes S-Class or equivalent) to collect both partners and transport you to and from the proposal location.", price: { AED: 700, USD: 191 }, unit: "/ return transfer" },
];

export const comparison: readonly ComparisonGroup[] = [
  { category: "Venue & Location", rows: [
    { label: "Private venue coordination", intimate: "yes", signature: "yes", regalia: "yes" },
    { label: "Exclusive partner venue access", intimate: "no", signature: "yes", regalia: "yes" },
    { label: "Truly exclusive private location", intimate: "no", signature: "no", regalia: "yes" },
    { label: "Backup location on standby", intimate: "no", signature: "yes", regalia: "yes" },
  ]},
  { category: "Décor & Design", rows: [
    { label: "Floral arrangement", intimate: "Standard", signature: "Custom theme", regalia: "Bespoke master" },
    { label: "Candle setup", intimate: "50 candles", signature: "100+ candles", regalia: "Unlimited / custom" },
    { label: "Statement arch / centrepiece", intimate: "no", signature: "yes", regalia: "Custom design" },
    { label: "Custom décor concept", intimate: "no", signature: "yes", regalia: "Unlimited revisions" },
  ]},
  { category: "Photography & Film", rows: [
    { label: "Professional photographer", intimate: "2 hrs", signature: "3 hrs", regalia: "Full day" },
    { label: "Edited highlight photos", intimate: "15–20 / 24 hr", signature: "100+ / 48 hr", regalia: "200+ / 48 hr" },
    { label: "Videography", intimate: "no", signature: "60-sec reel / 5 days", regalia: "3–5 min film / 7 days" },
    { label: "Drone footage", intimate: "no", signature: "Add-on AED 1,200", regalia: "Included" },
  ]},
  { category: "Entertainment & Experience", rows: [
    { label: "Live musician", intimate: "no", signature: "Add-on AED 1,500", regalia: "Included" },
    { label: "Private chef", intimate: "no", signature: "Add-on AED 2,500", regalia: "Included" },
    { label: "Family coordination", intimate: "no", signature: "Add-on AED 1,800", regalia: "Included" },
    { label: "Private car transfer", intimate: "no", signature: "Add-on AED 700", regalia: "Included" },
  ]},
  { category: "Permits & Coordination", rows: [
    { label: "Permit management", intimate: "Basic only", signature: "All permits", regalia: "White-glove" },
    { label: "Day-of coordinator", intimate: "1 coordinator", signature: "Senior + backup", regalia: "Dedicated producer" },
    { label: "Consultations", intimate: "Phone / WhatsApp", signature: "Video call included", regalia: "2 in-person sessions" },
    { label: "Advance booking required", intimate: "7–10 days", signature: "14–21 days", regalia: "3–4 weeks min" },
  ]},
];

export const permits: readonly PermitNote[] = [
  { title: "Public Locations", body: "Photography, videography and special setups at public locations in Dubai — beaches, parks, public plazas — require a permit from Dubai Tourism (DTCM) or the relevant authority. Processing time is typically 3 to 7 working days. We submit, follow up and confirm all approvals on your behalf.", note: "Required for: JBR beach, Dubai Frame, public parks, DIFC outdoor areas, Jumeirah public beach." },
  { title: "Private Venues", body: "Hotels, private rooftops, restaurants and private beaches require direct venue manager approval rather than a government permit. This is typically faster — 24 to 48 hours — and sometimes involves a location fee. We hold pre-existing relationships with most of Dubai's top venues.", note: "Venue fees: AED 0 to 2,500 depending on venue and exclusivity. Always disclosed transparently in your quote." },
  { title: "Drone Permits", body: "Drone flying in Dubai requires a permit from the General Civil Aviation Authority (GCAA). This is a separate application from standard photography permits. Processing time: 7 to 14 days. Not all locations permit drone use; we advise on viability before confirming this add-on.", note: "Not available near: airports, military zones, certain residential areas, and within 5 km of restricted airspace." },
  { title: "Desert & Remote Locations", body: "Desert proposals outside Dubai municipality boundaries require coordination with the relevant emirate authority and landowner permission. We hold established relationships in Al Marmoom and the Hajar Mountain foothills. These locations offer the most privacy.", note: "Our commitment: we never book a location without confirmed written permission. Your proposal will never be interrupted." },
];

export const processSteps: readonly ProcessStep[] = [
  { n: "I", title: "Tell Us Her Story", body: "Email or WhatsApp us. We ask eight questions about her personality, your relationship and your vision. Takes ten minutes." },
  { n: "II", title: "We Design Your Moment", body: "Within 24 hours we send a personalised proposal concept — location, décor concept, timing and everything included." },
  { n: "III", title: "Confirm & Secure", body: "You approve the concept, sign the agreement, and pay your 50% deposit. Your date is locked. Permits begin." },
  { n: "IV", title: "We Handle Everything", body: "Permits, vendors, décor, logistics. You receive daily updates. On the day, you only need to show up." },
  { n: "V", title: "The Moment Arrives", body: "She says yes. You celebrate. We handle the rest — and deliver your photos within 48 hours." },
];

export const trustStats: readonly TrustStat[] = [
  { value: "100+", label: "Proposals Designed" },
  { value: "100%", label: "Said Yes" },
  { value: "48 hrs", label: "Photo Delivery" },
  { value: "40+", label: "Nationalities Served" },
  { value: "15+", label: "Exclusive Venues" },
  { value: "5★", label: "Average Rating" },
];

export const faqs: readonly Faq[] = [
  { q: "What happens if the weather is bad on my proposal day?", a: "Every Signature Vow and Regalia Experience booking includes a backup location on standby and a flexible rescheduling option. We monitor the weather from 72 hours before your date and communicate proactively. For outdoor proposals we always have an indoor alternative prepared. You will never be left without a plan." },
  { q: "How do you keep the proposal a surprise without me being deceptive?", a: "This is one of the most common concerns we hear. We provide a complete cover story appropriate to the location — a rooftop dinner reservation, a sunset boat experience, a birthday surprise — that feels natural and keeps the real plan hidden. We also coach you on how to answer her questions naturally in the days beforehand." },
  { q: "What is your deposit and cancellation policy?", a: "We require a 50% deposit to confirm, with the remaining 50% due 7 days before your proposal date. Cancellations more than 21 days before the event: full deposit refunded minus a AED 500 administration fee. Within 21 days: 50% of deposit is non-refundable. Within 7 days: full booking value is non-refundable. Rescheduling is available once at no charge with more than 14 days notice." },
  { q: "Can I customise a package with specific elements not listed?", a: "Absolutely. Every Regalia Vows proposal is built around your specific vision. If you have an idea — a particular flower she loves, a song that means everything to both of you, a message spelled out in candles, a specific restaurant to end the night at — tell us. We will build it into your experience. The packages are starting points, not ceilings." },
  { q: "Do you work with non-English speaking couples?", a: "Yes. We work with couples from across the world and have served clients in Arabic, Hindi, French, Russian and many other languages. We can arrange a coordinator who speaks your preferred language for the day of the proposal, and all planning communication can be conducted in your language of choice." },
  { q: "What if she is not ready, or I need to change the date?", a: "Life happens — we understand completely. With more than 14 days notice you can reschedule your booking once at no additional charge. If the new date requires a different venue or permit process, we will advise of any additional costs before proceeding. Your deposit always moves with you to the new date." },
  { q: "Do I need to buy the ring before contacting you?", a: "No — many clients come to us before the ring is ready. We can build your proposal timeline around your ring collection date. We can also connect you with trusted jewellery partners in Dubai if you are still searching for the perfect ring. You do not need anything in hand to begin planning with us." },
  { q: "Can you help with the engagement party or wedding planning too?", a: "We specialise in proposals, weddings and the full editorial arc between them. For your engagement party, post-proposal dinner or pre-wedding shoot — yes, we handle each of these. For full wedding production, see the Weddings service page." },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US").format(amount);
}
