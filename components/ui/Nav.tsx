"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Instagram, Mail, Phone, X } from "lucide-react";
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

      <AnimatePresence>{open && <MobileMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}

const EASE = [0.16, 1, 0.3, 1] as const;

function MobileMenu({ onClose }: { onClose: () => void }) {
  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const telHref = `tel:${site.contact.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${site.contact.email}`;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Menu">
      {/* Backdrop */}
      <motion.button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="absolute inset-0 bg-ink/70 backdrop-blur-md"
      />

      {/* Drawer */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="absolute right-0 top-0 flex h-full w-[92vw] max-w-[460px] flex-col overflow-hidden bg-cream text-ink shadow-[-30px_0_60px_-20px_rgba(0,0,0,0.45)]"
      >
        {/* Decorative layers */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gold-foil opacity-[0.18]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 85% -10%, rgba(214,161,64,0.35) 0%, rgba(214,161,64,0) 55%)",
          }}
        />
        <CrownMark
          aria-hidden
          className="pointer-events-none absolute -right-16 top-24 h-[420px] w-[420px] text-gilded opacity-[0.08]"
        />
        <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gilded/40 to-transparent" />

        {/* Body */}
        <div className="relative z-10 flex h-full flex-col px-6 pb-7 pt-5 sm:px-8">
          {/* Masthead */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
            className="flex items-center justify-between"
          >
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <Monogram className="h-9 w-9 text-gilded" />
              <span className="font-display text-base italic text-ink/90">{site.name}</span>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gilded hover:text-gilded"
              data-cursor="link"
            >
              <X className="h-[18px] w-[18px]" strokeWidth={1.6} />
            </button>
          </motion.div>

          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
            className="mt-10 inline-flex items-center gap-3 font-tight text-eyebrow uppercase tracking-widest2 text-gilded"
          >
            <span aria-hidden className="h-px w-8 bg-gilded/60" />
            Navigate
          </motion.span>

          {/* Nav items */}
          <nav className="mt-6 flex flex-1 flex-col">
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: EASE }}
                className="border-b border-ink/10 last:border-b-0"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-4 sm:py-[18px]"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-tight text-[10px] uppercase tracking-widest2 text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative font-display text-[2.1rem] italic leading-none text-ink transition-colors duration-500 ease-silk group-hover:text-gilded sm:text-[2.4rem]">
                      {item.label}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gilded transition-all duration-500 ease-silk group-hover:w-full"
                      />
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-ink/30 transition-all duration-500 ease-silk group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gilded"
                    strokeWidth={1.5}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
            className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-5"
          >
            <a
              href={telHref}
              className="group flex items-center gap-3 text-sm text-ink/75 transition-colors hover:text-gilded"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gilded/35 text-gilded transition-colors group-hover:border-gilded group-hover:bg-gilded/10">
                <Phone className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <span className="font-tight">{site.contact.phone}</span>
            </a>
            <a
              href={mailHref}
              className="group flex items-center gap-3 text-sm text-ink/75 transition-colors hover:text-gilded"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gilded/35 text-gilded transition-colors group-hover:border-gilded group-hover:bg-gilded/10">
                <Mail className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <span className="font-tight lowercase">{site.contact.email}</span>
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-sm text-ink/75 transition-colors hover:text-gilded"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gilded/35 text-gilded transition-colors group-hover:border-gilded group-hover:bg-gilded/10">
                <Instagram className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <span className="font-tight">@regaliavows_dubai</span>
            </a>
          </motion.div>

          {/* CTA — pinned at drawer bottom */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: EASE }}
            className="mt-6"
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,#b07f2a_0%,#d6a140_30%,#f0d08c_50%,#d6a140_70%,#b07f2a_100%)] bg-[length:250%_100%] px-8 py-4 font-tight text-eyebrow uppercase tracking-widest2 text-ink shadow-[0_10px_30px_-12px_rgba(214,161,64,0.6)] transition-[background-position] duration-700 ease-silk hover:bg-[position:100%_50%]"
              data-cursor="link"
            >
              <span className="relative z-10">Begin Enquiry</span>
              <ArrowUpRight className="relative z-10 h-4 w-4" strokeWidth={1.6} />
              <span
                aria-hidden
                className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 blur-md transition-transform duration-1000 ease-silk group-hover:translate-x-[400%]"
              />
            </Link>
            <p className="mt-3 text-center font-tight text-[10px] uppercase tracking-widest2 text-ink/45">
              By appointment · Dubai
            </p>
          </motion.div>
        </div>
      </motion.aside>
    </div>
  );
}
