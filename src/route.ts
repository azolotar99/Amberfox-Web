import { useEffect, useState } from 'react';

export type Route = { page: 'home' } | { page: 'products'; slug?: string };

/** `#/products` and `#/products/<slug>` open the Products page; any other hash is the homepage. */
const parse = (hash: string): Route => {
  const match = hash.match(/^#\/products(?:\/([\w-]+))?\/?$/);
  return match ? { page: 'products', slug: match[1] } : { page: 'home' };
};

/** Hash-based routing, so deep links work on GitHub Pages without a 404 fallback. */
export function useRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      const { hash } = window.location;
      const next = parse(hash);
      // A plain anchor such as #contact that exists on the current page just scrolls there.
      if (next.page === 'home' && hash.length > 1 && document.getElementById(decodeURIComponent(hash.slice(1)))) return;
      setRoute(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
