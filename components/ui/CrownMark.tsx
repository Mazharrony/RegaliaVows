import { cn } from "@/lib/cn";

/**
 * Decorative crown watermark — renders /public/crown.svg as a CSS mask painted
 * with the gilded gradient. Purely ornamental; always `aria-hidden`.
 *
 * Pass sizing/positioning via `className` (e.g. `absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 opacity-20`).
 */
export function CrownMark({
  className,
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none inline-block bg-gold-shimmer bg-[length:200%_200%]",
        animate && "animate-[gold-pan_9s_ease-in-out_infinite]",
        "[mask-image:url(/crown.svg)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]",
        "[-webkit-mask-image:url(/crown.svg)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]",
        className
      )}
    />
  );
}
