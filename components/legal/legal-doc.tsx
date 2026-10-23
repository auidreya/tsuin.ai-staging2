import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { PaperTexture } from "@/components/paper-texture";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import styles from "./legal-doc.module.css";

export type LegalSlug = "privacy" | "terms" | "support";

// Markdown source lives in content/legal/<slug>.md, next to the doc/ copies the
// team edits. Rendered at build time: every page is static HTML, no client JS.
function loadMarkdown(slug: LegalSlug): string {
  return fs.readFileSync(path.join(process.cwd(), "content", "legal", `${slug}.md`), "utf8");
}

// The first "# " line is the page title; everything after it is the body.
function splitTitle(md: string): { title: string; body: string } {
  const match = md.match(/^#\s+(.+?)\s*\n/);
  if (!match) return { title: "", body: md };
  return { title: match[1], body: md.slice(match[0].length) };
}

export function LegalDoc({ slug, eyebrow }: { slug: LegalSlug; eyebrow: string }) {
  const { title, body } = splitTitle(loadMarkdown(slug));
  const html = marked.parse(body, { gfm: true, breaks: true }) as string;
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <PaperTexture />
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <article className={styles.doc} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
