import Link from "next/link";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site";
import { Logo } from "./logo";
import styles from "./site-footer.module.css";

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Culture", href: "/culture" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Research", href: "#" },
];

const SHOPPING = [
  { label: "Pricing", href: "/pricing" },
  { label: "Merchandise", href: "#" },
];

const LEGAL = [
  { label: "Terms & conditions", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Refund policy", href: "#" },
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
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Tsuin AI Sdn Bhd. All rights reserved.</span>
        <div className={styles.legal}>
          {LEGAL.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
