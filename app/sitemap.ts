import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: "2026-08-15", changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/pricing`, lastModified: "2026-08-15", changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/manifesto`, lastModified: "2026-08-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/research`, lastModified: "2026-10-21", changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${SITE_URL}/research/teaching-a-twin-without-making-it-forget`,
      lastModified: "2026-10-21",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${SITE_URL}/blog`, lastModified: "2026-10-21", changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${SITE_URL}/blog/day-1-with-my-ai-twin`,
      lastModified: "2026-10-21",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${SITE_URL}/about`, lastModified: "2026-08-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/culture`, lastModified: "2026-09-03", changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: "2026-10-08", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: "2026-10-08", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/support`, lastModified: "2026-10-08", changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: "2026-10-08", changeFrequency: "monthly", priority: 0.5 },
  ];
}
