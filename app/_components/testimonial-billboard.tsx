"use client";

import { useEffect, useState } from "react";
import { TESTIMONIAL_EVENT } from "./tote-bag-popup";
import styles from "./testimonial-billboard.module.css";

// Live wall of what visitors said in the tote bag pop-up. Name + testimonial
// only (the API never sends email). Polls every few seconds and refetches the
// moment this visitor submits, so a new testimonial shows up right away.
// Renders nothing until there is at least one testimonial.

type Testimonial = { id: string; name: string; testimonial: string; created_at: string };

const POLL_MS = 8000;
// Below this many cards, a scrolling marquee looks thin; show a static row.
const MARQUEE_MIN = 3;
const FRESH_MS = 10 * 60 * 1000;

export function TestimonialBillboard() {
  const [{ items, fetchedAt }, setData] = useState<{ items: Testimonial[]; fetchedAt: number }>({
    items: [],
    fetchedAt: 0,
  });

  useEffect(() => {
    let alive = true;
    let busy = false;

    async function load() {
      if (busy || document.visibilityState === "hidden") return;
      busy = true;
      try {
        const r = await fetch("/api/testimonials", { cache: "no-store" });
        const data = (await r.json()) as { testimonials?: Testimonial[] };
        if (alive && Array.isArray(data.testimonials)) setData({ items: data.testimonials, fetchedAt: Date.now() });
      } catch {
        // Keep whatever is on screen; the next poll tries again.
      } finally {
        busy = false;
      }
    }

    load();
    const t = window.setInterval(load, POLL_MS);
    window.addEventListener(TESTIMONIAL_EVENT, load);
    document.addEventListener("visibilitychange", load);
    return () => {
      alive = false;
      window.clearInterval(t);
      window.removeEventListener(TESTIMONIAL_EVENT, load);
      document.removeEventListener("visibilitychange", load);
    };
  }, []);

  if (items.length === 0) return null;

  const marquee = items.length >= MARQUEE_MIN;
  // The marquee scrolls a doubled track by -50% so the loop is seamless.
  const track = marquee ? [...items, ...items] : items;
  // ~6s per card keeps reading speed steady however many there are.
  const duration = `${Math.max(30, items.length * 6)}s`;
  return (
    <section className={styles.billboard} aria-labelledby="billboard-title">
      <div className={styles.head}>
        <p className={styles.eyebrow}>
          <span className={styles.liveDot} aria-hidden="true" />
          Live · From visitors
        </p>
        <h2 id="billboard-title" className={styles.title}>
          What people think of their Cognitive AI Twin
        </h2>
      </div>

      <div className={marquee ? styles.viewport : `${styles.viewport} ${styles.static}`}>
        <ul
          className={marquee ? `${styles.track} ${styles.scrolling}` : styles.track}
          style={marquee ? ({ "--marquee-duration": duration } as React.CSSProperties) : undefined}
        >
          {track.map((t, i) => {
            const clone = marquee && i >= items.length;
            const fresh = fetchedAt - new Date(t.created_at).getTime() < FRESH_MS;
            return (
              <li key={`${t.id}-${i}`} className={styles.card} aria-hidden={clone || undefined}>
                {fresh ? <span className={styles.badge}>New</span> : null}
                <blockquote className={styles.quote}>“{t.testimonial}”</blockquote>
                <p className={styles.name}>— {t.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
