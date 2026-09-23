"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import humanHead from "@/images/shibasuke-human-head.webp";
import twinHead from "@/images/shibasuke-twin-head.webp";
import styles from "../home.module.css";
import { A1, A2 } from "./demo-copy";

type Demo = {
  q1: boolean;
  q2: boolean;
  typingA1: boolean;
  typingA2: boolean;
  a1: string;
  a2: string;
};

// Start of every loop: the first question is up, nothing else.
const START: Demo = { q1: true, q2: false, typingA1: false, typingA2: false, a1: "", a2: "" };
const FINAL: Demo = { q1: true, q2: true, typingA1: false, typingA2: false, a1: A1, a2: A2 };

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

// The RLPF conversation: question, "typing", answer typed out at 12ms/char,
// correction, trained answer, then a pause and around again.
export function ChatDemo({ animateDemo = true }: { animateDemo?: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const animate = animateDemo && !reducedMotion;
  const [demo, setDemo] = useState<Demo>(START);

  useEffect(() => {
    if (!animate) return;
    let dead = false;
    const timers = new Set<number>();

    // Cleared timers never resolve, so a cancelled loop simply stops awaiting.
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = window.setTimeout(() => {
          timers.delete(t);
          resolve();
        }, ms);
        timers.add(t);
      });

    const patch = (p: Partial<Demo>) => setDemo((d) => ({ ...d, ...p }));

    async function type(key: "a1" | "a2", full: string) {
      for (let i = 1; i <= full.length; i++) {
        await wait(12);
        if (dead) return;
        const text = full.slice(0, i);
        patch(key === "a1" ? { a1: text } : { a2: text });
      }
    }

    async function run() {
      while (!dead) {
        await wait(900);
        if (dead) return;
        patch({ typingA1: true });
        await wait(900);
        patch({ typingA1: false });
        await type("a1", A1);
        await wait(1600);
        if (dead) return;
        patch({ q2: true });
        await wait(650);
        patch({ typingA2: true });
        await wait(1100);
        patch({ typingA2: false });
        await type("a2", A2);
        await wait(6000);
        if (dead) return;
        setDemo(START);
      }
    }

    void run();
    return () => {
      dead = true;
      timers.forEach((t) => window.clearTimeout(t));
      timers.clear();
      setDemo(START);
    };
  }, [animate]);

  const s = animate ? demo : FINAL;
  const op1 = s.q1 ? 1 : 0;
  const op2 = s.a1.length > 0 || s.typingA1 ? 1 : 0;
  const op3 = s.q2 ? 1 : 0;
  const op4 = s.a2.length > 0 || s.typingA2 ? 1 : 0;

  return (
    <div className={styles.chatBody}>
      <div className={styles.chatRow} style={{ opacity: op1 }}>
        <Image src={humanHead} alt="You" sizes="56px" className={styles.chatAvatar} />
        <div className={styles.humanBubble}>
          <p className={styles.humanText}>
            Why do we shed requests once the queue passes its cap, instead of buffering them?
          </p>
        </div>
      </div>

      <div className={styles.chatRow} style={{ opacity: op2 }}>
        <div className={styles.twinBubble}>
          <p className={styles.twinText}>
            <span aria-hidden="true" className={styles.twinGhost}>
              {A1}
            </span>
            <span className={styles.twinLive}>{s.a1}</span>
          </p>
          <p className={styles.twinMeta}>not yet · no sources</p>
        </div>
        <Image src={twinHead} alt="Your twin" sizes="56px" className={styles.chatAvatar} />
      </div>

      <div className={styles.chatRow} style={{ opacity: op3 }}>
        <Image src={humanHead} alt="You" sizes="56px" className={styles.chatAvatar} />
        <div className={styles.humanBubble}>
          <p className={styles.humanText}>
            A buffered request is a promise we already broke — by the time it drains, nobody is waiting for it any more.
          </p>
          <p className={styles.humanText}>
            So we shed early and say so, and keep the queue short enough that everything still in it is worth
            answering. We learned that the hard way, twice.
          </p>
        </div>
      </div>

      <div className={styles.chatRow} style={{ opacity: op4 }}>
        <div className={styles.twinBubble}>
          <p className={styles.twinText}>
            <span aria-hidden="true" className={styles.twinGhost}>
              {A2}
            </span>
            <span className={styles.twinLive}>{s.a2}</span>
          </p>
          <p className={styles.twinMeta}>
            <svg
              className={styles.check}
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--success)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            trained · filed to your twin
          </p>
        </div>
        <Image src={twinHead} alt="Your twin" sizes="56px" className={styles.chatAvatar} />
      </div>
    </div>
  );
}
