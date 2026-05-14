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

const values = [
  ["12", "Weddings per year, no more."],
  ["38", "Languages spoken across our team."],
  ["27", "Countries staged in."],
  ["100%", "Of celebrations led by a founding director."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Regalia Vows"
        title="A house of two, devoted to your one."
        description="Founded in 2014 by Liyana Aurelis and Idris Vey, Regalia Vows began as a single hand-bound wedding book for a friend. Twelve years later, we remain that small — and that obsessive."
      />

      <Section theme="pearl">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <Eyebrow className="!text-gilded-800">The Founders</Eyebrow>
              <div className="mt-10 aspect-[4/5] w-full overflow-hidden rounded-card bg-gradient-to-br from-[#e8c9c2] via-[#c9a96a] to-[#5c6a4a]" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display text-3xl italic leading-snug text-ink md:text-4xl">
                &ldquo;We do not stage events. We compose private worlds — for the
                two people standing in the middle of them.&rdquo;
              </p>
              <p className="mt-8 text-base leading-relaxed text-ink/85">
                Liyana trained as an architect in Paris before founding
                Regalia Vows in Dubai. Idris was a film producer based between
                Mumbai and London. Together they bring two disciplines to
                every commission: architecture of space, and direction of story.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                Today we lead a team of fourteen — designers, florists,
                producers, fashion liaisons and a guest-relations concierge —
                across studios in DIFC and Como.
              </p>
            </Reveal>
          </div>

          <div className="hairline mt-24 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
            {values.map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.08}>
                <div>
                  <p className="font-display text-6xl italic text-gilded-600">{k}</p>
                  <p className="mt-4 text-sm uppercase tracking-widest2 text-ink/75">
                    {v}
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
