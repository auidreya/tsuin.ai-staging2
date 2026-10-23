import type { Metadata } from "next";
import { SITE_NAME } from "./site";

const OG_IMAGE = {
  url: "/assets/og-cover-v2.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "tsuin (Train your twin). A personal pre-AGI that learns your reasoning from your own corrections and runs on your machine.",
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** og/twitter title when it differs from <title> (usually without the " | tsuin" suffix). */
  socialTitle?: string;
  socialDescription?: string;
  /** Per-page social card; falls back to the site cover. */
  image?: { url: string; alt: string };
  /** Marks the page as an article for Open Graph. */
  article?: { publishedTime: string; authors: string[] };
};

// One place for canonical, Open Graph and Twitter tags so every page ships the
// same shape. `title` is used verbatim (the root layout sets no template).
export function pageMetadata({
  title,
  description,
  path,
  socialTitle,
  socialDescription,
  image,
  article,
}: PageMetaInput): Metadata {
  const ogTitle = socialTitle ?? title;
  const social = socialDescription ?? description;
  const ogImage = image ? { url: image.url, width: 1200, height: 630, type: "image/jpeg", alt: image.alt } : OG_IMAGE;
  const type = article
    ? ({ type: "article", publishedTime: article.publishedTime, authors: article.authors } as const)
    : ({ type: "website" } as const);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...type,
      siteName: SITE_NAME,
      locale: "en_US",
      title: ogTitle,
      description: social,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: social,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
  };
}
