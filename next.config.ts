import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingExcludes: {
    "/[locale]/case-studies": ["./public/gallery/**/*"],
  },
  ...(process.env.VERCEL || process.env.CI ? {} : { distDir: ".next-local" }),
  allowedDevOrigins: ["192.168.9.40", "localhost", "127.0.0.1"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [55, 70, 75, 85],
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/portfolio/:slug",
        destination: "/case-studies/:slug",
        permanent: true,
      },
      {
        source: "/favicon.ico",
        destination: "/icon.svg",
        permanent: false,
      },
    ];
  },
  webpack: (config, { dev }) => {
    config.watchOptions = {
      ...(config.watchOptions ?? {}),
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/public/videos/**",
      ],
    };
    // Windows + spaces-in-path + Node's `fs.readlink` quirk causes webpack to
    // throw `EISDIR` while resolving regular files in app/ (manifest.ts,
    // icon.svg, opengraph-image.tsx, etc.). Skipping symlink resolution
    // avoids the readlink call entirely. pnpm's `.pnpm` store still resolves
    // correctly because Next.js handles module resolution above this layer.
    config.resolve = {
      ...(config.resolve ?? {}),
      symlinks: false,
    };
    if (dev) {
      config.cache = false;
    } else {
      // Pack-file persistent cache also calls readlink during snapshots —
      // switch to in-memory cache for production to remove that path too.
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
