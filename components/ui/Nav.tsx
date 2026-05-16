"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { Monogram } from "./Monogram";
import { CrownMark } from "./CrownMark";

const nav = [
  { href: "/about", label: "Story" },
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
  { href: "/experience", label: "Experience" },
  { href: "/case-studies", label: "Portfolio" },
  { href: "/venues", label: "Venues" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        data-theme={scrolled ? "light" : "dark"}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-silk",
          scrolled
            ? "bg-transparent lg:bg-cream/85 lg:backdrop-blur-lg lg:border-b lg:border-ink/10"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            aria-label={site.name}
            className="group flex items-center gap-3"
            data-cursor="link"
          >
            <Monogram className="h-11 w-11 text-gilded transition-transform duration-700 ease-silk group-hover:scale-105 md:h-12 md:w-12" />
            <span
              className={cn(
                "hidden font-display text-lg italic md:block",
                scrolled ? "text-ink/95" : "text-pearl/95"
              )}
            >
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative font-tight text-eyebrow uppercase tracking-widest2 transition-colors hover:text-gilded",
                  scrolled ? "text-ink/80" : "text-pearl/80"
                )}
                data-cursor="link"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gilded transition-all duration-500 ease-silk group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center justify-center rounded-full bg-gilded px-7 py-3.5 font-tight text-eyebrow uppercase tracking-widest2 text-ink transition-colors hover:bg-gilded/90"
              data-cursor="link"
            >
              Begin Enquiry
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={cn(
                "group relative grid h-11 w-11 place-items-center rounded-full border transition-colors hover:border-gilded hover:text-gilded lg:hidden",
                scrolled
                  ? "border-ink/20 text-ink"
                  : "border-pearl/25 text-pearl"
              )}
              data-cursor="link"
            >
              <span aria-hidden className="relative block h-[10px] w-[18px]">
                <span className="absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-silk group-hover:translate-y-[1px]" />
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current transition-all duration-500 ease-silk group-hover:w-full" />
                <span className="absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ease-silk group-hover:-translate-y-[1px]" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>{open && <MobileDrawer onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Navigation">
      {/* Backdrop */}
      <motion.button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 cursor-default bg-ink/65 backdrop-blur-md"
      />

      {/* Drawer panel — slides in from the right */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 flex h-full w-[88vw] max-w-[420px] flex-col overflow-hidden bg-ink text-pearl shadow-[0_0_60px_rgba(0,0,0,0.55)]"
      >
        {/* Ambient gold wash + crown watermark + left gold edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_100%_0%,rgba(214,161,64,0.22)_0%,rgba(11,11,13,0)_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-gilded/80 via-gilded-100/30 to-transparent"
        />
        <CrownMark
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-10 h-[280px] w-[280px] text-gilded opacity-[0.07]"
        />

        {/* Drawer header */}
        <div className="relative flex items-center justify-between px-6 pt-5 sm:px-8 sm:pt-6">
          <Link href="/" onClick={onClose} aria-label={site.name} className="flex items-center gap-3">
            <Monogram className="h-9 w-9 text-gilded" />
            <span className="font-display text-base italic text-pearl/90">{site.name}</span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-pearl/15 text-pearl transition-colors hover:border-gilded hover:text-gilded"
            data-cursor="link"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
              <path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Kicker */}
        <motion.span
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 inline-flex items-center gap-3 px-6 text-eyebrow font-tight uppercase tracking-widest2 text-gilded sm:mt-12 sm:px-8"
        >
          <span aria-hidden className="h-px w-8 bg-gilded/60" />
          Navigate
        </motion.span>

        {/* Nav links */}
        <nav className="relative mt-6 flex-1 overflow-y-auto px-6 sm:px-8">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-pearl/10 last:border-b-0"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-4 sm:py-5"
                  data-cursor="link"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-tight text-[10px] uppercase tracking-widest2 text-pearl/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[2rem] italic leading-none text-pearl transition-colors group-hover:text-gilded sm:text-[2.25rem]">
                      {item.label}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="h-px w-5 bg-pearl/20 transition-all duration-500 ease-silk group-hover:w-10 group-hover:bg-gilded"
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Footer pinned to bottom — Enquiry CTA + contact line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-4 border-t border-pearl/10 bg-ink/40 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 sm:px-8 sm:pt-6"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gilded px-8 py-4 font-tight text-eyebrow uppercase tracking-widest2 text-ink transition-colors hover:bg-gilded/95"
            data-cursor="link"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-pearl/35 to-transparent transition-transform duration-700 ease-silk group-hover:translate-x-full"
            />
            <span className="relative">Begin Enquiry</span>
            <svg viewBox="0 0 24 24" className="relative ml-2 h-3.5 w-3.5" fill="none" aria-hidden>
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M9 7h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <div className="mt-4 flex items-center justify-between text-eyebrow uppercase tracking-widest2 text-pearl/55">
            <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-gilded" data-cursor="link">
              {site.contact.email}
            </a>
            <span className="text-pearl/35">N° 01 · MMXXVI</span>
          </div>
        </motion.div>
      </motion.aside>
    </div>
  );
}
