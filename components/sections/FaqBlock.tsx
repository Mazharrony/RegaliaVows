import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import type { FaqItem } from "@/lib/seo";

/**
 * Visible FAQ block paired with FAQPage JSON-LD. Google's structured-data
 * policy requires every Q&A in the schema to be readable on the page —
 * keep this component and the `faqPageLd(items)` call in lock-step.
 *
 * Uses native <details>/<summary> so the page works without JS, search
 * engines can read the answer text without expanding, and we get free
 * keyboard accessibility.
 */
export function FaqBlock({
  eyebrow = "Frequently asked",
  heading = "Before you write.",
  items,
}: {
  eyebrow?: string;
  heading?: string;
  items: readonly FaqItem[];
}) {
  if (!items.length) return null;
  return (
    <Section theme="pearl">
      <Container size="narrow">
        <Reveal>
          <Eyebrow className="!text-gilded-800">{eyebrow}</Eyebrow>
          <h2 className="display mt-8 text-display-md italic text-ink">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {items.map((it, i) => (
              <li key={i}>
                <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <h3 className="font-display text-xl italic text-ink md:text-2xl">
                      {it.q}
                    </h3>
                    <span
                      aria-hidden
                      className="mt-1 inline-block shrink-0 font-display text-2xl italic text-gilded-700 transition-transform duration-500 ease-silk group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-ink/80">
                    {it.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
