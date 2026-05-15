// Editorial journal entries — written for SEO discoverability around
// luxury wedding planning in Dubai / UAE while keeping the Regalia Vows voice.

export type JournalBlock =
  | { type: "p"; value: string }
  | { type: "h2"; value: string }
  | { type: "h3"; value: string }
  | { type: "ul"; value: readonly string[] }
  | { type: "quote"; value: string };

export type JournalPost = {
  slug: string;
  title: string;
  // SEO meta title override (≤ 60 chars when possible).
  metaTitle?: string;
  // SEO meta description (~150–160 chars).
  description: string;
  // Card excerpt (~25–35 words).
  excerpt: string;
  dateISO: string; // ISO 8601
  readMinutes: number;
  image: string;
  category: "Planning" | "Design" | "Venues" | "Cultural" | "Cinema" | "Studio";
  focusKeyword: string;
  keywords: readonly string[];
  author: string;
  body: readonly JournalBlock[];
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const journal: readonly JournalPost[] = [
  {
    slug: "luxury-wedding-planner-dubai-guide",
    title: "A Quiet Guide to Choosing a Luxury Wedding Planner in Dubai",
    metaTitle: "Luxury Wedding Planner Dubai — How to Choose | Regalia Vows",
    description:
      "How to choose a luxury wedding planner in Dubai. A senior director's notes on credentials, taste, discretion, and the questions that matter most.",
    excerpt:
      "Credentials, taste, and discretion — the three quiet tests every couple should put a Dubai planner through before signing a single page.",
    dateISO: "2025-09-08",
    readMinutes: 7,
    image: img("1519741497674-611481863552"),
    category: "Planning",
    focusKeyword: "luxury wedding planner dubai",
    keywords: [
      "luxury wedding planner dubai",
      "wedding planner dubai",
      "best wedding planner UAE",
      "destination wedding planner dubai",
      "bespoke wedding planner UAE",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "There is no shortage of wedding planners in Dubai. There is, however, a small and quietly defended circle of studios who plan only a handful of weddings each year — and who treat the brief the way a couture house treats a private commission. Couples who find that circle rarely look beyond it. The trouble is, the circle does not advertise.",
      },
      { type: "h2", value: "What 'luxury' actually means" },
      {
        type: "p",
        value:
          "Luxury, in this work, is not budget. It is restraint, time, and senior attention. A luxury wedding planner in Dubai should be able to design without crowding the room, hold a guest list of three hundred without anyone feeling counted, and write a programme that a Michelin sommelier and an Emirati grandmother both read as considered.",
      },
      { type: "h2", value: "The three questions that matter" },
      {
        type: "h3",
        value: "1. Who, exactly, will direct your wedding?",
      },
      {
        type: "p",
        value:
          "Many Dubai agencies pitch with a senior planner and execute with juniors. Ask plainly. Ask the name. Ask how many other weddings that person is directing in your month. A senior-led wedding never has more than one director, and that director is in the room from the first phone call to the last guest's departure.",
      },
      { type: "h3", value: "2. How many weddings do they plan a year?" },
      {
        type: "p",
        value:
          "Volume is the enemy of design. A studio that produces forty weddings a year is a production house. A studio that takes eight to ten is a design house. Both are legitimate; only one is luxury.",
      },
      { type: "h3", value: "3. What do their files look like?" },
      {
        type: "p",
        value:
          "Ask to see a real running order, not a moodboard. The document that runs the day — minute by minute, supplier by supplier — is where taste shows. Beautiful Pinterest boards are the easy part. A clean, calm, intelligible run sheet is the hard one.",
      },
      { type: "h2", value: "Discretion is a deliverable" },
      {
        type: "p",
        value:
          "In Dubai's small luxury market, your wedding is content for somebody. The right planner declines press requests on your behalf without consulting you, signs NDAs with every supplier, and removes guest names from every document. Discretion is not a personality trait — it is a workflow.",
      },
      { type: "h2", value: "The closing test" },
      {
        type: "p",
        value:
          "Sit with the director once. Not on a video call — in their studio, with the files open. If you leave that room calmer than you entered it, the search is over. A wedding takes a year. The year is the thing you are buying.",
      },
    ],
  },
  {
    slug: "wedding-venues-dubai-editors-list",
    title: "Wedding Venues in Dubai: An Editor's Shortlist",
    metaTitle: "Wedding Venues in Dubai — Editor's Shortlist | Regalia Vows",
    description:
      "A senior planner's editorial shortlist of wedding venues in Dubai — beach, resort, desert, palace and yacht — with the quiet trade-offs of each.",
    excerpt:
      "Beach, resort, desert, palace, yacht. A planner's editorial shortlist of Dubai wedding venues, with the quiet trade-offs each one carries.",
    dateISO: "2025-09-22",
    readMinutes: 9,
    image: img("1583939003579-730e3918a45a"),
    category: "Venues",
    focusKeyword: "wedding venues dubai",
    keywords: [
      "wedding venues dubai",
      "luxury wedding venues UAE",
      "beach wedding dubai",
      "desert wedding venue UAE",
      "palace wedding dubai",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "Dubai is generous with venues. It is less generous with venues that hold three hundred guests without echoing, sit on a calm shoreline, and let you build a custom kitchen. The shortlist below is the one our directors keep open in their notebooks. It is not exhaustive — it is editorial.",
      },
      { type: "h2", value: "Beach & resort" },
      { type: "h3", value: "Bulgari Resort, Jumeirah Bay" },
      {
        type: "p",
        value:
          "An adult, Italianate sanctuary. Best for 80 to 160 guests, an intimate ceremony at the pier and a slow dinner inside Il Bar's terrace. Cinematic from a yacht-side arrival.",
      },
      { type: "h3", value: "One&Only Royal Mirage" },
      {
        type: "p",
        value:
          "Old Dubai in the best sense. Heritage architecture, a long beach line and a kitchen that performs at scale. The classic three-day Indian wedding venue.",
      },
      { type: "h2", value: "Resort palaces" },
      { type: "h3", value: "Madinat Jumeirah" },
      {
        type: "p",
        value:
          "The waterway lends itself to abra processions and lantern-lit walks. Strong choice for 250 to 600 guests across multiple events, with the souk as a private reception strip.",
      },
      { type: "h3", value: "Atlantis The Royal" },
      {
        type: "p",
        value:
          "For a sculptural, modern wedding with theatrical food. The ballroom is among the largest in the city — and the rooftop pools turn into a film set after dark.",
      },
      { type: "h2", value: "Desert" },
      { type: "h3", value: "Bab Al Shams Desert Resort" },
      {
        type: "p",
        value:
          "The closest of the desert estates and the easiest for guest logistics. Best at sunset and through dinner; we recommend air-conditioned tenting for any month outside November to March.",
      },
      { type: "h3", value: "Al Maha, A Luxury Collection Desert Resort" },
      {
        type: "p",
        value:
          "Inside the Dubai Desert Conservation Reserve — a private, almost monastic option for under 80 guests. Oryx, falcons and a sky no city light reaches.",
      },
      { type: "h2", value: "Yacht & water" },
      {
        type: "p",
        value:
          "For 40 to 120 guests, a private yacht charter through Dubai Marina or out toward The World gives you a venue that no other wedding can copy that weekend. We typically pair a yacht ceremony with a private island reception.",
      },
      { type: "h2", value: "The quiet caveat" },
      {
        type: "p",
        value:
          "Every venue on this list is excellent. None is perfect for every couple. The right Dubai wedding venue is the one whose architecture, light and service rhythm match the way you actually want to spend your day — not the way the brochure suggests.",
      },
    ],
  },
  {
    slug: "destination-weddings-uae-timeline",
    title: "Destination Weddings in the UAE: A 12-Month Timeline",
    metaTitle: "Destination Wedding UAE — 12-Month Planning Timeline | Regalia Vows",
    description:
      "A senior planner's month-by-month timeline for a destination wedding in the UAE. Twelve months, four phases, and the small decisions that protect a year.",
    excerpt:
      "Twelve months, four phases. The month-by-month timeline our studio uses for destination weddings across Dubai, Abu Dhabi and Ras Al Khaimah.",
    dateISO: "2025-10-04",
    readMinutes: 8,
    image: img("1519225421980-715cb0215aed"),
    category: "Planning",
    focusKeyword: "destination wedding UAE",
    keywords: [
      "destination wedding UAE",
      "destination wedding dubai",
      "destination wedding planner UAE",
      "wedding timeline dubai",
      "12 month wedding plan",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "A destination wedding in the UAE rewards time. Twelve months is not extravagance — it is the minimum honest runway for a multi-day event that involves international guests, government paperwork, and three to five suppliers per category.",
      },
      { type: "h2", value: "Month 12 to 9 · Direction" },
      {
        type: "p",
        value:
          "Choose a director, not a list of vendors. Agree on a written design intent (two pages, not twenty). Lock dates, cities, and the family budget envelope. Begin venue holds — the best Dubai estates take options on Saturdays a year out.",
      },
      { type: "h2", value: "Month 9 to 6 · Composition" },
      {
        type: "ul",
        value: [
          "Confirm primary venue and contracts (ceremony, reception, sangeet/mehndi if applicable).",
          "Commission stationery — save-the-dates dispatched at month 8.",
          "Engage the creative team: cinematographer, photographer, design studio, florist.",
          "Begin guest accommodation negotiations and group rates.",
          "Sketch the food story with the executive chef, not the banquet manager.",
        ],
      },
      { type: "h2", value: "Month 6 to 3 · Detail" },
      {
        type: "ul",
        value: [
          "Tastings, fittings, full creative review of every printed and filmed element.",
          "Production design: lighting plot, sound test, generator redundancy.",
          "Legal — UAE marriage paperwork, courtroom or religious officiant booking.",
          "Travel & visa coordination for international guests.",
        ],
      },
      { type: "h2", value: "Month 3 to 0 · Calm" },
      {
        type: "p",
        value:
          "The final ninety days should be quiet. By month three every decision is made; we are now rehearsing, not deciding. Couples who arrive at month one with open questions arrive at the wedding tired. Our job is to make sure they arrive rested.",
      },
      { type: "h2", value: "The week of" },
      {
        type: "p",
        value:
          "We move into the venue four to six days ahead. The couple sees their wedding for the first time on the rehearsal walk-through, twenty-four hours before doors. Everything that can be wrong is wrong by then — and corrected before the guests land.",
      },
    ],
  },
  {
    slug: "cinematic-proposal-dubai",
    title: "Cinematic Proposals in Dubai: How to Stage a Moment That Lasts",
    metaTitle: "Cinematic Wedding Proposal Dubai — Director's Guide | Regalia Vows",
    description:
      "Cinematic proposals in Dubai, written by a director. How to choose location, restraint, light and sound — and the one thing no proposal should ever have.",
    excerpt:
      "Location, light, sound, restraint. How a senior director stages a Dubai proposal the way a short film is staged — and the one element that ruins every one.",
    dateISO: "2025-10-18",
    readMinutes: 6,
    image: img("1519741497674-611481863552"),
    category: "Cinema",
    focusKeyword: "cinematic proposal dubai",
    keywords: [
      "cinematic proposal dubai",
      "luxury proposal planner UAE",
      "private proposal dubai",
      "marriage proposal dubai",
      "rooftop proposal dubai",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "A proposal in Dubai can be a fifteen-second reel or a four-minute short film. The difference is direction. The first is a moment captured; the second is a moment composed. We work only on the second.",
      },
      { type: "h2", value: "Choose the room, not the view" },
      {
        type: "p",
        value:
          "Couples ask for a view. We ask for a room — a defined space that holds light, sound and intimacy. A rooftop is a room. A private dhow at golden hour is a room. The Burj Khalifa from a public observation deck is not a room.",
      },
      { type: "h2", value: "Light is the first design decision" },
      {
        type: "p",
        value:
          "Dubai's late afternoon, from 35 minutes before sunset to 5 minutes after, is the only window we work in for outdoor proposals. The light is amber, soft and forgiving. After dusk, we move indoors and add candles — never spotlights.",
      },
      { type: "h2", value: "Sound is the second" },
      {
        type: "p",
        value:
          "Live cello, oud, or a single piano carries a proposal in a way a Bluetooth speaker cannot. Two musicians, briefed beforehand, change the entire texture of the moment.",
      },
      { type: "h2", value: "The one element that ruins every proposal" },
      {
        type: "quote",
        value:
          "An audience. Real audiences — strangers, passers-by, a restaurant — break the moment for the partner being proposed to. We design every proposal as if it were a private cinema. Two people on screen, no one in the seats but the camera.",
      },
      { type: "h2", value: "And the film?" },
      {
        type: "p",
        value:
          "Two cinematographers, two lenses, no microphones in shot. Edited as a short — not a highlight reel. Sent to the couple seven days later, scored and colour-graded. Most of our proposals become the opening sequence of the wedding film a year later.",
      },
    ],
  },
  {
    slug: "indian-wedding-planner-dubai",
    title: "Planning an Indian Wedding in Dubai: A Director's Perspective",
    metaTitle: "Indian Wedding Planner Dubai — Director's Notes | Regalia Vows",
    description:
      "Notes from a senior Indian wedding planner in Dubai. How to honour ritual, manage three hundred guests, and keep the wedding luxurious — not loud.",
    excerpt:
      "How a senior director plans an Indian wedding in Dubai — honouring three days of ritual at the volume of a couture house, not a banquet.",
    dateISO: "2025-11-02",
    readMinutes: 9,
    image: img("1530023367847-a683933f4172"),
    category: "Cultural",
    focusKeyword: "indian wedding planner dubai",
    keywords: [
      "indian wedding planner dubai",
      "destination indian wedding UAE",
      "south asian wedding planner dubai",
      "hindu wedding dubai",
      "sikh wedding dubai",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "An Indian wedding in Dubai is a three- to five-day production with the dramatic range of a feature film. The work of the planner is not to amplify it — Indian weddings amplify themselves — but to compose it. Restraint, in this culture, is harder and more luxurious than scale.",
      },
      { type: "h2", value: "Three principles we hold to" },
      { type: "h3", value: "1. Ritual is the script" },
      {
        type: "p",
        value:
          "The pheras, the milni, the saat phere — these are not 'moments to capture'. They are the structure of the day. Every supplier — light, sound, film, food — should know the script before they arrive on site.",
      },
      { type: "h3", value: "2. Family is the first audience" },
      {
        type: "p",
        value:
          "Decisions are not the couple's alone. We sit with both sets of parents inside the first month and write the family preferences into the design brief: dietary, religious, musical, sartorial. The wedding then unfolds in the cultural register everyone expects.",
      },
      { type: "h3", value: "3. The food is the second venue" },
      {
        type: "p",
        value:
          "A three-day Indian wedding feeds 250 to 600 people, six to nine times. We work with executive chefs from the start, design station-by-station menus, and refuse one buffet that tries to do everything. Regional, chef-curated, and seated where it can be.",
      },
      { type: "h2", value: "The events, in our usual order" },
      {
        type: "ul",
        value: [
          "Mehndi — afternoon, garden or pool deck, soft folk music, henna stations.",
          "Sangeet — evening, theatrical, choreographed performances, large dance floor.",
          "Haldi — morning, private, family only, marigold and intimate film.",
          "Wedding day — mandap ceremony, baraat procession, dinner reception.",
          "Reception — separate evening, formal, cocktail hour into seated dinner.",
        ],
      },
      { type: "h2", value: "Why Dubai" },
      {
        type: "p",
        value:
          "Dubai is logistically generous: direct flights from Mumbai, Delhi, London, Toronto and New York; a five-star hotel for every guest; chefs and priests who travel for the right brief. A Dubai Indian wedding is, in our experience, easier than a Goa one and more cinematic than a Mumbai one — provided the planner knows the city's quiet doors.",
      },
    ],
  },
  {
    slug: "arab-wedding-dubai-composed",
    title: "A Composed Arab Wedding in Dubai: Tradition Without Theatre",
    metaTitle: "Arab Wedding Planner Dubai — Composed & Discreet | Regalia Vows",
    description:
      "Designing a composed Arab wedding in Dubai. Where tradition meets modern restraint, and how a senior planner protects intimacy at scale.",
    excerpt:
      "Where tradition meets modern restraint. How our studio designs Arab weddings in Dubai for couples who want intimacy at scale — not spectacle.",
    dateISO: "2025-11-16",
    readMinutes: 7,
    image: img("1492684223066-81342ee5ff30"),
    category: "Cultural",
    focusKeyword: "arab wedding planner dubai",
    keywords: [
      "arab wedding planner dubai",
      "emirati wedding planner UAE",
      "khaleeji wedding dubai",
      "luxury arab wedding UAE",
      "modern arab wedding dubai",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "The modern Arab wedding sits between two traditions: the formal Khaleeji structure of separate male and female celebrations, and the unified, mixed-gender weddings that younger UAE couples increasingly prefer. We design both. We respect both. We never confuse them.",
      },
      { type: "h2", value: "Discretion as design" },
      {
        type: "p",
        value:
          "Privacy is the first design brief. Female-only celebrations require closed venues with controlled photography; the planner who does not understand this will not be invited back. We work with a roster of female-only photographers, female makeup teams, and venues whose service staff can be entirely female on request.",
      },
      { type: "h2", value: "The Zaffa" },
      {
        type: "p",
        value:
          "The bridal procession is the cinematic heart of the evening. We treat it as a short film: musicians cued precisely, lighting raised on the bride alone, doors timed to the second. Done well, the room falls quiet before she enters and stays standing until she has reached the kosha.",
      },
      { type: "h2", value: "Restraint over scale" },
      {
        type: "p",
        value:
          "An Arab wedding can host eight hundred guests with grace if the design holds. Floral installations should be architectural rather than abundant. Lighting should be amber and ivory, not white. The food should arrive in service waves, not a single buffet wall. Each of these decisions, made early, is what separates a composed Arab wedding from a loud one.",
      },
      { type: "h2", value: "Why couples choose us" },
      {
        type: "p",
        value:
          "We have planned Arab weddings in Dubai, Abu Dhabi and Riyadh for couples who insisted on two things: total privacy, and a wedding that did not look like the one before it. Both are deliverables. Both are written into the contract.",
      },
    ],
  },
  {
    slug: "wedding-budget-uae-luxury",
    title: "The Anatomy of a Luxury Wedding Budget in the UAE",
    metaTitle: "Luxury Wedding Budget UAE — Honest Breakdown | Regalia Vows",
    description:
      "What does a luxury wedding cost in the UAE? An honest breakdown by a senior Dubai planner — categories, ratios, and where money is wasted.",
    excerpt:
      "What a luxury wedding actually costs in the UAE — by category, by ratio, and the three places couples consistently overspend.",
    dateISO: "2025-11-30",
    readMinutes: 8,
    image: img("1564501049412-61c2a3083791"),
    category: "Planning",
    focusKeyword: "luxury wedding budget UAE",
    keywords: [
      "luxury wedding budget UAE",
      "wedding cost dubai",
      "wedding budget dubai",
      "destination wedding cost UAE",
      "wedding planner fees dubai",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "We are asked one question more than any other: what does a luxury wedding in the UAE actually cost? The honest answer is a range with three honest tiers. We publish them here, in the spirit of a transparent first conversation.",
      },
      { type: "h2", value: "Three tiers we work within" },
      {
        type: "ul",
        value: [
          "Considered (USD 250k–500k) · Single-day wedding, 80–150 guests, one premium venue, senior creative team.",
          "Composed (USD 500k–1.2M) · Two- to three-day arc, 150–300 guests, multi-venue, custom design, full cinema team.",
          "Couture (USD 1.2M+) · Multi-day, 250–600 guests, custom-built structures, headline talent, international production.",
        ],
      },
      { type: "h2", value: "The honest category ratios" },
      {
        type: "p",
        value:
          "On a composed-tier wedding, the budget typically breaks down as follows. The numbers shift, but the ratios are stable across most projects we direct.",
      },
      {
        type: "ul",
        value: [
          "Venue, food & beverage — 35 to 45%.",
          "Design, floral & production — 20 to 25%.",
          "Cinema, photography & creative — 8 to 12%.",
          "Entertainment & talent — 6 to 10%.",
          "Planning & direction (us) — 10 to 15%.",
          "Hospitality, transport, accommodations — 8 to 12%.",
          "Stationery, gifts, attire styling — 3 to 5%.",
        ],
      },
      { type: "h2", value: "Where couples overspend" },
      {
        type: "p",
        value:
          "Three places, consistently. Floral over-installation that the camera flattens. Sound systems specified for an arena when the room seats two hundred. And entertainment booked for prestige rather than fit. A planner's quiet job is to talk you out of all three before contract day.",
      },
      { type: "h2", value: "What a planner is, on a luxury wedding" },
      {
        type: "p",
        value:
          "Ten to fifteen percent of the budget is not a fee for booking suppliers. It is the cost of a director who reads the entire production, refuses what does not belong, protects the design from drift, and makes the decisions you cannot. A wedding without that role costs the same; it just looks like one.",
      },
    ],
  },
  {
    slug: "desert-wedding-uae",
    title: "Desert Weddings in the UAE: From Maleeha to Liwa",
    metaTitle: "Desert Wedding UAE — Maleeha to Liwa Guide | Regalia Vows",
    description:
      "Desert weddings in the UAE, from Maleeha to Liwa. A senior planner's guide to camps, climate windows, and the design rules of a desert wedding.",
    excerpt:
      "From Maleeha's red dunes to Liwa's empty quarter — a senior planner's guide to where, when, and how to stage a desert wedding in the UAE.",
    dateISO: "2025-12-14",
    readMinutes: 7,
    image: img("1540575467063-178a50c2df87"),
    category: "Venues",
    focusKeyword: "desert wedding UAE",
    keywords: [
      "desert wedding UAE",
      "desert wedding dubai",
      "liwa wedding",
      "maleeha wedding",
      "private desert camp wedding",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "There is no shortage of resorts in the UAE pitching 'desert weddings'. There are very few real ones — meaning a private dune camp, hours from the city, where the only sound after midnight is sand moving.",
      },
      { type: "h2", value: "The three real deserts" },
      { type: "h3", value: "Maleeha (Sharjah)" },
      {
        type: "p",
        value:
          "Red dunes, ninety minutes from Dubai. Best for 40 to 120 guests in a private custom camp. The closest real desert option to the city.",
      },
      { type: "h3", value: "Al Wathba (Abu Dhabi)" },
      {
        type: "p",
        value:
          "Pale, sculptural dunes within ninety minutes of Abu Dhabi. Suits sunset ceremonies and intimate dinners. Fewer wind days than the eastern deserts.",
      },
      { type: "h3", value: "Liwa (Empty Quarter, Abu Dhabi)" },
      {
        type: "p",
        value:
          "The genuine Rub' al Khali experience. Three to four hours from Dubai, and the only option for a truly cinematic, untouched horizon. Reserved for couples willing to fly guests in by chartered coach.",
      },
      { type: "h2", value: "Climate, honestly" },
      {
        type: "p",
        value:
          "November through early March is the only window. Outside that, dust storms, heat, and the impossibility of formal attire make the design fight the climate. We do not plan desert weddings outside this window — not for budget reasons, but because no design survives 42°C.",
      },
      { type: "h2", value: "Design rules of the desert" },
      {
        type: "ul",
        value: [
          "Lighting is everything. Begin amber, end candlelit. White light kills the dune colour.",
          "Floral should sit low and dark — overhead arches look architecturally lost against an open horizon.",
          "Floors must be raised and carpeted. Guests on heels in sand is a design failure.",
          "Music is acoustic until 9pm. The desert rejects amplified sound until full dark.",
        ],
      },
    ],
  },
  {
    slug: "yacht-wedding-dubai",
    title: "Yacht Weddings & Private Charters Along the Arabian Gulf",
    metaTitle: "Yacht Wedding Dubai — Private Charter Guide | Regalia Vows",
    description:
      "Yacht weddings and private charters in Dubai. A senior planner's notes on vessels, routes, guest counts, and what no charter company will tell you.",
    excerpt:
      "Vessels, routes, guest counts, and the quiet trade-offs of a Dubai yacht wedding — written by a planner, not a charter company.",
    dateISO: "2025-12-28",
    readMinutes: 6,
    image: img("1505236858219-8359eb29e329"),
    category: "Venues",
    focusKeyword: "yacht wedding dubai",
    keywords: [
      "yacht wedding dubai",
      "private yacht charter UAE",
      "superyacht wedding dubai",
      "dubai marina wedding",
      "boat wedding UAE",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "A yacht wedding in Dubai sounds romantic on a brief. It is — but only when the brief acknowledges what a yacht actually is. It is a small, moving, weather-dependent venue with a strict guest cap and a kitchen the size of an apartment galley. Read in that light, it is the most cinematic venue in the city.",
      },
      { type: "h2", value: "Vessel sizes we work with" },
      {
        type: "ul",
        value: [
          "60–80 ft — 20 to 40 guests, cocktail format only.",
          "100–130 ft — 40 to 80 guests, light dinner.",
          "150+ ft / superyacht — up to 120 guests, full plated dinner.",
        ],
      },
      { type: "h2", value: "Routes that work" },
      {
        type: "p",
        value:
          "Our preferred route departs Dubai Marina, sails past Palm Jumeirah and Atlantis at sunset, holds position off The World for ceremony, then returns slowly. Total runtime, five to six hours. Anything longer fatigues guests in heels.",
      },
      { type: "h2", value: "What no charter company will tell you" },
      {
        type: "p",
        value:
          "Wind, more than rain, is the variable. A 20-knot day will halve your usable deck space and make hair styling impossible. We hold a land-side backup venue within 20 minutes of the marina on every charter we direct. It has been used exactly twice in five years — and both couples were grateful.",
      },
      { type: "h2", value: "When yacht is the right choice" },
      {
        type: "p",
        value:
          "For 40 to 80 guests, a celebration that needs to feel singular, and a couple who values cinematic specificity over scale. We do not recommend it for over 120 guests, or for any couple whose guest list includes more than a handful of older relatives.",
      },
    ],
  },
  {
    slug: "ras-al-khaimah-wedding",
    title: "Why Couples Are Choosing Ras Al Khaimah for Destination Weddings",
    metaTitle: "Ras Al Khaimah Wedding — Destination Guide | Regalia Vows",
    description:
      "A senior planner's notes on Ras Al Khaimah weddings — beach, mountain and desert in one emirate, an hour from Dubai. The quiet rival to Dubai itself.",
    excerpt:
      "Beach, mountain and desert in one emirate, an hour from Dubai. Why Ras Al Khaimah is the destination our studio's couples increasingly choose.",
    dateISO: "2026-01-12",
    readMinutes: 6,
    image: img("1519225421980-715cb0215aed"),
    category: "Venues",
    focusKeyword: "ras al khaimah wedding",
    keywords: [
      "ras al khaimah wedding",
      "RAK wedding planner",
      "destination wedding ras al khaimah",
      "jebel jais wedding",
      "luxury wedding UAE northern emirates",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "Ras Al Khaimah is the UAE's quietest emirate and, increasingly, the one our destination-wedding couples ask for first. The reason is simple: in 90 minutes from Dubai you reach beach, mountain and desert without crossing back into city light.",
      },
      { type: "h2", value: "Three landscapes, one emirate" },
      { type: "h3", value: "Beach — Al Hamra & Marjan Island" },
      {
        type: "p",
        value:
          "Long, soft sands, calmer water than Dubai, and resort estates that close off entire stretches of beach for private weddings.",
      },
      { type: "h3", value: "Mountain — Jebel Jais" },
      {
        type: "p",
        value:
          "The highest peak in the UAE. Sunset receptions at 1,900 metres with cooler air, panoramic horizons, and a sky that turns indigo before Dubai's.",
      },
      { type: "h3", value: "Desert & oasis" },
      {
        type: "p",
        value:
          "Private inland camps with date palms and mountain backdrops — a different desert from Dubai's, more sheltered, more cinematic at dawn.",
      },
      { type: "h2", value: "Logistics in 2026" },
      {
        type: "p",
        value:
          "Ras Al Khaimah's new luxury inventory has changed the equation. Five-star estates now match Dubai standards while pricing 20 to 35% softer. Guest transfer is a 90-minute coach from DXB. International guests rarely fly direct — we usually route through Dubai.",
      },
      { type: "h2", value: "When to choose RAK over Dubai" },
      {
        type: "p",
        value:
          "When the brief says 'destination'. Dubai is a city wedding with desert nearby. RAK is a true destination — slower, quieter, with three landscape options inside one emirate. For couples who want guests to feel they have actually travelled, the answer is north.",
      },
    ],
  },
  {
    slug: "wedding-cinematography-vs-photography",
    title: "Wedding Cinematography vs. Photography: A Clear-Eyed Guide",
    metaTitle: "Wedding Cinematography vs Photography — Director's Guide | Regalia Vows",
    description:
      "Wedding cinematography or photography? A senior director's clear-eyed guide to budget, briefing, and the one decision that matters most.",
    excerpt:
      "What each discipline really does, what they cost, and the one briefing decision that decides whether you watch your wedding film twice or once.",
    dateISO: "2026-01-26",
    readMinutes: 6,
    image: img("1505236858219-8359eb29e329"),
    category: "Cinema",
    focusKeyword: "wedding cinematography dubai",
    keywords: [
      "wedding cinematography dubai",
      "wedding videographer UAE",
      "wedding photographer dubai",
      "luxury wedding film",
      "cinematic wedding video dubai",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "Couples in Dubai often treat photography and cinematography as a single line item. They are not. They are two distinct disciplines that solve different problems, and a planner who blurs the difference is the reason most wedding films are watched once.",
      },
      { type: "h2", value: "What each one actually does" },
      {
        type: "p",
        value:
          "Photography preserves moments — single, framed, archival images that families pass down. Cinematography composes time — sequences, sound, music, pacing — into a short film that lasts five to twelve minutes and behaves like a piece of cinema.",
      },
      { type: "h2", value: "The honest budgets, in Dubai" },
      {
        type: "ul",
        value: [
          "Senior wedding photographer · USD 8k–22k for a full wedding day.",
          "Senior cinematographer (two-person team) · USD 12k–30k.",
          "Couture-tier cinematography team (4–6 operators, scored film) · USD 35k–80k+.",
        ],
      },
      { type: "h2", value: "The one decision that matters" },
      {
        type: "quote",
        value:
          "Brief them together, or you will get two parallel weddings on film. Our directors run a 90-minute joint briefing — photographer, cinematographer and planner — and write a single shot priority list. Without it, the two teams compete for the same moments and lose the quiet ones.",
      },
      { type: "h2", value: "How to know it's the right team" },
      {
        type: "p",
        value:
          "Ask for a complete film of one wedding, not a highlight reel. A two-minute trailer flatters most teams. A six-minute edit shows whether they can hold a story.",
      },
    ],
  },
  {
    slug: "multi-day-indian-wedding-dubai",
    title: "Designing a Three-Day Indian Wedding in Dubai",
    metaTitle: "Three-Day Indian Wedding Dubai — Design Notes | Regalia Vows",
    description:
      "Designing a three-day Indian wedding in Dubai. How our studio composes mehndi, sangeet and ceremony as three short films inside one programme.",
    excerpt:
      "Three days, three short films. How our studio composes mehndi, sangeet and ceremony as one continuous editorial — without the seams showing.",
    dateISO: "2026-02-09",
    readMinutes: 8,
    image: img("1530023367847-a683933f4172"),
    category: "Cultural",
    focusKeyword: "three day indian wedding dubai",
    keywords: [
      "three day indian wedding dubai",
      "multi day indian wedding UAE",
      "mehndi sangeet ceremony dubai",
      "destination indian wedding dubai",
      "indian wedding design dubai",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "A three-day Indian wedding in Dubai is not three weddings. It is one wedding with three movements. Each movement is a different room, a different palette, a different score — but they share a single editorial intent. When they do not, guests feel the seams.",
      },
      { type: "h2", value: "Day one · Mehndi" },
      {
        type: "p",
        value:
          "Afternoon, garden or pool deck, ivory and citrus. Folk musicians, henna stations, a soft photographer rather than full film. The intent is intimate and tactile — family, not theatre.",
      },
      { type: "h2", value: "Day two · Sangeet" },
      {
        type: "p",
        value:
          "Evening, ballroom or estate lawn, jewel tones, choreographed performances. This is the most theatrical of the three nights. We design it like a Broadway opening — proscenium-style stage, rehearsed entrances, full sound design.",
      },
      { type: "h2", value: "Day three · Ceremony & reception" },
      {
        type: "p",
        value:
          "Morning ceremony with mandap, baraat procession, varmala. The reception in the evening is a separate event — black tie, cocktail hour into seated dinner. Two films, one day; we deliver them as two short pieces and one full cut.",
      },
      { type: "h2", value: "What ties them together" },
      {
        type: "ul",
        value: [
          "One creative director, one cinematographer, one florist across all three.",
          "A single colour ladder that moves from ivory (day one) to jewel (day two) to gold (day three).",
          "A guest hospitality programme that runs underneath — transport, room drops, a chai cart by day, masala bar by night.",
        ],
      },
      { type: "h2", value: "On rest" },
      {
        type: "p",
        value:
          "The most underrated design decision is the gap between events. Five hours of rest between sangeet and ceremony is not generosity — it is the difference between a wedding remembered and a wedding endured. We refuse briefs that schedule otherwise.",
      },
    ],
  },
  {
    slug: "corporate-event-planner-dubai",
    title: "From Brief to Curtain-Up: How Corporate Galas in Dubai Get Made",
    metaTitle: "Corporate Event Planner Dubai — How Galas Get Made | Regalia Vows",
    description:
      "A senior director on producing corporate galas and awards nights in Dubai. The brief, the run sheet, and the small disciplines that make the room calm.",
    excerpt:
      "The brief, the rehearsal, the run sheet. A senior director's anatomy of a Dubai corporate gala — and the four mistakes every brand makes once.",
    dateISO: "2026-02-23",
    readMinutes: 7,
    image: img("1492684223066-81342ee5ff30"),
    category: "Studio",
    focusKeyword: "corporate event planner dubai",
    keywords: [
      "corporate event planner dubai",
      "corporate gala dubai",
      "awards night dubai",
      "brand event UAE",
      "corporate event production dubai",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "A corporate gala is not a wedding with logos. It is a different animal: tighter run time, sharper messaging, and a CEO who needs to leave the stage exactly when the script says they will. Our studio plans both — and the two should never share a process.",
      },
      { type: "h2", value: "The brief that protects the night" },
      {
        type: "p",
        value:
          "Every gala we direct begins with a one-page intent: audience, message, one sentence describing how the room should feel when guests leave. Without it, agencies stack production until the night becomes about itself.",
      },
      { type: "h2", value: "The run sheet is the deliverable" },
      {
        type: "p",
        value:
          "A 14-page minute-by-minute document, distributed to every supplier 96 hours before doors. AV calls, host cues, lighting states, kitchen passes — written, signed, rehearsed. The night runs on this single document.",
      },
      { type: "h2", value: "Four mistakes brands make once" },
      {
        type: "ul",
        value: [
          "Overrunning the keynote — guests stop listening at minute 25.",
          "Buffet food for a 400-seat formal dinner — slows the night by 40 minutes.",
          "Booking talent before the script is locked — talent then shapes the script.",
          "No technical rehearsal — the only honest test of any production.",
        ],
      },
      { type: "h2", value: "Why we plan corporate at all" },
      {
        type: "p",
        value:
          "Corporate galas, hotel openings and brand experiential events are made by the same disciplines that make a wedding: design, time, calm. The fee structure differs; the standard does not.",
      },
    ],
  },
  {
    slug: "hospitality-launch-planner",
    title: "Hospitality Launches in the UAE: The Quiet Theatre of Opening Night",
    metaTitle: "Hotel Opening Event Planner UAE — Hospitality Launches | Regalia Vows",
    description:
      "Planning a hotel or restaurant opening in the UAE. How our studio composes hospitality launches as quiet theatre — guest list, kitchen, press.",
    excerpt:
      "How to compose a hotel or restaurant opening in the UAE as quiet theatre — guest list, kitchen rhythm, press, and the night after the launch.",
    dateISO: "2026-03-09",
    readMinutes: 6,
    image: img("1540575467063-178a50c2df87"),
    category: "Studio",
    focusKeyword: "hospitality launch UAE",
    keywords: [
      "hospitality launch UAE",
      "hotel opening event planner dubai",
      "restaurant launch dubai",
      "brand launch UAE",
      "hospitality event planner UAE",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "A hospitality launch is the first impression a property will ever make. Get it wrong and the city stops listening. Get it right and bookings move six weeks ahead by the next Monday. The difference, in our experience, is restraint.",
      },
      { type: "h2", value: "The guest list is the brief" },
      {
        type: "p",
        value:
          "We help operators build a guest list of 140 to 220 people — never more — across four tiers: ownership and senior team, anchor press, hospitality peers, and tastemakers from outside the industry. Mixing those four well is the architecture of the night.",
      },
      { type: "h2", value: "The kitchen is the script" },
      {
        type: "p",
        value:
          "A launch dinner is the chef's first sentence. We work the menu backwards from the property's signature dish, design six to eight stations or courses, and rehearse the pass for two evenings before doors. The food is the only thing the room will remember at midnight.",
      },
      { type: "h2", value: "Press, handled" },
      {
        type: "p",
        value:
          "We host press separately — earlier, in smaller groups — so the launch night itself is not a press junket. By doors at 7pm on the launch evening, every editor in the room has already seen the property in a calmer hour.",
      },
      { type: "h2", value: "The night after" },
      {
        type: "p",
        value:
          "Hospitality launches that produce a single great night and silence afterward are a missed opportunity. The fortnight after opening is the most important fortnight of the property's first year. We hold soft programming — chef dinners, sundowners, by-invitation tables — for the four weeks following launch.",
      },
    ],
  },
  {
    slug: "one-studio-one-director-philosophy",
    title: "One Studio, One Director: Why Senior-Led Planning Matters",
    metaTitle: "Senior-Led Wedding Planner Dubai — Studio Philosophy | Regalia Vows",
    description:
      "Why senior-led wedding planning matters in Dubai's luxury market. A studio note on small teams, single-signature direction, and the design of calm.",
    excerpt:
      "A studio note. Why a single director from first call to last guest is the quiet luxury of a wedding — and the operating model we refuse to leave.",
    dateISO: "2026-03-23",
    readMinutes: 5,
    image: img("1564501049412-61c2a3083791"),
    category: "Studio",
    focusKeyword: "senior wedding planner dubai",
    keywords: [
      "senior wedding planner dubai",
      "boutique wedding planner UAE",
      "luxury wedding studio dubai",
      "private wedding planner UAE",
      "regalia vows",
    ],
    author: "Regalia Vows Studio",
    body: [
      {
        type: "p",
        value:
          "Most Dubai planning agencies operate on a sales-to-execution split: a senior pitches, a junior delivers. This is efficient and, in our view, the wrong shape for a luxury wedding. The shape we hold to is different.",
      },
      { type: "h2", value: "One director, beginning to end" },
      {
        type: "p",
        value:
          "Your wedding has one director from the first call to the last guest's car. That person attends every supplier meeting, signs every document, stands in every venue walk. The continuity is the deliverable.",
      },
      { type: "h2", value: "A small studio, by choice" },
      {
        type: "p",
        value:
          "We accept ten to twelve weddings a year. Not because we cannot scale — because beyond that, the director's attention is divided, and the design starts to repeat itself. Boutique is an operating model, not a label.",
      },
      { type: "h2", value: "What this looks like in practice" },
      {
        type: "ul",
        value: [
          "One WhatsApp thread, with the director — not a project manager.",
          "Site visits with the director, not their associate.",
          "On the wedding day, the director runs the call, in headset, from doors to last car.",
          "After the wedding, the director writes the closing note — not a templated thank-you.",
        ],
      },
      { type: "h2", value: "Why this matters" },
      {
        type: "p",
        value:
          "A wedding is, more than anything, a year. The luxury is not the floral budget or the venue — it is the calm of knowing one person is holding the entire production in their head. Restore that, and the rest of the wedding takes care of itself.",
      },
    ],
  },
];

export function getPost(slug: string): JournalPost | undefined {
  return journal.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): readonly JournalPost[] {
  const current = getPost(slug);
  if (!current) return journal.slice(0, count);
  return journal.filter((p) => p.slug !== slug && p.category === current.category).slice(0, count);
}
