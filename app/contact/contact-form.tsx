"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { sendEvent } from "@/components/analytics-events";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import styles from "./page.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

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
    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      setError("Tell us what you'd like to talk about.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, message: trimmedMessage, company }),
      });
      const data = (await r.json().catch(() => ({}))) as { error?: string };
      if (!alive.current) return;
      if (!r.ok) {
        setSending(false);
        setError(data.error || "We couldn't send that just now. Please try again.");
        return;
      }
      sendEvent("generate_lead", { form_location: "contact_page" });
      setSending(false);
      setSent(true);
    } catch {
      if (!alive.current) return;
      setSending(false);
      setError("Network problem. Check your connection and try again.");
    }
  }

  if (sent) {
    return (
      <div className={styles.sent} role="status">
        <p className={styles.sentTitle}>Got it.</p>
        <p className={styles.sentText}>
          We read every message and will reply to {email.trim()}. If it is urgent, the Discord is faster.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={styles.form}>
      <div className={styles.field}>
        <Label htmlFor="ct-name">Name</Label>
        <Input
          id="ct-name"
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
        <Label htmlFor="ct-email">Email</Label>
        <Input
          id="ct-email"
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
        <Label htmlFor="ct-message">What would you like to speak to us about?</Label>
        <textarea
          id="ct-message"
          name="message"
          rows={6}
          placeholder="Anything on your mind right now?"
          className={styles.textarea}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setError("");
          }}
        />
      </div>
      <div aria-hidden="true" className={styles.honeypot}>
        <label htmlFor="ct-company">Company</label>
        <input
          id="ct-company"
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
          {sending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
