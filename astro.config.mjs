import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mining-dev.ru',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});