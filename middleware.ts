import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";

// Honors `localePrefix: "as-needed"`, persists the chosen locale in a cookie,
// and 307s first-time visitors to `/ru` when their Accept-Language header
// declares Russian as a preferred tag. The cookie set by the LocaleSwitcher
// overrides Accept-Language on subsequent visits.
export default createMiddleware(routing);

export const config = {
  // Skip API, internal Next assets, public static files, and metadata routes
  // that serve their own non-localized response.
  matcher: [
    "/((?!api|_next|_vercel|sitemap.xml|robots.txt|manifest.webmanifest|opengraph-image|twitter-image|icon|favicon|.*\\..*).*)",
  ],
};
