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
import { sectors, type SectorSlug } from "@/lib/sectors";
import { localePageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/sectors", {
  title: "Sectors — Beyond the Aisle",
  description:
    "Weddings remain our primary craft. On request, Regalia Vows extends the same hand to corporate events, brand activations, private celebrations and hospitality launches.",
});

type SectorCopy = { eyebrow: string; shortTitle: string; oneLiner: string };
type Ethos = { title: string; body: string };

type Copy = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  fourEyebrow: string;
  fourTitle: string;
  fourBody: string;
  altSuffix: string;
  sectorLabels: Record<SectorSlug, SectorCopy>;
  ethosEyebrow: string;
  ethosTitle: string;
  ethos: Ethos[];
  briefEyebrow: string;
  briefTitle: string;
  briefBodyPrefix: string;
  briefBodyLink: string;
  briefCta: string;
};

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, Copy> = {
  en: {
    heroEyebrow: "Beyond the Aisle",
    heroTitle: "The occasions that follow.",
    heroDescription:
      "Weddings & proposals remain our primary craft. The clients we compose them for ask us, year after year, to stage the launches, galas, milestone nights and hotel openings that come next.",
    fourEyebrow: "The Four Sectors",
    fourTitle: "The same hand. A different kind of evening.",
    fourBody:
      "Regalia Vows is, first, a wedding atelier. But the principals, maisons, family offices and hospitality groups we work with rarely stop at the aisle. These are the four sectors we extend the studio to — composed with the same discretion and the same single-director model as a private wedding.",
    altSuffix: "Regalia Vows sector",
    sectorLabels: {
      corporate: {
        eyebrow: "Sector I",
        shortTitle: "Corporate Events",
        oneLiner:
          "Brand launches, conferences, executive offsites and family-office occasions — staged with the discretion of a private wedding.",
      },
      "brand-experiential": {
        eyebrow: "Sector II",
        shortTitle: "Brand & Experiential",
        oneLiner:
          "Maison openings, runway dinners and immersive activations — the room becomes the campaign.",
      },
      "private-social": {
        eyebrow: "Sector III",
        shortTitle: "Private & Social",
        oneLiner:
          "Anniversary galas, milestone birthdays and society dinners for the same households we serve at the aisle.",
      },
      hospitality: {
        eyebrow: "Sector IV",
        shortTitle: "Hospitality Launches",
        oneLiner:
          "Hotel debuts, restaurant openings and resort residencies — staged for the press, the principals and the city.",
      },
    },
    ethosEyebrow: "The Ethos",
    ethosTitle: "Why our clients ask us to stay.",
    ethos: [
      {
        title: "Discretion",
        body: "Most commissions outside the aisle are never published. NDAs precede the brief; the vendor list is private.",
      },
      {
        title: "Senior-Led",
        body: "One Regalia Vows director owns the file end to end — no account-coordinator handoffs, no junior on the floor.",
      },
      {
        title: "One Studio",
        body: "Creative, production, talent and F&B all live under one roof, so the deck and the room finally match.",
      },
    ],
    briefEyebrow: "Brief Us",
    briefTitle: "Tell us about the evening.",
    briefBodyPrefix: "Looking for a wedding or a proposal? ",
    briefBodyLink: "Return to the six services.",
    briefCta: "Brief Us on an Event",
  },
  ru: {
    heroEyebrow: "За пределами алтаря",
    heroTitle: "События, что следуют дальше.",
    heroDescription:
      "Свадьбы и предложения остаются нашим главным ремеслом. Те же клиенты год за годом просят нас ставить запуски, гала, юбилейные вечера и открытия отелей, которые приходят потом.",
    fourEyebrow: "Четыре сектора",
    fourTitle: "Та же рука. Иной вечер.",
    fourBody:
      "Regalia Vows — это прежде всего свадебное ателье. Но принципалы, maison’ы, family-office и гостиничные группы, с которыми мы работаем, редко останавливаются у алтаря. Это четыре сектора, в которые мы расширяем студию — с той же деликатностью и моделью одного директора, что и в частной свадьбе.",
    altSuffix: "сектор Regalia Vows",
    sectorLabels: {
      corporate: {
        eyebrow: "Сектор I",
        shortTitle: "Корпоративные мероприятия",
        oneLiner:
          "Запуски брендов, конференции, выездные сессии руководства и события family-office — поставленные с деликатностью частной свадьбы.",
      },
      "brand-experiential": {
        eyebrow: "Сектор II",
        shortTitle: "Бренд и впечатления",
        oneLiner:
          "Открытия maison, ужины подиума и иммерсивные активации — комната становится кампанией.",
      },
      "private-social": {
        eyebrow: "Сектор III",
        shortTitle: "Частное и светское",
        oneLiner:
          "Юбилейные гала, знаковые дни рождения и светские ужины — для тех же семей, кого мы сопровождаем у алтаря.",
      },
      hospitality: {
        eyebrow: "Сектор IV",
        shortTitle: "Запуски отелей",
        oneLiner:
          "Дебюты отелей, открытия ресторанов и курортные резиденции — поставленные для прессы, принципалов и города.",
      },
    },
    ethosEyebrow: "Этос",
    ethosTitle: "Почему клиенты просят нас остаться.",
    ethos: [
      {
        title: "Деликатность",
        body: "Большинство заказов за пределами алтаря никогда не публикуются. NDA предшествует брифу; список подрядчиков приватен.",
      },
      {
        title: "Старший директор",
        body: "Один директор Regalia Vows ведёт файл от начала до конца — никаких передач координаторам, никаких младших на площадке.",
      },
      {
        title: "Одна студия",
        body: "Креатив, продакшн, талант и F&B живут под одной крышей — наконец, презентация и зал совпадают.",
      },
    ],
    briefEyebrow: "Брифуйте нас",
    briefTitle: "Расскажите о вечере.",
    briefBodyPrefix: "Ищете свадьбу или предложение? ",
    briefBodyLink: "Вернитесь к шести услугам.",
    briefCta: "Брифовать нас о событии",
  },
};

export default async function SectorsPage({
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
              <Eyebrow className="!text-gilded-800">{t.fourEyebrow}</Eyebrow>
              <h2 className="display mt-8 text-display-md italic text-ink">
                {t.fourTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-[1.85] text-ink/80 md:text-xl">
                {t.fourBody}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-x-12 lg:gap-y-16">
            {sectors.map((s, i) => {
              const label = t.sectorLabels[s.slug];
              return (
                <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                  <Link
                    href={{ pathname: "/sectors/[slug]", params: { slug: s.slug } }}
                    data-cursor="view"
                    data-cursor-label="View"
                    className={`group block ${i % 2 === 1 ? "md:mt-16" : ""}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-ink/10">
                      <BgImage
                        src={s.image}
                        alt={`${label.shortTitle} — ${t.altSuffix}`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="transition-transform duration-[1400ms] ease-silk group-hover:scale-105"
                      />
                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent} opacity-25 mix-blend-soft-light`}
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,11,13,0.7)_100%)]"
                        aria-hidden
                      />
                      <div className="dark-panel absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-pearl md:p-8">
                        <div>
                          <span className="font-display text-xl italic text-gilded md:text-2xl">
                            {label.eyebrow}
                          </span>
                          <h3 className="mt-2 font-display text-3xl italic text-white md:text-4xl">
                            {label.shortTitle}
                          </h3>
                        </div>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-pearl/35 text-pearl transition-all duration-500 ease-silk group-hover:rotate-45 group-hover:border-gilded group-hover:bg-gilded group-hover:text-ink">
                          <ArrowUpRight size={16} strokeWidth={1.5} />
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-sm leading-relaxed text-ink/75 md:text-base">
                        {label.oneLiner}
                      </p>
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
              <Eyebrow className="!text-gilded-800">{t.ethosEyebrow}</Eyebrow>
              <h2 className="display mt-8 text-display-md italic text-ink">
                {t.ethosTitle}
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
            {t.ethos.map((p, i) => (
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
              <Eyebrow className="!text-gilded-800">{t.briefEyebrow}</Eyebrow>
              <h2 className="display mt-6 text-display-md italic text-ink">
                {t.briefTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/75">
                {t.briefBodyPrefix}
                <Link
                  href="/services"
                  data-cursor="link"
                  className="text-gilded-700 underline-offset-4 hover:underline"
                >
                  {t.briefBodyLink}
                </Link>
              </p>
            </div>
            <Button href="/contact/corporate" variant="gilded" size="lg" withArrow>
              {t.briefCta}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
