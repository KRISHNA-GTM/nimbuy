// Every number here is reproducible from the vault. Sources in comments.
// Chart/benchmark aggregates come from public/js/listing-benchmark.js so they never drift.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const raw = readFileSync(join(process.cwd(), 'public/js/listing-benchmark.js'), 'utf8');
const B = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));

export const BENCH = {
  n: B.n as number,
  count: `${(Math.floor(B.n / 100) * 100).toLocaleString('en-US')}+`,
  nExact: (B.n as number).toLocaleString('en-US'),
  snapshot: new Date(`${B.snapshot}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
  median: B.medianTotal as number,
  p90: B.p90Total as number,
  max: B.maxTotal as number,
};

// all-category census, data/allcat_scores_2026-09-29-all.csv:
// SAAS 9,032 · PRO 2,078 · AMI 810 · CONTAINER 538
export const CENSUS = {
  total: 12458,
  totalLabel: '12,458',
  parts: [
    ['SaaS', 9032],
    ['Professional Services', 2078],
    ['Machine images', 810],
    ['Containers', 538],
  ] as [string, number][],
};

// The three gaps. % = share of listings scoring ZERO on that dimension,
// computed over the 6,926 capped SaaS listings, split by score band.
export const GAPS = [
  {
    key: 'Security',
    typical: 76,
    best: 11,
    head: 'say nothing checkable about security',
    body: 'No region, no named report, no retention rule. The first reader has nothing to work with.',
  },
  {
    key: 'Technical',
    typical: 84,
    best: 0,
    head: 'name no AWS service at all',
    body: 'An engineer cannot judge fit from “integrates with your cloud”.',
  },
  {
    key: 'Deployment',
    typical: 63,
    best: 0,
    head: 'never say what happens after Subscribe',
    body: 'No prerequisites, no path, no time to a first working result.',
  },
];

// Hand-scored sample, benchmark/scored_allcat.csv (n = 270, median 40, max 70).
export const HAND = {
  n: 270,
  median: 40,
  max: 70,
  weakest: [
    ['Security signals', 40],
    ['Pricing clarity', 33],
    ['Deployment clarity', 19],
  ] as [string, number][],
  // 40 + 33 + 19
  topThreeShare: 92,
};

// Only 19 of 6,926 capped SaaS listings score above 70 on the automatic check.
export const ABOVE_70 = 19;
