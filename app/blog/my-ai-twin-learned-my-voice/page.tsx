import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PaperTexture } from "@/components/paper-texture";
import styles from "@/components/blog/article.module.css";
import { AuthorBio } from "@/components/blog/author-bio";
import { SeriesNav } from "@/components/blog/series-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ButtonLink } from "@/components/ui/button";
import { blogPostingJsonLd, getBlogPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

const post = getBlogPost("my-ai-twin-learned-my-voice")!;
const PATH = `/blog/${post.slug}`;

const DESCRIPTION =
  "A Tsuin closed beta tester trained his AI twin with corrections. It copied the way he corrects people instead of the fix, and learned his voice first.";

export const metadata: Metadata = pageMetadata({
  title: "My AI twin learned how I correct, not the correction | tsuin blog",
  description: DESCRIPTION,
  socialDescription:
    "I told my AI twin it was wrong. It didn't learn the fix. It learned the way I say “wrong”, and then it learned my voice.",
  path: PATH,
  socialTitle: post.title,
  image: post.image,
  article: { publishedTime: post.isoDate, authors: [post.author] },
});

export default function BlogArticlePage() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd(post, DESCRIPTION)} />
      <SiteHeader />
      <main className={styles.main}>
        <PaperTexture />
        <article className={styles.inner}>
          <Link href="/blog" className={styles.back}>
            ← All posts
          </Link>
          <p className={styles.eyebrow}>Closed beta log</p>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span className={styles.metaAuthor}>By {post.author}</span>
            <span className={styles.metaDot} aria-hidden="true" />
            <span>{post.authorRole}</span>
            <span className={styles.metaDot} aria-hidden="true" />
            <time dateTime={post.isoDate}>{post.date}</time>
            <span className={styles.metaDot} aria-hidden="true" />
            <span>{post.readingTime}</span>
          </div>

          <p className={styles.lead}>
            The strangest thing my AI twin did wasn&rsquo;t a bug. It learned the way I correct it, instead of learning
            the correction.
          </p>

          <div className={styles.prose}>
            <p>
              When I teach a kid, I point out what they did wrong first, then I show them how to do it right. My twin
              grabs the first half and drops the second. If I tell it &ldquo;that&rsquo;s wrong&rdquo;, it remembers the
              exact way I say that, and never picks up the fix behind it.
            </p>

            <h2 className={styles.h2}>How I tested it</h2>
            <p>
              I asked it the best way to write a blog post, and it answered straight away: know your audience and their
              pain point. But I didn&rsquo;t want an answer. I wanted it to ask me first, why I&rsquo;m writing, who
              it&rsquo;s for. So I told it it was wrong. It should have questioned me and gotten more detail before
              handing me a solution. I&rsquo;m trying to teach it to work with me, not just spit out answers.
            </p>
            <p>
              After a while, I asked it how to make a new recipe. It replied,{" "}
              <span className={styles.twinSays}>Wrong. You should tell me what kind of food you want to make.</span>
            </p>
            <p>
              That stopped me. I taught it to learn from the correction and the solution, not to copy the way I correct.
              But that&rsquo;s exactly what it did. It learned my voice instead, and honestly, that frustrated me.
            </p>

            <h2 className={styles.h2}>Then it clicked</h2>
            <p>
              If my twin learns how I reply to someone, it&rsquo;s learning how I would write to someone in the first
              place. So now, every time it writes something wrong, I think, if this was a person, how would I reply to
              them?
            </p>
            <p>
              Once I started doing that, it started learning how I open a conversation. When someone gives me a vague
              question, I ask a question back, trying to understand. And now it does that too.
            </p>
            <p>
              I don&rsquo;t know if this stays true as it keeps training. But if you&rsquo;re training an AI on your
              corrections, watch what it actually picks up.
            </p>
            <p>
              <strong>Mine learned my voice before it learned anything else.</strong>
            </p>
          </div>

          <AuthorBio name={post.author} />

          <SeriesNav current={post.slug} />

          <div className={styles.closer}>
            <p>Written during the Tsuin closed beta.</p>
            <div className={styles.ctas}>
              <ButtonLink href="/#waitlist" size="lg">
                Join the waitlist
              </ButtonLink>
              <ButtonLink href="/blog/tsuin-closed-beta-feels-like-chatgpt-3-5" variant="outline" size="lg">
                Read the previous log
              </ButtonLink>
            </div>
          </div>

          <p className={styles.signoff}>tsuin · ツイン</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
