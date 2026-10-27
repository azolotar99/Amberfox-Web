import type { Plugin } from 'vite';

/**
 * Paths from the old amberfoxblinds.com.au site that Google still lists, mapped to
 * where they live now. GitHub Pages can't send real 301s, so each one gets a small
 * page at that path that forwards straight away (an instant meta refresh, which
 * Google treats as a permanent redirect).
 */
const oldPaths: Record<string, string> = {
  'our-products': '#/products',
  products: '#/products',
  'products/plantation-shutters': '#/products/plantation-shutters',
  'products/roller-blinds': '#/products/roller-blinds',
  'products/roman-blinds': '#/products/roman-blinds',
  'products/venetian-blinds': '#/products/venetian-blinds',
  'products/awnings': '#/products/awnings',
  'products/curtains': '#/products/curtains',
  automation: '#/automation',
  // No safety page yet, so this lands on the homepage.
  safety: '',
  gallery: '#/gallery',
  'contact-us': '#/contact',
};

const page = (target: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Amberfox Blinds &amp; Shutters</title>
    <meta http-equiv="refresh" content="0; url=${target}" />
    <script>location.replace(${JSON.stringify(target)});</script>
  </head>
  <body>
    <p>This page has moved. <a href="${target}">Continue to Amberfox Blinds &amp; Shutters</a>.</p>
  </body>
</html>
`;

/** Emits `<old-path>/index.html` redirect pages, plus a 404.html that sends any other stray link home. */
export function oldSiteRedirects(): Plugin {
  let base = '/';
  return {
    name: 'old-site-redirects',
    apply: 'build',
    configResolved(config) {
      base = config.base;
    },
    generateBundle() {
      for (const [path, hash] of Object.entries(oldPaths)) {
        this.emitFile({ type: 'asset', fileName: `${path}/index.html`, source: page(base + hash) });
      }
      this.emitFile({ type: 'asset', fileName: '404.html', source: page(base) });
    },
  };
}
