import { defineConfig } from 'astro/config';
import { origin } from './src/config/site';

export default defineConfig({
  output: 'static',
  site: origin || undefined,
  trailingSlash: 'always',
});
