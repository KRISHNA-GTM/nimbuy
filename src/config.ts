// One file for everything you will change by hand. No secrets belong here: the HubSpot
// portal ID and form GUIDs are public by design (they ship in the page of any HubSpot form).
import { SITE_URL } from '../site.config.mjs';

export const SITE = {
  name: 'Nimbuy',
  url: SITE_URL,
  tagline: 'Listings that survive the buyer’s review',
  email: 'nimbuy@gmail.com', // swap to hello@nimbuy.io after the domain move
  founder: 'Krishna Kumar T S',
  linkedin: 'https://www.linkedin.com/in/krishnakumar-ts/',
  credly: 'https://www.credly.com/users/krishna-gtm',
  // Cal.com. Change to your Nimbuy event once it exists (Google Meet location set in Cal).
  calUrl: 'https://cal.com/krishna-kumar-cloud-gtm/krishna-work-with-me',
};

// HubSpot Forms API (no API key needed). Leave portalId empty until the forms exist: every
// form then falls back to a ready-written email to SITE.email, so nothing is lost.
// Form field names to create in each HubSpot form are listed in HUBSPOT-SETUP.md.
export const HUBSPOT = {
  portalId: '',
  forms: {
    check: '',      // audit result → "email me this report"
    brief: '',      // /book: offer brief or waitlist
    newsletter: '', // footer + blog
    playbook: '',   // playbook gate
  },
};
