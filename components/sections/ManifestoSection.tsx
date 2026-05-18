import { getLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import type { Locale } from "@/lib/i18n/config";

type Pillar = { n: string; title: string; body: string };

type Copy = {
  eyebrow: string;
  lede: string;
  badge: string;
  bigQuote: string;
  pillars: readonly Pillar[];
};

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, Copy> = {
  en: {
    eyebrow: "The Manifesto",
    lede:
      "Regalia Vows was founded on a belief that the most extraordinary weddings are not produced — they are composed. We work with a limited number of couples each year, with the time, devotion and obsession their day deserves.",
    badge: "Composed, not produced",
    bigQuote:
      "A wedding is a private cinema. We write, score and stage it for two.",
    pillars: [
      {
        n: "01",
        title: "Couture Design",
        body: "Every wedding is conceived as a single piece — moodboards, mise-en-place, florals and fashion drawn from the same palette.",
      },
      {
        n: "02",
        title: "Concierge Hospitality",
        body: "A dedicated Regalia Vows lead, multilingual guest care and on-the-day choreography that anticipates every gesture.",
      },
      {
        n: "03",
        title: "Sovereign Discretion",
        body: "NDAs, secured logistics and a black-book of trusted artisans across the GCC, Mediterranean and South Asia.",
      },
    ],
  },
  ru: {
    eyebrow: "Манифест",
    lede:
      "Regalia Vows основан на убеждении, что самые исключительные свадьбы не «производят» — их сочиняют. Мы берём в работу ограниченное число пар в год, чтобы посвятить каждому дню столько времени, внимания и одержимости, сколько он заслуживает.",
    badge: "Сочинено, не произведено",
    bigQuote:
      "Свадьба — это камерное кино. Мы пишем, оркеструем и ставим его для двоих.",
    pillars: [
      {
        n: "01",
        title: "Кутюрный дизайн",
        body: "Каждая свадьба задумывается как единое произведение — мудборды, сервировка, флористика и наряды собраны в одной палитре.",
      },
      {
        n: "02",
        title: "Консьерж-гостеприимство",
        body: "Закреплённый ведущий Regalia Vows, многоязычная забота о гостях и хореография дня, предугадывающая каждый жест.",
      },
      {
        n: "03",
        title: "Суверенная деликатность",
        body: "NDA, защищённая логистика и закрытая книга проверенных мастеров от стран Персидского залива до Средиземноморья и Южной Азии.",
      },
    ],
  },
};

export async function ManifestoSection() {
  const locale = (await getLocale()) as Locale;
  const t = copy[locale] ?? copy.en;

  return (
    <Section id="manifesto" theme="pearl" className="grain">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <div className="mt-10 max-w-md">
              <p className="font-tight text-sm leading-relaxed text-pearl/80">
                {t.lede}
              </p>
            </div>

            {/* Vertical editorial portrait */}
            <div className="relative mt-12 hidden overflow-hidden rounded-card border border-pearl/10 lg:block">
              <div
                aria-hidden
                className="aspect-[3/4] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1606490194859-07c18c9f0968?auto=format&fit=crop&w=1200&q=75)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(11,11,13,0.85)_100%)]" />
              <span className="absolute bottom-6 left-6 text-eyebrow uppercase tracking-widest2 text-gilded">
                <span className="mr-3 inline-block h-px w-8 bg-gold-flow align-middle" />
                {t.badge}
              </span>
            </div>
          </Reveal>

          <SplitText
            as="h2"
            text={t.bigQuote}
            className="display max-w-[22ch] text-display-lg italic"
            stagger={0.06}
          />
        </div>

        <div className="hairline mt-24" />

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {t.pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <span className="font-display text-5xl italic text-gold">{p.n}</span>
                <h3 className="font-display text-2xl italic">{p.title}</h3>
                <p className="text-sm leading-relaxed text-pearl/80">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
