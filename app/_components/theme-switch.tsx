"use client";

import Image from "next/image";
import { useState } from "react";
import humanHead from "@/images/shibasuke-human-head.webp";
import twinHead from "@/images/shibasuke-twin-head.webp";
import styles from "../home.module.css";

// Holds only the human/twin state. Both views are server-rendered and passed in.
// The human view stays mounted (hidden) while on the twin side, so the demo and
// anything typed into the waitlist form survive a round trip. The twin view is
// only rendered once chosen, so it stays out of the initial HTML (no hidden
// duplicate content for crawlers, smaller DOM).
export function ThemeSwitch({ human, twin }: { human: React.ReactNode; twin: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const label = dark ? "Switch to the human's side" : "Switch to your twin's side";

  function toggle() {
    setDark((d) => !d);
    window.scrollTo(0, 0);
  }

  return (
    <div className={dark ? `dark ${styles.shell}` : styles.shell}>
      <div hidden={dark}>{human}</div>
      {dark ? <div>{twin}</div> : null}
      <button type="button" className={styles.toggle} onClick={toggle} aria-label={label} title={label}>
        {dark ? (
          <Image src={humanHead} alt="" sizes="56px" className={styles.toggleImg} />
        ) : (
          <Image src={twinHead} alt="" sizes="56px" className={styles.toggleImg} />
        )}
      </button>
    </div>
  );
}
