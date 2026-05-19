import { Fragment } from "react";
import type { Metadata } from "next";
import { Link } from "@/lib/i18n/navigation";
import { Check, X as XIcon, Minus } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localeAlternates, urlForLocale } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";
import { getPackagesContent, formatPrice } from "@/lib/packages";

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<
  Locale,
  {
    seo: {
      title: string;
      description: string;
      keywords: string[];
      ogTitle: string;
      ogDescription: string;
    };
    hero: { eyebrow: string; title: string; description: string };
    priceFrom: string;
    priceFooter: string;
    included: string;
    notIncluded: string;
    perfectFor: string;
    timeline: string;
    addOns: { eyebrow: string; title: React.ReactNode; body: string };
    comparison: { eyebrow: string; title: React.ReactNode; detail: string; fromLabel: string };
    permitsGuide: { eyebrow: string; title: React.ReactNode; body: string };
    process: { eyebrow: string; title: React.ReactNode };
    faq: { eyebrow: string; title: React.ReactNode };
    cta: {
      eyebrow: string;
      title: React.ReactNode;
      body: string;
      button: string;
      back: string;
    };
  }
> = {
  en: {
    seo: {
      title:
        "Proposal Packages — The Intimate Edit, Signature Vow & Regalia Experience",
      description:
        "Three signature proposal packages in Dubai by Regalia Vows. The Intimate Edit, The Signature Vow and The Regalia Experience — bespoke luxury proposals with full permit and venue management.",
      keywords: [
        "proposal package dubai",
        "luxury proposal dubai",
        "cinematic proposal package UAE",
        "proposal planner dubai pricing",
        "marriage proposal dubai cost",
        "engagement proposal dubai",
      ],
      ogTitle: "Proposal Packages | Regalia Vows",
      ogDescription:
        "Three signature proposal packages in Dubai. Designed, permitted and produced by a senior team.",
    },
    hero: {
      eyebrow: "Signature Experiences",
      title: "Choose your perfect moment.",
      description:
        "Three meticulously crafted experiences. Each one designed to be unforgettable. Every proposal built entirely around the two of you.",
    },
    priceFrom: "From",
    priceFooter:
      "All prices in AED · USD equivalents shown · Currency rate indicative",
    included: "What's Included",
    notIncluded: "Not Included",
    perfectFor: "Perfect For",
    timeline: "Timeline",
    addOns: {
      eyebrow: "Enhance Your Experience",
      title: (
        <>
          Luxury <em className="text-gilded-700">add-ons</em>.
        </>
      ),
      body: "Every experience can be elevated. Add any of the following to your package and we will weave it seamlessly into your proposal.",
    },
    comparison: {
      eyebrow: "Side by Side",
      title: (
        <>
          Complete <em className="text-gilded-700">comparison</em>.
        </>
      ),
      detail: "Detail",
      fromLabel: "From AED",
    },
    permitsGuide: {
      eyebrow: "Important Information",
      title: (
        <>
          Dubai permit <em className="text-gilded-700">guide</em>.
        </>
      ),
      body: "Understanding permit requirements in Dubai is essential for a seamless proposal. Here is everything you need to know — and everything we handle for you.",
    },
    process: {
      eyebrow: "How It Works",
      title: (
        <>
          From enquiry to <em className="text-gilded-700">her yes</em>.
        </>
      ),
    },
    faq: {
      eyebrow: "Common Questions",
      title: (
        <>
          Everything you <em className="text-gilded-700">need to know</em>.
        </>
      ),
    },
    cta: {
      eyebrow: "Begin Your Brief",
      title: (
        <>
          She deserves <em className="text-gilded-700">the extraordinary</em>.
        </>
      ),
      body: "Every great love story deserves an extraordinary beginning. Tell us about her — and we will design the rest.",
      button: "Begin a private enquiry",
      back: "← View the proposal service",
    },
  },
  ru: {
    seo: {
      title:
        "Пакеты предложений — Камерная редакция, Фирменная клятва и Опыт Regalia",
      description:
        "Три фирменных пакета предложений в Дубае от Regalia Vows. «Камерная редакция», «Фирменная клятва» и «Опыт Regalia» — индивидуальные люкс-предложения с полным сопровождением разрешений и площадок.",
      keywords: [
        "пакет предложения дубай",
        "люкс предложение дубай",
        "кинематографичное предложение оаэ",
        "планировщик предложений дубай цена",
        "стоимость предложения руки и сердца дубай",
        "помолвка дубай",
      ],
      ogTitle: "Пакеты предложений | Regalia Vows",
      ogDescription:
        "Три фирменных пакета предложений в Дубае. Спроектированы, согласованы и поставлены опытной командой.",
    },
    hero: {
      eyebrow: "Фирменные впечатления",
      title: "Выберите ваш идеальный момент.",
      description:
        "Три тщательно выстроенных впечатления. Каждое — задумано как незабываемое. Каждое предложение строится исключительно вокруг вас двоих.",
    },
    priceFrom: "От",
    priceFooter:
      "Цены в AED · эквиваленты в USD показаны · курс ориентировочный",
    included: "Что входит",
    notIncluded: "Не входит",
    perfectFor: "Подходит",
    timeline: "Тайминг",
    addOns: {
      eyebrow: "Усильте впечатление",
      title: (
        <>
          Люксовые <em className="text-gilded-700">опции</em>.
        </>
      ),
      body: "Любое впечатление можно усилить. Добавьте любую из опций — и мы органично впишем её в ваше предложение.",
    },
    comparison: {
      eyebrow: "Сравнение",
      title: (
        <>
          Полное <em className="text-gilded-700">сравнение</em>.
        </>
      ),
      detail: "Деталь",
      fromLabel: "От AED",
    },
    permitsGuide: {
      eyebrow: "Важная информация",
      title: (
        <>
          Гид по <em className="text-gilded-700">разрешениям</em> в Дубае.
        </>
      ),
      body: "Понимание требований к разрешениям в Дубае — основа гладкого предложения. Здесь — всё, что нужно знать, и всё, что мы берём на себя.",
    },
    process: {
      eyebrow: "Как это устроено",
      title: (
        <>
          От заявки до <em className="text-gilded-700">её «да»</em>.
        </>
      ),
    },
    faq: {
      eyebrow: "Частые вопросы",
      title: (
        <>
          Всё, что нужно <em className="text-gilded-700">знать</em>.
        </>
      ),
    },
    cta: {
      eyebrow: "Начните бриф",
      title: (
        <>
          Она заслуживает <em className="text-gilded-700">исключительного</em>.
        </>
      ),
      body: "Каждая большая история любви заслуживает исключительного начала. Расскажите нам о ней — остальное мы спроектируем.",
      button: "Начать приватный запрос",
      back: "← Перейти к услуге «Предложения»",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;
  return {
    title: t.seo.title,
    description: t.seo.description,
    keywords: t.seo.keywords,
    alternates: localeAlternates(locale, "/packages"),
    openGraph: {
      title: t.seo.ogTitle,
      description: t.seo.ogDescription,
      type: "website",
      url: urlForLocale(locale, "/packages"),
    },
  };
}

function ValueCell({ value }: { value: string }) {
  if (value === "yes")
    return <Check size={16} strokeWidth={1.5} className="mx-auto text-gilded-700" aria-label="Included" />;
  if (value === "no")
    return <Minus size={16} strokeWidth={1.5} className="mx-auto text-ink/30" aria-label="Not included" />;
  return <span className="text-ink/75">{value}</span>;
}

export default async function PackagesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;
  const { packages, addOns, comparison, permits, processSteps, trustStats, faqs } =
    getPackagesContent(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* ─────────── Packages grid ─────────── */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-6">
            {packages.map((p, i) => (
              <Reveal key={p.tier} delay={i * 0.08}>
                <article
                  className={
                    "group relative flex h-full flex-col rounded-card border p-8 transition-all duration-700 ease-silk " +
                    (p.featured
                      ? "border-gilded/45 bg-gradient-to-b from-cream-100 to-cream ring-1 ring-gilded/15 shadow-[0_30px_80px_-30px_rgba(214,161,64,0.45)] md:-translate-y-3"
                      : "border-ink/10 bg-cream-100 hover:border-gilded/35 hover:-translate-y-1 hover:shadow-[0_24px_60px_-32px_rgba(20,18,14,0.25)]")
                  }
                >
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gilded px-4 py-1 font-tight text-[0.65rem] uppercase tracking-widest2 text-ink shadow-[0_8px_24px_-8px_rgba(214,161,64,0.7)] md:left-auto md:right-6 md:translate-x-0">
                      {p.badge ?? (locale === "ru" ? "Чаще всего выбирают" : "Most Chosen")}
                    </span>
                  ) : null}

                  <div className="flex items-baseline justify-between border-b border-ink/10 pb-2">
                    <span className="font-tight text-eyebrow uppercase tracking-widest2 text-gilded-700">
                      {p.name}
                    </span>
                    <span className="font-display text-3xl italic leading-none text-gilded-600/80">{p.roman}</span>
                  </div>

                  <p className="mt-5 font-display text-lg italic leading-snug text-ink/85">{p.tagline}</p>

                  <div className="mt-7">
                    <div className="flex items-baseline gap-2">
                      <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-ink/50">{t.priceFrom}</span>
                      <span className="font-display text-sm text-gilded-800">AED</span>
                      <span className="font-display text-[2.6rem] italic leading-none text-ink">{formatPrice(p.priceFrom.AED)}</span>
                    </div>
                    <p className="mt-1.5 font-tight text-[0.65rem] uppercase tracking-widest2 text-ink/55">
                      ≈ USD {formatPrice(p.priceFrom.USD)}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-ink/60">{p.priceNote}</p>
                  </div>

                  <Button
                    href="/contact"
                    variant="gilded"
                    className={
                      "mt-7 w-full " + (p.featured ? "" : "!bg-transparent !text-ink !ring-gilded/55 hover:!bg-gilded/10 hover:!ring-gilded")
                    }
                  >
                    {p.ctaLabel}
                  </Button>

                  <div className="mt-8 flex flex-col gap-7">
                    <div>
                      <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700">
                        {t.included}
                      </span>
                      <ul className="mt-4 space-y-2.5">
                        {p.inclusions.map((inc, idx) => (
                          <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
                            <Check size={14} strokeWidth={1.75} className="mt-1 shrink-0 text-gilded-700" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {p.exclusions.length > 0 ? (
                      <div>
                        <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-ink/45">
                          {t.notIncluded}
                        </span>
                        <ul className="mt-4 space-y-2.5">
                          {p.exclusions.map((exc, idx) => (
                            <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink/55">
                              <XIcon size={14} strokeWidth={1.5} className="mt-1 shrink-0 text-ink/35" />
                              <span>{exc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="rounded-card border-l-2 border-gilded bg-cream/70 p-4">
                      <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700">
                        {p.permit.title}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.permit.body}</p>
                    </div>

                    <div>
                      <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700">
                        {t.perfectFor}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.perfectFor}</p>
                    </div>

                    <div>
                      <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700">
                        {t.timeline}
                      </span>
                      <dl className="mt-4 space-y-0">
                        {p.timeline.map((tl, idx, arr) => (
                          <div
                            key={tl.label}
                            className={
                              "flex justify-between gap-4 py-2 text-sm " +
                              (idx < arr.length - 1 ? "border-b border-ink/5" : "")
                            }
                          >
                            <dt className="text-ink/60">{tl.label}</dt>
                            <dd className="text-right text-ink/85">{tl.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-center font-tight text-[0.65rem] uppercase tracking-widest2 text-ink/45">
            {t.priceFooter}
          </p>
        </Container>
      </Section>

      {/* ─────────── Add-ons ─────────── */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="text-center">
            <Eyebrow className="!justify-center">{t.addOns.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-display-sm italic text-ink md:text-display-md">
              {t.addOns.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
              {t.addOns.body}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3) * 0.05}>
                <div className="group flex h-full flex-col rounded-card border border-ink/10 bg-cream-100 p-6 transition-all duration-500 ease-silk hover:-translate-y-1 hover:border-gilded/45 hover:shadow-[0_18px_45px_-28px_rgba(20,18,14,0.25)]">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700">
                      {a.name}
                    </span>
                    {a.tag ? (
                      <span className="rounded-full border border-gilded/40 px-2 py-0.5 text-[9px] uppercase tracking-widest2 text-gilded-700">
                        {a.tag}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{a.description}</p>
                  <div className="mt-auto flex items-baseline justify-between gap-3 pt-5">
                    <div>
                      <span className="font-display text-2xl italic text-ink">AED {formatPrice(a.price.AED)}</span>
                      <span className="ml-2 font-tight text-[0.65rem] uppercase tracking-widest2 text-ink/55">
                        {a.unit}
                      </span>
                    </div>
                    <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-ink/45">
                      ≈ USD {formatPrice(a.price.USD)}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─────────── Comparison table ─────────── */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="text-center">
            <Eyebrow className="!justify-center">{t.comparison.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-display-sm italic text-ink md:text-display-md">
              {t.comparison.title}
            </h2>
          </div>

          <div className="mt-14 overflow-x-auto rounded-card border border-ink/10 bg-cream-100">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/15">
                  <th className="w-[34%] py-5 pl-6 pr-4 font-tight text-[0.65rem] uppercase tracking-widest2 text-ink/45">
                    {t.comparison.detail}
                  </th>
                  {packages.map((p) => (
                    <th
                      key={p.tier}
                      className={
                        "py-5 px-4 align-top " +
                        (p.featured ? "bg-gilded/[0.06] border-x border-gilded/25" : "")
                      }
                    >
                      <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700">
                        {p.name}
                      </span>
                      <span className="mt-1 block font-display text-sm italic text-ink/65">
                        {t.comparison.fromLabel} {formatPrice(p.priceFrom.AED)}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((g) => (
                  <Fragment key={g.category}>
                    <tr className="border-t border-gilded/20 bg-cream">
                      <td
                        colSpan={4}
                        className="py-3 pl-6 pr-4 font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700"
                      >
                        {g.category}
                      </td>
                    </tr>
                    {g.rows.map((r) => (
                      <tr key={g.category + r.label} className="border-b border-ink/5 last:border-b-0">
                        <td className="py-3 pl-6 pr-4 text-sm text-ink/85">{r.label}</td>
                        <td className="px-4 py-3 text-center text-sm">
                          <ValueCell value={r.intimate} />
                        </td>
                        <td className="bg-gilded/[0.06] border-x border-gilded/25 px-4 py-3 text-center text-sm">
                          <ValueCell value={r.signature} />
                        </td>
                        <td className="px-4 py-3 text-center text-sm">
                          <ValueCell value={r.regalia} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* ─────────── Permit guide ─────────── */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="text-center">
            <Eyebrow className="!justify-center">{t.permitsGuide.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-display-sm italic text-ink md:text-display-md">
              {t.permitsGuide.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
              {t.permitsGuide.body}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {permits.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06}>
                <div className="relative h-full rounded-card border border-ink/10 bg-cream-100 p-7 transition-colors duration-500 hover:border-gilded/40">
                  <span aria-hidden className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gilded to-transparent" />
                  <span className="font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700">
                    {p.title}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-ink/80">{p.body}</p>
                  <p className="mt-5 border-l-2 border-gilded/50 bg-cream/70 p-3 pl-4 text-xs leading-relaxed text-ink/65">
                    {p.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─────────── Booking process ─────────── */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="text-center">
            <Eyebrow className="!justify-center">{t.process.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-display-sm italic text-ink md:text-display-md">
              {t.process.title}
            </h2>
          </div>

          <div className="relative mt-16">
            {/* Horizontal connector line (lg+) */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gilded/40 to-transparent lg:block"
            />
            <ol className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {processSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <li className="flex flex-col items-start">
                    <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-gilded/40 bg-cream font-display text-2xl italic text-gilded-700">
                      {s.n}
                    </span>
                    <span className="mt-5 font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700">
                      {s.title}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* ─────────── Trust stats ─────────── */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="relative rounded-card border border-ink/10 bg-cream-100 px-6 py-10 md:py-12">
            <span aria-hidden className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-gilded/70 to-transparent" />
            <span aria-hidden className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-gilded/40 to-transparent" />
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {trustStats.map((tStat, i) => (
                <div
                  key={tStat.label}
                  className={
                    "flex flex-col items-center text-center " +
                    // Vertical dividers between cells on lg+
                    (i % 6 !== 0 ? "lg:border-l lg:border-ink/10" : "")
                  }
                >
                  <span className="font-display text-4xl italic text-gilded-700 md:text-5xl">{tStat.value}</span>
                  <span className="mt-2 font-tight text-[0.65rem] uppercase tracking-widest2 text-ink/60">
                    {tStat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ─────────── FAQ ─────────── */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="text-center">
            <Eyebrow className="!justify-center">{t.faq.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-display-sm italic text-ink md:text-display-md">
              {t.faq.title}
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-card border border-ink/10 bg-cream-100 px-6 py-2 md:px-10">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className={
                  "group py-5 " + (i < faqs.length - 1 ? "border-b border-ink/10" : "")
                }
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-ink transition-colors hover:text-gilded-700 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-lg italic leading-snug md:text-xl">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gilded/40 text-gilded-700 transition-all duration-500 ease-silk group-open:rotate-45 group-open:border-gilded group-open:bg-gilded/10">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─────────── Closing CTA ─────────── */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="relative overflow-hidden rounded-card border border-gilded/30 bg-gradient-to-br from-cream-100 via-cream-100 to-cream px-8 py-16 text-center md:px-16 md:py-20">
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gold-foil opacity-30" />
            <span aria-hidden className="absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-gilded to-transparent" />
            <span aria-hidden className="absolute inset-x-20 bottom-0 h-px bg-gradient-to-r from-transparent via-gilded/60 to-transparent" />

            <div className="relative mx-auto max-w-2xl">
              <Eyebrow className="!justify-center">{t.cta.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-display-sm italic text-ink md:text-display-md">
                {t.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink/70">
                {t.cta.body}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button href="/contact" variant="gilded" size="lg" withArrow>
                  {t.cta.button}
                </Button>
                <Link
                  href={{ pathname: "/services/[slug]", params: { slug: "proposals" } }}
                  className="font-tight text-[0.65rem] uppercase tracking-widest2 text-gilded-700 transition-colors hover:text-gilded"
                >
                  {t.cta.back}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
