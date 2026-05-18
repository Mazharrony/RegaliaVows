import { Link } from "@/lib/i18n/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { site } from "@/lib/site";
import { localePageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/contact", {
  title: "Begin Your Enquiry",
  description:
    "Tell us about you, your partner, and the celebration you have always imagined. We accept a limited number of commissions each year.",
});

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  corporateLink: string;
  conciergeLabel: string;
  phoneLabel: string;
  studioLabel: string;
}> = {
  en: {
    heroEyebrow: "Private Enquiry",
    heroTitle: "Begin the conversation.",
    heroDescription:
      "A four-step note to Regalia Vows. Your details remain entirely confidential and reach only the founders.",
    corporateLink: "Briefing a brand, corporate or private event →",
    conciergeLabel: "Concierge",
    phoneLabel: "By Telephone",
    studioLabel: "Studio",
  },
  ru: {
    heroEyebrow: "Приватный запрос",
    heroTitle: "Начнём разговор.",
    heroDescription:
      "Записка в четыре шага к Regalia Vows. Ваши данные остаются полностью конфиденциальными и достигают только основателей.",
    corporateLink: "Бренд, корпоративное или частное мероприятие →",
    conciergeLabel: "Консьерж",
    phoneLabel: "По телефону",
    studioLabel: "Студия",
  },
};

export default async function ContactPage({
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
        <Container size="narrow">
          <div className="flex justify-end">
            <Link
              href="/contact/corporate"
              data-cursor="link"
              className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/70 transition-colors hover:text-gilded-600"
            >
              {t.corporateLink}
            </Link>
          </div>

          <EnquiryForm />

          <div className="hairline mt-32 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <p className="eyebrow !text-gilded-800">{t.conciergeLabel}</p>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-3 block font-display text-2xl italic text-ink hover:text-gilded-600"
              >
                {site.contact.email}
              </a>
            </div>
            <div>
              <p className="eyebrow !text-gilded-800">{t.phoneLabel}</p>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="mt-3 block font-display text-2xl italic text-ink hover:text-gilded-600"
              >
                {site.contact.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow !text-gilded-800">{t.studioLabel}</p>
              <p className="mt-3 font-display text-2xl italic text-ink">
                {site.contact.address}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
