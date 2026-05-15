import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CrownMark } from "@/components/ui/CrownMark";
import { Reveal } from "@/components/motion/Reveal";

type StepLike = { step: string; title: string; body: string };
type SignatureLike = { title: string; body: string };

/**
 * Long-form narrative philosophy block — eyebrow + display heading + body.
 * A subtle crown crest sits behind the type.
 */
export function PhilosophyBlock({
  eyebrow = "The Philosophy",
  heading,
  body,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
}) {
  return (
    <Section theme="pearl" className="relative overflow-hidden">
      <CrownMark className="absolute right-[-6%] top-[10%] h-[360px] w-[360px] opacity-[0.06] md:h-[480px] md:w-[480px]" />
      <Container>
        <div className="relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <Eyebrow className="!text-gilded-800">{eyebrow}</Eyebrow>
            <h2 className="display mt-8 text-display-md italic text-ink">
              {heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-[1.85] text-ink/80 md:text-xl">
              {body}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/**
 * 2x2 (or responsive 1/2/4) grid of capability cards — title + body.
 */
export function SignaturesGrid({
  eyebrow = "Signatures",
  heading,
  intro,
  items,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: readonly SignatureLike[];
}) {
  return (
    <Section theme="pearl">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-2">
          <Reveal>
            <Eyebrow className="!text-gilded-800">{eyebrow}</Eyebrow>
            <h2 className="display mt-8 text-display-md italic text-ink">
              {heading}
            </h2>
          </Reveal>
          {intro && (
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-ink/75 md:ml-auto">
                {intro}
              </p>
            </Reveal>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-ink/10 border border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col gap-5 bg-cream-50 p-8 transition-colors duration-700 ease-silk hover:bg-cream-100 md:p-10">
                <span className="font-display text-3xl italic text-gilded-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl italic text-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">{item.body}</p>
                <span className="mt-auto h-px w-10 bg-gilded/50 transition-all duration-500 ease-silk group-hover:w-20" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/**
 * Four-step process timeline — vertical on mobile, horizontal at lg+.
 */
export function ProcessTimeline({
  eyebrow = "The Process",
  heading,
  steps,
}: {
  eyebrow?: string;
  heading: string;
  steps: readonly StepLike[];
}) {
  return (
    <Section theme="pearl" className="bg-cream-100">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow className="!text-gilded-800">{eyebrow}</Eyebrow>
            <h2 className="display mt-8 text-display-md italic text-ink">
              {heading}
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-4 lg:gap-8">
          {/* Horizontal hairline on desktop */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-gilded/40 to-transparent lg:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="relative flex flex-col items-start gap-5">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gilded/40 bg-cream font-display text-lg italic text-gilded-800">
                  {s.step}
                </span>
                <h3 className="font-display text-2xl italic text-ink md:text-3xl">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/**
 * Wrapping container so detail pages can compose blocks consistently.
 * (Provided for callers that want to insert custom blocks between the
 * standard sections — none used today, but a clean affordance.)
 */
export function DetailSection({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
