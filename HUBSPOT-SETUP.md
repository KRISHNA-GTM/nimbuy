# Forms, Cal.com and the domain move

> **Free-tier reality.** Free HubSpot gives you forms, a contact list and a notification email
> to *you* per submission. It does **not** give automated emails back to visitors. So nothing on
> this site promises one: there is no newsletter, no gated download and no "we'll email you the
> report". One form, one promise — a written scope within one business day, sent by you.

The site works today with no setup: the brief form opens a ready-written email to the address
in `src/config.ts`. Everything below is optional until you want leads in a CRM.

## 1. HubSpot (free), signed up with nimbuy@gmail.com

1. Create the account. Note the **Account ID** (the number in the `app.hubspot.com/…/NNNNNNN/`
   URL). That is `portalId`.
2. Marketing → Lead Capture → **Forms** → Create → **Embedded form** → blank. You need **one**.
3. Add exactly these fields. The site sends nothing else, so a missing custom property can never
   reject a lead:

   | Field | Internal name |
   |---|---|
   | Email | `email` |
   | First name | `firstname` |
   | Company name | `company` |
   | Website URL | `website` |
   | Message | `message` |

   The listing URL and anything else the visitor types is appended into **Message** as labelled
   lines. If you later want them as columns, add properties named `listing_url` / `source` to the
   form and add them to the `fields` object in `src/scripts/forms.ts`.
4. Form **Options** → switch on **Notify** → nimbuy@gmail.com. That notification is how you learn
   a brief arrived.
5. Copy the form **GUID** from the embed snippet (`formId: "…"`) into `src/config.ts`:

   ```ts
   export const HUBSPOT = {
     portalId: '1234567',
     forms: { brief: '…guid…' },
   };
   ```
6. **Consent.** Settings → Privacy & Consent — switch on the GDPR options if you have EU or UK
   visitors. The site already sends a `consentToProcess` flag carrying the exact wording the
   visitor ticked. If submissions start failing after you enable GDPR, a subscription-type ID
   may need adding — say so and I will wire it.
7. Test: submit the brief once from the live site, confirm a contact appears in HubSpot and the
   notification reaches Gmail.

## 2. Cal.com → Google Calendar and Google Meet

1. Cal.com → Apps → **Google Calendar** → connect the Gmail you want events on.
2. Apps → **Google Meet** → install (needs the Calendar connection).
3. Event type → Location → **Google Meet**. Settings → Calendars → destination calendar = your
   Google calendar.
4. Rename the event to something Nimbuy-branded and rewrite its description. The current one
   still says "Krishna Work with Me" and lists four offers — there is only one now.
5. Put the event URL in `src/config.ts` → `SITE.calUrl`.
6. Test by booking from a **different** email than the organiser, and confirm the invite carries
   a `meet.google.com` link.

The calendar is behind a "Load the calendar" button on /book, so Cal.com sets nothing in a
visitor's browser until they click. That is what the privacy policy says — keep it true.

## 3. Moving to nimbuy.io after the first paid client

1. Buy the domain. Check the renewal price, not just year one.
2. `site.config.mjs` → `SITE_URL = 'https://nimbuy.io'` and `BASE = ''` (drops the sub-path).
3. Add `public/CNAME` containing one line: `nimbuy.io`.
4. `public/robots.txt` → `Sitemap: https://nimbuy.io/sitemap-index.xml`.
5. `src/config.ts` → `SITE.email = 'hello@nimbuy.io'` once forwarding to the Gmail works.
6. DNS: A records `@` → 185.199.108.153 / .109.153 / .110.153 / .111.153; CNAME `www` →
   `krishna-gtm.github.io`. GitHub → Settings → Pages → custom domain → Enforce HTTPS.
7. Forms need no change — the HubSpot endpoint does not depend on your domain.
8. Re-render `og.png` if you change the design (see README).
