import { GA_ID, GTM_ID } from "./site";

// Injects the Google libraries (gtag.js for GA4, gtm.js for pixels) once.
// Commands pushed to dataLayer before this runs are queued by the inline stub
// in components/third-party-scripts.tsx and replayed when gtag.js arrives.

let loading: Promise<void> | null = null;
let gtagReady = false;

function inject(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.head.appendChild(s);
  });
}

export function loadAnalytics() {
  if (!loading) {
    const gtag = inject(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`).then(() => {
      gtagReady = true;
    });
    loading = Promise.all([gtag, inject(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`)]).then(() => {});
  }
  return loading;
}

export function isAnalyticsReady() {
  return gtagReady;
}
