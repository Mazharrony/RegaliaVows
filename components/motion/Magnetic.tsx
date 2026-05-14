"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  href?: string;
  onClick?: () => void;
};

export function Magnetic({
  children,
  className,
  strength = 0.35,
  as = "div",
  href,
  onClick,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  }

  function onLeave() {
    setPos({ x: 0, y: 0 });
  }

  const Comp = motion[as] as typeof motion.div;

  const extraProps = as === "a" && href ? { href } : {};

  return (
    <Comp
      ref={ref as never}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.3 }}
      className={cn("inline-block", className)}
      {...(extraProps as Record<string, unknown>)}
    >
      {children}
    </Comp>
  );
}
