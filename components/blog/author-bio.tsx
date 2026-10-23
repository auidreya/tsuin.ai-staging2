import styles from "@/components/blog/article.module.css";
import { BLOG_AUTHORS } from "@/lib/blog";

// The "about the author" box at the end of a guest post: who wrote it, in
// their own words, and where to find them.
export function AuthorBio({ name }: { name: string }) {
  const author = BLOG_AUTHORS[name];
  if (!author) return null;
  return (
    <aside className={styles.author} aria-label="About the author">
      <p className={styles.authorLabel}>About the author</p>
      <p className={styles.authorName}>{name}</p>
      <p className={styles.authorRole}>{author.role}</p>
      <blockquote className={styles.authorQuote}>
        <p>&ldquo;{author.bio}&rdquo;</p>
      </blockquote>
      <ul className={styles.authorLinks}>
        {author.links.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="me noopener noreferrer">
              {l.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
