// Data backing /event-photography-dubai — a standalone SEO landing page that
// frames our Dubai event-photography offer for clients arriving via search.
// The 9-item coverage list also feeds the corporate sector inclusions; the
// 6 services map 1:1 to the eventType enum in `lib/schemas.ts`.

export const eventCoverageTypes = [
  "Exhibitions, Conferences, and Trade Shows",
  "Commercial and PR Events",
  "Concerts, Festivals, and Live Events",
  "Graduation Parties",
  "Gala Dinners and Award Nights",
  "School and University Events",
  "Corporate Meetings",
  "Weddings",
  "Burj Khalifa Projections",
] as const;

export type EventPhotographyServiceSlug =
  | "exhibition-conference-trade-show"
  | "commercial-pr"
  | "concert-festival-live"
  | "graduation-party"
  | "private-public-party"
  | "gala-award-night";

export type EventPhotographyService = {
  slug: EventPhotographyServiceSlug;
  title: string;
  description: string;
};

export const eventPhotographyServices: readonly EventPhotographyService[] = [
  {
    slug: "exhibition-conference-trade-show",
    title: "Exhibitions, Conference & Trade Show",
    description:
      "Booth-to-keynote coverage at ADNEC, DWTC and the major halls — exhibitor portraits, panel reportage and the quiet handshakes that close the floor.",
  },
  {
    slug: "commercial-pr",
    title: "Commercial & PR Events Photography",
    description:
      "Press-day reveals, launch dinners and brand activations — composed for the title-tier edit and delivered the same night for embargoed release.",
  },
  {
    slug: "concert-festival-live",
    title: "Concerts, Festivals & Live Events Photography",
    description:
      "Front-of-stage, side-of-stage and crowd coverage by photographers who shoot the Coca-Cola Arena and the desert festival circuit alongside our weddings.",
  },
  {
    slug: "graduation-party",
    title: "Graduation Party",
    description:
      "Family-led graduation evenings — formal portraits, candid reception coverage and a printed album within ten days for grandparents who weren't in the room.",
  },
  {
    slug: "private-public-party",
    title: "Private and Public Party Photography",
    description:
      "From residence dinners to brand-hosted public nights — a discreet two-photographer team trained in royal-protocol guest handling.",
  },
  {
    slug: "gala-award-night",
    title: "Gala Dinners and Award Night Photography",
    description:
      "Step-and-repeat, trophy moments, table reportage and a press-cleared edit in your inbox before the after-party closes.",
  },
] as const;
