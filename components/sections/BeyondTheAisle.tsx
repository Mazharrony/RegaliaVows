import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { sectors } from "@/lib/sectors";
import { ArrowUpRight } from "lucide-react";

// A quiet, muted band that signals Regalia Vows extends past weddings —
// without competing with the wedding-led tone of the rest of the home page.
export function BeyondTheAisle() {
  return (
    <Section theme="pearl" className="!py-32 md:!py-40">
      <Container>
        <div className="grid items-end gap-10 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Beyond the Aisle</Eyebrow>
            <h2 className="display mt-8 text-display-lg italic text-pearl/85">
              The occasions
              <br />
              <span className="text-pearl/55">that follow.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-pearl/60 md:ml-auto">
              Weddings remain our primary craft. Year after year, the same
              clients invite us back to compose the launches, galas and
              openings that follow. Four disciplines, the same hand.
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/5 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06} as="li">
              <Link
                href={`/sectors/${s.slug}`}
                data-cursor="view"
                data-cursor-label="View"
                className="group relative flex h-full flex-col justify-between gap-10 bg-cream-50 p-8 transition-colors duration-700 ease-silk hover:bg-cream-100 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-xl italic text-gilded-600">
                    {s.number}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink/60 transition-all duration-500 ease-silk group-hover:rotate-45 group-hover:border-gilded group-hover:text-gilded">
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl italic text-ink/90 transition-colors duration-500 ease-silk group-hover:text-gilded md:text-3xl">
                    {s.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {s.oneLiner}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <Link
            href="/sectors"
            data-cursor="link"
            className="group inline-flex items-center gap-4 font-tight text-eyebrow uppercase tracking-widest2 text-pearl/70 hover:text-gilded"
          >
            <span className="h-px w-12 bg-gilded/60 transition-all duration-500 ease-silk group-hover:w-24" />
            All sectors
          </Link>
        </div>
      </Container>
    </Section>
  );
}
