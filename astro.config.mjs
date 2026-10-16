// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebcardoso.vercel.app',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false, // español en "/", inglés en "/en/"
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});