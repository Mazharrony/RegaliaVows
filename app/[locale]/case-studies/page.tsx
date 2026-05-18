import { Suspense } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudiesGrid } from "./CaseStudiesGrid";
import { GallerySection } from "@/components/sections/GallerySection";
import { getGalleryImages } from "@/lib/gallery";
import { localePageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/case-studies", {
  title: "Case Studies",
  description:
    "A discreet selection of recent compositions by Regalia Vows — weddings first, with the corporate, brand, private and hospitality work our clients ask for next.",
});

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
}> = {
  en: {
    heroEyebrow: "The Case Studies",
    heroTitle: "Recent compositions.",
    heroDescription:
      "A discreet selection. Weddings remain the primary craft; filter through to see the occasions our clients invite us back to compose.",
  },
  ru: {
    heroEyebrow: "Кейсы",
    heroTitle: "Недавние композиции.",
    heroDescription:
      "Деликатная подборка. Свадьбы остаются главным ремеслом; пролистайте фильтры, чтобы увидеть события, на которые клиенты приглашают нас вновь.",
  },
};

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;
  const images = getGalleryImages();
  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        description={t.heroDescription}
      />
      <Suspense fallback={null}>
        <CaseStudiesGrid />
      </Suspense>
      <GallerySection images={images} />
    </>
  );
}
