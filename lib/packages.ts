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
    tagline: "Quiet, heartfelt and entirely yours.",
    priceFrom: { AED: 3500, USD: 953 },
    priceNote: "Varies by location and date. No hidden fees.",
    ctaLabel: "Begin My Intimate Proposal",
    description:
      "A composed, intimate proposal designed around the two of you.",
    image: img("1519741497674-611481863552"),
    inclusions: [
      "Private venue coordination and access",
      "Curated white and ivory floral arrangement",
      "50-candle setup with warm ambient lighting",
      "Professional photographer — 2 hours, hidden",
      "Champagne setup for two (Moët & Chandon)",
      "Day-of coordinator on-site throughout",
      "Edited highlight photos within 24 hours (15–20)",
    ],
    exclusions: [
      "Videography or drone footage",
      "Live musician or entertainment",
      "Custom décor theme design",
    ],
    permit: {
      title: "Permit — usually not required",
      body:
        "Private venues need only venue manager approval, included in our coordination. Public spaces, where required, are managed by us.",
    },
    perfectFor:
      "Couples who value intimacy over spectacle — and a focused budget without compromise on quality.",
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
    tagline: "Romance, visual grandeur and unforgettable emotion.",
    priceFrom: { AED: 8000, USD: 2178 },
    priceNote: "Varies by location and date. No hidden fees.",
    ctaLabel: "Begin My Signature Proposal",
    featured: true,
    badge: "Most Chosen",
    description:
      "Premium venue, custom design, cinematic film, and a backup plan you will never see.",
    image: img("1583939003579-730e3918a45a"),
    inclusions: [
      "Premium venue from our exclusive partner network",
      "Custom décor theme designed around her",
      "Full floral installation with statement centrepiece",
      "Professional photographer — 3 hours, hidden + portrait",
      "Videographer — 60-second cinematic reel",
      "Senior coordinator plus backup on standby",
      "Full gallery (100+) in 48 hours, reel in 5 days",
    ],
    exclusions: [
      "Live musician (add-on from AED 1,500)",
      "Drone footage (add-on from AED 1,200)",
      "Private dining reservation (add-on)",
    ],
    permit: {
      title: "Permit — fully managed by us",
      body:
        "Every permit, authority approval and venue access agreement is handled by the Regalia Vows team. You do nothing.",
    },
    perfectFor:
      "Couples who want a truly cinematic proposal with professional content to treasure forever.",
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
    tagline: "A bespoke commission spoken about for generations.",
    priceFrom: { AED: 18000, USD: 4900 },
    priceNote: "Fully bespoke. Price confirmed after consultation.",
    ctaLabel: "Request Private Consultation",
    description:
      "Exclusive location, master florist, full cinematic film, live musician and a dedicated producer.",
    image: img("1530023367847-a683933f4172"),
    inclusions: [
      "Everything in The Signature Vow, plus —",
      "Exclusive private location (rooftop, yacht, desert, suite)",
      "Bespoke décor by master florist — premium international blooms",
      "Cinematic film 3–5 min, with drone footage where permitted",
      "Live musician and private chef on-site",
      "Family surprise coordination and post-proposal 5★ dinner",
      "Dedicated senior producer with unlimited revisions",
    ],
    exclusions: [],
    permit: {
      title: "Permit — white-glove authority management",
      body:
        "We handle every permit and authority relationship — DTCM, Dubai Municipality and private access. Nothing is your responsibility.",
    },
    perfectFor:
      "Those for whom this is once-in-a-lifetime and budget is secondary to perfection.",
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
  { name: "Live Violinist", description: "A professional violinist plays as she arrives — from romantic classical to contemporary pieces.", price: { AED: 1500, USD: 408 }, unit: "/ 90 min" },
  { name: "Drone Videography", description: "Aerial footage of your setup and the Dubai skyline. Subject to location permit approval.", price: { AED: 1200, USD: 327 }, unit: "/ session" },
  { name: "Private Chef", description: "A Michelin-trained chef prepares a three-course celebration meal on-site after the yes.", price: { AED: 2500, USD: 681 }, unit: "/ couple · menu TBC" },
  { name: "Premium Florals Upgrade", description: "Upgrade to international premium blooms — garden roses, peonies, orchids — or a bespoke installation.", price: { AED: 800, USD: 218 }, unit: "/ upgrade · from" },
  { name: "Drone Light Show", description: "A custom drone formation spells her name in the night sky. Four weeks notice and a GCAA permit required.", price: { AED: 4500, USD: 1225 }, unit: "/ show · from", tag: "New" },
  { name: "Family Surprise Coordination", description: "We coordinate the arrival of parents, siblings or close friends to witness — or join right after.", price: { AED: 1800, USD: 490 }, unit: "/ coordination" },
  { name: "Private Dining Reservation", description: "A private table at Nobu, Zuma, Atmosphere or Ossiano — decorated with florals from your proposal.", price: { AED: 400, USD: 109 }, unit: "/ reservation + dining" },
  { name: "Engagement Shoot Next Day", description: "A three-hour golden-hour shoot the day after — while the emotions are still electric.", price: { AED: 2200, USD: 599 }, unit: "/ 3-hr session" },
];

export const comparison: readonly ComparisonGroup[] = [
  { category: "Venue & Location", rows: [
    { label: "Private venue coordination", intimate: "yes", signature: "yes", regalia: "yes" },
    { label: "Exclusive partner venue access", intimate: "no", signature: "yes", regalia: "yes" },
    { label: "Backup location on standby", intimate: "no", signature: "yes", regalia: "yes" },
  ]},
  { category: "Décor & Design", rows: [
    { label: "Floral arrangement", intimate: "Standard", signature: "Custom theme", regalia: "Bespoke master" },
    { label: "Candle setup", intimate: "50 candles", signature: "100+ candles", regalia: "Unlimited / custom" },
    { label: "Custom décor concept", intimate: "no", signature: "yes", regalia: "Unlimited revisions" },
  ]},
  { category: "Photography & Film", rows: [
    { label: "Professional photographer", intimate: "2 hrs", signature: "3 hrs", regalia: "Full day" },
    { label: "Edited highlight photos", intimate: "15–20 / 24 hr", signature: "100+ / 48 hr", regalia: "200+ / 48 hr" },
    { label: "Videography", intimate: "no", signature: "60-sec reel / 5 days", regalia: "3–5 min film / 7 days" },
  ]},
  { category: "Entertainment & Experience", rows: [
    { label: "Live musician", intimate: "no", signature: "Add-on AED 1,500", regalia: "Included" },
    { label: "Private chef", intimate: "no", signature: "Add-on AED 2,500", regalia: "Included" },
    { label: "Family coordination", intimate: "no", signature: "Add-on AED 1,800", regalia: "Included" },
  ]},
  { category: "Permits & Coordination", rows: [
    { label: "Permit management", intimate: "Basic only", signature: "All permits", regalia: "White-glove" },
    { label: "Day-of coordinator", intimate: "1 coordinator", signature: "Senior + backup", regalia: "Dedicated producer" },
    { label: "Advance booking", intimate: "7–10 days", signature: "14–21 days", regalia: "3–4 weeks min" },
  ]},
];

export const permits: readonly PermitNote[] = [
  { title: "Public Locations", body: "Public locations in Dubai require a permit from Dubai Tourism (DTCM). Processing typically takes 3 to 7 working days — we submit and confirm on your behalf.", note: "Required for: JBR beach, Dubai Frame, public parks, DIFC outdoor areas, Jumeirah public beach." },
  { title: "Private Venues", body: "Hotels, private rooftops and restaurants need venue manager approval — typically 24 to 48 hours. We hold relationships with most top venues in Dubai.", note: "Venue fees: AED 0 to 2,500 depending on exclusivity. Always disclosed transparently." },
  { title: "Drone Permits", body: "Drone flying requires a separate GCAA permit, processed in 7 to 14 days. Not all locations allow it — we advise before confirming.", note: "Not available near airports, military zones, or within 5 km of restricted airspace." },
  { title: "Desert & Remote Locations", body: "Desert proposals require emirate authority coordination and landowner permission. We hold established access in Al Marmoom and the Hajar foothills.", note: "We never book a location without confirmed written permission." },
];

export const processSteps: readonly ProcessStep[] = [
  { n: "I", title: "Tell Us Her Story", body: "Email or WhatsApp. Eight questions, ten minutes." },
  { n: "II", title: "We Design Your Moment", body: "Within 24 hours — a personalised concept with location, décor, timing and everything included." },
  { n: "III", title: "Confirm & Secure", body: "Approve the concept, sign and pay your 50% deposit. Date locked. Permits begin." },
  { n: "IV", title: "We Handle Everything", body: "Permits, vendors, décor, logistics — with daily updates. You only need to show up." },
  { n: "V", title: "The Moment Arrives", body: "She says yes. You celebrate. Photos within 48 hours." },
];

export const trustStats: readonly TrustStat[] = [
  { value: "100+", label: "Proposals Designed" },
  { value: "100%", label: "Said Yes" },
  { value: "48 hrs", label: "Photo Delivery" },
  { value: "5★", label: "Average Rating" },
];

export const faqs: readonly Faq[] = [
  { q: "What happens if the weather is bad on my proposal day?", a: "Every Signature Vow and Regalia Experience booking includes a backup location and a flexible rescheduling option. We monitor weather 72 hours out and communicate proactively." },
  { q: "How do you keep the proposal a surprise without me being deceptive?", a: "We provide a complete cover story for the location — a rooftop dinner, a sunset boat, a birthday surprise — that feels natural and keeps the real plan hidden. We also coach you on the days beforehand." },
  { q: "What is your deposit and cancellation policy?", a: "50% deposit confirms, balance due 7 days before. More than 21 days out: deposit refunded minus a AED 500 admin fee. Within 21 days: 50% non-refundable. Within 7 days: full booking non-refundable." },
  { q: "Can I customise a package with specific elements not listed?", a: "Absolutely. A favourite flower, a meaningful song, a candle message, a particular restaurant — tell us and we will build it in. The packages are starting points, not ceilings." },
  { q: "What if I need to change the date?", a: "With more than 14 days notice you can reschedule once at no additional charge. Your deposit always moves with you to the new date." },
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
    tagline: "Тихо, искренне и только для вас.",
    priceFrom: { AED: 3500, USD: 953 },
    priceNote: "Зависит от площадки и даты. Без скрытых платежей.",
    ctaLabel: "Заказать камерное предложение",
    description:
      "Сдержанное камерное предложение, придуманное вокруг двоих.",
    image: img("1519741497674-611481863552"),
    inclusions: [
      "Координация и доступ к приватной площадке",
      "Авторская флористика — белые и айвори-композиции",
      "Сетап из 50 свечей с тёплым ambient-светом",
      "Профессиональный фотограф — 2 часа, скрытая позиция",
      "Сетап с шампанским на двоих (Moët & Chandon)",
      "Координатор на площадке весь вечер",
      "Обработанные фотографии за 24 часа (15–20 кадров)",
    ],
    exclusions: [
      "Видеосъёмка и кадры с дрона",
      "Музыкант вживую и развлекательная программа",
      "Индивидуальный декор-концепт",
    ],
    permit: {
      title: "Разрешение — как правило, не требуется",
      body:
        "Приватным площадкам нужно лишь согласование с менеджером — оно входит в нашу координацию. Публичные пространства, при необходимости, оформляем мы.",
    },
    perfectFor:
      "Парам, для которых камерность важнее размаха — с чётким бюджетом и без компромиссов по качеству.",
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
    tagline: "Романтика, визуальное великолепие и незабываемые эмоции.",
    priceFrom: { AED: 8000, USD: 2178 },
    priceNote: "Зависит от площадки и даты. Без скрытых платежей.",
    ctaLabel: "Заказать фирменное предложение",
    featured: true,
    badge: "Чаще всего выбирают",
    description:
      "Премиальная площадка, индивидуальный дизайн, кинематографический фильм и резервный план, которого вы никогда не увидите.",
    image: img("1583939003579-730e3918a45a"),
    inclusions: [
      "Премиальная площадка из эксклюзивной партнёрской сети",
      "Индивидуальный декор-концепт под её характер",
      "Полная флористическая инсталляция со статусным центральным элементом",
      "Профессиональный фотограф — 3 часа, скрытая съёмка и портрет",
      "Видеограф — кинематографический ролик до 60 секунд",
      "Старший координатор плюс резервный",
      "Галерея 100+ кадров за 48 часов, ролик — за 5 дней",
    ],
    exclusions: [
      "Музыкант вживую (доп. опция от 1 500 AED)",
      "Кадры с дрона (доп. опция от 1 200 AED)",
      "Бронь приватного ужина (доп. опция)",
    ],
    permit: {
      title: "Разрешения — полностью на нас",
      body:
        "Все заявки, согласования и договорённости о доступе к площадке ведёт команда Regalia Vows. С вашей стороны — ничего.",
    },
    perfectFor:
      "Парам, которые хотят кинематографичное предложение с профессиональным контентом на всю жизнь.",
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
    tagline: "Авторский заказ, о котором будут говорить поколениями.",
    priceFrom: { AED: 18000, USD: 4900 },
    priceNote: "Полностью индивидуально. Цена — после консультации.",
    ctaLabel: "Запросить приватную консультацию",
    description:
      "Эксклюзивная локация, мастер-флорист, полнометражный кинофильм, музыкант вживую и личный продюсер.",
    image: img("1530023367847-a683933f4172"),
    inclusions: [
      "Всё, что входит в «Фирменную клятву», и сверх того —",
      "Эксклюзивная приватная локация (крыша, яхта, пустыня, сьют)",
      "Авторский декор от мастер-флориста с премиальными импортными сортами",
      "Кинематографический фильм 3–5 мин со съёмкой с дрона, где разрешено",
      "Музыкант вживую и личный шеф-повар на площадке",
      "Координация семейного сюрприза и ужин 5★ после предложения",
      "Закреплённый старший продюсер с безлимитными правками",
    ],
    exclusions: [],
    permit: {
      title: "Разрешения — «белые перчатки» с органами",
      body:
        "Любое разрешение и работа с органами — DTCM, муниципалитет Дубая, частный доступ — на нас. С вашей стороны не требуется ничего.",
    },
    perfectFor:
      "Тем, для кого это событие — раз в жизни, и бюджет вторичен по сравнению с безупречностью.",
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
  { name: "Скрипач вживую", description: "Профессиональный скрипач играет в момент её появления — от классики до современных композиций.", price: { AED: 1500, USD: 408 }, unit: "/ 90 мин" },
  { name: "Видеосъёмка с дрона", description: "Кадры с воздуха и панорама Дубая. Зависит от разрешения на локацию.", price: { AED: 1200, USD: 327 }, unit: "/ сессия" },
  { name: "Личный шеф-повар", description: "Шеф со школой Michelin готовит трёхкуртный праздничный ужин прямо на площадке после «да».", price: { AED: 2500, USD: 681 }, unit: "/ на пару · меню согласуется" },
  { name: "Премиум-апгрейд флористики", description: "Переход на премиальные импортные сорта — садовые розы, пионы, орхидеи — или авторская инсталляция.", price: { AED: 800, USD: 218 }, unit: "/ апгрейд · от" },
  { name: "Световое шоу из дронов", description: "Авторская формация дронов выводит её имя в ночном небе. Четыре недели подготовки и разрешение GCAA.", price: { AED: 4500, USD: 1225 }, unit: "/ шоу · от", tag: "Новинка" },
  { name: "Координация семейного сюрприза", description: "Согласуем приезд родителей, братьев и сестёр или близких друзей — увидеть момент или присоединиться после.", price: { AED: 1800, USD: 490 }, unit: "/ координация" },
  { name: "Бронь приватного ужина", description: "Приватный стол в Nobu, Zuma, Atmosphere или Ossiano — украшенный цветами с вашего предложения.", price: { AED: 400, USD: 109 }, unit: "/ бронь + ужин" },
  { name: "Помолвочная съёмка на следующий день", description: "Трёхчасовая съёмка в золотой час на следующий день — пока эмоции ещё на пике.", price: { AED: 2200, USD: 599 }, unit: "/ сессия 3 ч" },
];

const comparisonRu: readonly ComparisonGroup[] = [
  { category: "Площадка и локация", rows: [
    { label: "Координация с приватной площадкой", intimate: "yes", signature: "yes", regalia: "yes" },
    { label: "Доступ к эксклюзивным партнёрским площадкам", intimate: "no", signature: "yes", regalia: "yes" },
    { label: "Резервная локация в режиме ожидания", intimate: "no", signature: "yes", regalia: "yes" },
  ]},
  { category: "Декор и дизайн", rows: [
    { label: "Флористическая композиция", intimate: "Базовая", signature: "Авторский концепт", regalia: "Мастер-флорист" },
    { label: "Свечи", intimate: "50 свечей", signature: "100+ свечей", regalia: "Безлимит / авторски" },
    { label: "Индивидуальный декор-концепт", intimate: "no", signature: "yes", regalia: "Безлимит правок" },
  ]},
  { category: "Фотография и видео", rows: [
    { label: "Профессиональный фотограф", intimate: "2 ч", signature: "3 ч", regalia: "Полный день" },
    { label: "Обработанные кадры", intimate: "15–20 / 24 ч", signature: "100+ / 48 ч", regalia: "200+ / 48 ч" },
    { label: "Видеосъёмка", intimate: "no", signature: "ролик 60 с / 5 дней", regalia: "фильм 3–5 мин / 7 дней" },
  ]},
  { category: "Развлечения и опыт", rows: [
    { label: "Музыкант вживую", intimate: "no", signature: "Доп. опция 1 500 AED", regalia: "Включено" },
    { label: "Личный шеф-повар", intimate: "no", signature: "Доп. опция 2 500 AED", regalia: "Включено" },
    { label: "Координация семьи", intimate: "no", signature: "Доп. опция 1 800 AED", regalia: "Включено" },
  ]},
  { category: "Разрешения и координация", rows: [
    { label: "Сопровождение разрешений", intimate: "Базовое", signature: "Все разрешения", regalia: "«Белые перчатки»" },
    { label: "Координатор в день события", intimate: "1 координатор", signature: "Старший + резервный", regalia: "Личный продюсер" },
    { label: "Бронирование заранее", intimate: "7–10 дней", signature: "14–21 день", regalia: "Минимум 3–4 недели" },
  ]},
];

const permitsRu: readonly PermitNote[] = [
  { title: "Публичные локации", body: "Публичные пространства Дубая требуют разрешения Dubai Tourism (DTCM). Срок — 3–7 рабочих дней; подаём и подтверждаем от вашего имени.", note: "Требуется для: пляжа JBR, Dubai Frame, общественных парков, открытых зон DIFC, публичного пляжа Jumeirah." },
  { title: "Приватные площадки", body: "Отели, частные крыши и рестораны требуют согласования с менеджером — обычно 24–48 часов. У нас выстроенные отношения с большинством топовых площадок Дубая.", note: "Сборы за площадку: от 0 до 2 500 AED в зависимости от эксклюзивности. Всегда прозрачно в смете." },
  { title: "Разрешения на дроны", body: "Полёты дронов требуют отдельного разрешения GCAA — 7–14 дней. Не все локации допускают дрон; мы оцениваем возможность до подтверждения.", note: "Недоступно вблизи аэропортов, военных зон и в радиусе 5 км от закрытого воздушного пространства." },
  { title: "Пустыня и удалённые локации", body: "Пустынные предложения требуют согласования с органом эмирата и разрешения землевладельца. У нас прочные связи в Аль-Мармум и предгорьях Хаджарских гор.", note: "Мы никогда не бронируем локацию без письменного подтверждения." },
];

const processStepsRu: readonly ProcessStep[] = [
  { n: "I", title: "Расскажите её историю", body: "Напишите на почту или в WhatsApp. Восемь вопросов, десять минут." },
  { n: "II", title: "Мы проектируем момент", body: "В течение 24 часов — персональный концепт с локацией, декором, таймингом и всем включённым." },
  { n: "III", title: "Подтверждение и бронь", body: "Утверждаете концепт, подписываете и вносите 50% депозита. Дата зафиксирована. Стартуем по разрешениям." },
  { n: "IV", title: "Мы берём всё на себя", body: "Разрешения, подрядчики, декор, логистика — с ежедневными апдейтами. Вам нужно только прийти." },
  { n: "V", title: "Момент наступает", body: "Она говорит «да». Вы празднуете. Фотографии — в течение 48 часов." },
];

const trustStatsRu: readonly TrustStat[] = [
  { value: "100+", label: "Спроектированных предложений" },
  { value: "100%", label: "Сказали «да»" },
  { value: "48 ч", label: "Передача фото" },
  { value: "5★", label: "Средний рейтинг" },
];

const faqsRu: readonly Faq[] = [
  { q: "Что будет, если в день предложения плохая погода?", a: "Каждая бронь «Фирменной клятвы» и «Опыта Regalia» включает резервную локацию и гибкий перенос. Мы отслеживаем прогноз за 72 часа и связываемся проактивно." },
  { q: "Как сохранить сюрприз и не выглядеть нечестным?", a: "Мы готовим полную «легенду» под локацию — ужин на крыше, прогулку на катере, день рождения — которая звучит естественно и прячет настоящий план. И подсказываем, как отвечать на её вопросы накануне." },
  { q: "Какие условия по депозиту и отмене?", a: "Депозит 50% подтверждает бронь, остаток — за 7 дней. Отмена за 21+ день: возврат депозита минус сбор 500 AED. В пределах 21 дня: 50% не возвращается. В пределах 7 дней: полная стоимость не возвращается." },
  { q: "Можно ли кастомизировать пакет под конкретные пожелания?", a: "Безусловно. Любимый цветок, песня, послание из свечей, конкретный ресторан — скажите нам, и мы встроим это. Пакеты — точка отсчёта, а не потолок." },
  { q: "Что, если нужно перенести дату?", a: "При уведомлении за 14+ дней вы можете один раз перенести бронь без доплаты. Депозит всегда переходит на новую дату." },
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
