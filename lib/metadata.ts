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
};

// One place for canonical, Open Graph and Twitter tags so every page ships the
// same shape. `title` is used verbatim (the root layout sets no template).
export function pageMetadata({ title, description, path, socialTitle, socialDescription }: PageMetaInput): Metadata {
  const ogTitle = socialTitle ?? title;
  const social = socialDescription ?? description;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title: ogTitle,
      description: social,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: social,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}
