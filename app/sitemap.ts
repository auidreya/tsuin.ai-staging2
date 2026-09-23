import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: "2026-08-15", changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/pricing`, lastModified: "2026-08-15", changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/manifesto`, lastModified: "2026-08-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: "2026-08-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/culture`, lastModified: "2026-09-03", changeFrequency: "monthly", priority: 0.6 },
  ];
}
