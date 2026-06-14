/**
 * usePageSEO — sets <title>, meta description, canonical, OG and Twitter tags
 * dynamically per page. Call at the top of every page component.
 *
 * Usage:
 *   usePageSEO({
 *     title: 'Page Title | RE/MAX ZAM',
 *     description: 'Meta description …',
 *     canonical: 'https://remaxzam.com/page-slug',
 *     ogImage: 'https://…/image.jpg', // optional, falls back to default
 *     schema: { '@context': '…', '@type': '…', … }, // optional extra LD+JSON
 *   });
 */
import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/e55db5afd_generated_image.png';
const SITE_NAME = 'RE/MAX ZAM Dubai';

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function injectSchema(id, data) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export default function usePageSEO({ title, description, canonical, ogImage, keywords, schema }) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Primary meta
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('robots', 'index, follow');

    // Canonical
    setLink('canonical', canonical);

    // Open Graph
    const image = ogImage || DEFAULT_OG_IMAGE;
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:locale', 'en_AE', 'property');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    // Optional extra schema block
    if (schema) {
      injectSchema('page-schema', schema);
    }

    return () => {
      // Restore index.html defaults on unmount
      document.title = 'RE/MAX ZAM Dubai — Dubai Real Estate Investment, Off-Plan & Luxury Properties';
      const pageSchema = document.getElementById('page-schema');
      if (pageSchema) pageSchema.remove();
    };
  }, [title, description, canonical, ogImage, keywords, JSON.stringify(schema)]);
}