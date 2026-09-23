import type { Metadata } from "next";
import { PaperTexture } from "@/components/paper-texture";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ButtonLink } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import { STRIPE_PREORDER_URL } from "@/lib/site";
import styles from "./page.module.css";

// og/twitter titles drop the " | tsuin" suffix that <title> carries.
const SOCIAL_TITLE = "The tsuin Manifesto — AGI is near, and it should be yours";

export const metadata: Metadata = pageMetadata({
  title: "The tsuin Manifesto — AGI is near, and it should be yours | tsuin",
  description:
    "Why we believe AGI should be decentralised and personal: your twin trains on you, behaves like you, and belongs to you — not to a vendor. The tsuin manifesto.",
  socialDescription:
    "AGI is near. We believe it should be decentralised and personal — a twin that trains on you, behaves like you, and belongs to you.",
  path: "/manifesto",
  socialTitle: SOCIAL_TITLE,
});

type RoadStatus = { kind: "done" | "next" | "goal"; label: string };

const ROAD: { step: string; title: string; status: RoadStatus }[] = [
  { step: "01", title: "Continual learning", status: { kind: "done", label: "We have this" } },
  { step: "02", title: "Recursive self-improvement", status: { kind: "next", label: "Next" } },
  { step: "03", title: "Then AGI", status: { kind: "goal", label: "Yours. It behaves like you." } },
];

function StatusBadge({ status }: { status: RoadStatus }) {
  if (status.kind === "done") {
    return (
      <span className={styles.statusDone}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={styles.check}
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
        {status.label}
      </span>
    );
  }
  return <span className={status.kind === "next" ? styles.statusNext : styles.statusGoal}>{status.label}</span>;
}

export default function ManifestoPage() {
  return (
    <>
      <SiteHeader />
      <main id="manifesto" className={styles.main}>
        <PaperTexture />
        <div className={styles.inner}>
          <p className={styles.eyebrow}>The tsuin Manifesto</p>
          <h1 className={styles.title}>AGI is near.</h1>

          <div className={styles.prose}>
            <p className={styles.muted}>We believe it is one or two breakthroughs away.</p>

            <p>
              Everyone racing to build it is building the same thing:
              <br />
              one giant model, owned by one company, the same for everyone.
              <br />
              You will rent it by the month.
            </p>

            <p>
              And here is what&apos;s already happening while you wait.
              <br />
              Every prompt you write teaches their model.
              <br />
              Your data, your skills, your way of thinking — collected, trained on, and sold back to you as a
              subscription.
            </p>

            <p className={styles.strong}>You bring the intelligence. They keep the asset.</p>

            <p className={styles.statement}>We are building AGI the other way.</p>

            <p>
              Cognitive AI Twin: a personal pre-AGI that captures your thinking and continuously learns from you, to
              become more like you.
              <br />
              Not another AI agent, not another chatbot.
            </p>
          </div>

          <div className={styles.road}>
            <div aria-hidden="true" className={styles.roadGrid} />
            <div aria-hidden="true" className={`${styles.corner} ${styles.cornerTL}`} />
            <div aria-hidden="true" className={`${styles.corner} ${styles.cornerTR}`} />
            <div aria-hidden="true" className={`${styles.corner} ${styles.cornerBL}`} />
            <div aria-hidden="true" className={`${styles.corner} ${styles.cornerBR}`} />
            <p className={styles.roadLabel}>The road to yours</p>
            <ol className={styles.roadList}>
              {ROAD.map((r) => (
                <li key={r.step} className={styles.roadRow}>
                  <span className={styles.roadStep}>{r.step}</span>
                  <span className={styles.roadTitle}>{r.title}</span>
                  <StatusBadge status={r.status} />
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.prose}>
            <p>
              One problem still stands in the way: catastrophic forgetting — a model forgets what it learned when it
              learns something new.
              <br />
              That is the type of research we do.
            </p>

            <p>
              Our solo plan - Twin model can be self-hosted on your machine.
              <br />
              You buy it once. You own it.
            </p>

            <p className={styles.statement}>AGI won&apos;t be theirs. It will be yours.</p>
          </div>

          <p className={styles.closer}>Train your twin.</p>

          <div className={styles.ctas}>
            <ButtonLink href={STRIPE_PREORDER_URL} size="lg">
              Pre-order now
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outline" size="lg">
              See pricing
            </ButtonLink>
          </div>

          <p className={styles.signoff}>tsuin · ツイン</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
