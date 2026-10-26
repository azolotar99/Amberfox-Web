import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { oldSiteRedirects } from './redirects';

// On GitHub Pages the site lives under /<repo>/; the deploy workflow passes that
// path in via BASE_PATH (from actions/configure-pages). Locally it serves from /.
export default defineConfig({
  base: process.env.BASE_PATH ? `${process.env.BASE_PATH.replace(/\/$/, '')}/` : '/',
  plugins: [react(), oldSiteRedirects()],
});
