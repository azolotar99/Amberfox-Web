import { useEffect, useState } from 'react';

export type Route = { page: 'home' | 'contact' | 'automation' } | { page: 'products' | 'gallery'; slug?: string };

/** `#/products[/<slug>]`, `#/gallery[/<slug>]`, `#/contact` and `#/automation` open those pages; any other hash is the homepage. */
const parse = (hash: string): Route => {
  // Bare #contact is the old homepage anchor; send it to the page too.
  if (/^#\/?contact\/?$/.test(hash)) return { page: 'contact' };
  if (/^#\/automation\/?$/.test(hash)) return { page: 'automation' };
  const match = hash.match(/^#\/(products|gallery)(?:\/([\w-]+))?\/?$/);
  return match ? { page: match[1] as 'products' | 'gallery', slug: match[2] } : { page: 'home' };
};

/** Hash-based routing, so deep links work on GitHub Pages without a 404 fallback. */
export function useRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      const { hash } = window.location;
      const next = parse(hash);
      // A plain anchor such as #about that exists on the current page just scrolls there.
      if (next.page === 'home' && hash.length > 1 && document.getElementById(decodeURIComponent(hash.slice(1)))) return;
      setRoute(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
