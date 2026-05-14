"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "link" | "drag" | "view";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });

  const [state, setState] = useState<CursorState>("default");
  const [label, setLabel] = useState<string>("");
  const [enabled, setEnabled] = useState(true);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) {
      setEnabled(false);
      return;
    }

    function onMove(e: MouseEvent) {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest<HTMLElement>(
        "a, button, [role=button], [data-cursor]"
      );
      if (interactive) {
        const next = (interactive.dataset.cursor as CursorState) || "link";
        const text = interactive.dataset.cursorLabel || "";
        setState(next);
        setLabel(text);
      } else {
        setState("default");
        setLabel("");
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size =
    state === "view" ? 96 : state === "link" ? 56 : state === "drag" ? 80 : 22;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-gilded/80 bg-transparent"
      >
        <span className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest2 text-pearl">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}
