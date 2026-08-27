// GA4 events. Loaded on every page, after the gtag snippet in <head>.
//
// Event names follow Google's recommended-event vocabulary wherever one exists
// (begin_checkout, generate_lead, select_content) rather than invented names,
// so they map onto GA4's built-in reports and Google Ads conversion import.
//
// Clicks are caught by one delegated listener rather than inline handlers: the
// design-system components re-render on setState, so per-element handlers would
// need re-binding, and the templates already use {{ }} for their onClick slots.
//
// Outbound clicks to socials are deliberately NOT tracked here. GA4 Enhanced
// Measurement already fires those automatically; a second custom event would
// split the same clicks across two names. Stripe is the exception, since a
// checkout hand-off deserves ecommerce semantics, not a generic outbound click.
(() => {
  "use strict";

  const send = (name, params) => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, { page_path: window.location.pathname, ...params });
  };

  // Where on the page the click happened, for splitting hero vs footer vs nav
  // performance on the same CTA. Falls back to the nearest section id.
  const locationOf = el => {
    if (el.closest("header")) return "header";
    if (el.closest("footer")) return "footer";
    const section = el.closest("section[id]");
    return section ? section.id : "body";
  };

  document.addEventListener("click", event => {
    const link = event.target.closest?.("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const where = locationOf(link);

    // Payment intent. Highest-value action on the site, so it gets the GA4
    // recommended ecommerce name and should be marked as a conversion.
    if (href.includes("buy.stripe.com")) {
      send("begin_checkout", {
        currency: "USD",              // pricing.html states "Prices in USD"
        value: 500,                   // Solo, one-time. Every Stripe link is this same product.
        cta_location: where,
        button_text: (link.innerText || link.textContent || "").trim() || "Pre-order",
        destination_url: link.href,
      });
      return;
    }

    // Waitlist CTA. This is the click on the anchor, not the signup itself:
    // generate_lead fires separately once the API confirms the write.
    if (href === "#waitlist" || href === "/#waitlist") {
      send("select_content", { content_type: where, item_id: "join_waitlist" });
      return;
    }

    if (href === "/pricing") {
      send("select_content", { content_type: where, item_id: "view_pricing" });
    }
  }, true);
})();
