import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/site";
import { Logo } from "./logo";
import styles from "./site-footer.module.css";

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Culture", href: "/culture" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Research", href: "/research" },
];

const SHOPPING = [
  { label: "Pricing", href: "/pricing" },
  { label: "Merchandise", href: "#" },
];

const LEGAL = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Support", href: "/support" },
  { label: "Contact Us", href: "/contact" },
];

// Static server component: no client JS ships for the footer.
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Logo height={20} />
          <span className={styles.tagline}>
            Cognitive AI Twin captures your thinking and continuously learns from you, to become more like you.
          </span>
        </div>
        <div>
          <p className={styles.heading}>COMPANY</p>
          <div className={styles.links}>
            {COMPANY.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className={styles.heading}>SHOPPING</p>
          <div className={styles.links}>
            {SHOPPING.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className={styles.heading}>FOLLOW</p>
          <div className={styles.links}>
            {SOCIAL_LINKS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className={styles.heading}>LEGAL</p>
          <div className={styles.links}>
            {LEGAL.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Tsuin AI Sdn Bhd. All rights reserved.</span>
      </div>
    </footer>
  );
}
