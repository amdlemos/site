import type { APIRoute } from 'astro';
import { origin } from '../config/site';

const xmlEntities: Record<string, string> = {
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&apos;', '"': '&quot;',
};
const escapeXml = (value: string) => value.replace(/[&<>'"]/g, (character) => xmlEntities[character]!);

export const GET: APIRoute = () => new Response(
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
  (origin ? '<url><loc>' + escapeXml(origin + '/') + '</loc></url>' : '') +
  '</urlset>\n',
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
