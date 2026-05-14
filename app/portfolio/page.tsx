import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Portfolio — Real Weddings",
  description: "A selection of recent compositions by Regalia Vows.",
};

export const weddings = [
  {
    slug: "amira-rashid-bvlgari-resort",
    couple: "Amira & Rashid",
    place: "Bvlgari Resort · Dubai",
    year: 2025,
    palette: "from-[#2a1d18] via-[#5c3a2a] to-[#c9a96a]",
    style: "Modern Emirati",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "yara-kareem-al-maha-desert",
    couple: "Yara & Kareem",
    place: "Al Maha Desert · Dubai",
    year: 2025,
    palette: "from-[#1a1612] via-[#6e4a2b] to-[#e9d7b2]",
    style: "Indo-Arabic Fusion",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "noor-alex-lake-como",
    couple: "Noor & Alex",
    place: "Villa Sola Cabiati · Lake Como",
    year: 2024,
    palette: "from-[#0e1a1a] via-[#3a5a4a] to-[#e8c9c2]",
    style: "Italian Romantic",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "leila-omar-jumeirah-al-naseem",
    couple: "Leila & Omar",
    place: "Jumeirah Al Naseem · Dubai",
    year: 2024,
    palette: "from-[#1a1a2a] via-[#3a3a5a] to-[#c9a96a]",
    style: "Black-tie Coastal",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "anya-vikram-udaipur",
    couple: "Anya & Vikram",
    place: "Taj Lake Palace · Udaipur",
    year: 2024,
    palette: "from-[#2a1a1a] via-[#7a3a4a] to-[#e8c9c2]",
    style: "South-Asian Heritage",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=75",
  },
  {
    slug: "sara-faisal-marrakech",
    couple: "Sara & Faisal",
    place: "La Mamounia · Marrakech",
    year: 2023,
    palette: "from-[#2a1a14] via-[#7a4a2a] to-[#c9a96a]",
    style: "Moorish Garden",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1400&q=75",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title="Recent compositions."
        description="A discreet selection. The fullest archive is reserved for serious enquiries."
      />

      <Section theme="ink" className="!pt-0">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {weddings.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/portfolio/${w.slug}`}
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
                  <div className="relative flex h-full flex-col justify-between p-8 text-pearl">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow !text-pearl/85">{w.style}</span>
                      <span className="eyebrow !text-pearl/85">{w.year}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-4xl italic md:text-5xl">
                        {w.couple}
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
        </Container>
      </Section>
    </>
  );
}
