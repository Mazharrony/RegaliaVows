"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react";
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
            ? "bg-cream/85 backdrop-blur-lg border-b border-ink/10"
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
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full border transition-colors hover:border-gilded hover:text-gilded lg:hidden",
                scrolled
                  ? "border-ink/15 text-ink"
                  : "border-pearl/15 text-pearl"
              )}
              data-cursor="link"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
                <path d="M4 7h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileDrawer key="drawer" onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

const panelEase = [0.16, 1, 0.3, 1] as const;

function MobileDrawer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      {/* Backdrop */}
      <motion.button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: panelEase }}
        className="absolute inset-0 bg-ink/70 backdrop-blur-md"
      />

      {/* Drawer panel */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.7, ease: panelEase }}
        className="absolute inset-y-0 right-0 flex w-[92vw] max-w-[460px] flex-col overflow-hidden bg-cream text-ink shadow-[ -20px_0_60px_-20px_rgba(0,0,0,0.6)]"
      >
        {/* Decorative layers */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gold-foil opacity-30" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(214,161,64,0.35), transparent 70%)" }}
        />
        <CrownMark className="pointer-events-none absolute -right-16 top-32 h-[360px] w-[360px] opacity-[0.06]" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gilded/60 to-transparent" />

        <div className="relative flex h-full flex-col px-6 pb-6 pt-5 sm:px-8 sm:pt-6">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <Monogram className="h-9 w-9 text-gilded" />
              <span className="font-display text-base italic text-ink/90">{site.name}</span>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="group grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-500 ease-silk hover:border-gilded hover:text-gilded"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] transition-transform duration-500 ease-silk group-hover:rotate-90" fill="none" aria-hidden>
                <path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Masthead */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: panelEase }}
            className="mt-9 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gilded/70" />
            <span className="font-tight text-eyebrow uppercase tracking-widest2 text-gilded-600">
              Menu · N° 01
            </span>
          </motion.div>

          {/* Nav items */}
          <nav className="mt-5 flex flex-col">
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 + i * 0.07, duration: 0.7, ease: panelEase }}
                className="border-b border-ink/10 last:border-b-0"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline justify-between py-3.5 sm:py-4"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-tight text-[10px] uppercase tracking-widest2 text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative font-display text-[2.1rem] italic leading-none text-ink transition-colors duration-500 ease-silk group-hover:text-gilded sm:text-[2.4rem]">
                      {item.label}
                      <span
                        aria-hidden
                        className="absolute -bottom-1 left-0 block h-px w-0 bg-gilded transition-all duration-700 ease-silk group-hover:w-full"
                      />
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    className="text-ink/40 transition-all duration-500 ease-silk group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gilded"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: panelEase }}
            className="mt-7 flex flex-col gap-2 text-sm font-tight text-ink/70 sm:mt-8"
          >
            <a href={`tel:${site.contact.phone.replace(/\s+/g, "")}`} className="group inline-flex items-center gap-3 transition-colors hover:text-gilded">
              <Phone size={14} strokeWidth={1.5} className="text-gilded" />
              <span>{site.contact.phone}</span>
            </a>
            <a href={`mailto:${site.contact.email}`} className="group inline-flex items-center gap-3 transition-colors hover:text-gilded">
              <Mail size={14} strokeWidth={1.5} className="text-gilded" />
              <span>{site.contact.email}</span>
            </a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 transition-colors hover:text-gilded">
              <Instagram size={14} strokeWidth={1.5} className="text-gilded" />
              <span>@regaliavows_dubai</span>
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease: panelEase }}
            className="mt-auto pt-6"
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="group relative inline-flex w-full items-center justify-between gap-3 overflow-hidden rounded-full px-7 py-4 font-tight text-eyebrow uppercase tracking-widest2 text-ink shadow-[0_18px_45px_-22px_rgba(176,127,42,0.65)]"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #b07f2a 0%, #d6a140 30%, #f0d08c 50%, #d6a140 70%, #b07f2a 100%)",
                backgroundSize: "200% 100%",
              }}
            >
              <span className="relative z-10">Begin Enquiry</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="relative z-10 transition-transform duration-500 ease-silk group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-silk group-hover:translate-x-full"
              />
            </Link>
            <p className="mt-3 text-center font-tight text-[10px] uppercase tracking-widest2 text-ink/50">
              By appointment · {site.city}
            </p>
          </motion.div>
        </div>
      </motion.aside>
    </div>
  );
}
