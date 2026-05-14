import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CorporateEnquiryForm } from "@/components/sections/CorporateEnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate & Private Events Enquiry",
  description:
    "Brief Regalia Vows on a brand launch, gala, conference, incentive trip or private commission. Treated with the same discretion as our weddings.",
};

export default function CorporateContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate & Private"
        title="Brief us in confidence."
        description="For brand launches, galas, conferences, incentive programmes and private commissions. Treated with the same discretion as our weddings — and replied to personally by a founder."
      />

      <Section theme="pearl" className="!pt-0">
        <Container size="narrow">
          <div className="flex justify-end">
            <Link
              href="/contact"
              data-cursor="link"
              className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/70 transition-colors hover:text-gilded-600"
            >
              Wedding enquiry →
            </Link>
          </div>

          <CorporateEnquiryForm />

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
