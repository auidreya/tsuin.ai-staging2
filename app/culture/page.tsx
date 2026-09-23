import type { Metadata } from "next";
import Image from "next/image";
import { PaperTexture } from "@/components/paper-texture";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { pageMetadata } from "@/lib/metadata";
import twinReadingRulebook from "@/images/twin-reading-rulebook-cut.webp";
import styles from "./page.module.css";

// og/twitter titles drop the " | tsuin" suffix that <title> carries.
const SOCIAL_TITLE = "Tsuin Culture | The five principles we run on";

export const metadata: Metadata = pageMetadata({
  title: "Tsuin Culture | The five principles we run on | tsuin",
  description:
    "The five core principles we run on at tsuin: Bias for Action, Ownership, Dare to Be Different, Feedback Over Venting, and Vote to Unblock.",
  socialDescription:
    "Bias for Action, Ownership, Dare to Be Different, Feedback Over Venting, Vote to Unblock. How we decide, argue, and ship at tsuin.",
  path: "/culture",
  socialTitle: SOCIAL_TITLE,
});

const VALUES = [
  {
    id: "v01",
    num: "01",
    indexLabel: "01 bias for action",
    title: "Bias for Action",
    body: "Prioritize speed, calculated risk-taking, and rapid execution. Most decisions are reversible, so favor action over analysis paralysis.",
  },
  {
    id: "v02",
    num: "02",
    indexLabel: "02 ownership",
    title: "Ownership",
    body: "Make decisions based on long-term value creation rather than short-term gains, treating the company like true owners rather than short-sighted tenants.",
  },
  {
    id: "v03",
    num: "03",
    indexLabel: "03 dare to be different",
    title: "Dare to Be Different",
    body: "Stand out from the competition by embracing bold, unconventional thinking. Being different goes beyond taking risks: we actively encourage crazy ideas that challenge the status quo.",
  },
  {
    id: "v04",
    num: "04",
    indexLabel: "04 feedback over venting",
    title: "Feedback Over Venting",
    body: "Challenge ideas openly, but always pair criticism with a suggested fix or next step. Complaints without solutions drain energy, while constructive feedback builds momentum.",
  },
  {
    id: "v05",
    num: "05",
    indexLabel: "05 vote to unblock",
    title: "Vote to Unblock",
    body: "Debate hard, but never get stuck. When a decision is genuinely deadlocked, we take a vote to break the stalemate and move on. Once locked, the whole team commits 100% to execution.",
  },
] as const;

export default function CulturePage() {
  return (
    <>
      <SiteHeader />
      <main id="cv" className={styles.cv}>
        <PaperTexture />

        <section id="top" className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.heroGrid}>
              <div>
                <div className={styles.eyebrow}>Core values</div>
                <h1 className={styles.h1}>Tsuin Culture</h1>
                <p className={styles.lead}>
                  We run on five core principles: move fast on reversible choices, treat the business like you own
                  it, think bold to stand out, speak up with solutions, and when debate stalls, vote to unblock and
                  execute with 100% commitment.
                </p>
              </div>
              <figure className={styles.scene}>
                <Image
                  src={twinReadingRulebook}
                  alt="The blue circuit-lit twin in round glasses and a green 双 bandana, reading the Cyber-Shiba Rule Book at a wooden desk"
                  className={styles.sceneImg}
                  sizes="(max-width: 420px) 100vw, 380px"
                  preload
                />
                <figcaption className={styles.caption}>Shibasuke&apos;s Rule Book</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="values" className={styles.values}>
          <div className={styles.wrap}>
            <div className={styles.valuesGrid}>
              <nav className={styles.index} aria-label="Core values">
                <span className={styles.indexLabel}>Core values</span>
                {VALUES.map((v) => (
                  <a key={v.id} href={`#${v.id}`} className={styles.indexLink}>
                    {v.indexLabel}
                  </a>
                ))}
              </nav>

              <div className={styles.rows}>
                {VALUES.map((v) => (
                  <article key={v.id} id={v.id} className={styles.row}>
                    <div>
                      <span className={styles.num}>{v.num}</span>
                    </div>
                    <div>
                      <h2 className={styles.rowTitle}>{v.title}</h2>
                      <p className={styles.rowBody}>{v.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
