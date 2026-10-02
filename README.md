# Nimbuy site (Astro)

Static site, deployed to GitHub Pages at https://krishna-gtm.github.io/nimbuy/.

**One offer, four nav items, two fonts, one accent.** Listing Launch and the Launch Sprint are
deliberately *not* on the site: never delivered, and publishing them next to the $500 price
creates the anchoring problem. Quote those privately from `../internal/pricing-guide.md`.

```
site.config.mjs          SITE_URL + BASE (the /nimbuy sub-path). The two values the domain move touches
src/config.ts            email, Cal link, HubSpot portal + the one form id. Edited by hand
src/data/facts.ts        every published number, with its source in a comment
src/layouts/Base.astro   head, nav (4 items + 1 CTA), footer, scripts
src/components/          FourReaders (sticky-pin), AuditTool, LeadForm, Footer
src/pages/               index · check · rewrite · data · book · privacy · terms · 404
src/scripts/forms.ts     the one form: HubSpot, or a ready-written email fallback
public/js/listing-*.js   the audit engine and benchmark aggregates
og-source/               sources for the two rendered PNGs (see below)
```

## Design rules (do not drift)

- **Two families only.** Instrument Serif for display, Instrument Sans for everything else.
  Self-hosted via @fontsource — no Google Fonts request. Numbers use `tabular-nums`.
- **One accent.** Brand violet. There is no second accent: a "secondary" button is a bordered
  ghost in `--ink`. No gradients, no gradient text.
- **Dark sections are a token flip**, not a new palette: `<section data-tone="dark">` re-points
  the same variables, so the hue identity holds. Two dark sections per page, maximum.
- **Motion is an enhancement.** Everything lives inside `prefers-reduced-motion: no-preference`
  and, for scroll-driven CSS, `@supports (animation-timeline: …)`. The page must read correctly
  with all of it stripped.

## Rendered images

Both are generated, not hand-made. Re-render after a design change:

```bash
cd og-source
chrome --headless=new --allow-file-access-from-files --window-size=1200,630 \
  --screenshot=og.png og.html && cp og.png ../public/assets/og.png
chrome --headless=new --allow-file-access-from-files --window-size=860,1120 \
  --screenshot=deliverable.png deliverable.html && cp deliverable.png ../public/assets/
```

`deliverable.html` uses the **real** house CSS from `../teardown_docs.py` (extracted to
`_house.css`) with the declared-fictional Northwind data. The artifact format is genuine; no
real seller is ever named. Never put a real company's score on the public site.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321, no sub-path
npm run build      # dist/, with the /nimbuy sub-path applied
npm run preview    # serves the built site at /nimbuy/
```

## Numbers

Every figure on the site comes from `src/data/facts.ts`, and each one has its source in a
comment there. The chart aggregates come from `public/js/listing-benchmark.js`
(regenerate with `node ../tools/build-benchmark.js <csv>`). The percentage facts come from
`../all-category-benchmark.md` and the band/zero-rate splits from
`../data/allcat_scores_2026-09-29-all.csv`.

**The comparison set is SaaS-only on purpose.** The census is all categories (12,458), but
delivery type changes what a listing can score, so the chart compares like with like. Do not
"fix" this by mixing AMI or Professional Services into the benchmark.

## Deploy

Repo → Settings → Pages → **Source: GitHub Actions** (the default "Deploy from a branch" runs
Jekyll and fails). Push to `main`; `.github/workflows/deploy.yml` builds on Node 24 and
publishes. Do not commit `dist/` or `node_modules/`.

Moving to nimbuy.io: `site.config.mjs` → `SITE_URL='https://nimbuy.io'`, `BASE=''`, add
`public/CNAME`, update `public/robots.txt`. See HUBSPOT-SETUP.md section 3.
