"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/motion/SplitText";
import { BgImage } from "@/components/ui/BgImage";

// Cinematic hero — self-hosted, muted, looping mp4 sized via object-cover.
// Two encodes (1080p desktop / 720p mobile) are served straight from the
// repo's public/videos directory through the edge CDN, giving us an instant
// first frame from the poster image and no third-party branding or spinners.
const POSTER = "/videos/hero-poster.jpg";
const SRC_DESKTOP = "/videos/hero.mp4";
const SRC_MOBILE = "/videos/hero-mobile.mp4";

export function HomeHero() {
  const [reduce, setReduce] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // iOS occasionally refuses the first autoplay; nudge it once metadata lands.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadedmetadata", tryPlay);
    return () => v.removeEventListener("loadedmetadata", tryPlay);
  }, [reduce]);

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-cream text-ink">
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Poster — paints instantly as the LCP element and remains as the
            fallback layer beneath the video while it streams in. */}
        <BgImage src={POSTER} alt="" priority sizes="100vw" quality={70} />

        {!reduce && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={POSTER}
            aria-hidden="true"
            tabIndex={-1}
            disableRemotePlayback
          >
            <source src={SRC_MOBILE} type="video/mp4" media="(max-width: 767px)" />
            <source src={SRC_DESKTOP} type="video/mp4" />
          </video>
        )}

        {/* Directional scrims — darken only where text sits (bottom band +
            left band). The top-right ~70% of the frame stays fully clear so
            the cinematography reads as the hero. */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,11,13,0.65)_0%,rgba(11,11,13,0.25)_30%,transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,13,0.35)_0%,transparent_40%)]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20 md:px-10 md:pb-32 md:pt-40 3xl:max-w-[1800px] 3xl:px-16 4xl:max-w-[2200px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Regalia Vows · Dubai</Eyebrow>
          </motion.div>

          <SplitText
            as="h1"
            text="Weddings, composed."
            className="display text-gold mt-6 max-w-[14ch] text-display-xl italic md:mt-8 drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]"
            stagger={0.12}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl font-tight text-sm leading-relaxed text-pearl/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:text-base md:mt-10 md:text-lg"
          >
            Regalia Vows is for couples who treat their wedding as a work of art.
            Conceived in Dubai, staged the world over.
            <span className="mt-3 hidden text-pearl/70 md:block">
              And, on request, the corporate, brand and private occasions our clients ask us to compose next.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-12"
          >
            <Button href="/contact" variant="gilded" size="lg" withArrow>
              Begin the Conversation
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" withArrow>
              View Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="relative mx-auto mb-6 flex w-full max-w-[1600px] items-end justify-between px-5 sm:mb-8 sm:px-6 md:px-10 3xl:max-w-[1800px] 3xl:px-16 4xl:max-w-[2200px]"
        >
          <span className="eyebrow !text-gilded drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">Scroll to enter</span>
          <span className="eyebrow !text-gilded hidden drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:inline">{new Date().getFullYear()} · Volume I</span>
        </motion.div>
      </div>
    </section>
  );
}
