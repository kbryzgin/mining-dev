import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mining-dev.ru',
  base: '/mining-dev',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});