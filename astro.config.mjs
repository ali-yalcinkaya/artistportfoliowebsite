// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Netlify derleme sırasında gerçek site adresini `URL` ortam değişkeniyle
// sağlar; böylece sitemap adresleri doğru domain'i kullanır. Yerelde ise
// varsayılan adres kullanılır.
const SITE_URL =
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  'https://barisfigenyalcinkaya.netlify.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
