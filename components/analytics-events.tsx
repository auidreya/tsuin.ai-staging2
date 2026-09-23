"use client";

import { useEffect } from "react";
import { isAnalyticsReady, loadAnalytics } from "@/lib/load-analytics";

// GA4 events, using Google's recommended-event names (begin_checkout,
// select_content) so they map onto built-in reports and Ads conversion import.
// generate_lead is sent by the waitlist form once the API confirms the write.
//
// One delegated capture listener for the whole document, not per-element
// handlers. Outbound social clicks are left to GA4 Enhanced Measurement.

type GtagFn = (command: "event", name: string, params: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function sendEvent(name: string, params: Record<string, unknown>) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, { page_path: window.location.pathname, ...params });
}

// Where the click happened, for splitting hero vs footer vs nav on the same CTA.
function locationOf(el: Element) {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section[id]");
  return section ? section.id : "body";
}

function onClick(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (!link) return;

  const href = link.getAttribute("href") ?? "";
  const where = locationOf(link);

  if (href.includes("buy.stripe.com")) {
    const params: Record<string, unknown> = {
      currency: "USD",
      value: 500, // Solo, one-time. Every Stripe link is this same product.
      cta_location: where,
      button_text: (link.innerText || link.textContent || "").trim() || "Pre-order",
      destination_url: link.href,
    };

    // Analytics loads on first interaction, so a visitor whose first action is
    // this click would leave before gtag.js arrives. Hold the same-tab
    // navigation until GA confirms the hit, or 1.5 s at most.
    const sameTab =
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey &&
      link.target !== "_blank";
    if (!isAnalyticsReady() && sameTab) {
      event.preventDefault();
      let gone = false;
      const go = () => {
        if (gone) return;
        gone = true;
        window.location.href = link.href;
      };
      const fallback = window.setTimeout(go, 1500);
      sendEvent("begin_checkout", {
        ...params,
        event_callback: () => {
          window.clearTimeout(fallback);
          go();
        },
      });
      void loadAnalytics();
      return;
    }

    sendEvent("begin_checkout", params);
    return;
  }

  // The click on the CTA, not the signup itself.
  if (href === "#waitlist" || href === "/#waitlist") {
    sendEvent("select_content", { content_type: where, item_id: "join_waitlist" });
    return;
  }

  if (href === "/pricing") {
    sendEvent("select_content", { content_type: where, item_id: "view_pricing" });
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
