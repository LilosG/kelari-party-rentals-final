// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://kelaripartyrentals.com',
  build: {
    inlineStylesheets: 'always'
  },

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), mdx()]
});