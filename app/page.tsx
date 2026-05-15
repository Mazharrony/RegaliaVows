import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BeyondTheAisle } from "@/components/sections/BeyondTheAisle";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { site } from "@/lib/site";
import { faqPageLd, jsonLd, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = {
  // Override the root `title.default` with a keyword-led home title. We do not
  // use the template here because the home page should not append "· Regalia
  // Vows" twice. `title.absolute` bypasses the template.
  title: {
    absolute: "Luxury Wedding Planner in Dubai · Bespoke Weddings & Proposals — Regalia Vows",
  },
  description:
    "Regalia Vows is a private commissioning house for luxury weddings, cinematic proposals and the private events that follow — composed from Dubai, staged across the UAE and worldwide.",
  alternates: { canonical: "/" },
  openGraph: {
    url: site.url,
    title: "Luxury Wedding Planner in Dubai · Regalia Vows",
    description:
      "Bespoke weddings, cinematic proposals and the private occasions that follow — composed from Dubai, staged worldwide.",
  },
};

const homeLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/#webpage`,
  url: site.url,
  name: "Luxury Wedding Planner in Dubai · Regalia Vows",
  description:
    "Regalia Vows is a private commissioning house for luxury weddings, cinematic proposals and the private events that follow.",
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#business` },
  inLanguage: site.locale,
  primaryImageOfPage: { "@type": "ImageObject", url: site.ogImage },
};

const homeFaqs: readonly FaqItem[] = [
  {
    q: "Where is Regalia Vows based?",
    a: "Regalia Vows is a by-appointment studio at Al Fahidi Plaza, Bur Dubai, composing weddings and private events across the UAE and worldwide. Visits are by introduction only.",
  },
  {
    q: "What does a luxury wedding in Dubai cost with Regalia Vows?",
    a: "Bespoke wedding design and direction begins at AED 750,000, with full production typically opening from AED 1.8M. Every commission is custom-priced after a private studio meeting and the treatment that follows.",
  },
  {
    q: "Do you plan destination weddings outside the UAE?",
    a: "Yes. We have staged destination weddings in Como, Marrakech, Hampi, Tuscany, the Amalfi coast and the Hatta cliffs. Directors embed at the destination for ten to twenty days before the celebration.",
  },
  {
    q: "Beyond weddings, what else do you compose?",
    a: "Cinematic proposals, engagements, vow renewals, anniversary galas, brand launches, corporate galas and family-office commissions \u2014 the same craft applied to the moments a couple, a brand or a private office wants to remember.",
  },
  {
    q: "How far in advance should we engage Regalia Vows?",
    a: "Twelve to eighteen months for weddings; six to twelve weeks for private and corporate commissions; four to twelve weeks for proposals. We accept a limited number of commissions per season so one senior director carries each file end-to-end.",
  },
  {
    q: "How do we begin?",
    a: "Through a private introduction at the studio or by video call. There is no deck and no pitch \u2014 only the question of whether we are right for one another. Enquiries are answered within one working day.",
  },
];

const homeFaqLd = faqPageLd(homeFaqs);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(homeLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(homeFaqLd)}
      />
      <HomeHero />
      <ManifestoSection />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSection />
      <BeyondTheAisle />
      <TestimonialsSection />
      <FaqBlock
        eyebrow="Frequently asked"
        heading="The questions we hear most often."
        items={homeFaqs}
      />
      <CtaSection />
    </>
  );
}
