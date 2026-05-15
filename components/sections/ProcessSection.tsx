import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

const acts = [
  {
    n: "I",
    title: "Discovery",
    note: "Champagne, three hours, no decisions.",
  },
  { n: "II", title: "Vision", note: "The treatment — written like a film." },
  { n: "III", title: "Design", note: "Mood, palette, florals, fashion." },
  { n: "IV", title: "Curation", note: "Artisans, venues, contracts." },
  { n: "V", title: "Rehearsal", note: "Choreography down to the second." },
  { n: "VI", title: "Celebration", note: "On the day, we are invisible." },
  { n: "VII", title: "Afterglow", note: "Film, archive, anniversaries." },
];

export function ProcessSection() {
  return (
    <Section id="process" theme="ink" className="grain">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-2">
          <Reveal>
            <Eyebrow>The Process</Eyebrow>
            <h2 className="display mt-8 text-display-lg italic">
              Seven acts. One love story.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-pearl/80 md:ml-auto">
              From the first conversation to the morning after — a slow,
              cinematic process, rehearsed in private.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start lg:gap-16">
          {/* Sticky editorial portrait */}
          <Reveal className="hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-card border border-pearl/10">
              <div
                aria-hidden
                className="aspect-[3/4] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1200&q=75)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(11,11,13,0.85)_100%)]" />
              <span className="absolute bottom-6 left-6 text-eyebrow uppercase tracking-widest2 text-gilded">
                <span className="mr-3 inline-block h-px w-8 bg-gold-flow align-middle" />
                Seven acts
              </span>
            </div>
          </Reveal>

          <ul className="divide-y divide-pearl/10 border-y border-pearl/10">
            {acts.map((a, i) => (
              <Reveal key={a.n} delay={i * 0.04} as="li">
                <div className="group grid grid-cols-[64px_1fr_auto] items-center gap-5 py-6 transition-colors md:grid-cols-[96px_1fr_auto] md:py-8">
                  <span className="font-display text-3xl italic text-gold md:text-4xl">
                    {a.n}
                  </span>
                  <h3 className="font-display text-2xl italic text-pearl transition-all duration-500 ease-silk group-hover:translate-x-2 group-hover:text-gilded md:text-4xl">
                    {a.title}
                  </h3>
                  <span className="hidden text-right text-sm italic text-pearl/85 md:block">
                    {a.note}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
