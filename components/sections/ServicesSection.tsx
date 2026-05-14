"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    tag: "I",
    title: "Bespoke Weddings",
    kicker: "End-to-end design",
    description:
      "Multi-day celebrations in Dubai's palaces, private islands and desert estates — designed end to end.",
    href: "/services/weddings",
    accent: "from-gilded/30 via-transparent to-transparent",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "II",
    title: "Cinematic Proposals",
    kicker: "The single yes",
    description:
      "Operatic moments engineered with helicopters, choirs and skylines. The single most important yes, choreographed.",
    href: "/services/proposals",
    accent: "from-rose-veil/30 via-transparent to-transparent",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "III",
    title: "Destination Weddings",
    kicker: "Regalia Vows on tour",
    description:
      "Lake Como, Marrakech, Udaipur, Kyoto. We travel with the couple and bring Regalia Vows with us.",
    href: "/services/destination-weddings",
    accent: "from-champagne/30 via-transparent to-transparent",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "IV",
    title: "Private Events",
    kicker: "Galas & after-parties",
    description:
      "Engagements, vow renewals, anniversary galas and after-parties at the highest production standard.",
    href: "/services/private-events",
    accent: "from-verdant-olive/30 via-transparent to-transparent",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1400&q=70",
  },
];

function ServiceCard({
  s,
  variant = "mobile",
}: {
  s: (typeof services)[number];
  variant?: "mobile" | "desktop";
}) {
  const sizing =
    variant === "desktop"
      ? "h-[clamp(380px,56vh,580px)] aspect-[3/4] w-auto flex-none"
      : "aspect-[4/5] w-[82vw] flex-none snap-center sm:aspect-[3/4] sm:w-[60vw]";

  return (
    <Link
      href={s.href}
      data-cursor="view"
      data-cursor-label="View"
      className={`group relative isolate block overflow-hidden rounded-card border border-pearl/10 bg-ink-50 transition-[transform,border-color] duration-700 ease-silk hover:-translate-y-1 hover:border-gilded/50 ${sizing}`}
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-55 transition-all duration-[1200ms] ease-silk group-hover:scale-[1.06] group-hover:opacity-70"
        style={{ backgroundImage: `url(${s.image})` }}
      />
      {/* Color wash + dark vignette */}
      <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} mix-blend-overlay opacity-90`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,13,0.15)_0%,rgba(11,11,13,0.55)_55%,rgba(11,11,13,0.92)_100%)]" />
      {/* Grain */}
      <div aria-hidden className="absolute inset-0 bg-gold-foil opacity-25 mix-blend-soft-light" />

      {/* Oversized watermark numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 -right-2 font-display text-[14rem] italic leading-none text-gilded/10 transition-all duration-700 ease-silk group-hover:text-gilded/20 sm:-top-8 sm:text-[18rem]"
      >
        {s.tag}
      </span>

      {/* Corner gilded brackets */}
      <span aria-hidden className="absolute left-6 top-6 h-5 w-5 border-l border-t border-gilded/60 transition-all duration-500 ease-silk group-hover:h-7 group-hover:w-7" />
      <span aria-hidden className="absolute right-6 bottom-6 h-5 w-5 border-r border-b border-gilded/60 transition-all duration-500 ease-silk group-hover:h-7 group-hover:w-7" />

      <div className="relative flex h-full flex-col justify-between p-7 sm:p-9 md:p-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl italic text-gold sm:text-[1.75rem]">
              {s.tag}
            </span>
            <span className="h-px w-8 bg-gold-flow opacity-80" />
            <span className="text-eyebrow uppercase tracking-widest2 text-pearl/70">
              {s.kicker}
            </span>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-pearl/25 text-pearl backdrop-blur-sm transition-all duration-500 ease-silk group-hover:rotate-45 group-hover:border-gilded group-hover:bg-gilded group-hover:text-ink sm:h-12 sm:w-12">
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </span>
        </div>

        <div>
          <h3 className="font-display text-3xl italic leading-[1.05] sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-[3.25rem]">
            {s.title}
          </h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-pearl/85 sm:mt-5">
            {s.description}
          </p>
          <div className="mt-6 flex items-center gap-3 sm:mt-7">
            <span className="h-px w-12 bg-gold-flow transition-all duration-500 ease-silk group-hover:w-24" />
            <span className="text-eyebrow uppercase tracking-widest2 text-gilded transition-colors group-hover:text-gilded-100">
              Discover
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [distance, setDistance] = useState(0);

  // Detect viewport: only run the pinned horizontal-scroll effect on lg+.
  // (Tablet / sm desktop fall through to a clean 2-column grid for legibility.)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Measure how far the track must travel so the last card aligns to the right edge.
  useEffect(() => {
    if (!isDesktop) return;
    const measure = () => {
      const track = trackRef.current;
      const vp = viewportRef.current;
      if (!track || !vp) return;
      const d = Math.max(0, track.scrollWidth - vp.clientWidth);
      setDistance(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isDesktop]);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  // Mobile / tablet < md: native horizontal snap-scroll, no pin.
  if (!isDesktop) {
    return (
      <section
        id="services"
        data-theme="dark"
        className="relative bg-ink py-20 text-pearl sm:py-24"
      >
        <Container className="mb-10">
          <div className="space-y-8">
            <Reveal>
              <Eyebrow>The Services</Eyebrow>
              <h2 className="display mt-6 text-4xl italic leading-[1.05] sm:text-5xl">
                Four chapters,
                <br />
                one signature.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-pearl/80">
                Whether twelve guests on a Hatta cliff or twelve hundred at the
                Palace, every commission is led by a senior Regalia Vows director.
              </p>
            </Reveal>
          </div>
        </Container>

        <div
          className="flex gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] snap-x snap-mandatory sm:gap-6 sm:px-8 [&::-webkit-scrollbar]:hidden"
          aria-label="Services carousel"
        >
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
          <span aria-hidden className="flex-none w-2" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-eyebrow uppercase tracking-widest2 text-pearl/50">
          <span className="h-px w-6 bg-pearl/30" />
          Swipe
          <span className="h-px w-6 bg-pearl/30" />
        </div>
      </section>
    );
  }

  // Desktop: pinned horizontal scroll with measured distance.
  // Wrapper height = viewport + travel distance (so 1px scroll == 1px translate).
  const wrapperHeight = `calc(100vh + ${distance}px)`;

  return (
    <section
      id="services"
      data-theme="dark"
      ref={wrapperRef}
      className="relative bg-ink text-pearl"
      style={{ height: wrapperHeight, minHeight: "100vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-24 pb-16">
        <Container className="mb-10 md:mb-12">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <Reveal>
              <Eyebrow>The Services</Eyebrow>
              <h2 className="display mt-5 text-4xl italic leading-[1.05] md:text-5xl lg:text-6xl">
                Four chapters,
                <br />
                one signature.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-pearl/80 md:ml-auto">
                Whether twelve guests on a Hatta cliff or twelve hundred at the
                Palace, every commission is led by a senior Regalia Vows director.
              </p>
            </Reveal>
          </div>
        </Container>

        <div ref={viewportRef} className="relative w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-8 px-8 md:gap-10 md:px-12 lg:gap-12 lg:px-16 will-change-transform"
          >
            {services.map((s) => (
              <ServiceCard key={s.title} s={s} variant="desktop" />
            ))}
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-eyebrow uppercase tracking-widest2 text-pearl/40">
          Scroll
        </div>
      </div>
    </section>
  );
}
