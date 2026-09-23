"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { sendEvent } from "@/components/analytics-events";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import styles from "../home.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sentEmail, setSentEmail] = useState<string | null>(null);

  // Guards against setting state after unmount while a request is in flight.
  const alive = useRef(true);
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError("Please tell us your name so we know how to address you.");
      return;
    }
    const trimmedEmail = email.trim();
    if (!EMAIL_RE.test(trimmedEmail)) {
      setError("That address doesn't look right. Check it and try again.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const r = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          useCase,
          source: "landing",
          company: company || "",
        }),
      });
      const data = (await r.json().catch(() => ({}))) as { error?: string };
      if (!alive.current) return;
      if (!r.ok) {
        setSending(false);
        setError(data.error || "We couldn't save that just now. Please try again.");
        return;
      }
      // generate_lead is GA4's recommended event for a form submission requesting
      // contact, which is what the waitlist is. sign_up is deliberately not used:
      // that one is for account creation and expects a `method` param.
      //
      // Fires only after the API confirms the write, so failed submissions and
      // validation bounces never count. Note the endpoint upserts on email, so a
      // repeat submission by the same person is a fresh event, not a new lead.
      //
      // No `value` is sent. A lead is not worth the $500 order value, and GA4
      // sums value across events, so reusing it would inflate reported revenue.
      // Set an estimated lead value here if one is ever agreed.
      sendEvent("generate_lead", {
        form_location: "waitlist_section",
        use_case: useCase || "unspecified",
      });
      setSending(false);
      setError("");
      setSentEmail(trimmedEmail);
    } catch {
      if (!alive.current) return;
      setSending(false);
      setError("Network problem — check your connection and try again.");
    }
  }

  if (sentEmail !== null) {
    return (
      <div className={styles.sent}>
        <div>
          <p className={styles.sentTitle}>You&apos;re on the list.</p>
          <p className={`${styles.caption} ${styles.sentText}`}>
            We wrote down {sentEmail}. One mail when your twin is ready to train — and the Solo pre-order is there any
            time you change your mind.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <p className={`${styles.eyebrow} ${styles.eyebrowMuted} ${styles.formHead}`}>JOIN THE WAITLIST</p>
      <div className={styles.field}>
        <Label htmlFor="wl-name">Name</Label>
        <Input
          id="wl-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Audrey"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
        />
      </div>
      <div className={styles.field}>
        <Label htmlFor="wl-email">Email</Label>
        <Input
          id="wl-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="twin@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />
      </div>
      <div className={`${styles.field} ${styles.fieldLast}`}>
        <Label htmlFor="wl-use">What would you hand to a twin?</Label>
        <textarea
          id="wl-use"
          name="useCase"
          rows={3}
          placeholder="The auth layer nobody else understands."
          className={styles.textarea}
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
        />
      </div>
      <div aria-hidden="true" className={styles.honeypot}>
        <label htmlFor="wl-company">Company</label>
        <input
          id="wl-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      {error ? (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      ) : null}
      <div className={styles.submitRow}>
        <Button type="submit" variant="outline">
          {sending ? "Joining…" : "Join the waitlist"}
        </Button>
      </div>
      <p className={`${styles.caption} ${styles.formNote}`}>Get updates on tsuin research and the launch.&nbsp;</p>
    </form>
  );
}
