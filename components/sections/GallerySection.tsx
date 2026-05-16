"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import type { GalleryImage } from "@/lib/gallery";

export function GallerySection({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  if (!images.length) return null;

  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 text-ink md:py-32">
      {/* Subtle ambient grain behind the grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(214,161,64,0.12) 0%, transparent 70%)",
        }}
      />

      <Container>
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <div>
            <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
              The Atelier
            </span>
            <h2 className="mt-3 font-display text-4xl italic leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Moments from the archive.
            </h2>
          </div>
          <span
            aria-hidden
            className="hidden h-px w-32 flex-shrink-0 bg-gradient-to-r from-gilded to-transparent md:block"
          />
        </div>

        {/*
          Masonry via CSS columns.
          Mobile: 1 col → smooth vertical scroll.
          Tablet: 2 cols.
          Desktop: 3 cols.
          XL: 4 cols.
        */}
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              data-cursor="link"
              className="group relative mb-3 block w-full overflow-hidden rounded-sm bg-ink/5 break-inside-avoid sm:mb-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Hover overlay */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* Gold ring on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gilded/0 transition-all duration-500 group-hover:ring-gilded/55 rounded-sm"
              />
              {/* Expand icon */}
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/60 text-pearl opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </Container>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            {/* Click backdrop to close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute inset-0 cursor-default"
            />

            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-pearl/20 text-pearl/80 transition-colors hover:border-gilded hover:text-gilded sm:right-6 sm:top-6"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-pearl/20 text-pearl/80 transition-colors hover:border-gilded hover:text-gilded sm:left-6"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-pearl/20 text-pearl/80 transition-colors hover:border-gilded hover:text-gilded sm:right-6"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

            {/* Image */}
            <motion.img
              key={images[active].src}
              src={images[active].src}
              alt={images[active].alt}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[88vh] max-w-[88vw] object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <span className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-eyebrow uppercase tracking-widest2 text-pearl/55">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>

            {/* Caption */}
            {images[active].alt && (
              <span className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-display text-sm italic text-pearl/70">
                {images[active].alt}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
