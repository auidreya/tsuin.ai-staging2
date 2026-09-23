import type { ComponentPropsWithoutRef } from "react";
import styles from "./field.module.css";

export function Input({ className, ...rest }: ComponentPropsWithoutRef<"input">) {
  return <input className={className ? `${styles.input} ${className}` : styles.input} {...rest} />;
}

export function Label({ className, ...rest }: ComponentPropsWithoutRef<"label">) {
  return <label className={className ? `${styles.label} ${className}` : styles.label} {...rest} />;
}
