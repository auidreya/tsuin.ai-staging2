import type { NextConfig } from "next";

// PostHog region: "us" (default) or "eu". Must match the project's cloud.
const POSTHOG = process.env.NEXT_PUBLIC_POSTHOG_REGION === "eu" ? "eu" : "us";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // PostHog's API paths end in a slash; don't redirect them away.
  skipTrailingSlashRedirect: true,
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
  // First-party proxy for PostHog (see lib/posthog.ts), so ad blockers don't drop events.
  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: `https://${POSTHOG}-assets.i.posthog.com/static/:path*` },
      { source: "/ingest/array/:path*", destination: `https://${POSTHOG}-assets.i.posthog.com/array/:path*` },
      { source: "/ingest/:path*", destination: `https://${POSTHOG}.i.posthog.com/:path*` },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
};

export default nextConfig;
