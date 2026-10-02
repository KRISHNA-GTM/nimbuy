import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, BASE } from './site.config.mjs';

const isBuild = process.argv.includes('build') || process.argv.includes('preview');
const base = isBuild && BASE ? BASE : '/';

// Pages and templates write internal links as "/audit/". When the site is served from a sub-path
// (GitHub project Pages), prefix them once after the build so source files never change.
function prefixInternalLinks() {
  return {
    name: 'prefix-internal-links',
    hooks: {
      'astro:build:done': ({ dir }) => {
        if (!BASE) return;
        const root = fileURLToPath(dir);
        const re = new RegExp(`(href|src|srcset|action)="/(?!/|${BASE.slice(1)}/)`, 'g');
        const walk = (d) => {
          for (const f of readdirSync(d)) {
            const p = join(d, f);
            if (statSync(p).isDirectory()) walk(p);
            else if (f.endsWith('.html')) {
              const s = readFileSync(p, 'utf8');
              const t = s.replace(re, `$1="${BASE}/`);
              if (t !== s) writeFileSync(p, t);
            }
          }
        };
        walk(root);
      },
    },
  };
}

export default defineConfig({
  site: SITE_URL,
  base,
  integrations: [sitemap({ filter: (p) => !p.includes('/playbook/read') }), prefixInternalLinks()],
  build: { format: 'directory' },
});
