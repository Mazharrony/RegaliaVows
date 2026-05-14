"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/motion/SplitText";

// Local cinematic hero clips. Each entry provides a desktop and mobile source;
// the <video> uses <source media> to pick the right one per viewport.
type Clip = { desktop: string; mobile: string; poster?: string };

const LOCAL_REEL: Clip[] = [
  {
    desktop: "/videos/hero-1-desktop.mp4",
    mobile: "/videos/hero-1-mobile.mp4",
  },
  {
    desktop: "/videos/hero-2-desktop.mp4",
    mobile: "/videos/hero-2-mobile.mp4",
  },
];

// Royalty-free stock wedding cinematics (Mixkit CDN). Used only when every
// local clip fails to load — so the hero never falls back to a blank frame.
const STOCK_REEL: Clip[] = [
  {
    desktop:
      "https://assets.mixkit.co/videos/preview/mixkit-couple-of-newlyweds-walking-towards-each-other-in-a-39880-large.mp4",
    mobile:
      "https://assets.mixkit.co/videos/preview/mixkit-couple-of-newlyweds-walking-towards-each-other-in-a-39880-small.mp4",
  },
  {
    desktop:
      "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-leaving-the-church-after-the-ceremony-39885-large.mp4",
    mobile:
      "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-leaving-the-church-after-the-ceremony-39885-small.mp4",
  },
];

// Ultimate fallback when even stock video fails or prefers-reduced-motion is on.
const POSTER =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=75";

export function HomeHero() {
  const [reduce, setReduce] = useState(false);
  const [useStock, setUseStock] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [clipIndex, setClipIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const clips: Clip[] = useStock ? STOCK_REEL : LOCAL_REEL;
  const current = clips[clipIndex % clips.length];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Best-effort autoplay (some mobile browsers need an explicit play call).
  useEffect(() => {
    if (reduce || videoFailed) return;
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {/* autoplay blocked, poster will show */});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, [reduce, videoFailed, clipIndex, useStock]);

  // Force the video to never stay paused. If anything (browser UI, tab switch,
  // long-press menu, iOS low-power mode, scroll-out) pauses it, immediately
  // resume so it always feels like part of the page rather than a clickable
  // media element.
  useEffect(() => {
    if (reduce || videoFailed) return;
    const v = videoRef.current;
    if (!v) return;
    const resume = () => {
      if (v.paused) v.play().catch(() => {});
    };
    v.addEventListener("pause", resume);
    v.addEventListener("stalled", resume);
    v.addEventListener("suspend", resume);
    v.addEventListener("waiting", resume);
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("focus", resume);
    window.addEventListener("touchstart", resume, { passive: true });
    window.addEventListener("scroll", resume, { passive: true });

    // Periodic safety net for iOS Safari which can silently pause without
    // firing a pause event (low-power mode, data saver, background tabs).
    const tick = window.setInterval(resume, 1500);

    // Resume when the hero re-enters the viewport
    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              for (const e of entries) if (e.isIntersecting) resume();
            },
            { threshold: 0.01 }
          )
        : null;
    io?.observe(v);

    return () => {
      v.removeEventListener("pause", resume);
      v.removeEventListener("stalled", resume);
      v.removeEventListener("suspend", resume);
      v.removeEventListener("waiting", resume);
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("focus", resume);
      window.removeEventListener("touchstart", resume);
      window.removeEventListener("scroll", resume);
      window.clearInterval(tick);
      io?.disconnect();
    };
  }, [reduce, videoFailed, clipIndex, useStock]);

  const useVideo = !reduce && !videoFailed;
  const advance = () => setClipIndex((i) => (i + 1) % clips.length);

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink text-pearl">
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Poster image — sits behind the video and remains visible if the
            video fails to load on any viewport, ensuring no blank hero. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${POSTER})` }}
        />

        {useVideo && (
          <video
            key={`${useStock ? "stock" : "local"}-${clipIndex}`}
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
            autoPlay
            muted
            loop={clips.length === 1}
            playsInline
            preload="auto"
            poster={POSTER}
            aria-hidden="true"
            tabIndex={-1}
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            // @ts-expect-error - non-standard but widely supported attribute
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
            onContextMenu={(e) => e.preventDefault()}
            onLoadedMetadata={(e) => {
              const v = e.currentTarget;
              v.muted = true;
              v.defaultMuted = true;
              // legacy iOS Safari + WeChat inline-play attribute hints
              v.setAttribute("webkit-playsinline", "true");
              v.setAttribute("x5-playsinline", "true");
              v.setAttribute("playsinline", "true");
            }}
            onEnded={clips.length > 1 ? advance : undefined}
            onError={() => {
              // Cycle within the current reel first; if every clip in the
              // local reel has failed, switch to the stock wedding fallback;
              // if even stock fails, give up and let the poster image show.
              if (clipIndex < clips.length - 1) {
                advance();
              } else if (!useStock) {
                setUseStock(true);
                setClipIndex(0);
              } else {
                setVideoFailed(true);
              }
            }}
          >
            <source media="(max-width: 767px)" src={current.mobile} type="video/mp4" />
            <source media="(min-width: 768px)" src={current.desktop} type="video/mp4" />
          </video>
        )}

        {/* Cinematic darkening so the headline always reads cleanly over footage */}
        <div className="pointer-events-none absolute inset-0 bg-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_55%,rgba(0,0,0,0)_0%,rgba(11,11,13,0.85)_90%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gold-foil opacity-20 mix-blend-soft-light" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Regalia Vows · Dubai · Est. 2014</Eyebrow>
          </motion.div>

          <SplitText
            as="h1"
            text="Weddings, composed."
            className="display mt-8 max-w-[14ch] text-display-xl italic text-pearl"
            stagger={0.12}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-xl font-tight text-base leading-relaxed text-pearl/85 md:text-lg"
          >
            Regalia Vows is for couples who treat their wedding as a work of art.
            Conceived in Dubai, staged the world over.
            <span className="mt-3 block text-pearl/55">
              And, on request, the corporate, brand and private occasions our clients ask us to compose next.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="gilded" size="lg" withArrow>
              Begin the Conversation
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" withArrow>
              View Regalia Vows&apos; Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="relative mx-auto mb-8 flex w-full max-w-[1600px] items-end justify-between px-6 md:px-10"
        >
          <span className="eyebrow opacity-70">Scroll to enter</span>
          <span className="eyebrow opacity-70">{new Date().getFullYear()} · Volume I</span>
        </motion.div>
      </div>
    </section>
  );
}
