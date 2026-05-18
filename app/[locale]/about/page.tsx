import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { localePageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/about", {
  title: "Regalia Vows — Our Story",
  description:
    "Regalia Vows composes once-in-a-lifetime weddings for a private circle of couples, from Dubai.",
});

type Principle = { title: string; body: string };

type Copy = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  philosophyEyebrow: string;
  philosophyQuote: string;
  body: readonly string[];
  principles: readonly Principle[];
};

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, Copy> = {
  en: {
    heroEyebrow: "Regalia Vows",
    heroTitle: "A small house, devoted to your one.",
    heroDescription:
      "Regalia Vows is a private commissioning house for weddings and the occasions that follow. We work with a deliberately small number of couples each year — with the time, devotion and obsession their day deserves.",
    philosophyEyebrow: "Our Philosophy",
    philosophyQuote:
      "We do not stage events. We compose private worlds — for the two people standing in the middle of them.",
    body: [
      "Regalia Vows began with a simple conviction: that the most extraordinary weddings are not produced — they are composed. Conceived in Dubai and carried to the venues, cities and countries our couples ask us to follow them to.",
      "The house remains small by design. The founders lead every commission personally, with a tight studio of designers, producers and concierge support behind them.",
      "On request, the same hand designs the corporate launches, galas, private celebrations and hospitality openings our clients ask us to compose next.",
    ],
    principles: [
      {
        title: "Composition",
        body: "Every celebration is conceived as a single piece — moodboards, mise-en-place, florals, fashion and choreography drawn from the same palette.",
      },
      {
        title: "Discretion",
        body: "NDAs, secured logistics and a trusted black-book of artisans. We work quietly, and our clients remain unnamed unless they choose otherwise.",
      },
      {
        title: "Devotion",
        body: "A limited number of commissions each year, led personally by a founding director. We do not scale our attention; we choose where to give it.",
      },
    ],
  },
  ru: {
    heroEyebrow: "Regalia Vows",
    heroTitle: "Небольшой дом, посвящённый вашему «одному».",
    heroDescription:
      "Regalia Vows — приватный дом-комиссионер, сочиняющий свадьбы и события, что следуют за ними. Мы намеренно берём в работу немного пар в год, чтобы посвятить их дню столько времени, преданности и одержимости, сколько он заслуживает.",
    philosophyEyebrow: "Наша философия",
    philosophyQuote:
      "Мы не «ставим» события. Мы сочиняем приватные миры — для двух людей, стоящих в их центре.",
    body: [
      "Regalia Vows начался с простого убеждения: самые исключительные свадьбы не «производят» — их сочиняют. Замысел рождается в Дубае и переносится в те площадки, города и страны, куда пары просят нас следовать за ними.",
      "Дом остаётся небольшим по замыслу. Основатели лично ведут каждый заказ, опираясь на тесную студию дизайнеров, продюсеров и консьерж-команду.",
      "По запросу та же рука сочиняет корпоративные запуски, гала, частные торжества и открытия в гостеприимстве, которые клиенты доверяют нам после.",
    ],
    principles: [
      {
        title: "Композиция",
        body: "Каждое торжество задумывается как единое произведение — мудборды, сервировка, флористика, наряды и хореография — в одной палитре.",
      },
      {
        title: "Деликатность",
        body: "NDA, защищённая логистика и проверенная закрытая книга мастеров. Мы работаем тихо, и клиенты остаются неназванными, если сами не решат иначе.",
      },
      {
        title: "Преданность",
        body: "Ограниченное число заказов в год, лично возглавляемых директором-основателем. Мы не масштабируем внимание — мы выбираем, кому его подарить.",
      },
    ],
  },
};

export default async function AboutPage({
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

      <Section theme="pearl">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <Eyebrow className="!text-gilded-800">{t.philosophyEyebrow}</Eyebrow>
              <p className="mt-10 font-display text-3xl italic leading-snug text-ink md:text-4xl">
                &ldquo;{t.philosophyQuote}&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              {t.body.map((paragraph, i) => (
                <p
                  key={i}
                  className={`${i === 0 ? "" : "mt-4 "}text-base leading-relaxed text-ink/85`}
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <div className="hairline mt-24 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {t.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div>
                  <p className="font-display text-5xl italic text-gilded-600">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-6 font-display text-2xl italic text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/85">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
