import type { Metadata } from "next";
import Link from "next/link";
import { PaperTexture } from "@/components/paper-texture";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { BLOG_POSTS } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Blog | tsuin",
  description:
    "Field notes from building and training AI twins: closed beta logs, lessons from real users, and the honest, unpolished parts of teaching a twin to think like you.",
  path: "/blog",
  socialTitle: "tsuin Blog",
  socialDescription: "Field notes from building and training AI twins, including closed beta logs from real users.",
});

export default function BlogIndexPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <PaperTexture />
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Blog</p>
          <h1 className={styles.title}>Field notes from teaching a twin.</h1>
          <p className={styles.lead}>
            Stories from building Tsuin and from the people training their twins right now, including the closed beta
            logs. The good parts and the frustrating parts, written as they happened.
          </p>

          {BLOG_POSTS.length === 0 ? (
            <p className={styles.empty}>More soon.</p>
          ) : (
            <ul className={styles.list}>
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className={styles.card}>
                    <p className={styles.cardMeta}>
                      <span className={styles.cardAuthor}>By {post.author}</span>
                      <span className={styles.cardDot} aria-hidden="true" />
                      <span>{post.date}</span>
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
