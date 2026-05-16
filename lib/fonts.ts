import { Cormorant_Garamond, Inter, Inter_Tight } from "next/font/google";

// Performance: keep the typographic system to the minimum number of font
// files. Every Google-font @weight/@style pair is a separate woff2 request,
// each one render-blocking until it resolves. The whole site uses Cormorant
// only as large italic display headings (plus a single decorative quote
// glyph), so 400 normal + 400 italic covers every visible use. `display: swap`
// + `adjustFontFallback` keeps CLS minimal while the webfont arrives.
export const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
});

export const tight = Inter_Tight({
  subsets: ["latin"],
  // Body / UI weights. Include 500 + 600 so navigation, buttons and small
  // caps labels render with adequate stroke weight on the cream surface.
  weight: ["400", "500", "600"],
  variable: "--font-tight",
  display: "swap",
  preload: true,
});
