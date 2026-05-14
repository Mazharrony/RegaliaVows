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

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0)" } : undefined}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
