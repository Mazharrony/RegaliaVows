"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import type { GalleryAlbum, GalleryImage } from "@/lib/gallery";
import type { Locale } from "@/lib/i18n/config";

const PAGE_SIZE = 12;

type ActiveLightbox = { albumId: string; index: number };

// ─── Per-tile thumbnail with skeleton placeholder ──────────────────────────
function GalleryThumb({
  img,
  onOpen,
}: {
  img: GalleryImage;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      data-cursor="link"
      className="group relative mb-3 block w-full overflow-hidden rounded-sm bg-ink/5 break-inside-avoid sm:mb-4"
    >
      {!loaded && !errored && (
        <div
          aria-hidden
          className="relative w-full animate-pulse overflow-hidden bg-gradient-to-br from-ink/[0.05] via-ink/[0.09] to-ink/[0.05]"
          style={{ aspectRatio: "4 / 5" }}
        >
          <span className="absolute left-1/2 top-1/2 block h-7 w-7 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-2 border-ink/10 border-t-gilded/70" />
        </div>
      )}

      {errored && (
        <div
          aria-hidden
          className="flex w-full items-center justify-center bg-ink/[0.06] text-eyebrow uppercase tracking-widest2 text-ink/35"
          style={{ aspectRatio: "4 / 5" }}
        >
          unavailable
        </div>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        className={`h-auto w-full transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.04] ${
          loaded ? "opacity-100" : "absolute inset-0 opacity-0"
        }`}
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gilded/0 transition-all duration-500 group-hover:ring-gilded/55 rounded-sm"
      />
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
  );
}

// ─── A single album block: story + paginated masonry grid ──────────────────
function AlbumBlock({
  album,
  locale,
  onOpenImage,
}: {
  album: GalleryAlbum;
  locale: Locale;
  onOpenImage: (index: number) => void;
}) {
  const story = album.story[locale] ?? album.story.en;
  const [page, setPage] = useState(0);
  const scrollOnNextRender = useRef(false);

  const totalPages = Math.ceil(album.images.length / PAGE_SIZE);
  const pageImages = album.images.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  useEffect(() => {
    if (!scrollOnNextRender.current) return;
    scrollOnNextRender.current = false;
    const el = document.getElementById(`gallery-album-${album.id}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, [page, album.id]);

  const goToPage = (p: number) => {
    scrollOnNextRender.current = true;
    setPage(p);
  };

  return (
    <div id={`gallery-album-${album.id}`} className="mb-24 last:mb-0 md:mb-32">
      {/* Story header */}
      <div className="mb-10 max-w-3xl md:mb-14">
        <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
          {story.eyebrow}
        </span>
        <h3 className="mt-3 font-display text-3xl italic leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
          {story.title}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">
          {story.narrative}
        </p>
        {totalPages > 1 && (
          <span className="mt-6 inline-block text-eyebrow uppercase tracking-widest2 text-ink/40">
            {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
          </span>
        )}
      </div>

      {/* Masonry grid */}
      <motion.div
        key={`${album.id}-${page}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4"
      >
        {pageImages.map((img, i) => (
          <GalleryThumb
            key={img.src}
            img={img}
            onOpen={() => onOpenImage(page * PAGE_SIZE + i)}
          />
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Album pages" className="mt-12 md:mt-14">
          <div className="flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
              aria-label="Previous page"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-gilded hover:text-gilded disabled:pointer-events-none disabled:opacity-25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M15 6l-6 6 6 6" /></svg>
            </button>

            <span className="min-w-[5rem] text-center text-sm font-medium text-ink/60">
              <span
                className="font-semibold text-ink"
                style={{ backgroundImage: "linear-gradient(100deg,#c8902f,#e6b651,#f7dc97,#d6a140)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {page + 1}
              </span>
              {" "}<span className="text-ink/40">of</span>{" "}{totalPages}
            </span>

            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages - 1}
              aria-label="Next page"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-gilded hover:text-gilded disabled:pointer-events-none disabled:opacity-25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>

          <div className="hidden items-center justify-center gap-1.5 sm:flex">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-gilded hover:text-gilded disabled:pointer-events-none disabled:opacity-25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M15 6l-6 6 6 6" /></svg>
            </button>

            {(() => {
              const range: (number | "…")[] = [];
              const add = new Set<number>();
              [0, totalPages - 1, page - 1, page, page + 1].forEach((n) => {
                if (n >= 0 && n < totalPages) add.add(n);
              });
              const sorted = Array.from(add).sort((a, b) => a - b);
              sorted.forEach((n, idx) => {
                if (idx > 0 && n > sorted[idx - 1] + 1) range.push("…");
                range.push(n);
              });
              return range.map((item, idx) =>
                item === "…" ? (
                  <span key={`ellipsis-${idx}`} className="flex h-10 w-8 items-center justify-center text-sm text-ink/35 select-none">…</span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    onClick={() => goToPage(item)}
                    aria-label={`Page ${item + 1}`}
                    aria-current={item === page ? "page" : undefined}
                    className={`flex h-10 min-w-[2.5rem] items-center justify-center rounded-full px-3 text-sm font-medium transition-all duration-300 ${
                      item === page
                        ? "text-ink shadow-[0_8px_24px_-8px_rgba(214,161,64,0.55)]"
                        : "border border-ink/15 text-ink/60 hover:border-gilded hover:text-gilded"
                    }`}
                    style={
                      item === page
                        ? { backgroundImage: "linear-gradient(100deg,#c8902f 0%,#e6b651 20%,#f7dc97 45%,#f0c668 70%,#d6a140 100%)" }
                        : undefined
                    }
                  >
                    {item + 1}
                  </button>
                )
              );
            })()}

            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages - 1}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-gilded hover:text-gilded disabled:pointer-events-none disabled:opacity-25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────
export function AlbumGallery({
  albums,
  locale,
  intro,
}: {
  albums: GalleryAlbum[];
  locale: Locale;
  intro?: { eyebrow: string; title: string };
}) {
  const [active, setActive] = useState<ActiveLightbox | null>(null);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

  const activeAlbum = active ? albums.find((a) => a.id === active.albumId) : undefined;
  const activeImages = activeAlbum?.images ?? [];

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => {
    setActive((cur) => {
      if (!cur) return cur;
      const album = albums.find((a) => a.id === cur.albumId);
      if (!album) return cur;
      return { albumId: cur.albumId, index: (cur.index + 1) % album.images.length };
    });
  }, [albums]);
  const prev = useCallback(() => {
    setActive((cur) => {
      if (!cur) return cur;
      const album = albums.find((a) => a.id === cur.albumId);
      if (!album) return cur;
      return {
        albumId: cur.albumId,
        index: (cur.index - 1 + album.images.length) % album.images.length,
      };
    });
  }, [albums]);

  useEffect(() => {
    if (!active) return;
    setLightboxLoaded(false);
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

  if (!albums.length) return null;

  const activeImage =
    active && activeImages[active.index] ? activeImages[active.index] : null;

  return (
    <section id="gallery-section" className="relative isolate overflow-hidden bg-cream py-24 text-ink md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(214,161,64,0.12) 0%, transparent 70%)",
        }}
      />

      <Container>
        {intro && (
          <div className="mb-16 md:mb-24">
            <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
              {intro.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-4xl italic leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {intro.title}
            </h2>
          </div>
        )}

        {albums.map((album) => (
          <AlbumBlock
            key={album.id}
            album={album}
            locale={locale}
            onOpenImage={(index) => setActive({ albumId: album.id, index })}
          />
        ))}
      </Container>

      {/* ── Lightbox (scoped to active album) ─────────────────────── */}
      <AnimatePresence>
        {active && activeImage && (
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
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute inset-0 cursor-default"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-pearl/20 text-pearl/80 transition-colors hover:border-gilded hover:text-gilded sm:right-6 sm:top-6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-pearl/20 text-pearl/80 transition-colors hover:border-gilded hover:text-gilded sm:left-6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-pearl/20 text-pearl/80 transition-colors hover:border-gilded hover:text-gilded sm:right-6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

            {!lightboxLoaded && (
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
              >
                <span className="block h-10 w-10 animate-spin rounded-full border-2 border-pearl/15 border-t-gilded" />
              </span>
            )}

            <motion.img
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              dragMomentum={false}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
              onLoad={() => setLightboxLoaded(true)}
              className={`relative z-10 max-h-[88vh] max-w-[88vw] cursor-grab touch-none object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] active:cursor-grabbing transition-opacity duration-300 ${
                lightboxLoaded ? "opacity-100" : "opacity-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            />

            <span className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-eyebrow uppercase tracking-widest2 text-pearl/55">
              {String(active.index + 1).padStart(2, "0")} /{" "}
              {String(activeImages.length).padStart(2, "0")}
            </span>

            {activeImage.alt && (
              <span className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-display text-sm italic text-pearl/70">
                {activeImage.alt}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
