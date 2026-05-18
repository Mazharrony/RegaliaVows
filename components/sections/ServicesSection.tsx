"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/config";

// useLayoutEffect on the client, useEffect on the server (avoids SSR warning).
// We need layout-phase cleanup so GSAP's pin-spacer is removed BEFORE React
// commits its own removeChild on the wrapped <section>.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
import { Container } from "@/components/ui/Container";
import { BgImage } from "@/components/ui/BgImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import type { ButtonHref } from "@/components/ui/Button";

type Service = {
  tag: string;
  title: string;
  kicker: string;
  description: string;
  href: ButtonHref;
  accent: string;
  image: string;
};

type Copy = {
  eyebrow: string;
  headlineMobile: { line1: string; line2: string };
  headlineDesktop: string;
  ledeMobile: string;
  ledeDesktop: string;
  swipe: string;
  scroll: string;
  discover: string;
  imageAltSuffix: string;
  services: readonly Service[];
};

const IMAGES = {
  weddings:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=70",
  proposals:
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=70",
  destination:
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=70",
  privateEvents:
    "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1400&q=70",
  beyond:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=70",
} as const;

const ACCENTS = {
  weddings: "from-gilded/30 via-transparent to-transparent",
  proposals: "from-rose-veil/30 via-transparent to-transparent",
  destination: "from-champagne/30 via-transparent to-transparent",
  privateEvents: "from-verdant-olive/30 via-transparent to-transparent",
  beyond: "from-pearl/10 via-transparent to-transparent",
} as const;

// TODO(ru): review — drafted Russian copy pending principal sign-off.
const copy: Record<Locale, Copy> = {
  en: {
    eyebrow: "The Services",
    headlineMobile: { line1: "Five chapters,", line2: "one signature." },
    headlineDesktop: "Five chapters, one signature.",
    ledeMobile:
      "Whether twelve guests on a Hatta cliff or twelve hundred at the Palace, every commission is led by a senior Regalia Vows director.",
    ledeDesktop: "Every commission is led by a senior Regalia Vows director.",
    swipe: "Swipe",
    scroll: "Scroll",
    discover: "Discover",
    imageAltSuffix: "Regalia Vows",
    services: [
      {
        tag: "I",
        title: "Bespoke Weddings",
        kicker: "End-to-end design",
        description:
          "Multi-day celebrations in Dubai's palaces, private islands and desert estates — designed end to end.",
        href: { pathname: "/services/[slug]", params: { slug: "weddings" } },
        accent: ACCENTS.weddings,
        image: IMAGES.weddings,
      },
      {
        tag: "II",
        title: "Cinematic Proposals",
        kicker: "The single yes",
        description:
          "Operatic moments engineered with helicopters, choirs and skylines. The single most important yes, choreographed.",
        href: { pathname: "/services/[slug]", params: { slug: "proposals" } },
        accent: ACCENTS.proposals,
        image: IMAGES.proposals,
      },
      {
        tag: "III",
        title: "Destination Weddings",
        kicker: "Regalia Vows on tour",
        description:
          "Lake Como, Marrakech, Udaipur, Kyoto. We travel with the couple and bring Regalia Vows with us.",
        href: { pathname: "/services/[slug]", params: { slug: "destination-weddings" } },
        accent: ACCENTS.destination,
        image: IMAGES.destination,
      },
      {
        tag: "IV",
        title: "Private Events",
        kicker: "Galas & after-parties",
        description:
          "Engagements, vow renewals, anniversary galas and after-parties at the highest production standard.",
        href: { pathname: "/services/[slug]", params: { slug: "private-events" } },
        accent: ACCENTS.privateEvents,
        image: IMAGES.privateEvents,
      },
      {
        tag: "V",
        title: "Beyond the Aisle",
        kicker: "On request",
        description:
          "Corporate launches, brand activations, milestone privates and hotel openings — composed for clients we know.",
        href: "/sectors",
        accent: ACCENTS.beyond,
        image: IMAGES.beyond,
      },
    ],
  },
  ru: {
    eyebrow: "Услуги",
    headlineMobile: { line1: "Пять глав,", line2: "одна подпись." },
    headlineDesktop: "Пять глав, одна подпись.",
    ledeMobile:
      "Будь то двенадцать гостей на скале в Хатте или тысяча двести во дворце — каждой постановкой руководит старший директор Regalia Vows.",
    ledeDesktop: "Каждой постановкой руководит старший директор Regalia Vows.",
    swipe: "Свайп",
    scroll: "Прокрутка",
    discover: "Открыть",
    imageAltSuffix: "Regalia Vows",
    services: [
      {
        tag: "I",
        title: "Свадьбы на заказ",
        kicker: "Полный цикл",
        description:
          "Многодневные торжества во дворцах Дубая, на частных островах и пустынных резиденциях — спроектированные от и до.",
        href: { pathname: "/services/[slug]", params: { slug: "weddings" } },
        accent: ACCENTS.weddings,
        image: IMAGES.weddings,
      },
      {
        tag: "II",
        title: "Кинематографичные предложения",
        kicker: "То самое «да»",
        description:
          "Оперные сцены с вертолётами, хорами и панорамами города. Самое важное «да» — поставлено как кадр.",
        href: { pathname: "/services/[slug]", params: { slug: "proposals" } },
        accent: ACCENTS.proposals,
        image: IMAGES.proposals,
      },
      {
        tag: "III",
        title: "Свадьбы за рубежом",
        kicker: "Regalia Vows на гастролях",
        description:
          "Озеро Комо, Марракеш, Удайпур, Киото. Мы летим с парой и привозим Regalia Vows с собой.",
        href: { pathname: "/services/[slug]", params: { slug: "destination-weddings" } },
        accent: ACCENTS.destination,
        image: IMAGES.destination,
      },
      {
        tag: "IV",
        title: "Частные события",
        kicker: "Гала и афтепати",
        description:
          "Помолвки, обновления клятв, юбилейные гала и афтепати — на высочайшем продакшн-уровне.",
        href: { pathname: "/services/[slug]", params: { slug: "private-events" } },
        accent: ACCENTS.privateEvents,
        image: IMAGES.privateEvents,
      },
      {
        tag: "V",
        title: "За пределами алтаря",
        kicker: "По запросу",
        description:
          "Корпоративные запуски, бренд-активации, личные юбилеи и открытия отелей — сочинённые для клиентов, которых мы знаем.",
        href: "/sectors",
        accent: ACCENTS.beyond,
        image: IMAGES.beyond,
      },
    ],
  },
};

function ServiceCard({
  s,
  discoverLabel,
  altSuffix,
  variant = "mobile",
}: {
  s: Service;
  discoverLabel: string;
  altSuffix: string;
  variant?: "mobile" | "desktop";
}) {
  const sizing =
    variant === "desktop"
      ? "h-full max-h-[640px] aspect-[4/5] w-auto flex-none"
      : "aspect-[4/5] w-[82vw] flex-none snap-center sm:aspect-[3/4] sm:w-[60vw]";

  return (
    <Link
      href={s.href}
      data-cursor="view"
      data-cursor-label="View"
      data-theme="dark"
      className={`dark-panel group relative isolate block overflow-clip rounded-card border border-transparent bg-ink-50 transition-[transform,opacity] duration-700 ease-silk transform-gpu hover:-translate-y-1 [border-image:linear-gradient(to_bottom,theme(colors.gilded/80),theme(colors.gilded-100/40),theme(colors.gilded/15))_1] ${sizing}`}
    >
      {/* Background image — brighter so photography is the hero */}
      <BgImage
        src={s.image}
        alt={`${s.title} — ${altSuffix}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="opacity-75 transition-all duration-[1200ms] ease-silk group-hover:scale-[1.04] group-hover:opacity-90"
      />
      {/* Subtle color wash + bottom-weighted vignette for legibility */}
      <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} mix-blend-overlay opacity-60`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,13,0)_30%,rgba(11,11,13,0.55)_70%,rgba(11,11,13,0.92)_100%)]" />

      {/* Quiet sign-off watermark, bottom-right */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-5 font-display text-[7rem] italic leading-[0.85] text-gilded/10 transition-colors duration-700 ease-silk group-hover:text-gilded/20 sm:bottom-6 sm:right-7 sm:text-[8rem]"
      >
        {s.tag}
      </span>

      <div className="relative flex h-full flex-col justify-between p-7 sm:p-8 md:p-9">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg italic text-gilded sm:text-xl">
            {s.tag}
          </span>
          <span className="h-px w-6 bg-gilded/60" />
          <span className="text-eyebrow uppercase tracking-widest2 text-pearl/75">
            {s.kicker}
          </span>
        </div>

        <div>
          <h3 className="font-display text-2xl italic leading-[1.1] text-pearl sm:text-3xl md:text-[2rem] lg:text-[2.25rem]">
            {s.title}
          </h3>
          <span className="mt-4 inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest2 text-gilded">
            <span className="bg-gradient-to-r from-gilded via-gilded-100 to-gilded bg-clip-text text-transparent">
              {discoverLabel}
            </span>
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-500 ease-silk group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSection() {
  const locale = useLocale() as Locale;
  const t = copy[locale] ?? copy.en;
  const services = t.services;
  const wrapperRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLSpanElement>(null);
  const indexLabelRef = useRef<HTMLSpanElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect viewport: only pin & translate on lg+.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // GSAP ScrollTrigger handles pinning + horizontal translate. This is
  // resilient to native smooth-scroll, recalculates on resize/image-load, and
  // doesn't depend on `position: sticky` working in every layout context.
  // useLayoutEffect (client) ensures ctx.revert() runs in the commit's layout
  // phase, BEFORE React tries to removeChild the pinned <section>.
  useIsomorphicLayoutEffect(() => {
    if (!isDesktop) return;
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let killed = false;
    let cleanupFn: (() => void) | undefined;

    (async () => {
      const [gsapMod, stMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (killed) return;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      // Scope all GSAP/ScrollTrigger work to a context bound to the wrapper.
      // ctx.revert() on unmount will kill the tween AND remove the pin-spacer
      // wrapper that ScrollTrigger injects, restoring the DOM to what React
      // expects before it commits its own removeChild.
      const ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => "+=" + getDistance(),
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self: { progress: number }) => {
              const p = self.progress;
              if (progressBarRef.current) {
                progressBarRef.current.style.transform = `scaleX(${p})`;
              }
              if (indexLabelRef.current) {
                const total = services.length;
                const idx = Math.min(total, Math.max(1, Math.ceil(p * total) || 1));
                indexLabelRef.current.textContent = String(idx).padStart(2, "0");
              }
            },
          },
        });
      }, wrapper);

      // Re-measure once images / fonts settle so the end-position is correct.
      const refresh = () => ScrollTrigger.refresh();
      const t1 = window.setTimeout(refresh, 300);
      const t2 = window.setTimeout(refresh, 1200);
      window.addEventListener("load", refresh);

      cleanupFn = () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
        window.removeEventListener("load", refresh);
        ctx.revert();
      };
    })();

    return () => {
      killed = true;
      cleanupFn?.();
    };
  }, [isDesktop]);

  // Mobile / tablet < lg: native horizontal snap-scroll, no pin.
  if (!isDesktop) {
    return (
      <section
        id="services"
        data-theme="light"
        className="relative bg-cream py-20 text-ink sm:py-24"
      >
        <Container className="mb-10">
          <div className="space-y-8">
            <Reveal>
              <Eyebrow>{t.eyebrow}</Eyebrow>
              <h2 className="display mt-6 text-4xl italic leading-[1.05] sm:text-5xl">
                {t.headlineMobile.line1}
                <br />
                {t.headlineMobile.line2}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-ink/75">
                {t.ledeMobile}
              </p>
            </Reveal>
          </div>
        </Container>

        <div
          className="flex gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] snap-x snap-mandatory sm:gap-6 sm:px-8 [&::-webkit-scrollbar]:hidden"
          aria-label="Services carousel"
        >
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} discoverLabel={t.discover} altSuffix={t.imageAltSuffix} />
          ))}
          <span aria-hidden className="flex-none w-2" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-eyebrow uppercase tracking-widest2 text-ink/55">
          <span className="h-px w-6 bg-ink/25" />
          {t.swipe}
          <span className="h-px w-6 bg-ink/25" />
        </div>
      </section>
    );
  }

  // Desktop: GSAP pins the section and translates the track horizontally.
  // No explicit wrapper height needed — ScrollTrigger inserts a pin-spacer.
  return (
    <section
      id="services"
      data-theme="light"
      ref={wrapperRef}
      className="relative isolate z-10 bg-cream text-ink"
    >
      {/* Soft top vignette for warmth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,161,64,0.06),transparent_60%)]"
      />

      <div className="relative flex h-screen flex-col overflow-hidden pt-24 pb-4 lg:pt-28 lg:pb-5 4xl:pt-32">
        <div className="shrink-0 px-8 md:px-12 lg:px-16">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-4 text-3xl italic leading-[1.05] md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem]">
              {t.headlineDesktop}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/65 md:text-[15px]">
              {t.ledeDesktop}
            </p>
          </Reveal>
          <span aria-hidden className="mt-5 block h-px w-16 bg-gilded/50" />
        </div>

        <div className="relative w-full flex-1 min-h-0 overflow-hidden mt-6 lg:mt-8">
          <div
            ref={trackRef}
            className="flex h-full items-center gap-8 px-8 md:gap-10 md:px-12 lg:gap-12 lg:px-16 will-change-transform"
          >
            {services.map((s) => (
              <ServiceCard key={s.title} s={s} discoverLabel={t.discover} altSuffix={t.imageAltSuffix} variant="desktop" />
            ))}
          </div>
        </div>

        <div className="pointer-events-none mt-8 flex shrink-0 items-center justify-between gap-6 px-8 md:px-12 lg:mt-10 lg:px-16">
          <div className="flex items-center gap-3 text-eyebrow uppercase tracking-widest2 text-ink/55">
            <span
              ref={indexLabelRef}
              aria-hidden
              className="font-display text-base italic text-gilded not-italic-fallback"
            >
              01
            </span>
            <span className="text-ink/35">/ 0{services.length}</span>
          </div>
          <div className="relative h-px w-40 overflow-hidden bg-ink/10 sm:w-56 lg:w-72">
            <span
              ref={progressBarRef}
              aria-hidden
              className="absolute inset-0 origin-left bg-gilded"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          <span className="text-eyebrow uppercase tracking-widest2 text-ink/55">
            {t.scroll}
          </span>
        </div>
      </div>
    </section>
  );
}
