"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import styles from "./site-header.module.css";

const MENU_ID = "mobile-menu";

// Hidden above 760px by CSS, so there is no JS width measuring and no
// hydration flicker. Only the open/closed state lives here.
export function MobileMenuButton({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      className={styles.menuButton}
      aria-label="Menu"
      aria-expanded={open}
      aria-controls={MENU_ID}
      onClick={onToggle}
    >
      {open ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      )}
    </button>
  );
}

export function MobileMenuPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav id={MENU_ID} className={styles.mobileNav} aria-label="Mobile">
      {NAV_LINKS.map(({ label, href }) => (
        <Link key={label} href={href} onClick={onNavigate}>
          {label}
        </Link>
      ))}
      <Link href="/#waitlist" onClick={onNavigate}>
        Join the waitlist
      </Link>
    </nav>
  );
}

// Owns the open state and renders the header chrome around the server-rendered
// brand and actions it receives as props.
export function HeaderShell({
  brand,
  nav,
  cta,
}: {
  brand: React.ReactNode;
  nav: React.ReactNode;
  cta: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        {brand}
        {nav}
        <div className={styles.actions}>
          {cta}
          <MobileMenuButton open={open} onToggle={() => setOpen((o) => !o)} />
        </div>
      </div>
      {open ? <MobileMenuPanel onNavigate={() => setOpen(false)} /> : null}
    </header>
  );
}
