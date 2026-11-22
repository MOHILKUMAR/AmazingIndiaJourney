// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.agradaytourpackages.com',
  output: 'static',
  trailingSlash: 'always',
  // Pages marked noindex (admin + placeholder legal pages) are kept out of the sitemap
  integrations: [sitemap({ filter: (page) => !/\/(admin|terms|privacy|disclaimer)\//.test(page) })],
  vite: { plugins: [tailwindcss()] },
});
