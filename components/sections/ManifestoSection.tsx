import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";

const pillars = [
  {
    n: "01",
    title: "Couture Design",
    body: "Every wedding is conceived as a single piece — moodboards, mise-en-place, florals and fashion drawn from the same palette.",
  },
  {
    n: "02",
    title: "Concierge Hospitality",
    body: "A dedicated Regalia Vows lead, multilingual guest care and on-the-day choreography that anticipates every gesture.",
  },
  {
    n: "03",
    title: "Sovereign Discretion",
    body: "NDAs, secured logistics and a black-book of trusted artisans across the GCC, Mediterranean and South Asia.",
  },
];

export function ManifestoSection() {
  return (
    <Section id="manifesto" theme="ink" className="grain">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Eyebrow>The Manifesto</Eyebrow>
            <div className="mt-10 max-w-md">
              <p className="font-tight text-sm leading-relaxed text-pearl/80">
                Regalia Vows was founded on a belief that the most extraordinary
                weddings are not produced — they are composed. We work with a
                limited number of couples each year, with the time, devotion and
                obsession their day deserves.
              </p>
            </div>

            {/* Vertical editorial portrait */}
            <div className="relative mt-12 hidden overflow-hidden rounded-card border border-pearl/10 lg:block">
              <div
                aria-hidden
                className="aspect-[3/4] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1606490194859-07c18c9f0968?auto=format&fit=crop&w=1200&q=75)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(11,11,13,0.85)_100%)]" />
              <span className="absolute bottom-6 left-6 text-eyebrow uppercase tracking-widest2 text-gilded">
                <span className="mr-3 inline-block h-px w-8 bg-gold-flow align-middle" />
                Composed, not produced
              </span>
            </div>
          </Reveal>

          <SplitText
            as="h2"
            text="A wedding is a private cinema. We write, score and stage it for two."
            className="display max-w-[22ch] text-display-lg italic"
            stagger={0.06}
          />
        </div>

        <div className="hairline mt-24" />

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <span className="font-display text-5xl italic text-gold">{p.n}</span>
                <h3 className="font-display text-2xl italic">{p.title}</h3>
                <p className="text-sm leading-relaxed text-pearl/80">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
