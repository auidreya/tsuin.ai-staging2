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
    const trimmedTestimonial = testimonial.trim();
    if (!trimmedTestimonial) {
      setError("Tell us a little about what you think first.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const r = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, testimonial: trimmedTestimonial, company }),
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
      window.dispatchEvent(new Event(TESTIMONIAL_EVENT));
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
              <p className={styles.eyebrow}>FREE TSUIN TOTE BAG</p>
              <h2 id="tote-title" className={styles.title}>
                Tell us what you think. Take home a tote.
              </h2>
              <p className={styles.lead}>
                Leave your name, email and a few words about the Cognitive AI Twin, and the tote is yours.
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

              <div className={styles.field}>
                <Label htmlFor="tote-testimonial">What do you think of the Cognitive AI Twin?</Label>
                <textarea
                  id="tote-testimonial"
                  name="testimonial"
                  rows={4}
                  maxLength={600}
                  required
                  placeholder="Your use case, a comment, or honest feedback."
                  className={styles.textarea}
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
                Your name and comment appear on our live testimonial wall. Your email stays private. One tote per
                email, while stocks last.
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
        Thank you!
      </h2>
      <p className={styles.passLead}>Please show this to tsuin.ai staff to claim your tote bag.</p>

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
