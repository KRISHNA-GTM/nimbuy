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
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
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

GitHub repo Settings → Pages → Source: **GitHub Actions**. Push to `main`;
`.github/workflows/deploy.yml` builds and publishes. See HUBSPOT-SETUP.md for forms, Cal and the
nimbuy.io move.

## Before you publish

- Privacy policy names no registered address or country yet; add yours if you want it stated.
- `public/assets/og.png` is the old design's preview image. Regenerate it.
- Keep the site separate from the personal portfolio and from any employer material.
