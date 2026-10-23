import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getBlogPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";
import { Journey } from "./Journey";

const post = getBlogPost("sunway-ilabs-cradle-deep-tech-ventures-lab")!;
const PATH = `/blog/${post.slug}`;

export const metadata: Metadata = pageMetadata({
  title: `${post.title} | tsuin blog`,
  description:
    "Tsuin AI's journey through the Sunway iLabs and Cradle Startup Deep Tech Ventures Lab, told in photos: the launch, the build, the Startup ASEAN Summit showcase, and the pitch.",
  socialDescription:
    "One of 20 startups from 69, from launch to the stage. Tsuin AI's Deep Tech Ventures Lab journey, in photos.",
  path: PATH,
  socialTitle: post.title,
});

export default function DtvlJourneyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.isoDate,
          dateModified: post.isoDate,
          author: { "@type": "Person", name: post.author },
          publisher: { "@type": "Organization", name: "Tsuin AI Sdn Bhd" },
          mainEntityOfPage: `${SITE_URL}${PATH}`,
          description:
            "Tsuin AI's journey through the Sunway iLabs and Cradle Startup Deep Tech Ventures Lab, told in photos.",
        }}
      />
      {/* Figtree is the Tsuin interface typeface; Lora and Martian Mono come from the root layout. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&display=swap"
      />
      <SiteHeader />
      <Journey />
      <SiteFooter />
    </>
  );
}
