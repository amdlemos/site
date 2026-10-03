import type { APIRoute } from 'astro';
import { origin } from '../config/site';

export const GET: APIRoute = () => new Response(
  origin
    ? 'User-agent: *\nAllow: /\nSitemap: ' + origin + '/sitemap.xml\n'
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
