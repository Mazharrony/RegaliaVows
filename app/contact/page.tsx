import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Begin Your Enquiry",
  description:
    "Tell us about you, your partner, and the celebration you have always imagined. We accept a limited number of commissions each year.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Enquiry"
        title="Begin the conversation."
        description="A four-step note to Regalia Vows. Your details remain entirely confidential and reach only the founders."
      />

      <Section theme="pearl">
        <Container size="narrow">
          <div className="flex justify-end">
            <Link
              href="/contact/corporate"
              data-cursor="link"
              className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/70 transition-colors hover:text-gilded-600"
            >
              Briefing a brand, corporate or private event →
            </Link>
          </div>

          <EnquiryForm />

          <div className="hairline mt-32 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <p className="eyebrow !text-gilded-800">Concierge</p>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-3 block font-display text-2xl italic text-ink hover:text-gilded-600"
              >
                {site.contact.email}
              </a>
            </div>
            <div>
              <p className="eyebrow !text-gilded-800">By Telephone</p>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="mt-3 block font-display text-2xl italic text-ink hover:text-gilded-600"
              >
                {site.contact.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow !text-gilded-800">Studio</p>
              <p className="mt-3 font-display text-2xl italic text-ink">
                {site.contact.address}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
