"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
              className="hidden md:inline-flex items-center justify-center rounded-full bg-gilded px-7 py-3.5 font-tight text-eyebrow uppercase tracking-widest2 text-ink transition-colors hover:bg-gilded/90"
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

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] bg-cream">
      <div className="absolute inset-0 bg-gold-foil opacity-25" aria-hidden />
      <CrownMark className="absolute right-[-8%] top-[18%] h-[420px] w-[420px] opacity-[0.07]" />

      <div className="relative flex h-full flex-col px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex items-center justify-between">
          <Monogram className="h-9 w-9 text-gilded" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gilded hover:text-gilded"
            data-cursor="link"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
              <path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <span className="mt-8 inline-flex items-center gap-3 text-eyebrow font-tight uppercase tracking-widest2 text-gilded-600">
          <span className="h-px w-8 bg-gilded/60" />
          Menu
        </span>

        <nav className="mt-6 flex flex-1 flex-col divide-y divide-ink/10 sm:mt-8">
          {nav.map((item, i) => (
            <div key={item.href} style={{ transitionDelay: `${80 + i * 45}ms` }}>
              <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-baseline justify-between py-3.5 sm:py-4"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-tight text-[10px] uppercase tracking-widest2 text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[2rem] italic leading-none text-ink transition-colors group-hover:text-gilded sm:text-4xl">
                    {item.label}
                  </span>
                </span>
                <span className="h-px w-6 bg-ink/20 transition-all duration-500 ease-silk group-hover:w-12 group-hover:bg-gilded" />
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-4 pb-2 sm:mt-6">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-gilded px-8 py-4 font-tight text-eyebrow uppercase tracking-widest2 text-ink transition-colors hover:bg-gilded/90"
            data-cursor="link"
          >
            Begin Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
