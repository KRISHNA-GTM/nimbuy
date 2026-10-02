// All forms: HubSpot Forms API when configured, otherwise a ready-written email.
// Nothing is stored by this site. Only standard HubSpot fields are sent (email, firstname,
// company, website, message) so a form that lacks a custom property can never reject a lead.
import { HUBSPOT, SITE } from '../config';

type FormKey = keyof typeof HUBSPOT.forms;

const configured = (key: FormKey) => Boolean(HUBSPOT.portalId && HUBSPOT.forms[key]);

async function toHubspot(key: FormKey, fields: Record<string, string>, consentText: string) {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT.portalId}/${HUBSPOT.forms[key]}`;
  const body: Record<string, unknown> = {
    fields: Object.entries(fields).filter(([, v]) => v).map(([name, value]) => ({ name, value })),
    context: { pageUri: location.href, pageName: document.title },
  };
  if (consentText) body.legalConsentOptions = { consent: { consentToProcess: true, text: consentText } };
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`HubSpot ${res.status}`);
}

function mailtoFallback(subject: string, fields: Record<string, string>) {
  const lines = Object.entries(fields).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${lines}\n\n(Sent from ${location.href})`)}`;
  location.href = href;
}

export function wire(form: HTMLFormElement) {
  const key = form.dataset.form as FormKey;
  const ok = form.parentElement!.querySelector<HTMLElement>('[data-ok]');
  const err = form.querySelector<HTMLElement>('.form-error');
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (err) err.textContent = '';
    const fd = new FormData(form);
    if (fd.get('website_hp')) return; // honeypot
    const consent = form.querySelector<HTMLInputElement>('input[name=consent]');
    if (consent && !consent.checked) { if (err) err.textContent = 'Please tick the consent box so we can email you.'; return; }

    const get = (n: string) => String(fd.get(n) ?? '').trim();
    const extra: string[] = [];
    ['offer', 'listing_url', 'when', 'note', 'source'].forEach((n) => { if (get(n)) extra.push(`${n.replace('_', ' ')}: ${get(n)}`); });
    const fields: Record<string, string> = {
      email: get('email'), firstname: get('name'), company: get('company'), website: get('website'),
      message: [get('message'), ...extra].filter(Boolean).join('\n'),
    };
    const consentText = form.dataset.consent || '';
    btn && (btn.disabled = true);
    try {
      if (configured(key)) {
        await toHubspot(key, fields, consentText);
      } else {
        mailtoFallback(form.dataset.subject || `Nimbuy: ${key}`, { ...fields });
      }
      form.hidden = true;
      if (ok) { ok.hidden = false; ok.focus?.(); }
      form.dispatchEvent(new CustomEvent('nimbuy:submitted', { bubbles: true, detail: { key } }));
    } catch {
      if (err) err.textContent = `That did not send. Email ${SITE.email} instead and we will pick it up.`;
      btn && (btn.disabled = false);
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach(wire);

