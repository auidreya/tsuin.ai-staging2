import Link from "next/link";
import styles from "@/components/blog/article.module.css";
import { BETA_LOGS } from "@/lib/blog";

// Links every closed beta log in order, so readers (and crawlers) can move
// through the series. `current` is left unlinked on its own page.
export function SeriesNav({ current, heading = "The closed beta log" }: { current?: string; heading?: string }) {
  return (
    <nav className={styles.series} aria-label={heading}>
      <p className={styles.seriesHeading}>{heading}</p>
      <ol className={styles.seriesList}>
        {BETA_LOGS.map((post) => (
          <li key={post.slug}>
            {post.slug === current ? (
              <span aria-current="page">{post.title}</span>
            ) : (
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
