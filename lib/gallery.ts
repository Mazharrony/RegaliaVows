import fs from "fs";
import path from "path";

export type GalleryImage = {
  src: string;
  alt: string;
};

// ─── ImgBB Gallery URLs ────────────────────────────────────────────────────
// 1. Upload images at https://mazhar-rony.imgbb.com/
// 2. For each photo copy the "Direct link" (https://i.ibb.co/…)
// 3. Add it below as: { src: "https://i.ibb.co/XXXX/photo.jpg", alt: "caption" }
//
// When this array is non-empty it takes full priority over public/gallery/.
// Once all images are here you can delete public/gallery/ from the repo.
const IMGBB_IMAGES: GalleryImage[] = [
  // Paste your ImgBB direct links here, e.g.:
  // { src: "https://i.ibb.co/XXXX/DSC02808.jpg", alt: "Bridal morning details" },
];
// ──────────────────────────────────────────────────────────────────────────

/**
 * Returns gallery images.
 * Priority: IMGBB_IMAGES array (when populated) → public/gallery/ folder.
 */
export function getGalleryImages(): GalleryImage[] {
  if (IMGBB_IMAGES.length > 0) return IMGBB_IMAGES;

  // Fallback: auto-discover from public/gallery/ (local files)
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
