"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, type Href } from "@/lib/i18n/navigation";
import { site } from "@/lib/site";
import { Monogram } from "./Monogram";
import { CrownMark } from "./CrownMark";

const NAV_ITEMS = [
  { href: "/about", key: "story" },
  { href: "/services", key: "services" },
  { href: "/packages", key: "packages" },
  { href: "/sectors", key: "sectors" },
  { href: "/experience", key: "experience" },
  { href: "/case-studies", key: "portfolio" },
  { href: "/venues", key: "venues" },
] as const;

export function Nav() {
  const t = useTranslations("common.nav");
  const tc = useTranslations("common.cta");
  const nav = NAV_ITEMS.map((item) => ({ href: item.href, label: t(item.key) }));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent lg:bg-cream/90 lg:backdrop-blur-md lg:border-b lg:border-ink/10">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-5 sm:h-16 md:px-8">
          <Link
            href="/"
            aria-label={site.name}
            className="group flex items-center"
            data-cursor="link"
          >
            <Monogram className="h-8 w-8 text-gilded transition-transform duration-700 ease-silk group-hover:scale-105 sm:h-9 sm:w-9" />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative font-tight text-[11px] uppercase tracking-widest2 text-ink/75 transition-colors hover:text-gilded"
                data-cursor="link"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gilded transition-all duration-500 ease-silk group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center font-tight text-[11px] uppercase tracking-widest2 text-ink/85 transition-colors hover:text-gilded"
              data-cursor="link"
            >
              <span>{tc("enquire")}</span>
              <span aria-hidden className="ml-2 inline-block h-px w-6 bg-gilded" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="group relative -mr-1 grid h-10 w-10 place-items-center text-pearl transition-colors hover:text-gilded lg:hidden"
              data-cursor="link"
            >
              <span aria-hidden className="relative block h-[7px] w-[20px]">
                <span className="absolute left-0 top-0 h-px w-full bg-current" />
                <span className="absolute bottom-0 left-0 h-px w-3 bg-current transition-all duration-500 ease-silk group-hover:w-full" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>{open && <MobileDrawer onClose={() => setOpen(false)} nav={nav} enquireLabel={tc("beginEnquiry")} navigateLabel={t("navigate")} />}</AnimatePresence>
    </>
  );
}

function MobileDrawer({
  onClose,
  nav,
  enquireLabel,
  navigateLabel,
}: {
  onClose: () => void;
  nav: { href: Href; label: string }[];
  enquireLabel: string;
  navigateLabel: string;
}) {
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
        className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-md"
      />

      {/* Drawer panel — slides in from the right */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 flex h-full w-[88vw] max-w-[420px] flex-col overflow-hidden bg-cream text-ink shadow-[0_0_60px_rgba(0,0,0,0.25)]"
      >
        {/* Ambient gold wash + crown watermark + left gold edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_100%_0%,rgba(214,161,64,0.18)_0%,rgba(250,246,238,0)_55%)]"
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
            <span className="font-display text-base italic text-ink/90">{site.name}</span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gilded hover:text-gilded"
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
          {navigateLabel}
        </motion.span>

        {/* Nav links */}
        <nav className="relative mt-6 flex-1 overflow-y-auto px-6 sm:px-8">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-ink/10 last:border-b-0"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-4 sm:py-5"
                  data-cursor="link"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-tight text-[10px] uppercase tracking-widest2 text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[2rem] italic leading-none text-ink transition-colors group-hover:text-gilded sm:text-[2.25rem]">
                      {item.label}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="h-px w-5 bg-ink/20 transition-all duration-500 ease-silk group-hover:w-10 group-hover:bg-gilded"
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
          className="relative mt-4 border-t border-ink/10 bg-cream/70 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 sm:px-8 sm:pt-6"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gilded px-8 py-4 font-tight text-eyebrow uppercase tracking-widest2 text-ink transition-colors hover:bg-gilded/95"
            data-cursor="link"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/60 to-transparent transition-transform duration-700 ease-silk group-hover:translate-x-full"
            />
            <span className="relative">{enquireLabel}</span>
            <svg viewBox="0 0 24 24" className="relative ml-2 h-3.5 w-3.5" fill="none" aria-hidden>
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M9 7h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </motion.aside>
    </div>
  );
}
