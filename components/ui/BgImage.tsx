import Image from "next/image";

/**
 * Drop-in replacement for the `style={{ backgroundImage: \`url(${src})\` }}`
 * pattern. Uses next/image with `fill` so the parent's overlays and gradients
 * keep working unchanged. Defaults to `cover/center` and lazy-loaded; pass
 * `priority` for above-the-fold LCP images.
 *
 * Default `alt=""` because callers usually have a visible heading nearby.
 * Provide a descriptive alt when the image is the primary content of the
 * tile (cards in grids, featured work, journal cards).
 */
export function BgImage({
  src,
  alt = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 60vw",
  quality = 75,
  className = "",
}: {
  src: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      quality={quality}
      className={`object-cover object-center ${className}`.trim()}
      aria-hidden={alt === "" ? true : undefined}
    />
  );
}
