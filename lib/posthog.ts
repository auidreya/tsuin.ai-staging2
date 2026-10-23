import type { PostHog } from "posthog-js";

// PostHog (product analytics, session replay, heatmaps, surveys).
//
// Loaded by loadAnalytics() on the visitor's first interaction, like the
// Google libraries, so it costs nothing on first paint. Events captured before
// it arrives are queued here and replayed once it initialises.
//
// Requests go through /ingest (rewritten to PostHog in next.config.ts) so ad
// blockers that block *.posthog.com don't drop them.
//
// With no NEXT_PUBLIC_POSTHOG_KEY set (e.g. local dev), everything is a no-op.

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const UI_HOST = process.env.NEXT_PUBLIC_POSTHOG_REGION === "eu" ? "https://eu.posthog.com" : "https://us.posthog.com";

type Pending = (ph: PostHog) => void;

let client: PostHog | null = null;
let loading: Promise<void> | null = null;
const queue: Pending[] = [];

function run(fn: Pending) {
  if (!KEY) return;
  if (client) fn(client);
  else queue.push(fn);
}

export function loadPostHog() {
  if (!KEY) return Promise.resolve();
  if (!loading) {
    loading = import("posthog-js")
      .then(({ default: posthog }) => {
        posthog.init(KEY, {
          api_host: "/ingest",
          ui_host: UI_HOST,
          defaults: "2026-08-30",
          // Initial pageview plus one per client-side route change.
          capture_pageview: "history_change",
          // Anonymous visitors don't get person profiles; they're created on
          // identify() after a waitlist signup. Keeps us inside the free tier.
          person_profiles: "identified_only",
          // Replay masks every input (email, name, use case) by default. Keep it.
          session_recording: { maskAllInputs: true },
        });
        client = posthog;
        queue.splice(0).forEach((fn) => fn(posthog));
      })
      .catch(() => {});
  }
  return loading;
}

export function captureEvent(name: string, props: Record<string, unknown> = {}) {
  // Drop callbacks and other non-data params meant for gtag.
  const data = Object.fromEntries(Object.entries(props).filter(([, v]) => typeof v !== "function"));
  run((ph) => ph.capture(name, data));
}

// Links this browser's anonymous history (pages seen, demo, CTA clicks) to the
// person who just joined the waitlist.
export function identifyPerson(email: string, props: Record<string, unknown> = {}) {
  run((ph) => ph.identify(email.toLowerCase(), { email, ...props }));
}
