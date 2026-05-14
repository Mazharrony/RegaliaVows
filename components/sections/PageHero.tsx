import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  theme?: "ink" | "pearl";
  className?: string;
};

export function PageHero({ eyebrow, title, description, theme = "ink", className }: Props) {
  return (
    <Section theme={theme} className={cn("!pt-44 !pb-24 md:!pt-52 md:!pb-32", className)}>
      <div className="pointer-events-none absolute inset-0 bg-gold-foil opacity-30" aria-hidden />
      <Container className="relative">
        <Reveal>
          <Eyebrow className={theme === "pearl" ? "!text-gilded-800" : ""}>{eyebrow}</Eyebrow>
        </Reveal>
        <SplitText
          as="h1"
          text={title}
          className={cn(
            "display mt-8 max-w-[16ch] text-display-xl italic",
            theme === "pearl" ? "text-ink" : "text-pearl"
          )}
          stagger={0.07}
        />
        {description && (
          <Reveal delay={0.4}>
            <p
              className={cn(
                "mt-10 max-w-2xl text-lg leading-relaxed",
                theme === "pearl" ? "text-ink/85" : "text-pearl/85"
              )}
            >
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
