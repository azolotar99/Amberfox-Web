# Amberfox Blinds & Shutters

Website for Amberfox Blinds & Shutters, built with React, TypeScript and Vite and hosted on GitHub Pages.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build
```

## Structure

- `src/components/`: one component per homepage section (Nav, Hero, Ticker, Products, …)
- `src/content.ts`: products, contact details, testimonials and other copy shared across sections
- `src/styles/global.css`: site styles and brand tokens
- `public/images/`: optimised photos (each in WebP and JPEG at two widths)

## Deploy

Pushes to `main` build and deploy via `.github/workflows/deploy.yml`. In the repo's
**Settings → Pages**, set **Source** to **GitHub Actions** (one-time).

The site is served from `https://azolotar99.github.io/amberfox-web/`, so `base` in
`vite.config.ts` is `/amberfox-web/`. Set it to `/` when moving to a custom domain.
