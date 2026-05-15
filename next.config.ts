import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.9.40", "localhost", "127.0.0.1"],
  images: {
    formats: ["image/avif", "image/webp"],
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
        "**/.next/**",
        "**/public/videos/**",
      ],
    };
    if (dev) {
      // The project path contains spaces (`JNK APP\Mazhar Personal\...`) which
      // breaks webpack's filesystem-cache snapshot resolver and produces
      // `Caching failed for pack: Unable to snapshot resolve dependencies`.
      // In-memory cache sidesteps both that warning and the earlier gzip
      // allocation failure caused by cache-packing video assets.
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default nextConfig;
