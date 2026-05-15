import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { journal } from "@/lib/journal";
import { work } from "@/lib/work";
import { sectors } from "@/lib/sectors";

// Service slugs are inlined here because they live inside the route file as a
// private `data` map. Keep in sync with app/services/[slug]/page.tsx.
const SERVICE_SLUGS = [
  "weddings",
  "proposals",
  "destination-weddings",
  "private-events",
  "corporate-and-private",
  "honeymoons",
] as const;

type Entry = MetadataRoute.Sitemap[number];

const url = (path: string) => `${site.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: Entry[] = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/sectors"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/venues"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/experience"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/case-studies"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/journal"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/press"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/contact/corporate"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/legal/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: url("/legal/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceEntries: Entry[] = SERVICE_SLUGS.map((slug) => ({
    url: url(`/services/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const sectorEntries: Entry[] = sectors.map((s) => ({
    url: url(`/sectors/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyEntries: Entry[] = work.map((w) => ({
    url: url(`/case-studies/${w.slug}`),
    lastModified: new Date(`${w.year}-12-31`),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const journalEntries: Entry[] = journal.map((p) => ({
    url: url(`/journal/${p.slug}`),
    lastModified: new Date(p.dateISO),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...sectorEntries,
    ...caseStudyEntries,
    ...journalEntries,
  ];
}
