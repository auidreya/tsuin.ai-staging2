import Script from "next/script";
import { GA_ID } from "@/lib/site";
import { DeferredAnalytics } from "./deferred-analytics";

// Analytics without costing page speed.
//
// The inline snippet runs right after hydration: it creates dataLayer and the
// gtag() stub, so the pageview and any events queue up immediately. The Google
// libraries themselves (~290 KB, ~600 ms of main-thread work on a mid-range
// phone) load on the visitor's first interaction (see DeferredAnalytics), then
// replay the queue. Trade-off, chosen deliberately: a visitor who leaves
// without scrolling, tapping, typing or moving the mouse is not counted.
//
// GTM carries third-party pixels and heatmaps only. GA4 loads via gtag.js;
// adding a GA4 tag inside GTM would double every pageview.
const INIT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
gtag("js", new Date());
gtag("config", "${GA_ID}");
`;

export function ThirdPartyScripts() {
  return (
    <>
      <Script id="analytics-init" strategy="afterInteractive">
        {INIT}
      </Script>
      <DeferredAnalytics />
    </>
  );
}
