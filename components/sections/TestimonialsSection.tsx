import { getLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Locale } from "@/lib/i18n/config";

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, { eyebrow: string; quote: string; footer: string }> = {
  en: {
    eyebrow: "In Their Words",
    quote:
      "Our couples write to us privately. A small selection of letters is shared, with permission, on request.",
    footer: "Published with permission",
  },
  ru: {
    eyebrow: "Их словами",
    quote:
      "Наши пары пишут нам приватно. Небольшая выборка писем делится — с разрешения, по запросу.",
    footer: "Опубликовано с разрешения",
  },
};

/**
 * Quiet, single-pane testimonial surface. Real quotes are reinstated here
 * once couples have given permission for them to be shared publicly.
 */
export async function TestimonialsSection() {
  const locale = (await getLocale()) as Locale;
  const t = copy[locale] ?? copy.en;
  return (
    <Section id="testimonials" theme="pearl" className="relative overflow-hidden">
      {/* Soft warm spotlight — subtle gilded vignette on cream paper. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_50%,rgba(214,161,64,0.08)_0%,rgba(239,231,210,0.55)_100%)]" />
      <Container size="narrow" className="relative">
        <div className="text-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <span
            aria-hidden
            className="mt-12 block font-display text-[10rem] leading-none text-gilded/40"
          >
            &ldquo;
          </span>
        </div>

        <div className="mt-[-3rem]">
          <p className="text-center font-display text-3xl italic leading-snug text-ink/90 md:text-5xl">
            {t.quote}
          </p>
          <p className="mt-12 text-center font-tight text-eyebrow uppercase tracking-widest2 text-ink/65">
            <span className="mr-3 inline-block h-px w-8 bg-gilded align-middle" />
            {t.footer}
          </p>
        </div>
      </Container>
    </Section>
  );
}
