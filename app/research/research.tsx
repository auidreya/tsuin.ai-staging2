import type { Metadata } from "next";
import Link from "next/link";
import { PaperTexture } from "@/components/paper-texture";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { pageMetadata } from "@/lib/metadata";
import { RESEARCH_POSTS } from "@/lib/research";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Research | tsuin",
  description:
    "How we teach an AI twin to keep learning from one person without forgetting what it already knew. Notes from our continual-learning research, with honest numbers.",
  path: "/research",
  socialTitle: "tsuin Research",
  socialDescription:
    "Notes from our continual-learning research: what we measured, what broke, and what finally worked.",
});

export default function ResearchIndexPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <PaperTexture />
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Research</p>
          <h1 className={styles.title}>What we measured, what broke, what worked.</h1>
          <p className={styles.lead}>
            A twin has to keep learning from one person without forgetting what it already knew. These are our working
            notes on getting there, with honest numbers rather than a polished demo.
          </p>

          {RESEARCH_POSTS.length === 0 ? (
            <p className={styles.empty}>More soon.</p>
          ) : (
            <ul className={styles.list}>
              {RESEARCH_POSTS.map((post) => (
                <li key={post.slug}>
                  <Link href={`/research/${post.slug}`} className={styles.card}>
                    <p className={styles.cardMeta}>
                      <span>{post.date}</span>
                      <span className={styles.cardDot} aria-hidden="true" />
                      <span>@{post.author}</span>
                      <span className={styles.cardDot} aria-hidden="true" />
                      <span>{post.readingTime}</span>
                    </p>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.cardDek}>{post.dek}</p>
                    <span className={styles.cardLink}>Read the post →</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
