import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy notice." />
      <Section theme="pearl" className="!pt-0">
        <Container size="narrow">
          <div className="prose-luxury space-y-6 text-base leading-relaxed text-ink/80">
            <p>
              Regalia Vows FZ-LLC (&quot;Regalia Vows&quot;) is committed to
              protecting the privacy of every couple, guest and visitor.
            </p>
            <p>
              We process personal data under the UAE Personal Data Protection
              Law (PDPL) and, where applicable, the EU General Data Protection
              Regulation (GDPR).
            </p>
            <p>
              Information submitted through enquiry forms is shared only with
              the founders and named Regalia Vows directors involved in the
              commission. We never sell or share data with third parties for
              marketing.
            </p>
            <p>
              To request access to, rectification of, or deletion of your data,
              write to <a className="text-gilded-700 underline-offset-4 hover:underline" href="mailto:privacy@regaliavows.com">privacy@regaliavows.com</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
