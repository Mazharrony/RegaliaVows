import { cn } from "@/lib/cn";

/**
 * Regalia Vows monogram.
 * Renders /public/logo.svg as a CSS mask so the artwork is tinted by
 * `currentColor` (e.g. `text-gilded`). The wrapping <span> also carries the
 * gold-glow breathing drop-shadow.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Regalia Vows"
      className={cn(
        "inline-block bg-current animate-gold-glow",
        "[mask-image:url(/logo.svg)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]",
        "[-webkit-mask-image:url(/logo.svg)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]",
        className,
      )}
    />
  );
}
