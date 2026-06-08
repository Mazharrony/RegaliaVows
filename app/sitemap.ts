import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { journal } from "@/lib/journal";
import { work } from "@/lib/work";
import { sectors } from "@/lib/sectors";
import { locales, defaultLocale, siteLocale, type Locale } from "@/lib/i18n/config";

// Service slugs are inlined here because they live inside the route file as a
// private `data` map. Keep in sync with app/[locale]/services/[slug]/page.tsx.
const SERVICE_SLUGS = [
  "weddings",
  "proposals",
  "destination-weddings",
  "private-events",
  "corporate-and-private",
  "honeymoons",
] as const;

type Entry = MetadataRoute.Sitemap[number];

/** Per-locale URL for a canonical path. EN at bare path, others prefixed. */
function localePath(locale: Locale, path: string) {
  if (locale === defaultLocale) return `${site.url}${path}`;
  return `${site.url}/${locale}${path === "/" ? "" : path}`;
}

/** Build the alternates.languages map for a canonical path. */
function alternates(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[siteLocale[l]] = localePath(l, path);
  languages["x-default"] = localePath(defaultLocale, path);
  return languages;
}

/** Create one sitemap entry per locale for a canonical path, all sharing alternates. */
function entriesFor(
  path: string,
  opts: { lastModified?: Date; changeFrequency?: Entry["changeFrequency"]; priority?: number },
): Entry[] {
  const langs = alternates(path);
  return locales.map((l) => ({
    url: localePath(l, path),
    lastModified: opts.lastModified,
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    alternates: { languages: langs },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: Array<[string, { changeFrequency: Entry["changeFrequency"]; priority: number }]> = [
    ["/", { changeFrequency: "weekly", priority: 1.0 }],
    ["/about", { changeFrequency: "monthly", priority: 0.8 }],
    ["/services", { changeFrequency: "monthly", priority: 0.9 }],
    ["/sectors", { changeFrequency: "monthly", priority: 0.9 }],
    ["/venues", { changeFrequency: "monthly", priority: 0.9 }],
    ["/experience", { changeFrequency: "monthly", priority: 0.7 }],
    ["/case-studies", { changeFrequency: "weekly", priority: 0.8 }],
    ["/journal", { changeFrequency: "weekly", priority: 0.8 }],
    ["/press", { changeFrequency: "monthly", priority: 0.5 }],
    ["/contact", { changeFrequency: "yearly", priority: 0.6 }],
    ["/contact/corporate", { changeFrequency: "yearly", priority: 0.6 }],
    ["/event-photography-dubai", { changeFrequency: "monthly", priority: 0.85 }],
    ["/legal/privacy", { changeFrequency: "yearly", priority: 0.2 }],
    ["/legal/terms", { changeFrequency: "yearly", priority: 0.2 }],
  ];

  const out: Entry[] = [];
  for (const [p, opts] of staticPaths) {
    out.push(...entriesFor(p, { lastModified: now, ...opts }));
  }
  for (const slug of SERVICE_SLUGS) {
    out.push(
      ...entriesFor(`/services/${slug}`, {
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
      }),
    );
  }
  for (const s of sectors) {
    out.push(
      ...entriesFor(`/sectors/${s.slug}`, {
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      }),
    );
  }
  for (const w of work) {
    out.push(
      ...entriesFor(`/case-studies/${w.slug}`, {
        lastModified: new Date(`${w.year}-12-31`),
        changeFrequency: "yearly",
        priority: 0.7,
      }),
    );
  }
  for (const p of journal) {
    out.push(
      ...entriesFor(`/journal/${p.slug}`, {
        lastModified: new Date(p.dateISO),
        changeFrequency: "monthly",
        priority: 0.7,
      }),
    );
  }
  return out;
}
