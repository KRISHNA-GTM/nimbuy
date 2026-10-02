# Nimbuy site (Astro)

Rebuild of `../nimbuy/` (plain HTML) on Astro. Static output, deployed to GitHub Pages.
Design direction B, technical precision: Bricolage Grotesque + Hanken Grotesk + IBM Plex Mono
(self-hosted through @fontsource, no Google Fonts request), brand violet kept, mint as the one
signal colour.

```
site.config.mjs          SITE_URL (domain), the one value Astro reads at config time
src/config.ts            email, Cal link, HubSpot portal + form IDs. The file you edit by hand
src/data/facts.ts        market facts; count + snapshot read from public/js/listing-benchmark.js
src/layouts/Base.astro   head, nav, footer, scripts
src/components/          AuditTool, Offers, LeadForm, Newsletter, MarketFacts, Faq, CtaBand, Footer
src/pages/               index, audit, offers, process, sample, insights, about, book,
                         playbook (+ /read), privacy, terms, blog (index + [slug]), 404
src/content/blog/*.md    posts: frontmatter title, description, date, tag, readMinutes
src/scripts/forms.ts     all forms: HubSpot Forms API, or a ready-written email fallback
public/js/listing-*.js   the audit engine and benchmark, unchanged from the old site
```

## Commands

```bash
npm install
npm run dev        # http://localhost:4321 (no sub-path)
npm run build      # outputs dist/ with the /nimbuy sub-path
npm run preview    # serves the built site at /nimbuy/
```

## Add a blog post

Add `src/content/blog/<slug>.md` with the frontmatter above. It appears on the blog index and
the home page. Label every claim: Fact (a count you can reproduce), Inference, Opinion, using
`<span class="epistemic ep-fact">Fact</span>` (also `ep-infer`, `ep-opinion`).

## Refresh the benchmark

`node ../tools/build-benchmark.js path/to/listings_<date>.csv` writes the benchmark JS. Copy it
to `public/js/listing-benchmark.js`. The count, snapshot date and chart follow. The percentage
facts in `src/data/facts.ts` come from `../all-category-benchmark.md` section 3 and are edited by
hand; keep the blog posts consistent with them.

## Deploy

GitHub repo → Settings → Pages → **Build and deployment → Source: GitHub Actions** (the default, "Deploy from a branch", tries to build with Jekyll and fails). Push to `main`; `.github/workflows/deploy.yml` builds and publishes to https://krishna-gtm.github.io/nimbuy/.

While the site lives in a project repo it is served from the `/nimbuy/` sub-path. `site.config.mjs` holds `BASE`; after the build an Astro hook prefixes internal links, so templates keep writing `/audit/`. Moving to nimbuy.io: see HUBSPOT-SETUP.md section 3.

Do not commit `dist/` or `node_modules/` (`.gitignore` excludes them).

## Before you publish

- Keep the site separate from the personal portfolio and from any employer material.
- `public/assets/og.png` is rendered from `og-source/og.html`.
