import { Link } from "@/lib/i18n/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BgImage } from "@/components/ui/BgImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { CrownMark } from "@/components/ui/CrownMark";
import { ArrowUpRight } from "lucide-react";
import { localePageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/services", {
  title: "Services",
  description:
    "Six chapters of service — bespoke weddings, cinematic proposals, destination weddings, private events, corporate commissions and post-wedding honeymoons.",
});

type ServiceSlug =
  | "weddings"
  | "proposals"
  | "destination-weddings"
  | "private-events"
  | "corporate-and-private"
  | "honeymoons";

const SERVICE_META: Record<ServiceSlug, { n: string; image: string }> = {
  weddings: {
    n: "I",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=70",
  },
  proposals: {
    n: "II",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=70",
  },
  "destination-weddings": {
    n: "III",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=70",
  },
  "private-events": {
    n: "IV",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=70",
  },
  "corporate-and-private": {
    n: "V",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=70",
  },
  honeymoons: {
    n: "VI",
    image:
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1600&q=70",
  },
};

const SERVICE_ORDER: ServiceSlug[] = [
  "weddings",
  "proposals",
  "destination-weddings",
  "private-events",
  "corporate-and-private",
  "honeymoons",
];

type ServiceCopy = { title: string; body: string; investment: string };
type Principle = { title: string; body: string };

type Copy = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  rangeEyebrow: string;
  rangeTitle: string;
  rangeBody: string;
  serviceLabel: string;
  altSuffix: string;
  services: Record<ServiceSlug, ServiceCopy>;
  unitesEyebrow: string;
  unitesTitle: string;
  principles: Principle[];
  beginEyebrow: string;
  beginTitle: string;
  beginBodyPrefix: string;
  beginBodyLink: string;
  beginCta: string;
};

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, Copy> = {
  en: {
    heroEyebrow: "The Services",
    heroTitle: "Six chapters, one signature.",
    heroDescription:
      "Every commission begins with the same conversation — and ends, no two ever alike. We accept a limited number of files each year, and we read every enquiry ourselves.",
    rangeEyebrow: "The Range",
    rangeTitle: "Weddings first. The rest, on request.",
    rangeBody:
      "Regalia Vows is a wedding atelier first — bespoke weddings, cinematic proposals and the destinations and honeymoons that bracket them. For the same households we serve in the aisle, we extend the studio to private and corporate commissions: galas, brand launches, milestone nights. Six chapters in total, every one written by hand.",
    serviceLabel: "Service",
    altSuffix: "Regalia Vows service",
    services: {
      weddings: {
        title: "Bespoke Weddings",
        body: "End-to-end design and production for celebrations in the UAE and beyond — palaces, private islands, desert estates and rooftop ballrooms.",
        investment: "From AED 750,000",
      },
      proposals: {
        title: "Cinematic Proposals",
        body: "Single-moment commissions — engineered like films, kept secret like state. Helicopter approaches, private skyline takeovers, surprise musicians.",
        investment: "From AED 95,000",
      },
      "destination-weddings": {
        title: "Destination Weddings",
        body: "We travel with you. Lake Como, Marrakech, Udaipur, Kyoto, anywhere — embedded for three weeks before the family lands.",
        investment: "From AED 1.2M",
      },
      "private-events": {
        title: "Private Events",
        body: "Engagements, vow renewals, anniversary galas and the after-party that becomes the legend.",
        investment: "From AED 250,000",
      },
      "corporate-and-private": {
        title: "Corporate & Private Events",
        body: "Brand launches, galas, conferences and family-office commissions — the same craft, applied beyond the aisle.",
        investment: "From AED 400,000",
      },
      honeymoons: {
        title: "Honeymoons",
        body: "The week after the wedding, planned with the same hand. Itineraries, residencies and quiet places to disappear together.",
        investment: "From AED 120,000",
      },
    },
    unitesEyebrow: "What Unites Them",
    unitesTitle: "Different chapters, the same hand.",
    principles: [
      {
        title: "One Director",
        body: "Every commission carries the name of a single senior director from the first call through the final delivery.",
      },
      {
        title: "One Studio",
        body: "Creative, production, florals, talent and F&B sit under one roof — no subcontracted last-minute surprises.",
      },
      {
        title: "One Signature",
        body: "Whatever the chapter, the same hand. Two families, one room, one composition — never reproduced twice.",
      },
    ],
    beginEyebrow: "Begin",
    beginTitle: "Tell us about the moment.",
    beginBodyPrefix: "Briefing a brand launch, family-office gala or hotel opening? ",
    beginBodyLink: "See the four sectors we extend the studio to.",
    beginCta: "Begin Your Enquiry",
  },
  ru: {
    heroEyebrow: "Услуги",
    heroTitle: "Шесть глав, одна подпись.",
    heroDescription:
      "Каждый заказ начинается с одной и той же беседы — и заканчивается так, что двух одинаковых не бывает. Мы принимаем ограниченное число файлов в год и читаем каждый запрос лично.",
    rangeEyebrow: "Спектр",
    rangeTitle: "Свадьбы — в первую очередь. Остальное — по запросу.",
    rangeBody:
      "Regalia Vows прежде всего свадебное ателье — индивидуальные свадьбы, кинематографические предложения, а также destination-форматы и медовые месяцы, обрамляющие их. Для тех же семей, кого мы сопровождаем у алтаря, мы расширяем студию на частные и корпоративные заказы: гала, запуски брендов, юбилейные вечера. Всего шесть глав, и каждая написана от руки.",
    serviceLabel: "Услуга",
    altSuffix: "услуга Regalia Vows",
    services: {
      weddings: {
        title: "Индивидуальные свадьбы",
        body: "Дизайн и продакшн «под ключ» для торжеств в ОАЭ и за их пределами — дворцы, частные острова, пустынные резиденции и бальные залы с видом на небо.",
        investment: "От 750 000 AED",
      },
      proposals: {
        title: "Кинематографические предложения",
        body: "Заказ на один момент — поставленный как фильм, охраняемый как тайна. Подлёт на вертолёте, приватный захват панорамы, неожиданные музыканты.",
        investment: "От 95 000 AED",
      },
      "destination-weddings": {
        title: "Destination-свадьбы",
        body: "Мы летим с вами. Озеро Комо, Марракеш, Удайпур, Киото — куда угодно. Поселяемся за три недели до прилёта семьи.",
        investment: "От 1,2 млн AED",
      },
      "private-events": {
        title: "Частные мероприятия",
        body: "Помолвки, обновления клятв, юбилейные гала и афтерпати, которая становится легендой.",
        investment: "От 250 000 AED",
      },
      "corporate-and-private": {
        title: "Корпоративные и частные мероприятия",
        body: "Запуски брендов, гала, конференции и заказы family-office — то же ремесло, применённое за пределами алтаря.",
        investment: "От 400 000 AED",
      },
      honeymoons: {
        title: "Медовые месяцы",
        body: "Неделя после свадьбы, спланированная той же рукой. Маршруты, резиденции и тихие места, чтобы исчезнуть вдвоём.",
        investment: "От 120 000 AED",
      },
    },
    unitesEyebrow: "Что их объединяет",
    unitesTitle: "Разные главы, одна рука.",
    principles: [
      {
        title: "Один директор",
        body: "Каждый заказ носит имя одного старшего директора — от первого звонка до финальной сдачи.",
      },
      {
        title: "Одна студия",
        body: "Креатив, продакшн, флористика, талант и F&B под одной крышей — никаких субподрядных сюрпризов в последний момент.",
      },
      {
        title: "Одна подпись",
        body: "Какая бы ни была глава — та же рука. Две семьи, одна сцена, одна композиция — никогда не повторяется дважды.",
      },
    ],
    beginEyebrow: "Начать",
    beginTitle: "Расскажите нам о моменте.",
    beginBodyPrefix: "Брифуете запуск бренда, гала family-office или открытие отеля? ",
    beginBodyLink: "Посмотрите четыре сектора, в которые мы расширяем студию.",
    beginCta: "Начать запрос",
  },
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
      />

      <Section theme="pearl" className="relative overflow-hidden">
        <CrownMark className="absolute right-[-5%] top-[15%] h-[320px] w-[320px] opacity-[0.05] md:h-[440px] md:w-[440px]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <Eyebrow className="!text-gilded-800">{t.rangeEyebrow}</Eyebrow>
              <h2 className="display mt-8 text-display-md italic text-ink">
                {t.rangeTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-[1.85] text-ink/80 md:text-xl">
                {t.rangeBody}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-x-12 lg:gap-y-16">
            {SERVICE_ORDER.map((slug, i) => {
              const meta = SERVICE_META[slug];
              const s = t.services[slug];
              return (
                <Reveal key={slug} delay={(i % 2) * 0.08}>
                  <Link
                    href={{ pathname: "/services/[slug]", params: { slug } }}
                    data-cursor="view"
                    data-cursor-label="View"
                    className={`group block ${i % 3 === 1 ? "md:mt-16" : ""}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-ink/10">
                      <BgImage
                        src={meta.image}
                        alt={`${s.title} — ${t.altSuffix}`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="transition-transform duration-[1400ms] ease-silk group-hover:scale-105"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,11,13,0.7)_100%)]"
                        aria-hidden
                      />
                      <div className="dark-panel absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-pearl md:p-8">
                        <div>
                          <span className="font-display text-xl italic text-gilded md:text-2xl">
                            {t.serviceLabel} {meta.n}
                          </span>
                          <h3 className="mt-2 font-display text-3xl italic text-white md:text-4xl">
                            {s.title}
                          </h3>
                        </div>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-pearl/35 text-pearl transition-all duration-500 ease-silk group-hover:border-gilded group-hover:bg-gilded group-hover:text-ink">
                          <ArrowUpRight size={16} strokeWidth={1.5} />
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-[1fr_auto] items-start gap-6">
                      <p className="text-sm leading-relaxed text-ink/75 md:text-base">
                        {s.body}
                      </p>
                      <span className="hidden whitespace-nowrap font-display text-sm italic text-gilded-600 sm:block">
                        {s.investment}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section theme="pearl" className="bg-cream-100">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow className="!text-gilded-800">{t.unitesEyebrow}</Eyebrow>
              <h2 className="display mt-8 text-display-md italic text-ink">
                {t.unitesTitle}
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
            {t.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-5 bg-cream p-8 md:p-10">
                  <span className="font-display text-3xl italic text-gilded-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl italic text-ink md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section theme="pearl">
        <Container>
          <div className="hairline mb-16 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Eyebrow className="!text-gilded-800">{t.beginEyebrow}</Eyebrow>
              <h2 className="display mt-6 text-display-md italic text-ink">
                {t.beginTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/75">
                {t.beginBodyPrefix}
                <Link
                  href="/sectors"
                  data-cursor="link"
                  className="text-gilded-700 underline-offset-4 hover:underline"
                >
                  {t.beginBodyLink}
                </Link>
              </p>
            </div>
            <Button href="/contact" variant="gilded" size="lg" withArrow>
              {t.beginCta}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
