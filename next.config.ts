import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Prevent Vercel from bundling public/gallery images into the case-studies
  // serverless function. The images are served as static assets, not via the
  // Node.js function, so they must be excluded from output file tracing.
  outputFileTracingExcludes: {
    "/case-studies": ["./public/gallery/**/*"],
  },
  // Use a custom distDir locally to dodge a Windows file-lock on `.next/trace`
  // when the dev server is killed abruptly. Vercel/CI must use the default
  // `.next` so its post-build steps can find routes-manifest.json.
  ...(process.env.VERCEL || process.env.CI ? {} : { distDir: ".next-local" }),
  allowedDevOrigins: ["192.168.9.40", "localhost", "127.0.0.1"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [55, 70, 75, 85],
    remotePatterns: [
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
  // Prevent webpack's persistent cache from trying to gzip large video blobs
  // (which triggers `RangeError: Array buffer allocation failed` in dev), and
  // stop the file watcher from tracking heavy video folders that aren't code.
  webpack: (config, { dev }) => {
    config.watchOptions = {
      ...(config.watchOptions ?? {}),
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/public/videos/**",
      ],
    };
    if (dev) {
      // Path contains spaces which breaks webpack's persistent filesystem
      // cache snapshot resolver. The in-memory cache previously used here
      // produced intermittent `options.factory undefined` crashes for
      // "use client" modules at the root layout (client reference manifest
      // would resolve to an undefined factory). Disabling cache entirely
      // in dev avoids both failure modes.
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
