import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press and editorial enquiries for Regalia Vows — directed to the founders’ concierge.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press & Editorial"
        title="Regalia Vows, in print."
      />
      <Section theme="ink" className="!pt-0">
        <Container>
          <EmptyState
            eyebrow="Forthcoming"
            title="Features will be archived here as they are published."
            body="In the meantime, press, editorial and partnership enquiries are warmly received by the founders’ concierge."
            cta={{
              label: `Write to ${site.contact.email}`,
              href: `mailto:${site.contact.email}`,
              external: true,
            }}
          />
        </Container>
      </Section>
    </>
  );
}
