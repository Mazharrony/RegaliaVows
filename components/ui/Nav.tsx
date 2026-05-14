"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { Button } from "./Button";
import { Monogram } from "./Monogram";

const nav = [
  { href: "/about", label: "Story" },
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
  { href: "/experience", label: "Experience" },
  { href: "/case-studies", label: "Portfolio" },
  { href: "/venues", label: "Venues" },
  { href: "/journal", label: "Journal" },
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
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-silk",
          scrolled
            ? "bg-ink/60 backdrop-blur-lg border-b border-pearl/5"
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
            <span className="hidden font-display text-lg italic text-pearl/95 md:block">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-tight text-eyebrow uppercase tracking-widest2 text-pearl/80 transition-colors hover:text-gilded"
                data-cursor="link"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gilded transition-all duration-500 ease-silk group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/contact" variant="gilded" size="md" withArrow className="hidden md:inline-flex">
              Begin Enquiry
            </Button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-pearl/15 text-pearl transition-colors hover:border-gilded hover:text-gilded lg:hidden"
              data-cursor="link"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-ink"
    >
      <div className="absolute inset-0 bg-gold-foil opacity-30" aria-hidden />
      <div className="relative flex h-full flex-col px-6 py-6 md:px-10">
        <div className="flex items-center justify-between">
          <Monogram className="h-10 w-10 text-gilded" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-pearl/15 text-pearl"
            data-cursor="link"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="mt-16 flex flex-col gap-6">
          {nav.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="font-display text-5xl italic text-pearl hover:text-gilded"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="mt-auto">
          <Button href="/contact" variant="gilded" size="lg" withArrow className="w-full">
            Begin Enquiry
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
