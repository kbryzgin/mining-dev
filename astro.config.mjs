import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mining-dev.ru',
  // GitHub Pages custom domain: keep base empty.
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
