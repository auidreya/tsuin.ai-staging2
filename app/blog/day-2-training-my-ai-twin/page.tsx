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
import { STRIPE_PREORDER_URL } from "@/lib/site";

const post = getBlogPost("day-2-training-my-ai-twin")!;
const PATH = `/blog/${post.slug}`;

const DESCRIPTION =
  "Day two of training an AI twin in the Tsuin closed beta: the bug behind “I don’t know”, and how explaining every correction exposed the flaws in my reasoning.";

export const metadata: Metadata = pageMetadata({
  title: "Day 2 training my AI twin: a closed beta log | tsuin blog",
  description: DESCRIPTION,
  socialDescription: "Training my AI twin showed me my own reasoning is a mess. Day two of the Tsuin closed beta.",
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

          <p className={styles.lead}>Training my AI twin showed me my own reasoning is a mess.</p>

          <div className={styles.prose}>
            <p>
              It&rsquo;s day two of training my twin on Tsuin, and I have to be honest, it&rsquo;s a tedious process.
              However, it also exposed my reasoning a lot.
            </p>

            <h2 className={styles.h2}>I was talking to the wrong version</h2>
            <p>
              On <Link href="/blog/day-1-with-my-ai-twin">Day 1</Link> I said the twin starts in a pre-school phase and
              says &ldquo;I don&rsquo;t know&rdquo; until you train enough examples. That was actually a bug.
            </p>
            <p>
              The founders of tsuin.ai told me a bug had me using the untrained version of my twin. That&rsquo;s why it
              couldn&rsquo;t answer anything I had just trained. Now everything works, and it&rsquo;s able to retain facts
              and reasoning to answer me.
            </p>

            <h2 className={styles.h2}>Explaining my reasoning exposed the flaws</h2>
            <p>
              What used to feel natural to me fell apart once I said my reasoning out loud. I realised there are so many
              flaws in my reasoning, and the way I explain things is confusing.
            </p>
            <p>
              The most frustrating part is that I need to clearly explain my reasoning to the twin. I hate to admit it,
              but all this time my way of explaining something was a mess.
            </p>
            <p>
              So I use it to see where my reasoning should improve. I can see how I construct my sentences, my logic and
              how I explain something.
            </p>

            <h2 className={styles.h2}>AI was doing my thinking for me</h2>
            <p>
              Honestly, I use AI a lot, and I noticed I&rsquo;ve been offloading a lot of cognitive work to it. I would
              just not think about it, and that has been quite rotting my brain.
            </p>
            <p>In a way, giving my reasoning to the twin is training my brain to think better.</p>

            <h2 className={styles.h2}>I explain the why behind every correction</h2>
            <p>
              If I just correct the twin, it doesn&rsquo;t pick up my reasoning. An AI twin is supposed to do tasks for
              me, so it has to act like me.
            </p>
            <p>
              For example, when I use Claude or Codex and I see something is missing, I ask it to clarify with me. I deal
              with people the same way. When someone explains something and I don&rsquo;t have enough context, I clarify
              with them to understand the situation.
            </p>
            <p>
              I want my twin to have the same habit. When it doesn&rsquo;t have the context, it should ask the AI agent
              to explain more, or come back and clarify with me.
            </p>

            <h2 className={styles.h2}>My best version for my lowest moments</h2>
            <p>
              When I&rsquo;m tired, I start to think in shortcuts. Sometimes I&rsquo;m not aware of something I should
              have paid attention to, or a lesson I learned before.
            </p>
            <p>
              A computer doesn&rsquo;t forget as easily as I do, and it doesn&rsquo;t get tired. So I&rsquo;m putting as
              much knowledge and wisdom as I can into my twin, so it keeps the best version of me for the moments when
              I&rsquo;m not at my best.
            </p>
            <p>
              That&rsquo;s why I don&rsquo;t train it with questions I already know the answer to. If I&rsquo;m aware of
              something, I wouldn&rsquo;t reach out to my twin. I imagine myself tired and unable to think properly, then
              I think about how I would ask my twin and how it should help me in that moment.
            </p>

            <h2 className={styles.h2}>Generic advice doesn&rsquo;t help me</h2>
            <p>When I want to understand something, I want an example I can picture and act on.</p>
            <p>
              For example, our team was working on the Tsuin banner for an upcoming expo. I wrote &ldquo;we are not a
              memory tool&rdquo; in the header. Then I learned that people ignore the negative word, like when someone
              says there&rsquo;s no pink elephant in the room and everyone immediately pictures a pink elephant. So
              people would just read &ldquo;memory tool&rdquo;.
            </p>

            <h2 className={styles.h2}>Direct answer first</h2>
            <p>
              What taught me the most is reading my own answers. When I explained my reasoning to a question, it felt
              confusing, and it didn&rsquo;t directly answer the question.
            </p>
            <p>
              If one day I asked my twin a question and it went round and round before giving me the direct answer of
              what I can do, I would be pissed off. That shows me I might be unconsciously explaining things in a hard
              way for someone to understand in my daily life.
            </p>
            <p>
              Now I&rsquo;m aware of it, and I actually have space to improve how I explain things to someone.
            </p>

            <h2 className={styles.h2}>What would make me say the training works</h2>
            <p>
              I&rsquo;ll say the training works when my twin replies with my reasoning and sounds like me. I think the
              best sign is when it brings back a lesson I once forgot, and that augments my thinking.
            </p>
          </div>

          <AuthorBio name={post.author} />

          <SeriesNav current={post.slug} />

          <div className={styles.closer}>
            <p>Written during the Tsuin closed beta.</p>
            <div className={styles.ctas}>
              <ButtonLink href={STRIPE_PREORDER_URL} size="lg">
                Pre-order now
              </ButtonLink>
              <ButtonLink href="/blog/day-1-with-my-ai-twin" variant="outline" size="lg">
                Read Day 1
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
