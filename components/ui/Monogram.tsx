import { cn } from "@/lib/cn";

/**
 * Regalia Vows monogram.
 * Uses the logo SVG as a CSS mask so the artwork is painted with the gilded
 * gradient theme. The breathing drop-shadow halo lives on the wrapper.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Regalia Vows"
      className={cn(
        "inline-block animate-gold-glow bg-gold-shimmer bg-[length:200%_200%] animate-[gold-pan_7s_ease-in-out_infinite]",
        "[mask-image:url(/logo.svg)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]",
        "[-webkit-mask-image:url(/logo.svg)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]",
        className
      )}
    />
  );
}
