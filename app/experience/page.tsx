import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Experience — The Process",
  description:
    "Seven acts from first conversation to morning after. A cinematic process honed across more than three hundred weddings.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="The Experience"
        title="Seven acts. One love story."
        description="Each commission unfolds across seven slow, deliberate movements. We do not rush composition."
      />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
