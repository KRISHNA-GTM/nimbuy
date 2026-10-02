// Market facts shown on the site. Source: all-category-benchmark.md section 3 (SaaS, at most
// 2 listings per seller, n = 6,966, Discovery API snapshot 2026-09-29). Public data only.
// The count and chart come from public/js/listing-benchmark.js so they never drift.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const raw = readFileSync(join(process.cwd(), 'public/js/listing-benchmark.js'), 'utf8');
const B = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));

export const BENCH = {
  n: B.n as number,
  count: `${(Math.floor(B.n / 100) * 100).toLocaleString('en-US')}+`,
  snapshot: new Date(`${B.snapshot}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
  median: B.medianTotal as number,
  p90: B.p90Total as number,
  max: B.maxTotal as number,
};

export const FACTS = [
  { n: 77, label: 'price only in “Units”', note: 'Procurement cannot tell what one unit buys.' },
  { n: 80, label: 'name no AWS service', note: 'Engineers cannot judge fit from the page.' },
  { n: 74, label: 'have no security or compliance term', note: 'The first thing a security reviewer looks for.' },
  { n: 69, label: 'have no deployment or setup language', note: 'No path from Subscribe to first result.' },
  { n: 89, label: 'have no customer review', note: 'No third-party proof on the page.' },
  { n: 3, label: 'declare MCP', note: 'Agent builders search for it by name.' },
];
