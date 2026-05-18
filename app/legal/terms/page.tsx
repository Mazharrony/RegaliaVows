import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description:
    "The terms governing use of regaliavows.com and the framework under which Regalia Vows accepts commissions.",
};

const LAST_UPDATED = "15 May 2026";

type Clause = { title: string; body: React.ReactNode };

const clauses: Clause[] = [
  {
    title: "1. About these terms",
    body: (
      <>
        <p>
          These terms (the &ldquo;<strong>Terms</strong>&rdquo;) govern your
          use of {site.url.replace(/^https?:\/\//, "")} (the &ldquo;
          <strong>Site</strong>&rdquo;) and the framework under which Regalia
          Vows FZ-LLC (&ldquo;<strong>Regalia Vows</strong>&rdquo;) accepts
          commissions. By browsing the Site or submitting an enquiry you agree
          to be bound by them.
        </p>
        <p>
          The specific commercial, scheduling and deliverable terms for any
          engagement are set out in a separate, signed{" "}
          <strong>Engagement Letter</strong> and{" "}
          <strong>Master Services Agreement</strong> issued by Regalia Vows.
          In case of any conflict between this page and those documents, the
          signed documents prevail.
        </p>
      </>
    ),
  },
  {
    title: "2. Enquiries do not form a contract",
    body: (
      <>
        <p>
          An enquiry, a proposal, a moodboard or a held date is not a
          contract. A commission is treated as accepted only on
          countersignature of the Engagement Letter and receipt of the
          initial retainer in cleared funds.
        </p>
        <p>
          We accept a limited number of commissions each year and reserve the
          right to decline an enquiry at our sole discretion.
        </p>
      </>
    ),
  },
  {
    title: "3. Intellectual property",
    body: (
      <>
        <p>
          All imagery, written content, typographic identity, design language,
          process documentation and proprietary methodology on the Site
          (collectively, the &ldquo;<strong>Studio Works</strong>&rdquo;) are
          the intellectual property of Regalia Vows LLC and are protected
          by UAE and international copyright law. The Studio Works may not be
          reproduced, redistributed, used to train machine-learning models, or
          adapted in any form without our prior written consent.
        </p>
        <p>
          Imagery created during a commission belongs to Regalia Vows and the
          appointed photographer; clients receive a personal, perpetual,
          worldwide licence for private use as set out in the Engagement
          Letter.
        </p>
      </>
    ),
  },
  {
    title: "4. Confidentiality",
    body: (
      <>
        <p>
          Discretion is a deliverable. Regalia Vows enters into a mutual
          confidentiality undertaking with every commissioning party and
          imposes equivalent NDAs on its suppliers. We do not publicise the
          identity of any client without their written consent, and we never
          confirm or deny our involvement in a commission to media or third
          parties.
        </p>
      </>
    ),
  },
  {
    title: "5. Permitted use of the Site",
    body: (
      <>
        <p>You agree not to:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            Use the Site for any unlawful purpose or in any way that infringes
            another party&apos;s rights;
          </li>
          <li>
            Attempt to gain unauthorised access to the Site, its servers, or
            any connected infrastructure;
          </li>
          <li>
            Scrape, mirror, or systematically extract content from the Site;
          </li>
          <li>
            Use any automated tool — including AI agents — to harvest the
            Studio Works for training, indexing, or derivative purposes.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Third-party links",
    body: (
      <>
        <p>
          The Site may link to venues, partners, journals and suppliers we
          admire. We have no control over the content of those external sites
          and accept no responsibility for them.
        </p>
      </>
    ),
  },
  {
    title: "7. Limitation of liability",
    body: (
      <>
        <p>
          The Site is provided &ldquo;as is.&rdquo; To the maximum extent
          permitted by UAE law, Regalia Vows excludes all warranties, express
          or implied, in relation to the Site. We will not be liable for any
          indirect, incidental, special or consequential loss arising from
          your use of the Site. Nothing in these Terms limits any liability
          that cannot lawfully be excluded — including liability for death,
          personal injury caused by negligence, or fraud.
        </p>
        <p>
          Liability arising from a signed commission is governed exclusively
          by the Master Services Agreement for that commission.
        </p>
      </>
    ),
  },
  {
    title: "8. Force majeure",
    body: (
      <>
        <p>
          Neither party will be in breach of these Terms or any signed
          commission as a result of events outside its reasonable control,
          including but not limited to acts of state, natural events,
          pandemics, embargo, civil disturbance, or material disruption to
          aviation or telecommunications. In such cases the studio will
          rebook, defer or reasonably restructure delivery in good faith.
        </p>
      </>
    ),
  },
  {
    title: "9. Governing law & jurisdiction",
    body: (
      <>
        <p>
          These Terms are governed by the laws of the United Arab Emirates as
          applied in the Emirate of Dubai. Any dispute that cannot be resolved
          in good faith between the parties will be submitted to the
          exclusive jurisdiction of the courts of the Dubai International
          Financial Centre (DIFC). The signed commission may specify an
          alternative forum, in which case the commission prevails.
        </p>
      </>
    ),
  },
  {
    title: "10. Changes",
    body: (
      <>
        <p>
          We may revise these Terms from time to time. The version in force is
          the one published at this URL; material changes will be flagged at
          the top of this page for at least thirty days.
        </p>
      </>
    ),
  },
  {
    title: "11. How to reach us",
    body: (
      <>
        <p>
          Written notice to Regalia Vows under these Terms may be sent to{" "}
          <a
            className="text-gilded-700 underline underline-offset-4"
            href={`mailto:${site.contact.email}`}
          >
            {site.contact.email}
          </a>
          {" "}or by post to {site.contact.address}.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal · Terms"
        title="Terms of engagement."
        description="The terms governing use of regaliavows.com and the framework under which Regalia Vows accepts commissions."
      />

      <Section theme="pearl">
        <Container size="narrow">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 pb-6">
            <Eyebrow className="!text-gilded-800">In force from</Eyebrow>
            <p className="font-tight text-eyebrow uppercase tracking-widest2 text-ink/70">
              {LAST_UPDATED}
            </p>
          </div>

          <p className="mt-10 font-display text-2xl italic leading-snug text-ink md:text-3xl">
            We work to a small, deliberate framework. These terms set the
            general posture; every commission is then governed by its own
            signed engagement letter.
          </p>

          <div className="mt-16 space-y-14 text-base leading-relaxed text-ink/80">
            {clauses.map((c) => (
              <section key={c.title}>
                <h2 className="font-display text-2xl italic text-ink md:text-3xl">
                  {c.title}
                </h2>
                <div className="mt-5 space-y-4">{c.body}</div>
              </section>
            ))}
          </div>

          <div className="hairline mt-24 !bg-gradient-to-r !from-transparent !via-gilded-600/40 !to-transparent" />

          <p className="mt-10 text-sm leading-relaxed text-ink/60">
            This document is provided as a good-faith summary and does not
            constitute legal advice. It is reviewed with our counsel before
            each material update.
          </p>
        </Container>
      </Section>
    </>
  );
}
