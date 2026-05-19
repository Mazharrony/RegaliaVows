"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, usePathname, type Href } from "@/lib/i18n/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Monogram } from "./Monogram";
import { CrownMark } from "./CrownMark";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAV_ITEMS = [
  { href: "/about", key: "story" },
  { href: "/services", key: "services" },
  { href: "/packages", key: "packages" },
  { href: "/sectors", key: "sectors" },
  { href: "/experience", key: "experience" },
  { href: "/case-studies", key: "portfolio" },
  { href: "/venues", key: "venues" },
] as const;

/** Treat a nav item as active when the current route starts with its href.
 *  `/` only matches the exact home route to avoid every link lighting up. */
function isActiveHref(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const t = useTranslations("common.nav");
  const tc = useTranslations("common.cta");
  const nav = NAV_ITEMS.map((item) => ({ href: item.href, label: t(item.key) }));
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Scroll-aware chrome: solid frosted bar after the first viewport-height tick,
  // crystalline at the very top so the hero reads cleanly underneath.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-silk",
          scrolled
            ? "bg-cream/85 backdrop-blur-md border-b border-ink/10 shadow-[0_6px_24px_-18px_rgba(20,18,14,0.35)]"
            : "bg-cream/40 backdrop-blur-sm border-b border-transparent",
        )}
      >
        {/* Gold hairline at top of the bar, fades in once scrolled */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gilded/70 to-transparent transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        />
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-5 sm:h-16 md:px-8">
          <Link
            href="/"
            aria-label={site.name}
            className="group flex items-center gap-3"
            data-cursor="link"
          >
            <Monogram className="h-8 w-8 text-gilded transition-transform duration-700 ease-silk group-hover:scale-105 sm:h-9 sm:w-9" />
            <span className="hidden font-display text-base italic text-ink/85 transition-colors duration-500 group-hover:text-gilded 2xl:inline">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8">
            {nav.map((item) => {
              const active = isActiveHref(pathname, item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative font-tight text-[11px] uppercase tracking-widest2 transition-colors",
                    active ? "text-gilded" : "text-ink/75 hover:text-gilded",
                  )}
                  data-cursor="link"
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-2 left-0 h-px bg-gilded transition-all duration-500 ease-silk",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 xl:gap-5">
            <LocaleSwitcher className="hidden xl:inline-flex text-[10px]" />
            <span aria-hidden className="hidden h-4 w-px bg-ink/15 xl:block" />
            <Link
              href="/contact"
              className="hidden xl:inline-flex items-center gap-2 rounded-full border border-gilded/60 px-4 py-1.5 font-tight text-[10px] uppercase tracking-widest2 text-ink transition-all duration-500 ease-silk hover:border-gilded hover:bg-gilded hover:text-ink"
              data-cursor="link"
            >
              <span>{tc("enquire")}</span>
              <span aria-hidden className="inline-block h-px w-4 bg-current" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="group relative -mr-1 grid h-10 w-10 place-items-center text-ink transition-colors hover:text-gilded xl:hidden"
              data-cursor="link"
            >
              <span aria-hidden className="relative block h-[8px] w-[22px]">
                <span className="absolute left-0 top-0 h-px w-full bg-current" />
                <span className="absolute bottom-0 left-0 h-px w-3 bg-current transition-all duration-500 ease-silk group-hover:w-full" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>{open && <MobileDrawer onClose={() => setOpen(false)} nav={nav} enquireLabel={tc("beginEnquiry")} navigateLabel={t("navigate")} pathname={pathname} />}</AnimatePresence>
    </>
  );
}

function MobileDrawer({
  onClose,
  nav,
  enquireLabel,
  navigateLabel,
  pathname,
}: {
  onClose: () => void;
  nav: { href: Href; label: string }[];
  enquireLabel: string;
  navigateLabel: string;
  pathname: string;
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
            {nav.map((item, i) => {
              const active = isActiveHref(pathname, item.href as string);
              return (
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
                    aria-current={active ? "page" : undefined}
                    className="group flex items-center justify-between py-4 sm:py-5"
                    data-cursor="link"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={cn(
                          "font-tight text-[10px] uppercase tracking-widest2",
                          active ? "text-gilded" : "text-ink/40",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-display text-[2rem] italic leading-none transition-colors sm:text-[2.25rem]",
                          active ? "text-gilded" : "text-ink group-hover:text-gilded",
                        )}
                      >
                        {item.label}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "h-px transition-all duration-500 ease-silk",
                        active
                          ? "w-10 bg-gilded"
                          : "w-5 bg-ink/20 group-hover:w-10 group-hover:bg-gilded",
                      )}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* Locale switcher under nav links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-3"
          >
            <span aria-hidden className="h-px w-8 bg-gilded/60" />
            <LocaleSwitcher />
          </motion.div>
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
