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

// ─────────────────────────────────────────────────────────────────────────
// Russian localisation. Numeric data, identifiers and imagery are shared
// with the English exports above; only the human-readable copy diverges.
// TODO(ru): review — drafted Russian copy pending principal sign-off.
// ─────────────────────────────────────────────────────────────────────────

import type { Locale } from "@/lib/i18n/config";

const packagesRu: readonly Package[] = [
  {
    tier: "intimate",
    roman: "I",
    name: "Камерная редакция",
    tagline:
      "Для тех, кто верит, что красота живёт в тихих мгновениях — камерно, искренне и только для вас.",
    priceFrom: { AED: 3500, USD: 953 },
    priceNote: "Стоимость зависит от площадки и даты. Без скрытых платежей.",
    ctaLabel: "Заказать камерное предложение",
    description:
      "Сдержанное камерное предложение — придуманное вокруг двоих, без посторонних и без зрителей.",
    image: img("1519741497674-611481863552"),
    inclusions: [
      "Координация и доступ к приватной площадке (номер отеля, сад, крыша)",
      "Авторская флористика — белые и айвори-композиции, сезонные цветы",
      "Сетап из 50 свечей с тёплым ambient-светом",
      "Дорожка из лепестков роз",
      "Профессиональный фотограф — 2 часа, скрытая позиция",
      "Сетап с шампанским на двоих (Moët & Chandon или аналог)",
      "Координатор на площадке в течение всего вечера",
      "Управление сюрпризом — вся логистика на нас",
      "Подборка обработанных фотографий за 24 часа (15–20 кадров)",
      "Поддержка в WhatsApp за 48 часов до дня предложения",
      "Полная разборка и восстановление площадки после",
    ],
    exclusions: [
      "Видеосъёмка и кадры с дрона",
      "Музыкант вживую и развлекательная программа",
      "Индивидуальный декор-концепт",
      "Бронь ресторана или ужин",
      "Организация трансфера",
      "Сборы за разрешения (оплачиваются отдельно при необходимости)",
    ],
    permit: {
      title: "Разрешение — как правило, не требуется",
      body:
        "Приватные площадки (номера отелей, сады, частные террасы) обычно требуют только согласования с менеджером площадки — оно входит в нашу координацию. Для публичных пространств может понадобиться разрешение, и мы возьмём его оформление на себя.",
    },
    perfectFor:
      "Парам, для которых камерность важнее размаха. Тем, кто впервые в Дубае и хочет волшебный момент без сложностей. Тем, кто работает с чётким бюджетом, но не готов жертвовать качеством.",
    timeline: [
      { label: "Бронирование заранее", value: "7–10 дней" },
      { label: "Время на сетап", value: "90 минут" },
      { label: "Длительность впечатления", value: "2–3 часа" },
      { label: "Передача фотографий", value: "В течение 24 часов" },
    ],
  },
  {
    tier: "signature",
    roman: "II",
    name: "Фирменная клятва",
    tagline:
      "Идеальный баланс романтики, визуального великолепия и незабываемых эмоций — спроектированный вокруг вашей истории.",
    priceFrom: { AED: 8000, USD: 2178 },
    priceNote: "Стоимость зависит от площадки и даты. Без скрытых платежей.",
    ctaLabel: "Заказать фирменное предложение",
    featured: true,
    badge: "Чаще всего выбирают",
    description:
      "Наше фирменное предложение — премиальная площадка, индивидуальный дизайн, кинематографический фильм и резервный план, которого вы никогда не увидите.",
    image: img("1583939003579-730e3918a45a"),
    inclusions: [
      "Подбор премиальной площадки из нашей эксклюзивной партнёрской сети",
      "Индивидуальный декор-концепт под характер вашей пары",
      "Полная флористическая инсталляция — авторская композиция, сезонные и премиальные сорта",
      "100+ свечей, фонарей и световой дизайн",
      "Цветочная арка или статусный декор-центральный элемент",
      "Профессиональный фотограф — 3 часа, скрытая съёмка и портретная сессия",
      "Видеограф — кинематографический хайлайт-ролик до 60 секунд",
      "Сетап с шампанским и празднованием (премиальный выбор)",
      "Подача и сопровождение разрешения (где требуется)",
      "Старший координатор на площадке плюс резервный координатор",
      "Полная галерея (100+ обработанных кадров) за 48 часов",
      "Хайлайт-ролик — за 5 дней",
      "Сопровождение «консьерж» от брони до пост-проджекта",
      "Резервная локация (на случай погоды или площадки)",
    ],
    exclusions: [
      "Музыкант вживую (доступно как доп. опция от 1 500 AED)",
      "Бронь приватного ужина (доп. опция)",
      "Кадры с дрона (доп. опция от 1 200 AED)",
      "Частный трансфер",
      "Координация семейного сюрприза",
    ],
    permit: {
      title: "Разрешения — полностью на нас",
      body:
        "Все заявки, согласования с органами и договорённости о доступе к площадкам ведёт команда Regalia Vows. С вашей стороны — ничего.",
    },
    perfectFor:
      "Парам, которые хотят действительно кинематографичное предложение с профессиональным контентом на всю жизнь. Тем, кто мечтает о конкретном типе локации. Всем, кому важна визуальная глубина роскоши без полного индивидуального заказа.",
    timeline: [
      { label: "Бронирование заранее", value: "14–21 день" },
      { label: "Время на сетап", value: "2,5–3 часа" },
      { label: "Длительность впечатления", value: "3–4 часа" },
      { label: "Передача фотографий", value: "В течение 48 часов" },
      { label: "Передача фильма", value: "В течение 5 дней" },
    ],
  },
  {
    tier: "regalia",
    roman: "III",
    name: "Опыт Regalia",
    tagline:
      "Когда уместно только исключительное — полностью индивидуальное кинематографическое предложение, о котором будут говорить поколениями.",
    priceFrom: { AED: 18000, USD: 4900 },
    priceNote: "Полностью индивидуально. Цена подтверждается после консультации.",
    ctaLabel: "Запросить приватную консультацию",
    description:
      "Полностью индивидуальный заказ — эксклюзивная локация, мастер-флорист, полнометражный кинофильм, музыкант вживую и личный продюсер.",
    image: img("1530023367847-a683933f4172"),
    inclusions: [
      "Всё, что входит в «Фирменную клятву», и сверх того —",
      "Эксклюзивный доступ к приватной локации (крыша, яхта, пустыня, сьют)",
      "Полностью индивидуальный декор-концепт — с нуля, без общих элементов",
      "Мастер-флорист с премиальными импортными сортами (орхидеи, пионы, садовые розы)",
      "Главный кинооператор плюс съёмка с дрона (где позволяют разрешения)",
      "Полный кинематографический фильм — 3–5-минутный авторский монтаж",
      "Музыкант вживую — скрипач, пианист или акустический гитарист",
      "Личный шеф-повар (канапе или полный ужин на площадке)",
      "Координация семейного сюрприза (прилёт гостей-сюрпризов по желанию)",
      "Премиальный подарок — индивидуальный футляр для кольца, памятный артефакт",
      "Премиальный трансфер для обоих партнёров",
      "Бронь праздничного ужина в ресторане 5★ после предложения",
      "Все заявки на разрешения и работа с органами",
      "Закреплённый старший продюсер, занятый только вашим проектом",
      "Две очные консультации до события",
      "Безлимитные правки концепта до его утверждения",
      "Полная галерея (200+ кадров) плюс кинофильм за 7 дней",
    ],
    exclusions: [],
    permit: {
      title: "Разрешения — «белые перчатки» с органами",
      body:
        "Берём на себя любое разрешение, согласование и взаимодействие с органами — включая DTCM, муниципалитет Дубая и доступ через частных партнёров. С вашей стороны не требуется ничего.",
    },
    perfectFor:
      "Тем, для кого это событие — раз в жизни, и бюджет вторичен по сравнению с безупречностью. Клиентам ультра-люкс-сегмента. Публичным персонам, для которых важна дискретность. Парам, прилетевшим в Дубай именно ради этого момента.",
    timeline: [
      { label: "Бронирование заранее", value: "3–4 недели" },
      { label: "Время на сетап", value: "3–5 часов" },
      { label: "Длительность впечатления", value: "4–8 часов" },
      { label: "Передача фотографий", value: "В течение 48 часов" },
      { label: "Передача полного фильма", value: "В течение 7 дней" },
    ],
  },
];

const addOnsRu: readonly AddOn[] = [
  { name: "Скрипач вживую", description: "Профессиональный скрипач играет в момент её появления и сопровождает предложение — от классики до современных композиций под ваш вкус.", price: { AED: 1500, USD: 408 }, unit: "/ 90 мин" },
  { name: "Видеосъёмка с дрона", description: "Кадры с воздуха и панорама Дубая создают кинофильм, который не повторит ни один монтажёр. Зависит от разрешения на локацию.", price: { AED: 1200, USD: 327 }, unit: "/ сессия" },
  { name: "Личный шеф-повар", description: "Шеф со школой Michelin готовит трёхкуртный праздничный ужин прямо на площадке — от канапе на сетапе до полного ужина после «да».", price: { AED: 2500, USD: 681 }, unit: "/ на пару · меню согласуется" },
  { name: "Дополнительные часы фотосъёмки", description: "Продлите сессию для портретов в золотой час, кадров встречи с семьёй или прогулки по городу после предложения.", price: { AED: 600, USD: 164 }, unit: "/ доп. час" },
  { name: "Премиум-апгрейд флористики", description: "Переход на премиальные импортные сорта — садовые розы, пионы, орхидеи — или полностью авторская флористическая инсталляция от мастер-флориста.", price: { AED: 800, USD: 218 }, unit: "/ апгрейд · от" },
  { name: "Световое шоу из дронов", description: "Авторская формация дронов выводит её имя или короткое послание в ночном небе Дубая. Требует четыре недели подготовки и разрешения GCAA.", price: { AED: 4500, USD: 1225 }, unit: "/ шоу · от", tag: "Новинка" },
  { name: "Индивидуальная подача кольца", description: "Авторский деревянный или бархатный футляр для кольца с лазерной гравировкой инициалов, даты и короткого послания — артефакт на всю жизнь.", price: { AED: 350, USD: 95 }, unit: "/ шт" },
  { name: "Координация семейного сюрприза", description: "Согласуем приезд родных — родителей, братьев и сестёр, близких друзей — чтобы они увидели предложение или присоединились к празднованию сразу после.", price: { AED: 1800, USD: 490 }, unit: "/ координация" },
  { name: "Парный подарочный набор", description: "Авторская подарочная коробка — именной парфюм, шоколад, рукописная каллиграфическая записка и памятная карточка с датой и местом.", price: { AED: 550, USD: 150 }, unit: "/ набор" },
  { name: "Бронь приватного ужина", description: "Приватный стол в лучших ресторанах Дубая — Nobu, Zuma, Atmosphere, Ossiano — украшенный цветами с вашего предложения и уже ждущий вас.", price: { AED: 400, USD: 109 }, unit: "/ бронь + ужин" },
  { name: "Помолвочная съёмка на следующий день", description: "Полная трёхчасовая помолвочная съёмка в золотой час на второй локации Дубая на следующий день — пока эмоции ещё на пике.", price: { AED: 2200, USD: 599 }, unit: "/ сессия 3 ч" },
  { name: "Премиальный трансфер", description: "Премиальный автомобиль (Range Rover, Mercedes S-Class или эквивалент) забирает обоих партнёров и доставляет на локацию и обратно.", price: { AED: 700, USD: 191 }, unit: "/ трансфер туда-обратно" },
];

const comparisonRu: readonly ComparisonGroup[] = [
  { category: "Площадка и локация", rows: [
    { label: "Координация с приватной площадкой", intimate: "yes", signature: "yes", regalia: "yes" },
    { label: "Доступ к эксклюзивным партнёрским площадкам", intimate: "no", signature: "yes", regalia: "yes" },
    { label: "Полностью приватная эксклюзивная локация", intimate: "no", signature: "no", regalia: "yes" },
    { label: "Резервная локация в режиме ожидания", intimate: "no", signature: "yes", regalia: "yes" },
  ]},
  { category: "Декор и дизайн", rows: [
    { label: "Флористическая композиция", intimate: "Базовая", signature: "Авторский концепт", regalia: "Мастер-флорист" },
    { label: "Свечи", intimate: "50 свечей", signature: "100+ свечей", regalia: "Безлимит / авторски" },
    { label: "Статусная арка / центральный элемент", intimate: "no", signature: "yes", regalia: "Индивидуальный дизайн" },
    { label: "Индивидуальный декор-концепт", intimate: "no", signature: "yes", regalia: "Безлимит правок" },
  ]},
  { category: "Фотография и видео", rows: [
    { label: "Профессиональный фотограф", intimate: "2 ч", signature: "3 ч", regalia: "Полный день" },
    { label: "Обработанные кадры", intimate: "15–20 / 24 ч", signature: "100+ / 48 ч", regalia: "200+ / 48 ч" },
    { label: "Видеосъёмка", intimate: "no", signature: "ролик 60 с / 5 дней", regalia: "фильм 3–5 мин / 7 дней" },
    { label: "Кадры с дрона", intimate: "no", signature: "Доп. опция 1 200 AED", regalia: "Включено" },
  ]},
  { category: "Развлечения и опыт", rows: [
    { label: "Музыкант вживую", intimate: "no", signature: "Доп. опция 1 500 AED", regalia: "Включено" },
    { label: "Личный шеф-повар", intimate: "no", signature: "Доп. опция 2 500 AED", regalia: "Включено" },
    { label: "Координация семьи", intimate: "no", signature: "Доп. опция 1 800 AED", regalia: "Включено" },
    { label: "Премиальный трансфер", intimate: "no", signature: "Доп. опция 700 AED", regalia: "Включено" },
  ]},
  { category: "Разрешения и координация", rows: [
    { label: "Сопровождение разрешений", intimate: "Базовое", signature: "Все разрешения", regalia: "«Белые перчатки»" },
    { label: "Координатор в день события", intimate: "1 координатор", signature: "Старший + резервный", regalia: "Личный продюсер" },
    { label: "Консультации", intimate: "Телефон / WhatsApp", signature: "Видеозвонок включён", regalia: "2 очные встречи" },
    { label: "Бронирование заранее", intimate: "7–10 дней", signature: "14–21 день", regalia: "Минимум 3–4 недели" },
  ]},
];

const permitsRu: readonly PermitNote[] = [
  { title: "Публичные локации", body: "Фото-, видеосъёмка и спецсетапы в публичных пространствах Дубая — пляжи, парки, общественные площади — требуют разрешения от Dubai Tourism (DTCM) или соответствующего органа. Срок рассмотрения обычно 3–7 рабочих дней. Мы подаём, ведём и подтверждаем все согласования от вашего имени.", note: "Требуется для: пляжа JBR, Dubai Frame, общественных парков, открытых зон DIFC, публичного пляжа Jumeirah." },
  { title: "Приватные площадки", body: "Отели, частные крыши, рестораны и приватные пляжи требуют согласования напрямую с менеджером площадки, а не государственного разрешения. Это, как правило, быстрее — 24–48 часов — и иногда подразумевает сбор за локацию. У нас выстроенные отношения с большинством топовых площадок Дубая.", note: "Сборы за площадку: от 0 до 2 500 AED в зависимости от локации и эксклюзивности. Всегда прозрачно отражено в смете." },
  { title: "Разрешения на дроны", body: "Полёты дронов в Дубае требуют разрешения General Civil Aviation Authority (GCAA). Это отдельная заявка от стандартных фото-разрешений. Срок: 7–14 дней. Не все локации допускают дрон; мы оцениваем возможность до подтверждения опции.", note: "Недоступно вблизи: аэропортов, военных зон, отдельных жилых районов и в радиусе 5 км от закрытого воздушного пространства." },
  { title: "Пустыня и удалённые локации", body: "Предложения в пустыне за пределами муниципалитета Дубая требуют согласования с органом эмирата и разрешения землевладельца. У нас прочные связи в Аль-Мармум и предгорьях Хаджарских гор. Эти локации предлагают максимальную приватность.", note: "Наше обязательство: мы никогда не бронируем локацию без письменного подтверждения. Ваше предложение не будет прервано." },
];

const processStepsRu: readonly ProcessStep[] = [
  { n: "I", title: "Расскажите её историю", body: "Напишите нам на почту или в WhatsApp. Мы задаём восемь вопросов о её характере, ваших отношениях и видении. Это десять минут." },
  { n: "II", title: "Мы проектируем момент", body: "В течение 24 часов мы присылаем персональный концепт — локацию, декор-направление, тайминг и всё включённое." },
  { n: "III", title: "Подтверждение и бронь", body: "Вы утверждаете концепт, подписываете соглашение и вносите 50% депозита. Дата зафиксирована. Стартуем по разрешениям." },
  { n: "IV", title: "Мы берём всё на себя", body: "Разрешения, подрядчики, декор, логистика. Вы получаете ежедневные апдейты. В день события вам нужно только прийти." },
  { n: "V", title: "Момент наступает", body: "Она говорит «да». Вы празднуете. Остальное на нас — и фотографии у вас в течение 48 часов." },
];

const trustStatsRu: readonly TrustStat[] = [
  { value: "100+", label: "Спроектированных предложений" },
  { value: "100%", label: "Сказали «да»" },
  { value: "48 ч", label: "Передача фото" },
  { value: "40+", label: "Национальностей среди клиентов" },
  { value: "15+", label: "Эксклюзивных площадок" },
  { value: "5★", label: "Средний рейтинг" },
];

const faqsRu: readonly Faq[] = [
  { q: "Что будет, если в день предложения плохая погода?", a: "Каждая бронь «Фирменной клятвы» и «Опыта Regalia» включает резервную локацию в режиме ожидания и гибкий перенос. Мы отслеживаем прогноз за 72 часа до даты и связываемся проактивно. Для outdoor-предложений у нас всегда подготовлен закрытый вариант. Без плана вы не останетесь." },
  { q: "Как сохранить сюрприз и не выглядеть нечестным?", a: "Это одна из самых частых тревог. Мы готовим полную «легенду» под локацию — бронь ужина на крыше, прогулку на катере на закате, день рождения — которая звучит естественно и прячет настоящий план. И подсказываем, как естественно отвечать на её вопросы накануне." },
  { q: "Какие условия по депозиту и отмене?", a: "Для подтверждения брони — депозит 50%, остаток 50% — за 7 дней до даты. Отмена за 21+ день: возврат депозита минус административный сбор 500 AED. В пределах 21 дня: 50% депозита не возвращается. В пределах 7 дней: полная стоимость не возвращается. Перенос один раз без доплаты возможен при уведомлении за 14+ дней." },
  { q: "Можно ли кастомизировать пакет под конкретные пожелания?", a: "Безусловно. Каждое предложение Regalia Vows строится вокруг вашего видения. Любимый цветок, песня, послание из свечей, конкретный ресторан в финале — скажите нам. Мы встроим это в ваш опыт. Пакеты — точка отсчёта, а не потолок." },
  { q: "Работаете ли вы с не-англоязычными парами?", a: "Да. Мы работаем с парами со всего мира и обслуживали клиентов на арабском, хинди, французском, русском и многих других языках. Мы можем назначить координатора, говорящего на вашем языке в день предложения, и всё планирование может вестись на удобном вам языке." },
  { q: "Что, если она не готова или нужно перенести дату?", a: "Жизнь меняется — мы понимаем. При уведомлении за 14+ дней вы можете один раз перенести бронь без доплаты. Если новая дата требует другой площадки или другого процесса разрешений — заранее предупредим о возможных доплатах. Ваш депозит всегда переходит на новую дату." },
  { q: "Нужно ли купить кольцо до обращения?", a: "Нет — многие клиенты приходят к нам ещё до того, как кольцо готово. Мы выстроим тайминг предложения вокруг даты получения кольца. Если вы всё ещё ищете идеальное кольцо, познакомим с проверенными ювелирными партнёрами в Дубае. Чтобы начать планирование с нами, ничего иметь на руках не нужно." },
  { q: "Помогаете ли вы с помолвочной вечеринкой или свадьбой?", a: "Мы специализируемся на предложениях, свадьбах и всём редакционном маршруте между ними. Помолвочная вечеринка, ужин после предложения, pre-wedding-съёмка — да, занимаемся всем этим. Для полной свадебной продакшн-постановки — раздел «Свадьбы»." },
];

export type PackagesContent = {
  packages: readonly Package[];
  addOns: readonly AddOn[];
  comparison: readonly ComparisonGroup[];
  permits: readonly PermitNote[];
  processSteps: readonly ProcessStep[];
  trustStats: readonly TrustStat[];
  faqs: readonly Faq[];
};

const EN_CONTENT: PackagesContent = {
  packages,
  addOns,
  comparison,
  permits,
  processSteps,
  trustStats,
  faqs,
};

const RU_CONTENT: PackagesContent = {
  packages: packagesRu,
  addOns: addOnsRu,
  comparison: comparisonRu,
  permits: permitsRu,
  processSteps: processStepsRu,
  trustStats: trustStatsRu,
  faqs: faqsRu,
};

export function getPackagesContent(locale: Locale): PackagesContent {
  return locale === "ru" ? RU_CONTENT : EN_CONTENT;
}
