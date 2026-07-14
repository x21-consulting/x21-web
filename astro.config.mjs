// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sitio 100% estático. Vercel detecta Astro automáticamente y sirve `dist/`.
// No se necesita adaptador al no haber SSR (evita el bug de SSR de Astro 6 en Vercel).
export default defineConfig({
  site: 'https://x21.consulting',
  output: 'static',
  trailingSlash: 'ignore',
  // Inglés en la raíz (sin prefijo) y español bajo /es/. La detección por
  // idioma del navegador se hace en cliente (ver BaseLayout).
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
