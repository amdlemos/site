import { defineConfig } from 'astro/config';
import { origin } from './src/config/site';

declare const process: { env: Record<string, string | undefined> };

export default defineConfig({
  output: 'static',
  site: origin || process.env.PAGES_SITE || undefined,
  base: process.env.PAGES_BASE || '/',
  trailingSlash: 'always',
});
