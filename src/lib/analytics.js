// GA4 Analytics helper — wraps window.gtag with safe guards
export const GA_MEASUREMENT_ID = 'G-99V9C9JK01';

/** Fire a GA4 page_view event (used by SPA route tracker) */
export function trackPageView(path) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Fire a custom GA4 event */
export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}