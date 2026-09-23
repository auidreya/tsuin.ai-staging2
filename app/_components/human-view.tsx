// Server Component: the light "human side" of the home page.
import Image from "next/image";
import Link from "next/link";
import { PaperTexture } from "@/components/paper-texture";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ButtonLink } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/youtube-embed";
import deskWithTwin from "@/images/scene-desk-with-twin.webp";
import humanHead from "@/images/shibasuke-human-head.webp";
import highfive from "@/images/shibasuke-scene-highfive.webp";
import { STRIPE_PREORDER_URL } from "@/lib/site";
import styles from "../home.module.css";
import { ChatDemo } from "./chat-demo";
import { WaitlistForm } from "./waitlist-form";

const FEATURES = [
  {
    num: "01",
    title: "Runs on your machine",
    text: "Local, on-premise for the Solo plan.",
    border: `${styles.borderRight} ${styles.borderBottom}`,
  },
  {
    num: "02",
    title: "No LLM API required",
    text: "Your work is not somebody's training set. Your twin can use any other AI tools, if you ask it.",
    border: styles.borderBottom,
  },
  {
    num: "03",
    title: "Own your intelligence",
    text: "Reasoning and decisions stored in your own twin model.",
    border: styles.borderRight,
  },
  {
    num: "04",
    title: "More to come",
    text: "The only subscription is the cloud version for twin-to-twin communication (release date TBC).",
    border: "",
  },
];

const INCLUDED = [
  { item: "Twin model - Shibasuke 1.0", value: "Included" },
  { item: "Software Engineer Skills", value: "Included" },
  { item: "Technical Advisory Board seat", value: "First 100 buyers" },
];

const REQUIREMENTS = ["16GB GPU VRAM (NVIDIA)", "16GB CPU RAM", "32GB available storage"];

export function HumanView({ animateDemo = true }: { animateDemo?: boolean }) {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <PaperTexture />
          <div className={styles.heroInner}>
            <div className={`${styles.twoCol} ${styles.heroGrid}`}>
              <div>
                <p className={`${styles.eyebrow} ${styles.eyebrowHuman} ${styles.heroEyebrow}`}>
                  Pre-order · Solo plan · Lifetime access
                </p>
                <h1 className={styles.h1}>Train your twin.</h1>
                <p className={`${styles.lead} ${styles.heroLead}`}>
                  We believe your thinking, work and skills that make you uniquely you are yours.&nbsp;
                </p>
                <p className={`${styles.lead} ${styles.heroLeadLast}`}>Not an asset to train big AI models.</p>
                <div className={styles.ctaRow}>
                  <ButtonLink href={STRIPE_PREORDER_URL} size="lg">
                    Pre-order now
                  </ButtonLink>
                  <span className={styles.caption}>
                    <Link href="/manifesto" className={styles.manifestoLink}>
                      Read our Manifesto →
                    </Link>
                  </span>
                </div>
                <div className={styles.heroNote}>
                  <span className={styles.caption}>Host your own Twin model.</span>
                </div>
              </div>
              <div className={styles.heroArt}>
                <Image
                  src={deskWithTwin}
                  alt="The shiba at his desk with his twin on the monitor"
                  preload
                  sizes="(max-width: 492px) calc(100vw - 32px), 460px"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.video}`}>
          <div className={styles.container}>
            <p className={`${styles.eyebrow} ${styles.eyebrowHuman}`}>Watch · Prototype</p>
            <h2 className={styles.videoTitle}>See your twin at work.</h2>
            <YouTubeEmbed
              id="xVtx0rVtQNI"
              title="AI Digital Twin Prototype: The Only AI Assistant You'll Ever Need."
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTinted}`}>
          <div className={styles.container}>
            <div className={styles.rlpfIntro}>
              <p className={`${styles.eyebrow} ${styles.eyebrowTwin}`}>RLPF&nbsp;· TRAINING ALGORITHM</p>
              <h2 className={styles.h2}>Your Twin learns from your corrections.&nbsp;</h2>
              <p className={styles.lead}>
                A Cognitive AI Twin is a personal pre-AGI that learns your reasoning from your own corrections. Only you
                can train it. And when it hasn&apos;t learned something from you yet, it says so instead of guessing.
              </p>
            </div>
            <div className={styles.chat}>
              <div className={styles.chatBar}>
                <span className={styles.chatName}>シバスケ · your twin</span>
                <span className={styles.chatStatus}>
                  <span className={styles.chatDot} />
                  Active
                </span>
              </div>
              <ChatDemo animateDemo={animateDemo} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.twoCol} ${styles.ownGrid}`}>
              <div>
                <p className={`${styles.eyebrow} ${styles.eyebrowTwin}`}>Ownership</p>
                <h2 className={styles.h2}>You can&apos;t be replaced by something you own.</h2>
                <p className={styles.lead}>
                  Your Twin is a model on your disk for a solo plan, not an account on someone&apos;s platform.&nbsp;
                </p>
              </div>
              <div className={styles.features}>
                {FEATURES.map((f) => (
                  <div key={f.num} className={`${styles.feature} ${f.border}`}>
                    <p className={styles.featureNum}>{f.num}</p>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureText}>{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nested dark band: the global `dark` class flips the tokens inside it. */}
        <div className="dark" id="pricing">
          <section className={`${styles.section} ${styles.pricing}`}>
            <div className={`${styles.container} ${styles.twoCol} ${styles.pricingGrid}`}>
              <div>
                <p className={`${styles.eyebrow} ${styles.eyebrowHumanInk}`}>Solo plan · lifetime access</p>
                <h2 className={`${styles.h2} ${styles.pricingTitle}`}>Own your intelligence.</h2>
                <div className={styles.priceRow}>
                  <span className={styles.price}>USD500</span>
                  <span className={styles.priceTag}>One time</span>
                </div>
                <p className={`${styles.caption} ${styles.priceNote}`}>Launching on Steam</p>
                <div className={styles.ctaRow}>
                  <ButtonLink href={STRIPE_PREORDER_URL} size="lg">
                    Pre-order now
                  </ButtonLink>
                </div>
              </div>
              <div className={styles.included}>
                <p className={`${styles.eyebrow} ${styles.eyebrowMuted} ${styles.includedHead}`}>
                  WHAT&apos;S INCLUDED
                </p>
                <div className={styles.includedList}>
                  {INCLUDED.map((row) => (
                    <div key={row.item} className={styles.includedRow}>
                      <span>{row.item}</span>
                      <span className={styles.includedValue}>{row.value}</span>
                    </div>
                  ))}
                  <div className={styles.includedRow}>
                    <span>Minimum requirements</span>
                    <ul className={styles.reqList}>
                      {REQUIREMENTS.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className={`${styles.section} ${styles.sectionTinted} ${styles.quoteSection}`}>
          <div className={styles.prose}>
            <p className={styles.quote}>
              “The best developer is not the one who codes the fastest, but the one who thinks the deepest.”
            </p>
            <p className={`${styles.lead} ${styles.quoteBody}`}>
              Good ideas are difficult to come by, and you&apos;re looking at one right now.
            </p>
            <div className={styles.byline}>
              <Image src={humanHead} alt="Placeholder portrait" sizes="44px" className={styles.bylineImg} />
              <div>
                <p className={styles.bylineName}>Audrey Aui Yong</p>
                <p className={`${styles.caption} ${styles.bylineRole}`}>CEO, tsuin.ai</p>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className={styles.waitlist}>
          <PaperTexture />
          <div className={`${styles.container} ${styles.twoCol} ${styles.waitlistGrid}`}>
            <div className={styles.waitlistArt}>
              <Image
                src={highfive}
                alt="The painted shiba and its blue circuit-lit twin high-fiving over a network of nodes"
                sizes="(max-width: 552px) calc(100vw - 32px), 520px"
                className={styles.waitlistImg}
              />
            </div>
            <div>
              <p className={`${styles.eyebrow} ${styles.eyebrowTwin}`}>TRAIN YOUR TWIN</p>
              <h2 className={styles.h2}>Stop the cognitive overload.</h2>
              <p className={`${styles.lead} ${styles.waitlistLead}`}>
                Pre-order the Solo plan and own your twin for good.
              </p>
              <div className={`${styles.ctaRow} ${styles.waitlistCtas}`}>
                <ButtonLink href={STRIPE_PREORDER_URL} size="lg">
                  Pre-order now
                </ButtonLink>
                <span className={styles.caption}>USD500 · lifetime access</span>
              </div>
              <div className={styles.formCard}>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
