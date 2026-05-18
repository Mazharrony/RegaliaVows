import { getLocale } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BgImage } from "@/components/ui/BgImage";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { work } from "@/lib/work";
import type { Locale } from "@/lib/i18n/config";

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, {
  eyebrow: string;
  headlineTop: string;
  headlineBottom: string;
  lede: string;
  view: string;
  archive: string;
}> = {
  en: {
    eyebrow: "Selected Work",
    headlineTop: "The recent",
    headlineBottom: "compositions.",
    lede:
      "A small selection from the studio archive. The full book is opened in private, on request, after an introductory conversation.",
    view: "View",
    archive: "Open the full archive",
  },
  ru: {
    eyebrow: "Избранные работы",
    headlineTop: "Последние",
    headlineBottom: "композиции.",
    lede:
      "Небольшая выборка из архива студии. Полная книга открывается в частном порядке, по запросу, после знакомства.",
    view: "Смотреть",
    archive: "Открыть полный архив",
  },
};

/**
 * Featured-work grid for the homepage. Shows the four most recent compositions
 * in an asymmetric editorial layout, then points to the full archive.
 */
export async function FeaturedWork() {
  const locale = (await getLocale()) as Locale;
  const t = copy[locale] ?? copy.en;
  const featured = work.slice(0, 4);

  return (
    <Section id="featured-work" theme="pearl">
      <Container size="wide">
        <div className="grid items-end gap-10 md:grid-cols-2">
          <Reveal>
            <Eyebrow className="!text-gilded-800">{t.eyebrow}</Eyebrow>
            <h2 className="display mt-8 text-display-lg italic text-ink">
              {t.headlineTop}
              <br />
              {t.headlineBottom}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-ink/85 md:ml-auto">
              {t.lede}
            </p>
          </Reveal>
        </div>

        {featured.length > 0 && (
          <div className="mt-16 grid grid-cols-12 gap-6">
            {featured.map((w, i) => {
              const spans = [
                "col-span-12 md:col-span-7 aspect-[4/3] md:aspect-[16/11]",
                "col-span-12 md:col-span-5 aspect-[4/3] md:aspect-[4/5]",
                "col-span-12 md:col-span-5 aspect-[4/3] md:aspect-[4/5]",
                "col-span-12 md:col-span-7 aspect-[4/3] md:aspect-[16/11]",
              ];
              return (
                <Reveal key={w.slug} delay={(i % 2) * 0.08} className={spans[i] ?? spans[0]}>
                  <Link
                    href={{ pathname: "/case-studies/[slug]", params: { slug: w.slug } }}
                    data-cursor="view"
                    data-cursor-label="Open"
                    className="group relative block h-full w-full overflow-hidden rounded-card border border-ink/10 transition-colors duration-700 ease-silk hover:border-gilded/50"
                  >
                    <BgImage
                      src={w.image}
                      alt={`${w.title} — ${w.style}, ${w.place}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                      className="transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.06]"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${w.palette} opacity-30 mix-blend-soft-light`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.5)_65%,rgba(0,0,0,0.85)_100%)]" />
                    <div className="dark-panel relative flex h-full flex-col justify-between p-8 text-pearl md:p-10">
                      <div className="flex items-center justify-between">
                        <span className="eyebrow !text-pearl/85">{w.style}</span>
                        <span className="eyebrow !text-pearl/85">{w.year}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-3xl italic text-white md:text-5xl">
                          {w.title}
                        </h3>
                        <p className="mt-2 text-sm text-pearl/85">{w.place}</p>
                        <span className="mt-5 inline-flex items-center gap-3 text-eyebrow uppercase tracking-widest2 text-gilded">
                          <span className="h-px w-10 bg-gilded transition-all duration-500 ease-silk group-hover:w-20" />
                          {t.view}
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}

        <Reveal delay={0.15}>
          <Link
            href="/case-studies"
            data-cursor="link"
            data-cursor-label="Open"
            className="group mt-16 inline-flex items-center gap-3 font-tight text-eyebrow uppercase tracking-widest2 text-ink hover:text-gilded-800"
          >
            <span className="h-px w-12 bg-ink/40 transition-all duration-500 ease-silk group-hover:w-24" />
            {t.archive}
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
