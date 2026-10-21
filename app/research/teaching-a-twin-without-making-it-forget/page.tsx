import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PaperTexture } from "@/components/paper-texture";
import styles from "@/components/research/article.module.css";
import { LoopFigure, TradeoffFigure, TrainVsLookupFigure } from "@/components/research/figures";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ButtonLink } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { getPost } from "@/lib/research";
import { SITE_URL, STRIPE_PREORDER_URL } from "@/lib/site";

const post = getPost("teaching-a-twin-without-making-it-forget")!;
const PATH = `/research/${post.slug}`;

export const metadata: Metadata = pageMetadata({
  title: `${post.title} | tsuin research`,
  description:
    "Continual learning on an AI twin: the voice-versus-judgement trade-off, mixing in 8% of the base model's own answers, training only layers 12 to 15, and when training beats lookup.",
  socialDescription:
    "What it takes to teach a twin a second thing without erasing the first: the trade we measured, the 8% mix that fixed it, and the one number between us and a real result.",
  path: PATH,
  socialTitle: post.title,
});

export default function ResearchArticlePage() {
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
            "Continual learning on an AI twin: the voice-versus-judgement trade-off, an 8% mix of the base model's own answers, training only layers 12 to 15, and when training beats lookup.",
        }}
      />
      <SiteHeader />
      <main className={styles.main}>
        <PaperTexture />
        <article className={styles.inner}>
          <Link href="/research" className={styles.back}>
            ← All research
          </Link>
          <p className={styles.eyebrow}>Research note</p>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span>{post.date}</span>
            <span className={styles.metaDot} aria-hidden="true" />
            <span>@{post.author}</span>
            <span className={styles.metaDot} aria-hidden="true" />
            <span>{post.readingTime}</span>
          </div>

          <p className={styles.lead}>
            A twin isn&rsquo;t a model you train once. It has to keep learning from one person, for as long as that
            person is around.
          </p>

          <div className={styles.prose}>
            <p>
              At Tsuin.ai we&rsquo;re building an AI twin that learns how <em>you</em> think: your logic, your reasons,
              the way you make decisions. Teaching it one thing turned out to be the easy part. Teaching it the second
              thing without wiping out the first is the hard part.
            </p>
            <p>
              Researchers call this continual learning. For us it&rsquo;s simply the problem standing between a demo and
              a twin that actually grows with you. Here&rsquo;s what we measured, what broke, and what finally worked.
            </p>

            <h2 className={styles.h2}>The loop that has to close</h2>
            <p>
              Every twin runs the same simple loop. You work. The twin guesses what you meant. You correct it with your
              real reasoning. We turn those corrections into a small training update.
            </p>

            <LoopFigure />

            <p>
              Step four is where it gets tricky. Today&rsquo;s update lands on a model that already carries
              yesterday&rsquo;s. If the new lesson quietly erases the old one, the twin isn&rsquo;t learning. It&rsquo;s
              just changing.
            </p>

            <h2 className={styles.h2}>The bad news: every gain had a price</h2>
            <p>
              We wanted two things from each update. Pick up the person&rsquo;s voice. Keep the twin&rsquo;s good
              judgement, like saying &ldquo;I can&rsquo;t do that&rdquo; to an impossible task. We couldn&rsquo;t get
              both.
            </p>

            <TradeoffFigure />

            <p>
              The update that finally learned a voice refused only 4 impossible tasks out of 60. The base model refuses
              27. I hoped there was a sweet spot in the middle. There isn&rsquo;t: at the medium size, the judgement is
              already gone and the voice still hasn&rsquo;t arrived.
            </p>
            <p>
              We tried five different fixes. None kept both. One even looked like a clear win, until we checked the thing
              it wasn&rsquo;t aiming at: tool use dropped from 23 out of 24 to 7. Since then, every fix gets tested on
              what it might break, not only on what it should repair.
            </p>

            <h2 className={styles.h2}>What finally worked</h2>
            <p>
              The breakthrough was a little counter-intuitive. Instead of re-teaching the twin its good habits, we mixed
              in about 8% of the original model&rsquo;s own answers while training. The best mix had no refusal examples
              in it at all. We weren&rsquo;t teaching restraint back. We were stopping it from being erased.
            </p>
            <p>
              We also learned that skills live at specific depths inside the model. Voice sits around layers 8 to 19.
              Training only layers 12 to 15 gave us 98.8% of the effect of training the whole thing, for a fraction of
              the cost.
            </p>
            <p>
              Then came the economics question: when is training even worth it? The fast option is lookup, where the
              twin pulls up your closest past correction and copies the pattern.
            </p>

            <TrainVsLookupFigure />

            <p>
              Lookup is good from day one, but it never improves, because only one example fits in the model&rsquo;s
              short memory. Training starts weak and then wins clearly. So our rule is simple: use lookup until a person
              has given 80 corrections, then train. On our test teacher, the trained twin scored 0.91, against 0.68 for
              lookup and 0.35 for the stock model, in just over an hour of GPU time.
            </p>

            <h2 className={styles.h2}>Where we are now</h2>
            <p>
              Three twins are live today: two for developers, and one, new this week, for someone in marketing who
              doesn&rsquo;t write code at all. None has reached 80 real corrections yet, so all three still run on
              lookup. The training path works, but so far it&rsquo;s only been proven on a test teacher. Those 80
              corrections are the one number between us and a real result.
            </p>
            <p>
              The lesson that stung most wasn&rsquo;t in any chart. One twin collected nothing for six weeks. A routine
              deploy had quietly replaced the code that captured corrections, and nothing alerted us. We only noticed
              because we asked why the count was stuck at 20. A learning system fails silently, because no new data looks
              exactly like a quiet week.
            </p>
            <p>What&rsquo;s still open:</p>
            <ul className={styles.list}>
              <li>Nobody has given 80 corrections yet</li>
              <li>Our smallest GPU can&rsquo;t fit the context we need (1,462 tokens against 1,024)</li>
              <li>We can predict the voice-versus-judgement trade, but we can&rsquo;t yet explain why it happens</li>
            </ul>
          </div>

          <div className={styles.closer}>
            <p>
              Great tech takes time. A twin that truly learns you won&rsquo;t be built in two weeks, and I&rsquo;d
              rather show you honest numbers than a polished demo. If you&rsquo;d like to be one of the people teaching a
              twin, I&rsquo;d love to hear from you.
            </p>
            <div className={styles.ctas}>
              <ButtonLink href={STRIPE_PREORDER_URL} size="lg">
                Pre-order now
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="lg">
                Get in touch
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
