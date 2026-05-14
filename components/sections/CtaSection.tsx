import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

export function CtaSection() {
  return (
    <Section id="cta" theme="ink" className="relative grain overflow-hidden">
      {/* Background photograph */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=70)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,13,0.6)_0%,rgba(11,11,13,0.85)_50%,rgba(11,11,13,0.95)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gold-foil opacity-50" aria-hidden />
      <Container size="narrow" className="relative text-center">
        <Reveal>
          <Eyebrow className="!justify-center">Begin the Conversation</Eyebrow>
        </Reveal>

        <SplitText
          as="h2"
          text="Six weddings remain in our calendar this season."
          className="display mx-auto mt-10 max-w-[18ch] text-display-lg italic"
          stagger={0.06}
        />

        <Reveal delay={0.4}>
          <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-pearl/85">
            We accept a limited number of commissions each year. Tell us about
            you, your partner, and the celebration you have always imagined.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="gilded" size="lg" withArrow>
              Submit Private Enquiry
            </Button>
            <Button href="/experience" variant="ghost" size="lg" withArrow>
              See the Process
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
