"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { sendEvent } from "@/components/analytics-events";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import toteBag from "@/images/shibasuke-tote-bag.webp";
import { identifyPerson } from "@/lib/posthog";
import styles from "./tote-bag-popup.module.css";

// Two-screen tote bag claim on the home page.
//   1. Name + email + testimonial form (testimonials go on the home billboard).
//   2. Static "show this to staff" pass, closable only with the X.
// The claim is remembered in localStorage so the visitor can reopen the pass
// (via the corner pill) when they reach the booth. Dismissing the form without
// claiming hides it for the rest of the browser session.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CLAIM_KEY = "tsuin-tote-claim";
const DISMISS_KEY = "tsuin-tote-dismissed";
const OPEN_DELAY_MS = 1200;
// Fired after a successful claim so the billboard refetches straight away.
export const TESTIMONIAL_EVENT = "tsuin:testimonial-added";

// The 5 Mom Test questions: past behaviour, not opinions about tsuin. Answers
// are private (Supabase only). Keys match the columns in supabase/testimonials.sql.
export const SURVEY = [
  {
    key: "q1_lost_knowhow",
    en: "When did your knowledge get lost when working in a company or school? someone left the team, a handover, or you forgot why you did something? What happened?",
    zh: "你在公司或學校時，什麼時候遇過知識流失？可能是有人離開團隊、工作交接，或忘了自己當初為什麼這樣做。發生了什麼事？",
  },
  {
    key: "q2_where_it_lives",
    en: "Where does how you work live today? Notes, docs, .md files, or just your head?",
    zh: "你的工作方法現在都存在哪裡？筆記、文件、.md 檔，還是只在腦袋裡？",
  },
  {
    key: "q3_ai_reexplain",
    en: "Last time you used AI for real work, what did you have to explain again or fix?",
    zh: "上次用 AI 處理正事時，你得重新解釋或修正哪些地方？",
  },
  {
    key: "q4_tried",
    en: "What have you tried to fix this — tools, docs, hiring? How did it go?",
    zh: "你試過哪些方法解決？工具、文件、找人？結果如何？",
  },
  {
    key: "q5_magic_wand",
    en: "If you had a magic wand, what one thing would you change about this?",
    zh: "如果你有一根魔法棒，你會改變這件事的哪一點？",
  },
] as const;

type SurveyKey = (typeof SURVEY)[number]["key"];
const EMPTY_ANSWERS = Object.fromEntries(SURVEY.map((q) => [q.key, ""])) as Record<SurveyKey, string>;

type Claim = { email: string; code: string; claimedAt: string; alreadyClaimed?: boolean };

// localStorage read through useSyncExternalStore: null on the server, the raw
// stored string on the client, so hydration never mismatches.
const noopSubscribe = () => () => {};

function readStoredRaw(): string | null {
  try {
    return localStorage.getItem(CLAIM_KEY);
  } catch {
    return null;
  }
}

function parseClaim(raw: string | null): Claim | null {
  if (!raw) return null;
  try {
    const c = JSON.parse(raw) as Claim;
    return c && typeof c.code === "string" && typeof c.email === "string" ? c : null;
  } catch {
    return null;
  }
}

function formatTime(iso: string) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export function ToteBagPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const storedRaw = useSyncExternalStore(noopSubscribe, readStoredRaw, () => null);
  const storedClaim = useMemo(() => parseClaim(storedRaw), [storedRaw]);
  const [submitted, setClaim] = useState<Claim | null>(null);
  const claim = submitted ?? storedClaim;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Record<SurveyKey, string>>(EMPTY_ANSWERS);
  const [testimonial, setTestimonial] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const open = useCallback(() => {
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Decide on mount: returning claimers get the pill only; everyone else gets
  // the form after a beat, unless they already closed it this session.
  useEffect(() => {
    if (parseClaim(readStoredRaw())) return;
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {}
    if (dismissed) return;
    const t = window.setTimeout(() => {
      open();
      sendEvent("tote_popup_shown", {});
    }, OPEN_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [open]);

  function onClose() {
    if (claim) return;
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError("Please tell us your name.");
      return;
    }
    const trimmedEmail = email.trim();
    if (!EMAIL_RE.test(trimmedEmail)) {
      setError("That address doesn't look right. Check it and try again.");
      return;
    }
    const missing = SURVEY.findIndex((q) => !answers[q.key].trim());
    if (missing !== -1) {
      setError(`Please answer question ${missing + 1}. A few words is fine. 請回答第 ${missing + 1} 題，簡短幾個字也可以。`);
      document.getElementById(`tote-${SURVEY[missing].key}`)?.focus();
      return;
    }
    const trimmedAnswers = Object.fromEntries(SURVEY.map((q) => [q.key, answers[q.key].trim()]));
    const trimmedTestimonial = testimonial.trim();
    setSending(true);
    setError("");
    try {
      const r = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          answers: trimmedAnswers,
          testimonial: trimmedTestimonial,
          company,
        }),
      });
      const data = (await r.json().catch(() => ({}))) as {
        error?: string;
        code?: string;
        claimedAt?: string;
        alreadyClaimed?: boolean;
      };
      if (!r.ok || !data.code) {
        setSending(false);
        setError(data.error || "We couldn't save that just now. Please try again.");
        return;
      }
      const next: Claim = {
        email: trimmedEmail.toLowerCase(),
        code: data.code,
        claimedAt: data.claimedAt ?? new Date().toISOString(),
        alreadyClaimed: data.alreadyClaimed,
      };
      try {
        localStorage.setItem(CLAIM_KEY, JSON.stringify(next));
      } catch {}
      identifyPerson(next.email, { name: trimmedName });
      if (trimmedTestimonial) window.dispatchEvent(new Event(TESTIMONIAL_EVENT));
      sendEvent("generate_lead", { form_location: "tote_popup", already_claimed: Boolean(data.alreadyClaimed) });
      setSending(false);
      setClaim(next);
    } catch {
      setSending(false);
      setError("Network problem — check your connection and try again.");
    }
  }

  return (
    <>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="tote-title"
        onClose={onClose}
        // Clicking the backdrop closes the form, but never the staff pass:
        // that one stays put until the X is pressed.
        onClick={(e) => {
          if (!claim && e.target === e.currentTarget) close();
        }}
      >
        <div className={styles.panel}>
          <button type="button" className={styles.close} onClick={close} aria-label="Close">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          {claim ? <PassScreen claim={claim} /> : null}

          {!claim ? (
            <form onSubmit={onSubmit} noValidate>
              <div className={styles.hero}>
                <Image src={toteBag} alt="The tsuin.ai tote bag with Shibasuke the twin shiba" sizes="200px" className={styles.heroImg} priority={false} />
              </div>
              <h2 id="tote-title" className={styles.title}>
                Claim a FREE tote bag
              </h2>
              <p className={styles.lead}>
                Five quick questions about how you work. Short answers are fine.
                <span className={styles.zh}>回答五個關於你工作方式的小問題，簡短回答就可以。</span>
              </p>

              <div className={styles.field}>
                <Label htmlFor="tote-name">Name</Label>
                <Input
                  id="tote-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={80}
                  placeholder="Your name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                />
              </div>

              <div className={styles.field}>
                <Label htmlFor="tote-email">Email</Label>
                <Input
                  id="tote-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />
              </div>

              <ol className={styles.survey}>
                {SURVEY.map((q, i) => (
                  <li key={q.key} className={styles.field}>
                    <Label htmlFor={`tote-${q.key}`} className={styles.question}>
                      <span className={styles.qNum}>{i + 1}</span>
                      <span>
                        {q.en}
                        <span className={styles.zh}>{q.zh}</span>
                      </span>
                    </Label>
                    <textarea
                      id={`tote-${q.key}`}
                      name={q.key}
                      rows={2}
                      maxLength={1000}
                      required
                      className={styles.textarea}
                      value={answers[q.key]}
                      onChange={(e) => {
                        const value = e.target.value;
                        setAnswers((a) => ({ ...a, [q.key]: value }));
                        setError("");
                      }}
                    />
                  </li>
                ))}
              </ol>

              <div className={`${styles.field} ${styles.wall}`}>
                <Label htmlFor="tote-testimonial" className={styles.question}>
                  <span>
                    Anything to say about tsuin? <em className={styles.optional}>Optional · shown on our live wall</em>
                    <span className={styles.zh}>想對 tsuin 說些什麼嗎？（選填，會顯示在我們的留言牆上）</span>
                  </span>
                </Label>
                <Input
                  id="tote-testimonial"
                  name="testimonial"
                  type="text"
                  maxLength={280}
                  placeholder="One line for the wall"
                  value={testimonial}
                  onChange={(e) => {
                    setTestimonial(e.target.value);
                    setError("");
                  }}
                />
              </div>

              <div aria-hidden="true" className={styles.honeypot}>
                <label htmlFor="tote-company">Company</label>
                <input
                  id="tote-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              {error ? (
                <p className={styles.error} role="alert">
                  {error}
                </p>
              ) : null}

              <Button type="submit" size="lg" fullWidth disabled={sending}>
                {sending ? "Claiming…" : "Claim my tote bag"}
              </Button>
              <p className={styles.fine}>
                Your answers and email stay private. Only your name and the optional wall line are shown. One tote per
                email, while stocks last.
                <span className={styles.zh}>你的回答與 email 不會公開，只有名字和選填的留言會顯示。每個 email 限領一個，送完為止。</span>
              </p>
            </form>
          ) : null}
        </div>
      </dialog>

      {ready ? (
        <button type="button" className={styles.pill} onClick={open}>
          <Image src={toteBag} alt="" sizes="28px" className={styles.pillArt} />
          {claim ? "My tote pass" : "Free tote bag"}
        </button>
      ) : null}
    </>
  );
}

function PassScreen({ claim }: { claim: Claim }) {
  return (
    <div className={styles.pass}>
      <div className={styles.passArt}>
        <Image src={toteBag} alt="Your tsuin.ai tote bag" sizes="120px" className={styles.passImg} />
        <div className={styles.seal} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="34" height="34">
            <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <h2 id="tote-title" className={styles.title}>
        Thank you! 謝謝你！
      </h2>
      <p className={styles.passLead}>
        Please show this to tsuin.ai staff to claim your tote bag.
        <span className={styles.zh}>請出示此畫面給 tsuin.ai 工作人員，領取你的托特包。</span>
      </p>

      <dl className={styles.ticket}>
        <div>
          <dt>Claim code</dt>
          <dd className={styles.code}>{claim.code}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{claim.email}</dd>
        </div>
        <div>
          <dt>Claimed</dt>
          <dd>{formatTime(claim.claimedAt)}</dd>
        </div>
      </dl>

      {claim.alreadyClaimed ? (
        <p className={styles.note}>This email had already claimed a tote — staff will check the code above.</p>
      ) : null}
    </div>
  );
}
