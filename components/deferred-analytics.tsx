"use client";

import { useEffect } from "react";
import { loadAnalytics } from "@/lib/load-analytics";

const TRIGGERS = ["pointerdown", "pointermove", "keydown", "touchstart", "scroll", "wheel"] as const;

// Loads the analytics libraries on the first sign of a real visitor.
export function DeferredAnalytics() {
  useEffect(() => {
    const start = () => {
      TRIGGERS.forEach((t) => window.removeEventListener(t, start));
      void loadAnalytics();
    };
    TRIGGERS.forEach((t) => window.addEventListener(t, start, { passive: true, once: true }));
    return () => TRIGGERS.forEach((t) => window.removeEventListener(t, start));
  }, []);
  return null;
}
