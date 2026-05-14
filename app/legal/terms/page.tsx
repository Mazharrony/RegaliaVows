import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of engagement." />
      <Section theme="pearl" className="!pt-0">
        <Container size="narrow">
          <div className="space-y-6 text-base leading-relaxed text-ink/80">
            <p>
              These terms govern the use of regaliavows.com. Specific
              commissioning terms are set out in each engagement contract.
            </p>
            <p>
              All imagery, written content, design language and proprietary
              methodology on this site remain the intellectual property of
              Regalia Vows FZ-LLC.
            </p>
            <p>
              Enquiries do not constitute a contract. A commission begins only
              upon countersignature of an engagement letter and receipt of the
              initial retainer.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
