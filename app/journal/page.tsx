import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Regalia Vows — on design, weddings, hospitality, and the slow craft of celebration.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from Regalia Vows."
      />

      <Section theme="ink" className="!pt-0">
        <Container>
          <EmptyState
            eyebrow="Forthcoming"
            title="The Journal returns soon."
            body="Slow notes on design, weddings, hospitality and the quiet craft of celebration. We would rather write a few, well, than many at speed."
            cta={{ label: "Return to the home page", href: "/" }}
          />
        </Container>
      </Section>
    </>
  );
}
