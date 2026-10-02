import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './site.config.mjs';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap({ filter: (p) => !p.includes('/playbook/read') && !p.includes('/thanks') })],
  build: { format: 'directory' },
});
