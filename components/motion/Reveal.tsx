"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({
  as = "div",
  delay = 0,
  y = 24,
  once = true,
  className,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  // Performance: avoid animating `filter` — it forces non-composited paint
  // (Lighthouse "non-composited animations" warning) and adds main-thread
  // work on every frame. Transforms (translateY) + opacity stay on the
  // compositor thread.
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
