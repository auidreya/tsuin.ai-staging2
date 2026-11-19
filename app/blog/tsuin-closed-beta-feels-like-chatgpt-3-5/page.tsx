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

const post = getBlogPost("tsuin-closed-beta-feels-like-chatgpt-3-5")!;
const PATH = `/blog/${post.slug}`;

const DESCRIPTION =
  "A Tsuin closed beta tester compares the AI twin to ChatGPT 3.5 and GPT-4: it can't do tasks yet, but it asks the question you would ask yourself.";

export const metadata: Metadata = pageMetadata({
  title: "Testing an AI twin feels like ChatGPT 3.5 again | tsuin blog",
  description: DESCRIPTION,
  socialDescription:
    "Tsuin can't do tasks for me yet, the same way ChatGPT 3.5 couldn't. What it does is ask me the question I would ask myself.",
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
            Testing Tsuin in closed beta gives me the same feeling I had with ChatGPT 3.5.
          </p>

          <div className={styles.prose}>
            <h2 className={styles.h2}>When ChatGPT 3.5 came out</h2>
            <p>
              ChatGPT launched in November 2022 on GPT-3.5, and it could only read and write text. It couldn&rsquo;t run
              tasks for you or read a file you uploaded.
            </p>
            <p>
              When I first used ChatGPT 3.5, it gave me a lot of ideas and suggestions. It could quickly iterate on an
              idea I had in my mind. Then it turned that idea into language I could use to explain it to someone else.
            </p>
            <p>
              Back then, taking an idea from 0 to 1 took a lot of time. With ChatGPT 3.5, I could look at a problem from
              different angles, and ChatGPT would list out options. I just picked the one that fit best with what I
              imagined.
            </p>
            <p>
              I think the biggest change was how we find answers. Before, I had to search Google manually and read a lot
              of articles before I could draw a conclusion. With ChatGPT 3.5, that feedback loop got so fast that I could
              bring out a lot of ideas in a second.
            </p>

            <h2 className={styles.h2}>When GPT-4 came out</h2>
            <p>
              GPT-4 came out in March 2023. The biggest moment for me came a few months later, when ChatGPT on GPT-4
              could actually analyze numbers, Excel files and charts through Code Interpreter.
            </p>
            <p>
              Back then, cleaning data and turning charts into insight took a lot of time. What used to take hours of
              work took us minutes with GPT-4. We used it to build dashboards and find the patterns we wanted in the
              data.
            </p>
            <p>
              GPT-4 could also take images, however image upload only reached ChatGPT users around September 2023.
            </p>

            <h2 className={styles.h2}>Where Tsuin is today</h2>
            <p>
              Using Tsuin right now feels like using ChatGPT 3.5. It can give answers, however it can&rsquo;t do tasks
              for you yet. Audrey, the founder behind the Tsuin team, says Tsuin is at the ChatGPT 3.5 stage right now.
              The team is planning to add image understanding, however that will come much later.
            </p>
            <p>
              While I was using Tsuin, I realized it can&rsquo;t produce a tangible result I can act on. It does help me
              think better, though, the same way ChatGPT 3.5 helped me explore ideas in different ways.
            </p>
            <p>
              Tsuin is built to understand your reasoning and act on it. It is also meant to keep improving itself based
              on how you reason. The current version can only slightly mimic your reasoning pattern, and it can&rsquo;t
              do a lot with it yet.
            </p>
            <p>
              For example, say you tell an AI &ldquo;I&rsquo;m tired, I want to organize my tasks.&rdquo; A normal LLM
              will list different ways to break your tasks into smaller ones.
            </p>
            <p>
              Tsuin uses your reasoning from your past data, so it asks what you would probably ask yourself. Something
              like{" "}
              <span className={styles.twinSays}>
                Do you want to organize the tasks, or are you stuck finding a pattern to continue your work, and
                that&rsquo;s why you feel tired?
              </span>
            </p>
            <p>
              I think the significant part of Tsuin is that sometimes, when we ask an AI something, what we actually need
              is a question that augments how we think.
            </p>
            <p>
              <strong>When was the last time an AI asked you a question that changed how you think?</strong>
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
              <ButtonLink href="/blog/day-2-training-my-ai-twin" variant="outline" size="lg">
                Read Day 2
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
