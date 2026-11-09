import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://mining-dev.ru';
const staticPaths = [
  '/',
  '/services',
  '/solutions',
  '/blog',
  '/about',
  '/contacts',
];

const xmlEscape = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const urls = [
    ...staticPaths.map((path) => new URL(path, SITE).href),
    ...posts.map((post) => new URL(`/blog/${post.id}`, SITE).href),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n`
    + `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
    + urls.map((url) => `<url><loc>${xmlEscape(url)}</loc></url>`).join('')
    + `</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
