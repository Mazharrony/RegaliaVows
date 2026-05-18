import { Link } from "@/lib/i18n/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CorporateEnquiryForm } from "@/components/sections/CorporateEnquiryForm";
import { site } from "@/lib/site";
import { localePageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/contact/corporate", {
  title: "Corporate & Private Events Enquiry",
  description:
    "Brief Regalia Vows on a brand launch, gala, conference, incentive trip or private commission. Treated with the same discretion as our weddings.",
});

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  weddingLink: string;
  conciergeLabel: string;
  phoneLabel: string;
  studioLabel: string;
}> = {
  en: {
    heroEyebrow: "Corporate & Private",
    heroTitle: "Brief us in confidence.",
    heroDescription:
      "For brand launches, galas, conferences, incentive programmes and private commissions. Treated with the same discretion as our weddings — and replied to personally by a founder.",
    weddingLink: "Wedding enquiry →",
    conciergeLabel: "Concierge",
    phoneLabel: "By Telephone",
    studioLabel: "Studio",
  },
  ru: {
    heroEyebrow: "Корпоративные и частные",
    heroTitle: "Брифуйте нас конфиденциально.",
    heroDescription:
      "Для запуска брендов, гала-вечеров, конференций, инсентив-программ и частных заказов. С той же деликатностью, что и наши свадьбы — личный ответ основателя.",
    weddingLink: "Свадебный запрос →",
    conciergeLabel: "Консьерж",
    phoneLabel: "По телефону",
    studioLabel: "Студия",
  },
};

export default async function CorporateContactPage({
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
              href="/contact"
              data-cursor="link"
              className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/70 transition-colors hover:text-gilded-600"
            >
              {t.weddingLink}
            </Link>
          </div>

          <CorporateEnquiryForm />

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
