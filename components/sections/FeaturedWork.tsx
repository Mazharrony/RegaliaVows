import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

const works = [
  {
    slug: "amira-rashid-bvlgari-resort",
    title: "Amira & Rashid",
    place: "Bvlgari Resort, Dubai",
    year: "2025",
    span: "lg:col-span-7 lg:row-span-2 aspect-[4/5]",
    gradient: "from-[#2a1d18] via-[#5c3a2a] to-[#c9a96a]",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=75",
  },
  {
    slug: "yara-kareem-al-maha-desert",
    title: "Yara & Kareem",
    place: "Al Maha, Dubai Desert",
    year: "2025",
    span: "lg:col-span-5 aspect-[4/3]",
    gradient: "from-[#1a1612] via-[#6e4a2b] to-[#e9d7b2]",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1600&q=75",
  },
  {
    slug: "noor-alex-lake-como",
    title: "Noor & Alex",
    place: "Villa Sola Cabiati, Lake Como",
    year: "2024",
    span: "lg:col-span-5 aspect-[4/3]",
    gradient: "from-[#0e1a1a] via-[#3a5a4a] to-[#e8c9c2]",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=75",
  },
];

export function FeaturedWork() {
  return (
    <Section id="featured-work" theme="pearl">
      <Container size="wide">
        <div className="grid items-end gap-10 md:grid-cols-2">
          <Reveal>
            <Eyebrow className="!text-gilded-800">Selected Work</Eyebrow>
            <h2 className="display mt-8 text-display-lg italic text-ink">
              The recent
              <br />
              compositions.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-ink/85 md:ml-auto">
              A glimpse at the past season&apos;s celebrations — staged across
              Dubai, the Italian Lakes and beyond.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {works.map((w, i) => (
            <Reveal
              key={w.slug}
              delay={i * 0.08}
              className={`${w.span} group relative`}
            >
              <Link
                href={`/case-studies/${w.slug}`}
                data-cursor="view"
                data-cursor-label="Open"
                className="block h-full"
              >
                <div className="relative h-full w-full overflow-hidden rounded-card">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-silk group-hover:scale-105"
                    style={{ backgroundImage: `url(${w.image})` }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${w.gradient} opacity-40 mix-blend-soft-light`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.85)_100%)]" />
                  <div className="relative flex h-full flex-col justify-between p-8 text-pearl md:p-10">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow !text-pearl/80">
                        {w.place}
                      </span>
                      <span className="eyebrow !text-pearl/80">{w.year}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-4xl italic md:text-6xl">
                        {w.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-3 text-eyebrow uppercase tracking-widest2 text-gilded">
                        <span className="h-px w-8 bg-gilded" />
                        View Composition
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/case-studies"
            data-cursor="link"
            className="group inline-flex items-center gap-4 font-tight text-eyebrow uppercase tracking-widest2 text-ink hover:text-gilded-600"
          >
            <span className="h-px w-12 bg-gilded transition-all duration-500 ease-silk group-hover:w-24" />
            Explore the full portfolio
          </Link>
        </div>
      </Container>
    </Section>
  );
}
