import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Our CSS is small (~12 KB), so ship it inside the HTML: no render-blocking
    // stylesheet request before first paint on slow mobile connections.
    inlineCss: true,
  },
  // Pin the workspace root; a stray lockfile in the home directory confuses detection.
  turbopack: { root: process.cwd() },
  // The old static site served /about.html etc. Keep any saved links working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/:page(about|pricing|culture|manifesto).html", destination: "/:page", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
};

export default nextConfig;
