import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://clbenoit.github.io/portfolio',
  base: '/portfolio/',
  trailingSlash: 'always',
  outDir: './docs/dist',
  output: 'static',
  integrations: [
    react(),
    mdx(),
  ],
});