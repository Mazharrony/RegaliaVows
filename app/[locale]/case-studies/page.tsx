import { Suspense } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudiesGrid } from "./CaseStudiesGrid";
import { AlbumGallery } from "@/components/sections/AlbumGallery";
import { getGalleryAlbums } from "@/lib/gallery";
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
  archiveEyebrow: string;
  archiveTitle: string;
}> = {
  en: {
    heroEyebrow: "The Case Studies",
    heroTitle: "Recent compositions.",
    heroDescription:
      "A discreet selection. Weddings remain the primary craft; filter through to see the occasions our clients invite us back to compose.",
    archiveEyebrow: "Regalia Vows",
    archiveTitle: "Albums from the archive.",
  },
  ru: {
    heroEyebrow: "Кейсы",
    heroTitle: "Недавние композиции.",
    heroDescription:
      "Деликатная подборка. Свадьбы остаются главным ремеслом; пролистайте фильтры, чтобы увидеть события, на которые клиенты приглашают нас вновь.",
    archiveEyebrow: "Regalia Vows",
    archiveTitle: "Альбомы из архива.",
  },
};

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;
  const albums = getGalleryAlbums();
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
      <AlbumGallery
        albums={albums}
        locale={locale}
        intro={{ eyebrow: t.archiveEyebrow, title: t.archiveTitle }}
      />
    </>
  );
}
