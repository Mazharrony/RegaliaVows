import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Regalia Vows featured in Vogue Arabia, Harper's Bazaar, Condé Nast Traveller, AD Middle East and Tatler.",
};

const press = [
  { outlet: "Vogue Arabia", title: "Regalia Vows: Composing Dubai's Most Discreet Weddings", year: 2025 },
  { outlet: "Harper's Bazaar", title: "Inside a Bvlgari Resort Wedding by Regalia Vows", year: 2025 },
  { outlet: "Condé Nast Traveller", title: "Where the World's Most Private Couples Are Marrying", year: 2024 },
  { outlet: "AD Middle East", title: "The Architect of Aisles — Liyana Aurelis", year: 2024 },
  { outlet: "Tatler", title: "Dubai's New Old-World Wedding Houses", year: 2023 },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="In the Press"
        title="Regalia Vows, in print."
      />
      <Section theme="ink" className="!pt-0">
        <Container>
          <ul className="divide-y divide-pearl/10 border-y border-pearl/10">
            {press.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} as="li">
                <div className="grid grid-cols-[1fr_auto] items-center gap-6 py-8 md:grid-cols-[200px_1fr_auto] md:py-10">
                  <span className="font-display text-2xl italic text-gilded">
                    {p.outlet}
                  </span>
                  <h3 className="hidden font-display text-2xl italic text-pearl md:block md:text-3xl">
                    {p.title}
                  </h3>
                  <span className="text-sm uppercase tracking-widest2 text-pearl/85">
                    {p.year}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
