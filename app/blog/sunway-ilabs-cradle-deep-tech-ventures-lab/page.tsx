import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { blogPostingJsonLd, getBlogPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import styles from "@/components/blog/article.module.css";
import { SeriesNav } from "@/components/blog/series-nav";
import { Journey } from "./Journey";

const post = getBlogPost("sunway-ilabs-cradle-deep-tech-ventures-lab")!;
const PATH = `/blog/${post.slug}`;

const DESCRIPTION =
  "Tsuin AI's journey through the Sunway iLabs and Cradle Deep Tech Ventures Lab, in photos: the launch, the build, the Startup ASEAN Summit and the pitch.";

export const metadata: Metadata = pageMetadata({
  title: "Sunway iLabs Deep Tech Ventures Lab journey | tsuin blog",
  description: DESCRIPTION,
  socialDescription:
    "One of 20 startups from 69, from launch to the stage. Tsuin AI's Deep Tech Ventures Lab journey, in photos.",
  path: PATH,
  socialTitle: post.title,
  image: post.image,
  article: { publishedTime: post.isoDate, authors: [post.author] },
});

export default function DtvlJourneyPage() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd(post, DESCRIPTION)} />
      {/* Figtree is the Tsuin interface typeface; Lora and Martian Mono come from the root layout. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&display=swap"
      />
      <SiteHeader />
      <main>
        <article>
          <Journey />
        </article>
        <div className={`${styles.inner} ${styles.readNext}`}>
          <SeriesNav heading="Read next: the closed beta log" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
