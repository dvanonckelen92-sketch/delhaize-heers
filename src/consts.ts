// Centrale winkelgegevens — pas hier aan als adres, uren of links wijzigen.
// Bron: officiële winkelpagina op stores.delhaize.be/nl/delhaize-heers (geraadpleegd 2026-09-13).

export const SITE = {
  name: 'Delhaize Heers',
  legalFormat: 'AD Delhaize',
  tagline: 'Uw buurtsupermarkt in Heers',
  url: 'https://www.primi.be',
  locale: 'nl_BE',
  language: 'nl',
};

export const STORE = {
  streetAddress: 'Nieuwe Steenweg 42',
  postalCode: '3870',
  addressLocality: 'Heers',
  addressCountry: 'BE',
  phone: '+32 11 48 00 18',
  phoneHref: 'tel:+3211480018',
  mapsQuery: 'Nieuwe Steenweg 42, 3870 Heers',
};

export type DayHours = {
  day: string;
  schemaDay: string;
  opens: string | null;
  closes: string | null;
};

// Volgorde: maandag → zondag. schemaDay volgt schema.org (https://schema.org/Monday enz.).
export const OPENING_HOURS: DayHours[] = [
  { day: 'Maandag', schemaDay: 'Monday', opens: '13:00', closes: '18:30' },
  { day: 'Dinsdag', schemaDay: 'Tuesday', opens: '09:00', closes: '18:30' },
  { day: 'Woensdag', schemaDay: 'Wednesday', opens: '09:00', closes: '18:30' },
  { day: 'Donderdag', schemaDay: 'Thursday', opens: '09:00', closes: '18:30' },
  { day: 'Vrijdag', schemaDay: 'Friday', opens: '09:00', closes: '18:30' },
  { day: 'Zaterdag', schemaDay: 'Saturday', opens: '09:00', closes: '18:00' },
  { day: 'Zondag', schemaDay: 'Sunday', opens: '09:00', closes: '12:00' },
];

export const SERVICES = [
  'Bakkerij, slagerij en viskraam',
  'Bloemen en postzegels',
  'Vegetarische en veganistische producten',
  'Bio en verse producten',
  "Bol.com afhaalpunt",
  'Click & Collect',
  'Gratis parking en ondergrondse parking',
  'Fietsenstalling',
  'Zondagopening',
];

// Vul de echte ondernemingsgegevens hier in vóór livegang — nodig voor een correct privacybeleid (GDPR/WER).
export const COMPANY = {
  legalName: '[in te vullen: officiële bedrijfsnaam / eenmanszaak]',
  kboNumber: '[in te vullen: KBO-nummer]',
  privacyEmail: '[in te vullen: e-mailadres voor privacyvragen]',
};

export const AGENCY = {
  name: 'Coop Consult',
};

export const HOSTING = {
  provider: 'Netlify, Inc.',
  providerAddress: '512 2nd Street, Suite 200, San Francisco, CA 94107, Verenigde Staten',
  privacyPolicyUrl: 'https://www.netlify.com/privacy/',
};

export const LINKS = {
  collect: 'https://www.delhaize.be/collect',
  folder: 'https://www.delhaize.be/nl/folder',
  // Publitas-account van Delhaize: deze URL (zonder specifieke week-slug) verwijst altijd
  // automatisch door naar de nieuwste folder, dus deze hoeft nooit handmatig bijgewerkt te worden.
  folderEmbed: 'https://view.publitas.com/delhaize-belgium-nl?publitas_embed=embedded',
  magazine: 'https://www.delhaize.be/nl/magazine',
  appStore: 'https://apps.apple.com/us/app/my-delhaize/id1463175036',
  playStore: 'https://play.google.com/store/apps/details?id=be.delhaize.my',
  officialStorePage: 'https://stores.delhaize.be/nl/delhaize-heers',
  route: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Nieuwe Steenweg 42, 3870 Heers')}`,
  mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent('Nieuwe Steenweg 42, 3870 Heers')}&output=embed`,
};
