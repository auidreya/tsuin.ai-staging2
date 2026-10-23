import type { Metadata } from "next";
import Link from "next/link";
import { PaperTexture } from "@/components/paper-texture";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { pageMetadata } from "@/lib/metadata";
import { SOCIAL_LINKS } from "@/lib/site";
import { ContactForm } from "./contact-form";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | tsuin",
  description: "Send the tsuin team a message. Questions, bugs, press, partnerships, or data requests.",
  path: "/contact",
  socialTitle: "Contact tsuin",
});

const DISCORD = SOCIAL_LINKS.find((l) => l.label === "Discord")?.href ?? "#";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <PaperTexture />
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.lead}>Write to us about things you think we might find interesting!</p>
          <div className={styles.grid}>
            <ContactForm />
            <aside className={styles.aside}>
              <div>
                <p className={styles.asideHead}>Discord</p>
                <a className={styles.asideLink} href={DISCORD} target="_blank" rel="noopener noreferrer">
                  Join the server
                </a>
                <p className={styles.asideText}>Fastest for quick questions. Bugs go in #bugs.</p>
              </div>
              <div>
                <p className={styles.asideHead}>Before you write</p>
                <ul className={styles.asideList}>
                  <li>
                    <Link className={styles.asideLink} href="/support">
                      Support and FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.asideLink} href="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
