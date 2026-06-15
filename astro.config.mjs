// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio 100% estático. Vercel detecta Astro automáticamente y sirve `dist/`.
// No se necesita adaptador al no haber SSR (evita el bug de SSR de Astro 6 en Vercel).
export default defineConfig({
  site: 'https://x21.consulting',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
