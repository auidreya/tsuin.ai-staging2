import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";

type Variant = "default" | "outline" | "secondary" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

type StyleProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

function buttonClass({ variant = "default", size = "default", fullWidth }: StyleProps, extra?: string) {
  return [styles.button, styles[variant], styles[`size-${size}`], fullWidth && styles.full, extra]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant,
  size,
  fullWidth,
  className,
  type = "button",
  ...rest
}: StyleProps & ComponentPropsWithoutRef<"button">) {
  return <button type={type} className={buttonClass({ variant, size, fullWidth }, className)} {...rest} />;
}

// A link that looks like a button. Use this instead of nesting <button> in <a>.
// Internal paths go through next/link for client-side navigation and prefetch.
export function ButtonLink({
  href,
  variant,
  size,
  fullWidth,
  className,
  ...rest
}: StyleProps & ComponentPropsWithoutRef<"a"> & { href: string }) {
  const cls = buttonClass({ variant, size, fullWidth }, className);
  if (href.startsWith("/") && !href.startsWith("//")) {
    return <Link href={href} className={cls} {...rest} />;
  }
  return <a href={href} className={cls} {...rest} />;
}
