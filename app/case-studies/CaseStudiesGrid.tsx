"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/motion/Reveal";
import { work, sectorFilters, type WorkSector } from "@/lib/work";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Filter = WorkSector | "all";

export function CaseStudiesGrid({ initial = "weddings" as Filter }: { initial?: Filter }) {
  const search = useSearchParams();
  const fromQuery = search.get("sector") as Filter | null;
  const [filter, setFilter] = useState<Filter>(fromQuery ?? initial);

  const items = useMemo(() => {
    if (filter === "all") return work;
    return work.filter((w) => w.sector === filter);
  }, [filter]);

  return (
    <Section theme="pearl" className="!pt-0">
      <Container size="wide">
        <div className="mb-12 flex flex-wrap items-center gap-3">
          {sectorFilters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              data-cursor="link"
              className={cn(
                "border px-5 py-2 font-tight text-eyebrow uppercase tracking-widest2 transition-all",
                filter === f.value
                  ? "border-gilded bg-gilded/10 text-gilded"
                  : "border-pearl/15 text-pearl/70 hover:border-gilded/50 hover:text-pearl",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <EmptyState
            eyebrow="Forthcoming"
            title="By private viewing, on request."
            body="Our portfolio is held in confidence for the couples and houses we work with. A selection of commissions is shared, with permission, after an introductory conversation."
            cta={{
              label: `Write to ${site.contact.email}`,
              href: `mailto:${site.contact.email}`,
              external: true,
            }}
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/case-studies/${w.slug}`}
                  data-cursor="view"
                  data-cursor-label="Open"
                  className="group relative block aspect-[4/5] overflow-hidden rounded-card border border-pearl/10 transition-colors duration-700 ease-silk hover:border-gilded/50"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-silk group-hover:scale-110"
                    style={{ backgroundImage: `url(${w.image})` }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${w.palette} opacity-30 mix-blend-soft-light`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.9)_100%)]" />
                  <div className="dark-panel relative flex h-full flex-col justify-between p-8 text-pearl">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow !text-pearl/85">{w.style}</span>
                      <span className="eyebrow !text-pearl/85">{w.year}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-4xl italic text-white md:text-5xl">
                        {w.title}
                      </h3>
                      <p className="mt-2 text-sm text-pearl/85">{w.place}</p>
                      <span className="mt-5 inline-flex items-center gap-3 text-eyebrow uppercase tracking-widest2 text-gilded">
                        <span className="h-px w-10 bg-gold-flow transition-all duration-500 ease-silk group-hover:w-20" />
                        View
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
