"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/motion/SplitText";

// Cinematic hero reel. Plays the two self-hosted clips first, then continues
// into royalty-free Mixkit wedding cinematics, then wraps back to the start.
// Never loops a single clip — always cycles through the full reel.
// Mixkit source: https://mixkit.co/free-stock-video/wedding/
type Clip = { desktop: string; mobile: string; poster?: string };

const mixkit = (slug: string): Clip => ({
  desktop: `https://assets.mixkit.co/videos/preview/mixkit-${slug}-large.mp4`,
  mobile: `https://assets.mixkit.co/videos/preview/mixkit-${slug}-small.mp4`,
});

const REEL: Clip[] = [
  { desktop: "/videos/hero-1-desktop.mp4", mobile: "/videos/hero-1-mobile.mp4" },
  { desktop: "/videos/hero-2-desktop.mp4", mobile: "/videos/hero-2-mobile.mp4" },
  mixkit("couple-of-newlyweds-walking-towards-each-other-in-a-39880"),
  mixkit("bride-and-groom-leaving-the-church-after-the-ceremony-39885"),
];

// Ultimate fallback when even stock video fails or prefers-reduced-motion is on.
const POSTER =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=75";

export function HomeHero() {
  const [reduce, setReduce] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [clipIndex, setClipIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const consecutiveErrorsRef = useRef(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const clips: Clip[] = REEL;
  const current = clips[clipIndex % clips.length];
  const src = isMobile ? current.mobile : current.desktop;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Track viewport so each clip uses a single, definite `src` instead of
  // relying on <source media> selection, which is unreliable inside <video>
  // and can leave the element stuck on the previous frame when advancing.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = () => setIsMobile(mq.matches);
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
  const advance = () => {
    consecutiveErrorsRef.current = 0;
    setClipIndex((i) => (i + 1) % clips.length);
  };

  return (
    <section data-theme="dark" className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink text-pearl">
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
            key={`reel-${clipIndex}-${isMobile ? "m" : "d"}`}
            ref={videoRef}
            src={src}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
            autoPlay
            muted
            loop={false}
            playsInline
            preload="auto"
            poster={POSTER}
            aria-hidden="true"
            tabIndex={-1}
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
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
            onEnded={advance}
            onError={() => {
              // Skip any broken clip and try the next one. If every clip in
              // the reel has failed in succession, give up and let the poster
              // image show instead of looping errors forever.
              consecutiveErrorsRef.current += 1;
              if (consecutiveErrorsRef.current >= clips.length) {
                setVideoFailed(true);
              } else {
                setClipIndex((i) => (i + 1) % clips.length);
              }
            }}
          />
        )}

        {/* Cinematic darkening so the headline always reads cleanly over footage */}
        <div className="pointer-events-none absolute inset-0 bg-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_55%,rgba(0,0,0,0)_0%,rgba(11,11,13,0.85)_90%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gold-foil opacity-20 mix-blend-soft-light" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20 md:px-10 md:pb-32 md:pt-40">
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
            className="display mt-6 max-w-[14ch] text-display-xl italic text-pearl md:mt-8"
            stagger={0.12}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl font-tight text-sm leading-relaxed text-pearl/85 sm:text-base md:mt-10 md:text-lg"
          >
            Regalia Vows is for couples who treat their wedding as a work of art.
            Conceived in Dubai, staged the world over.
            <span className="mt-3 hidden text-pearl/55 md:block">
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
          className="relative mx-auto mb-6 flex w-full max-w-[1600px] items-end justify-between px-5 sm:mb-8 sm:px-6 md:px-10"
        >
          <span className="eyebrow opacity-70">Scroll to enter</span>
          <span className="eyebrow hidden opacity-70 sm:inline">{new Date().getFullYear()} · Volume I</span>
        </motion.div>
      </div>
    </section>
  );
}
