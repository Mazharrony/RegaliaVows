import { HomeHero } from "@/components/sections/HomeHero";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PressMarquee } from "@/components/sections/PressMarquee";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ManifestoSection />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSection />
      <PressMarquee />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
