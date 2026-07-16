// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

// Sitio 100% estático. Se usa el adaptador de Vercel para habilitar Web Analytics.
export default defineConfig({
  site: 'https://x21.consulting',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
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
