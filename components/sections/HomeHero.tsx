"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/motion/SplitText";

const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

// Cinematic wedding stock footage — Mixkit (free, commercial use, no attribution required).
// Drop your own clip into /public/videos/hero.mp4 to override the entire reel.
type Clip = { src: string; poster: string };

const LOCAL_CLIP: Clip | null = null; // set to { src: "/videos/hero.mp4", poster: "/videos/hero-poster.jpg" } once you add a local file

const REEL: Clip[] = [
  {
    // Newlyweds walking hand in hand — soft slow-motion, very cinematic
    src: "https://assets.mixkit.co/videos/40596/40596-1080.mp4",
    poster: "",
  },
  {
    // Bride walking with bouquet
    src: "https://assets.mixkit.co/videos/40591/40591-720.mp4",
    poster: "",
  },
  {
    // Newlyweds posing in garden
    src: "https://assets.mixkit.co/videos/40601/40601-1080.mp4",
    poster: "",
  },
  {
    // Bride and groom standing head-on in a party garden
    src: "https://assets.mixkit.co/videos/40627/40627-720.mp4",
    poster: "",
  },
  {
    // Bridal bouquet close-up
    src: "https://assets.mixkit.co/videos/18204/18204-720.mp4",
    poster: "",
  },
];

export function HomeHero() {
  const [reduce, setReduce] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [clipIndex, setClipIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const clips: Clip[] = LOCAL_CLIP ? [LOCAL_CLIP] : REEL;
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
  }, [reduce, videoFailed, clipIndex]);

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
  }, [reduce, videoFailed, clipIndex]);

  const useVideo = !reduce && !videoFailed;
  const advance = () => setClipIndex((i) => (i + 1) % clips.length);

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink text-pearl">
      <div className="absolute inset-0 pointer-events-none select-none">
        {useVideo ? (
          <video
            key={current.src}
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
            autoPlay
            muted
            loop={clips.length === 1}
            playsInline
            preload="auto"
            {...(current.poster ? { poster: current.poster } : {})}
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
              if (clips.length > 1 && clipIndex < clips.length - 1) advance();
              else setVideoFailed(true);
            }}
          >
            <source src={current.src} type="video/mp4" />
          </video>
        ) : (
          !reduce && <HeroScene />
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
            <Button href="/portfolio" variant="outline" size="lg" withArrow>
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
