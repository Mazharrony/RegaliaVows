"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  as = "h2",
}: Props) {
  const words = text.split(" ");
  const Tag = motion[as] as typeof motion.h2;

  return (
    <Tag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline pb-[0.12em]">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "115%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
