import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudiesGrid } from "./CaseStudiesGrid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "A discreet selection of recent compositions by Regalia Vows — weddings first, with the corporate, brand, private and hospitality work our clients ask for next.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Case Studies"
        title="Recent compositions."
        description="A discreet selection. Weddings remain the primary craft; filter through to see the occasions our clients invite us back to compose."
      />
      <Suspense fallback={null}>
        <CaseStudiesGrid />
      </Suspense>
    </>
  );
}
