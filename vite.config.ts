import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://azolotar99.github.io/amberfox-web/ on GitHub Pages.
// Change `base` to '/' if the site moves to a custom domain.
export default defineConfig({
  base: '/amberfox-web/',
  plugins: [react()],
});
