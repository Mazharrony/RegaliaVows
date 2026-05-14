"use client";

import { useEffect } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Use native scroll on desktop pointers (mouse). Keep Lenis smooth-scroll
    // only for touch devices, where it improves momentum/feel.
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (!isTouch) return;

    let cleanup: (() => void) | undefined;
    let mounted = true;

    (async () => {
      const [lenisMod, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!mounted) return;

      const Lenis = (lenisMod as { default: new (opts: unknown) => {
        raf: (t: number) => void;
        on: (e: string, fn: () => void) => void;
        destroy: () => void;
      }; }).default;
      const gsap = gsapMod.gsap ?? (gsapMod as { default: typeof gsapMod.gsap }).default;
      const ScrollTrigger = stMod.ScrollTrigger ?? (stMod as { default: typeof stMod.ScrollTrigger }).default;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      });

      function raf(time: number) {
        lenis.raf(time);
      }

      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      lenis.on("scroll", ScrollTrigger.update);

      document.documentElement.classList.add("lenis", "lenis-smooth");

      cleanup = () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
        document.documentElement.classList.remove("lenis", "lenis-smooth");
      };
    })();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
