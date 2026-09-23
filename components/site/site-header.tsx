import { ButtonLink } from "@/components/ui/button";
import { STRIPE_PREORDER_URL } from "@/lib/site";
import { Logo } from "./logo";
import { HeaderShell } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <HeaderShell
      brand={
        <div className={styles.brand}>
          <Logo height={26} eager />
          <span className={styles.badge}>EARLY ACCESS</span>
        </div>
      }
      nav={<NavLinks />}
      cta={<ButtonLink href={STRIPE_PREORDER_URL}>Pre-order</ButtonLink>}
    />
  );
}
