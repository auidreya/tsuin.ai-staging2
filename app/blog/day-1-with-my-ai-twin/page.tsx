import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PaperTexture } from "@/components/paper-texture";
import styles from "@/components/blog/article.module.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ButtonLink } from "@/components/ui/button";
import { getBlogPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL, STRIPE_PREORDER_URL } from "@/lib/site";

const post = getBlogPost("day-1-with-my-ai-twin")!;
const PATH = `/blog/${post.slug}`;

export const metadata: Metadata = pageMetadata({
  title: `${post.title} | tsuin blog`,
  description:
    "A closed beta tester's first day training a Tsuin AI twin: why it keeps saying it doesn't have enough yet, the ? bug that dropped answers, why training isn't real-time, and what it takes to make a twin useful.",
  socialDescription:
    "My twin said it didn't have enough from me to almost everything. A closed beta tester's honest first day with an AI twin.",
  path: PATH,
  socialTitle: post.title,
});

// A single line of the recorded exchange. Two consecutive "me" turns are fine.
function Turn({ speaker, children }: { speaker: "me" | "twin"; children: React.ReactNode }) {
  const isMe = speaker === "me";
  return (
    <div className={`${styles.turn} ${isMe ? styles.turnMe : styles.turnTwin}`}>
      <span className={styles.speaker}>{isMe ? "Me" : "Twin"}</span>
      <p className={styles.bubble}>{children}</p>
    </div>
  );
}

export default function BlogArticlePage() {
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
            "A closed beta tester's first day training a Tsuin AI twin, and what it taught him about how a twin actually learns.",
        }}
      />
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
            <span>{post.readingTime}</span>
          </div>

          <p className={styles.lead}>
            My AI twin said &ldquo;I don&rsquo;t have enough from James on this yet&rdquo; to almost everything I asked.
          </p>

          <div className={styles.prose}>
            <p>
              Training an AI twin actually takes patience. I found that out while testing Tsuin, which builds an AI twin
              that learns how you think. I&rsquo;m one of the closed beta users, so part of my job is QA and giving the
              team feedback on the experience, the good parts and the frustrating parts.
            </p>

            <h2 className={styles.h2}>What I expected</h2>
            <p>
              At first I thought it was a regular chatbot. I expected it to ask me questions about a topic, discuss it
              with me, and learn as I corrected its understanding.
            </p>

            <h2 className={styles.h2}>I asked for the rules first</h2>
            <p>
              Before I start anything, I like to know the dos and don&rsquo;ts and the limitations. That way I get the
              big picture before working on the details, and I avoid training the wrong thing and spending time fixing it
              later.
            </p>
            <p>
              So my first message asked the twin for the best way to record and learn from me. It replied with a long
              list of general tips, like being specific and giving context.
            </p>

            <h2 className={styles.h2}>Testing whether it makes things up</h2>
            <p>
              Next I tested whether it would make up facts about me. One of the biggest issues with AI is hallucination.
              For example, when I asked Gemini what James&rsquo;s birthday is, it told me about LeBron James.
            </p>
            <p>
              I asked the twin the same question, and it said{" "}
              <span className={styles.twinSays}>I don&rsquo;t have enough from James on this yet</span>. Honestly, that
              was better than I expected.
            </p>
            <p>
              Then I gave it a fake birthday on purpose, 9 September 1999. I wanted to see if it would remember the fact,
              and if it would update it when I later told it something that conflicts.
            </p>

            <h2 className={styles.h2}>Some of my answers didn&rsquo;t save</h2>
            <p>
              When I told the twin my birthday, it replied{" "}
              <span className={styles.twinSays}>I don&rsquo;t have enough from James on this yet</span> again, which was
              confusing.
            </p>
            <p>
              Later we found another issue. If my answer had a <strong>?</strong> anywhere in it, the twin read it as a
              new question. It gave the same reply, and my answer wasn&rsquo;t saved for training.
            </p>
            <p>
              Now I take out every <strong>?</strong> before I send an answer, so even <strong>?!</strong> becomes{" "}
              <strong>!</strong>.
            </p>

            <h2 className={styles.h2}>It waits to learn from me</h2>
            <p>
              By then I started to question whether the twin knows anything at all. I even asked it what 1 plus 1 is, and
              it said it didn&rsquo;t have enough context.
            </p>
            <p>
              That&rsquo;s when I realised the twin waits to learn from me first. A regular chatbot would just give me an
              answer.
            </p>

            <h2 className={styles.h2}>There&rsquo;s no user manual yet</h2>
            <p>I had no guide on how to use the twin. I didn&rsquo;t know when it trains.</p>
            <p>
              When I asked the team for a list of commands, they said it isn&rsquo;t ready yet, since they&rsquo;re still
              working on the user experience.
            </p>

            <h2 className={styles.h2}>Training doesn&rsquo;t happen in real time</h2>
            <p>
              Then the admin told me training doesn&rsquo;t happen in real time. Nothing I had asked or answered so far
              had been trained yet. The twin only learns when a training run starts, and you can&rsquo;t use it while it
              trains.
            </p>
            <p>The admin also said to stop asking it to tell you back what it learned.</p>
            <p>
              The admin&rsquo;s advice was to focus on teaching the twin about you, and to think of it as cloning
              yourself.
            </p>

            <h2 className={styles.h2}>Answer why questions</h2>
            <p>
              Once I knew that, I figured the best way to train my reasoning is to answer why questions. For example:
            </p>

            <div className={styles.dialogue}>
              <Turn speaker="me">
                Do you know why I&rsquo;m trying to see how accounting software is changing with AI?
              </Turn>
              <Turn speaker="twin">I don&rsquo;t know.</Turn>
              <Turn speaker="me">
                Because accounting is one of the most time consuming and repetitive kinds of work, and AI can do it more
                accurately and save time.
              </Turn>
              <Turn speaker="me">
                Do you know why I even bother that AI can do it more accurately and save time?
              </Turn>
              <Turn speaker="twin">I don&rsquo;t have enough from James on this yet.</Turn>
              <Turn speaker="me">
                Because I hate doing repetitive work, and I can&rsquo;t ensure 100% accuracy in manual work.
              </Turn>
            </div>

            <p>
              Writing the why questions myself got troublesome. So I asked Claude to generate the questions, and I typed
              my own reasoning for each one.
            </p>

            <h2 className={styles.h2}>One answer won&rsquo;t stick</h2>
            <p>
              After my first training, which took around 10 minutes, I tested the twin on what I had just taught it. It
              didn&rsquo;t remember the facts I had shared, and that confused me at first.
            </p>
            <p>
              That&rsquo;s when I learned it takes a lot of examples. Most of the time, the twin trains on your reasoning
              about certain things, so a fact you share once won&rsquo;t just stick. According to the admin, it takes
              around a thousand examples from you before the twin performs like you.
            </p>

            <h2 className={styles.h2}>What I&rsquo;d tell myself on day one</h2>
            <p>
              The twin starts in its pre-school phase. Give it enough examples of your own understanding and reasoning.
            </p>
            <ul className={styles.list}>
              <li>Focus on building more examples, instead of training it as a fact retainer.</li>
              <li>After you train enough examples, around 1,000, you can expect it to start becoming useful.</li>
              <li>Keep <strong>?</strong> out of your answers, or they won&rsquo;t be saved.</li>
              <li>Ask the team when you&rsquo;re stuck, because the commands aren&rsquo;t written down anywhere yet.</li>
            </ul>
          </div>

          <div className={styles.closer}>
            <p>Written during the Tsuin closed beta.</p>
            <div className={styles.ctas}>
              <ButtonLink href={STRIPE_PREORDER_URL} size="lg">
                Pre-order now
              </ButtonLink>
              <ButtonLink href="/research" variant="outline" size="lg">
                Read the research
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
