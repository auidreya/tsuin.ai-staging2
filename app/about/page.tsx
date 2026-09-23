import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { PaperTexture } from "@/components/paper-texture";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ButtonLink } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { pageMetadata } from "@/lib/metadata";
import { STRIPE_PREORDER_URL } from "@/lib/site";
import highfive from "@/images/shibasuke-scene-highfive.webp";
import training from "@/images/shibasuke-scene-training.webp";
import styles from "./page.module.css";

const SOCIAL_TITLE = "About tsuin — the team building the Cognitive AI Twin";

export const metadata: Metadata = pageMetadata({
  title: "About tsuin — the team building the Cognitive AI Twin | tsuin",
  description:
    "We are building a Cognitive AI Twin that captures your thought process. Our objective is to build a personal pre-AGI that you own. Meet the founding team behind tsuin.",
  socialDescription:
    "We are building a Cognitive AI Twin that captures your thought process. Our objective is to build a personal pre-AGI that you own.",
  path: "/about",
  socialTitle: SOCIAL_TITLE,
});

const VIDEO_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": "https://www.tsuin.ai/about#video-MunSUk0smoQ",
  name: "What Tsuin.ai is about",
  description: "Let's watch our CEO pitch for Tsuin.ai!",
  thumbnailUrl: ["https://i.ytimg.com/vi/MunSUk0smoQ/maxresdefault.jpg"],
  uploadDate: "2025-06-12",
  duration: "PT5M1S",
  embedUrl: "https://www.youtube-nocookie.com/embed/MunSUk0smoQ",
  contentUrl: "https://www.youtube.com/watch?v=MunSUk0smoQ",
  publisher: { "@id": "https://www.tsuin.ai/#organization" },
  isPartOf: { "@id": "https://www.tsuin.ai/#website" },
};

type Founder = {
  name: string;
  badge: string;
  badgeTone: "human" | "twin";
  role: string;
  headline: string;
  quote: string;
  cite: string;
};

const FOUNDERS: Founder[] = [
  {
    name: "Audrey Aui Yong",
    badge: "CEO",
    badgeTone: "human",
    role: "CEO & CO-FOUNDER · Product",
    headline: "Built systems that last after she left the team, and grew up to 1000x users growth.",
    quote: "The best engineers who left the team. We lost the reasoning that got them there.",
    cite: "— Audrey, on why she never got raised or promotion as a PM. Developer left, her project was stalled.",
  },
  {
    name: "David Fu",
    badge: "CAIO",
    badgeTone: "twin",
    role: "CHIEF AI OFFICER & CO-FOUNDER · SOFTWARE & AI/ML ENGINEER",
    headline: "Built web server similar to Node.JS two years before Node.JS was launched.",
    quote: "Doraemon is a form of AGI, why does this blue shiba twin looks like Doraemon with ears?",
    cite: "— David, internal memo · jan '26",
  },
];

const BELIEFS = [
  { num: "01", title: "AGI is near.", body: "We're just 1 or 2 breakthroughs away from AGI." },
  {
    num: "02",
    title: "Decentralised AGI.",
    body: "Human is a form of AGI, and we should own a personal pre-AGI.",
  },
  {
    num: "03",
    title: "Your twin should behave like you.",
    body: "Your Twin trains on you. It speaks only for you. It leaves with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={VIDEO_JSON_LD} />
      <SiteHeader />
      <main className={styles.main}>
        <section id="about" className={styles.hero}>
          <PaperTexture />
          <div className={`${styles.container} ${styles.heroInner}`}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.heroTag}>FOUNDING TEAM</span>
                <h1 className={styles.heroTitle}>
                  We are building Cognitive AI Twin that capture our thought process.
                </h1>
                <p className={styles.heroLead}>Our objective is&nbsp;to build a personal pre-AGI that you own.</p>
              </div>
              <Image
                src={highfive}
                alt="The painted shiba and its blue circuit-lit twin high-fiving over a network of nodes"
                sizes="(max-width: 687px) calc(100vw - 32px), (max-width: 1328px) 50vw, 620px"
                preload
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.prose}>
            <p>
              We are not another AI coding agents or AI tools. We are building the part of you that fades when the
              codebase grows past what one head can hold — and bringing it back to you.
            </p>
            <p>
              Tsuin (双) means twin in Japanese. A second brain that remembers what you decided, why you decided it,
              and what you&apos;d say if the same question came again. Not your replacement. Your continuity.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>We Are Not Twins</h2>
              <span className={styles.sectionTag}>双 // founders</span>
            </div>
            <div className={styles.founders}>
              {FOUNDERS.map((f) => (
                <article key={f.name} className={styles.founderCard}>
                  <div className={styles.founderBar}>
                    <span className={styles.founderName}>{f.name}</span>
                    <span className={f.badgeTone === "human" ? styles.badgeHuman : styles.badgeTwin}>{f.badge}</span>
                  </div>
                  <div className={styles.portrait} aria-hidden="true" />
                  <div className={styles.founderBody}>
                    <p className={styles.founderRole}>{f.role}</p>
                    <p className={styles.founderHeadline}>{f.headline}</p>
                    <blockquote className={styles.quote}>
                      <p>{f.quote}</p>
                      <cite>{f.cite}</cite>
                    </blockquote>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.watch}`}>
          <div className={styles.container}>
            <p className={styles.watchEyebrow}>Watch</p>
            <h2 className={styles.watchTitle}>What tsuin is about.</h2>
            <YouTubeEmbed id="MunSUk0smoQ" title="What Tsuin.ai is about" />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>What we believe</h2>
            </div>
            <div className={styles.beliefs}>
              {BELIEFS.map((b) => (
                <div key={b.num} className={styles.belief}>
                  <span className={styles.beliefNum}>{b.num}</span>
                  <p className={styles.beliefTitle}>{b.title}</p>
                  <p className={styles.beliefBody}>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className={styles.container}>
            <div className={styles.ctaGrid}>
              <div className={styles.ctaCopy}>
                <h2 className={styles.ctaTitle}>Train your Twin with us.</h2>
                <p className={styles.ctaLead}>
                  We&apos;re gathering our Technical Advisory Board. <br />A small group. High signal.
                </p>
                <div className={styles.ctaButtons}>
                  <ButtonLink href={STRIPE_PREORDER_URL} size="lg">
                    Pre-order now
                  </ButtonLink>
                  <ButtonLink href="/pricing" variant="outline" size="lg">
                    See pricing
                  </ButtonLink>
                </div>
                <p className={styles.ctaNote}>
                  The best developer is not the one who codes the fastest, but the one who thinks the deepest.
                </p>
              </div>
              <Image
                src={training}
                alt="The blue circuit-lit twin at the keyboard in a 合格 headband, the painted shiba on the monitor"
                sizes="(max-width: 460px) calc(100vw - 32px), 420px"
                className={styles.ctaImage}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
