import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { localePageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/experience", {
  title: "Experience — The Process",
  description:
    "Seven slow, deliberate acts — from the first conversation to the morning after.",
});

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, {
  eyebrow: string;
  title: string;
  description: string;
}> = {
  en: {
    eyebrow: "The Experience",
    title: "Seven acts. One love story.",
    description:
      "Each commission unfolds across seven slow, deliberate movements. We do not rush composition.",
  },
  ru: {
    eyebrow: "Опыт",
    title: "Семь актов. Одна история любви.",
    description:
      "Каждый заказ разворачивается в семи медленных, осознанных движениях. Мы не торопим композицию.",
  },
};

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;
  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
      />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
