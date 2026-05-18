import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { site } from "@/lib/site";
import { localePageMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";

export const generateMetadata = localePageMetadata("/press", {
  title: "Press",
  description:
    "Press and editorial enquiries for Regalia Vows — directed to the founders’ concierge.",
});

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, {
  heroEyebrow: string;
  heroTitle: string;
  emptyEyebrow: string;
  emptyTitle: string;
  emptyBody: string;
  ctaLabel: (email: string) => string;
}> = {
  en: {
    heroEyebrow: "Press & Editorial",
    heroTitle: "Regalia Vows, in print.",
    emptyEyebrow: "Forthcoming",
    emptyTitle: "Features will be archived here as they are published.",
    emptyBody:
      "In the meantime, press, editorial and partnership enquiries are warmly received by the founders’ concierge.",
    ctaLabel: (email) => `Write to ${email}`,
  },
  ru: {
    heroEyebrow: "Пресса и редакции",
    heroTitle: "Regalia Vows в печати.",
    emptyEyebrow: "Скоро",
    emptyTitle: "Публикации будут собираться здесь по мере выхода.",
    emptyBody:
      "Пока же запросы прессы, редакций и партнёров с теплом принимает консьерж основателей.",
    ctaLabel: (email) => `Написать на ${email}`,
  },
};

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;
  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} />
      <Section theme="pearl" className="!pt-0">
        <Container>
          <EmptyState
            eyebrow={t.emptyEyebrow}
            title={t.emptyTitle}
            body={t.emptyBody}
            cta={{
              label: t.ctaLabel(site.contact.email),
              href: `mailto:${site.contact.email}`,
              external: true,
            }}
          />
        </Container>
      </Section>
    </>
  );
}
