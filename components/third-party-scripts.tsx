import Script from "next/script";
import { GA_ID, GTM_ID } from "@/lib/site";

// Analytics without blocking the page.
//
// The inline snippet runs right after hydration: it creates dataLayer and the
// gtag() stub, so pageviews and click events (begin_checkout, generate_lead)
// queue up immediately. The two Google libraries (~290 KB) load later, when the
// browser is idle, and replay the queue.
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
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      <Script src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} strategy="lazyOnload" />
    </>
  );
}
