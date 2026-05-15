import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Regalia Vows — Our Story",
  description:
    "Regalia Vows composes once-in-a-lifetime weddings for a private circle of couples, from Dubai.",
};

const principles = [
  {
    title: "Composition",
    body: "Every celebration is conceived as a single piece — moodboards, mise-en-place, florals, fashion and choreography drawn from the same palette.",
  },
  {
    title: "Discretion",
    body: "NDAs, secured logistics and a trusted black-book of artisans. We work quietly, and our clients remain unnamed unless they choose otherwise.",
  },
  {
    title: "Devotion",
    body: "A limited number of commissions each year, led personally by a founding director. We do not scale our attention; we choose where to give it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Regalia Vows"
        title="A small house, devoted to your one."
        description="Regalia Vows is a private commissioning house for weddings and the occasions that follow. We work with a deliberately small number of couples each year — with the time, devotion and obsession their day deserves."
      />

      <Section theme="pearl">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <Eyebrow className="!text-gilded-800">Our Philosophy</Eyebrow>
              <p className="mt-10 font-display text-3xl italic leading-snug text-ink md:text-4xl">
                &ldquo;We do not stage events. We compose private worlds — for
                the two people standing in the middle of them.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-ink/85">
                Regalia Vows began with a simple conviction: that the most
                extraordinary weddings are not produced — they are composed.
                Conceived in Dubai and carried to the venues, cities and
                countries our couples ask us to follow them to.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                The house remains small by design. The founders lead every
                commission personally, with a tight studio of designers,
                producers and concierge support behind them.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                On request, the same hand designs the corporate launches,
                galas, private celebrations and hospitality openings our
                clients ask us to compose next.
              </p>
            </Reveal>
          </div>

          <div className="hairline mt-24 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div>
                  <p className="font-display text-5xl italic text-gilded-600">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-6 font-display text-2xl italic text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/85">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
