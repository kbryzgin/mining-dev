/** Build an internal URL that respects Astro's configured base path. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const normalizedPath = path.startsWith('/')
    ? path
    : `/${path}`;

  return `${base}${normalizedPath}`;
}