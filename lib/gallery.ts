import fs from "fs";
import path from "path";

export type GalleryImage = {
  src: string;
  alt: string;
};

/**
 * Reads every image inside `public/gallery/` and returns its public path.
 * Called at build time on the server — safe in RSC / generateStaticParams.
 * Drop any .jpg/.png/.webp/.avif/.gif into public/gallery/ and it appears.
 */
export function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f))
      .filter((f) => !f.startsWith("."))
      .sort()
      .map((f) => ({
        src: `/gallery/${f}`,
        alt: f.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
      }));
  } catch {
    return [];
  }
}
