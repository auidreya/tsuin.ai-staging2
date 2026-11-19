import type { Metadata } from "next";
import Link from "next/link";
import { PaperTexture } from "@/components/paper-texture";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ButtonLink } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const TITLE = "Pricing — own your twin outright | tsuin";
const SOCIAL_TITLE = "Pricing — own your twin outright";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description:
    "Solo plan: open source and self-hosted — your own Cognitive AI Twin, including the Shibasuke 1.0 twin model, running on your machine. Pro and Pro Max subscriptions from $50 a month. Every tool you use already learns from you and the vendor keeps the copy — this one belongs to you.",
  socialDescription:
    "An open-source, self-hosted Cognitive AI Twin that runs on your machine. Every tool you use already learns from you and the vendor keeps the copy. This one belongs to you.",
  path: "/pricing",
  socialTitle: SOCIAL_TITLE,
});

type Feature = { text: string; requirements?: readonly string[] };

type Plan = {
  name: string;
  price: string;
  unit?: string;
  badge: string;
  badgeTone: "human" | "twin" | "neutral";
  tagline: string;
  features: readonly Feature[];
  cta: { label: string; href: string; variant?: "outline" };
  featured?: boolean;
};

const PLANS: readonly Plan[] = [
  {
    name: "Solo",
    price: "Open source",
    badge: "Free to self-host",
    badgeTone: "human",
    tagline: "Your twin, on your machine.",
    features: [
      { text: "One twin, trained only by you" },
      {
        text: "Host Twin model locally",
        requirements: ["16GB GPU VRAM (NVIDIA)", "16GB CPU RAM", "32GB available storage"],
      },
      { text: "Software Engineer Skill" },
      { text: "Available on Windows/MacOS on Steam" },
      { text: "First 100 users at launch: a seat on our Technical Advisory Board, plus early-supporter merch" },
    ],
    cta: { label: "Join the waitlist", href: "/#waitlist" },
    featured: true,
  },
  {
    name: "Pro",
    price: "$50",
    unit: "per month",
    badge: "Up to 8 hours a day",
    badgeTone: "twin",
    tagline: "Your twin, there for your working day.",
    features: [
      { text: "Everything in Solo" },
      { text: "Use your twin up to 8 hours a day" },
      { text: "Twins talk to each other" },
    ],
    cta: { label: "Join the waitlist", href: "/#waitlist", variant: "outline" },
  },
  {
    name: "Pro Max",
    price: "$500",
    unit: "per month",
    badge: "Unlimited, 24/7",
    badgeTone: "neutral",
    tagline: "Your own personal AI Twin model, always on.",
    features: [
      { text: "Everything in Pro" },
      { text: "Unlimited use, 24/7" },
      { text: "Own your personal AI Twin model" },
      { text: "Priority support" },
    ],
    cta: { label: "Join the waitlist", href: "/#waitlist", variant: "outline" },
  },
];

const BADGE_TONE = {
  human: styles.badgeHuman,
  twin: styles.badgeTwin,
  neutral: styles.badgeNeutral,
} as const;

// Only the FAQ items that have a question in the legacy page are rendered
// (the legacy file also held answers whose toggle buttons had been removed,
// so they could never be opened). Order matches the legacy page.
const FAQS: readonly { question: string; answer: string }[] = [
  {
    question: "Is Solo really free?",
    answer:
      "Yes. Solo is open source and self-hosted: the twin model runs on your own machine, so there is no licence fee and no subscription. You only pay if you choose a Pro or Pro Max subscription.",
  },
  {
    question: "Why is Solo distributed on Steam?",
    answer:
      "Steam handles distribution and automatic updates for Solo on Windows and macOS, so you always have the latest version. Just search 'Tsuin' on Steam to find it.",
  },
  {
    question: "How does the AI Twin learn? Do I need to write prompts or do anything special?",
    answer:
      "No prompts, no friction. Tsuin actively learns from you through error correction and builds a model of your reasoning automatically. You get your reasoning capture without writing another skills.md file.",
  },
  {
    question: "If I'm not a software engineer, can I still use the twin?",
    answer: "Yes. Just train your reasoning and it will still capture your thought process.",
  },
  {
    question: "What perks do I get on Solo?",
    answer:
      "The first 100 users at launch get to be on our Technical Advisory Board (TAB), which will be in a closed community group with the founders of tsuin.ai to share feedback, crazy ideas and influence the product roadmap. On top of that, get exclusive merchandise as early supporters.",
  },
  {
    question: "What's the difference between Pro and Pro Max?",
    answer:
      "Pro is $50 a month and lets you use your twin for up to 8 hours a day. Pro Max is $500 a month and removes the limit: your own personal AI Twin model, available 24/7, with priority support.",
  },
];

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--twin-ink)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      className={styles.chevron}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--ink-muted)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={plan.featured ? `${styles.card} ${styles.cardFeatured}` : styles.card}>
      <h2 className={styles.planName}>{plan.name}</h2>
      <div className={styles.priceRow}>
        <span className={styles.price}>{plan.price}</span>
        {plan.unit ? <span className={styles.unit}>{plan.unit}</span> : null}
      </div>
      <p className={`${styles.badge} ${BADGE_TONE[plan.badgeTone]}`}>{plan.badge}</p>
      <p className={styles.tagline}>{plan.tagline}</p>
      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f.text} className={styles.featureItem}>
            <div className={styles.feature}>
              <CheckIcon />
              <span>{f.text}</span>
            </div>
            {f.requirements ? (
              <div className={styles.requirements}>
                <p className={styles.requirementsLabel}>Minimum requirements:</p>
                <ul className={styles.requirementsList}>
                  {f.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      <ButtonLink href={plan.cta.href} variant={plan.cta.variant} fullWidth>
        {plan.cta.label}
      </ButtonLink>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="plans" className={styles.plans}>
          <PaperTexture />
          <div className={styles.container}>
            <div className={styles.intro}>
              <p className={styles.eyebrow}>Pricing</p>
              <h1 className={styles.title}>You own your twin.</h1>
              <p className={styles.lead}>
                Every tool you use already learns from you and the vendor keeps the copy. This one belongs to you.
              </p>
            </div>

            <div className={styles.grid}>
              {PLANS.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>

            <p className={styles.currency}>Prices in USD</p>
          </div>
        </section>

        <section id="faq" className={styles.faq}>
          <div className={styles.faqContainer}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2 className={styles.faqTitle}>Questions we get asked a lot</h2>
            {/* Native exclusive accordion: details sharing a `name` close each other. */}
            <div className={styles.faqList}>
              {FAQS.map((item) => (
                <details key={item.question} name="faq" className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>
                    <span>{item.question}</span>
                    <ChevronIcon />
                  </summary>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </details>
              ))}
            </div>
            <p className={styles.faqFooter}>
              Still have questions? <Link href="/contact">Contact us</Link> or{" "}
              <a href="https://discord.gg/5DyMNFum44" target="_blank" rel="noopener noreferrer">
                join our Discord
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
