import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/',
  trailingSlash: 'always',
  output: 'static',
  devToolbar: { enabled: false },
});
