import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CrownMark } from "@/components/ui/CrownMark";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

export function CtaSection() {
  return (
    <Section id="cta" theme="pearl" className="relative grain overflow-hidden">
      {/* Background photograph — softened to a warm cream watermark */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=70)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(250,246,238,0.55)_0%,rgba(250,246,238,0.82)_50%,rgba(239,231,210,0.95)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gold-foil opacity-60" aria-hidden />

      {/* Oversized regal crown watermark behind the headline */}
      <CrownMark className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-[58%] opacity-[0.09] md:h-[560px] md:w-[560px]" />

      <Container size="narrow" className="relative text-center">
        <Reveal>
          <Eyebrow className="!justify-center">Begin the Conversation</Eyebrow>
        </Reveal>

        <SplitText
          as="h2"
          text="Begin the conversation."
          className="display mx-auto mt-10 max-w-[18ch] text-display-lg italic text-ink"
          stagger={0.06}
        />

        <Reveal delay={0.4}>
          <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-ink/80">
            We accept a limited number of commissions each year. Tell us about
            you, your partner, and the celebration you have always imagined.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="gilded" size="lg" withArrow>
              Submit Private Enquiry
            </Button>
            <Button href="/experience" variant="outline" size="lg" withArrow>
              See the Process
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
