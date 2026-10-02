# Forms, HubSpot and Cal.com — setup (about 30 minutes)

> **Free-tier reality.** Free HubSpot gives you: forms, a contact list, a notification email to you per submission, and manual marketing emails (with an unsubscribe link). It does **not** give automated emails back to visitors (workflows, auto-replies). So no page on this site promises an automatic email. The playbook opens on the page right after the email is accepted; the audit result stays in the browser.

Every form on the site works **today** without any of this: it opens a ready-written email to
`SITE.email` in `src/config.ts`. Do the steps below when you are ready, then paste the IDs into
`src/config.ts` and push. Nothing else changes.

## 1. HubSpot (free CRM), signed up with nimbuy@gmail.com

1. Create the free HubSpot account. Note the **Account ID** (Settings → top right, or the number in the URL `app.hubspot.com/…/NNNNNNN/`). This is `portalId`.
2. Marketing → Lead Capture → **Forms** → Create form → **Embedded form** → blank template. Create three forms.
3. Each form needs only these properties. Use exactly these internal names; the site sends nothing else, so a form can never reject a lead.

| Form (key in `config.ts`) | Where it is used | Fields to add |
|---|---|---|
| `brief` | /book written brief and waitlist | Email, First name, Company name, Website URL, Message |
| `newsletter` | Footer, blog, insights | Email |
| `playbook` | /playbook gate | Email, First name, Company name |

4. For each form, open **Options** → switch on **Notify** and send to nimbuy@gmail.com, so every submission lands in your inbox.
5. The site puts everything extra (offer chosen, listing URL, audit score, which page it came from) into the **Message** field of `brief` as lines such as `offer: Listing Optimize`. If you prefer separate columns later, add custom properties named `offer`, `listing_url`, `score`, `source` to the form and add them to the `fields` object in `src/scripts/forms.ts`.
6. Copy each form's **GUID** (the long ID in the embed code: `formId: "…"`). Paste into `src/config.ts`:

```ts
export const HUBSPOT = {
  portalId: '1234567',
  forms: { brief: '…guid…', newsletter: '…guid…', playbook: '…guid…' },
};
```

7. **Consent (GDPR).** In Settings → Privacy & Consent, switch on the GDPR options if you have visitors from the EU or UK. The site sends a `consentToProcess` flag with the exact wording the visitor ticked. If HubSpot rejects submissions after you switch GDPR on, tell Claude the error; the subscription-type ID may need adding.
8. **Sending to your list.** Marketing → Email → create a one-off email to the Newsletter contacts. HubSpot adds the unsubscribe link and your sender details. Send only to people who ticked consent.
9. Test: submit each form once from the live site, then confirm a contact appears in HubSpot → Contacts and a notification arrives in Gmail.

## 2. Cal.com → Google Calendar and Google Meet

1. Cal.com → Apps → **Google Calendar** → connect the Gmail you want events on.
2. Apps → **Google Meet** → install.
3. Event type → Location → **Google Meet**. Settings → Calendars → set the **destination calendar** to your Google calendar.
4. Rename the event to something Nimbuy-branded and rewrite its description (for example: "30-minute call about your AWS Marketplace listing. Bring the listing URL; we'll agree the right next step.").
5. Put the event URL in `src/config.ts` → `SITE.calUrl`. /book embeds it and offers a new-tab fallback.
6. Test by booking with a **different** email than the organiser. Check the invite contains a `meet.google.com` link.

## 3. Moving to nimbuy.io after the first paid client

1. Buy the domain. Check the renewal price.
2. `site.config.mjs` → `SITE_URL = 'https://nimbuy.io'` and `BASE = ''` (the site stops using the /nimbuy sub-path).
3. `public/CNAME` → one line: `nimbuy.io`.
4. `public/robots.txt` → `Disallow: /playbook/read/` and `Sitemap: https://nimbuy.io/sitemap-index.xml`.
5. `src/config.ts` → `SITE.email = 'hello@nimbuy.io'` (set up forwarding to the Gmail first).
6. DNS: A records `@` → 185.199.108.153 / .109.153 / .110.153 / .111.153; CNAME `www` → `krishna-gtm.github.io`. GitHub → Settings → Pages → custom domain → Enforce HTTPS.
7. Forms need no change: the HubSpot submit endpoint does not depend on your domain.
8. The social preview image is `public/assets/og.png`; its source is `og-source/og.html`.
