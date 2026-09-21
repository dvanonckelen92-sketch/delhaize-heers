// Centrale winkelgegevens — pas hier aan als adres, uren of links wijzigen.
// Bron: officiële winkelpagina op stores.delhaize.be/nl/delhaize-heers (geraadpleegd 2026-09-13).

export const SITE = {
  name: 'Delhaize Heers',
  legalFormat: 'AD Delhaize',
  tagline: 'Uw buurtsupermarkt in Heers',
  url: 'https://delhaizeheers.be',
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
  // Google Place ID van deze winkel (bevestigd via Google Maps), gebruikt voor exacte kaart-/routelinks.
  googlePlaceId: 'ChIJfzmzvp0cwUcRBipa_YZeJ8Y',
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
  'Click & Collect',
  'Gratis parking',
  'Fietsenstalling',
  'Zondagopening',
];

// Bron: companyweb.be/nl/0648700465 (geraadpleegd 2026-09-13).
export const COMPANY = {
  legalName: 'BV Company',
  kboNumber: 'BE 0648.700.465',
  // Maatschappelijke zetel (statutair adres) — kan afwijken van het winkeladres.
  registeredOffice: 'Sint-Barbarastraat(H.) 43, 3870 Heers',
  // Nog geen apart contactadres ontvangen; vul aan zodra beschikbaar. Tot dan verwijst
  // het privacybeleid enkel naar het telefoonnummer van de winkel voor privacyvragen.
  privacyEmail: null as string | null,
};

export const AGENCY = {
  name: 'Coop Consult',
  url: 'https://coopconsult.be',
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
  folderEmbed: 'https://view.publitas.com/delhaize-belgium-nl',
  magazine: 'https://www.delhaize.be/nl/magazine',
  appStore: 'https://apps.apple.com/us/app/my-delhaize/id1463175036',
  playStore: 'https://play.google.com/store/apps/details?id=be.delhaize.my',
  officialStorePage: 'https://stores.delhaize.be/nl/delhaize-heers',
  // destination_place_id koppelt de route ondubbelzinnig aan deze winkel i.p.v. aan een tekst-match.
  route: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Nieuwe Steenweg 42, 3870 Heers')}&destination_place_id=${STORE.googlePlaceId}`,
  // De gratis kaal-embed ("output=embed" zonder API-key) begrijpt geen "q=place_id:...";
  // dat werkt enkel met de betaalde Maps Embed API. Daarom hier een tekstadres i.p.v. de place ID.
  mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent('Delhaize Heers, Nieuwe Steenweg 42, 3870 Heers')}&output=embed`,
  // Canonieke Google Maps-kaartlink voor structured data (JSON-LD "hasMap").
  hasMap: `https://www.google.com/maps/place/?q=place_id:${STORE.googlePlaceId}`,
  facebook: 'https://www.facebook.com/ADDelhaizeHeers/',
  instagram: 'https://www.instagram.com/addelhaizeheers/',
  googleBusiness: 'https://share.google/SnI6y0iiRUPBldAxk',
};

// --- Tijdelijke promoties -------------------------------------------------
// Acties die de winkel zelf aankondigt (bron: Facebook-pagina AD Delhaize Heers).
// Onderhoud: pas PROMO_VALID_UNTIL aan bij een nieuwe actieperiode en vervang de
// items. Zet PROMOS op een lege lijst zodra er niets loopt; de sectie, de
// menulink en de structured data verdwijnen dan vanzelf.
export type Promo = {
  id: string;
  // Het voordeel zoals het op de affiche staat, bv. '1+1' of '2+3'.
  deal: string;
  title: string;
  subtitle: string;
  detail: string;
  // Bestandsnaam binnen src/assets/images/promos/, Promos.astro optimaliseert hem.
  image: string;
  alt: string;
};

// Laatste dag dat de acties gelden (YYYY-MM-DD), of null als de einddatum niet
// bekend is. Bij een datum verbergt de sectie zichzelf automatisch na die dag.
// Deze reeks loopt per week, dus de zondag voor de nieuwe actieweek.
export const PROMO_VALID_UNTIL: string | null = '2026-09-27';

export const PROMOS: Promo[] = [
  {
    id: 'dreft-coral',
    deal: '1+1 & 1+2',
    title: 'Dreft en Coral wasmiddel',
    subtitle: 'Voordelig huishouden',
    detail:
      'Dreft The Ultimate Care (Original en Morning Freshness, 32 wasbeurten) aan 1+1. Coral Optimal White, Black Velvet en Optimal Color (26 wasbeurten) aan 1+2.',
    image: 'dreft-coral-wasmiddel.jpg',
    alt: 'Promotie-affiche met flessen Dreft aan 1+1 en flessen Coral aan 1+2',
  },
  {
    id: 'sun',
    deal: '1+1',
    title: 'Sun vaatwastabletten',
    subtitle: 'Combineer en profiteer',
    detail:
      'Sun Ultra Power en Ultra Power Plus vaatwascapsules in verpakkingen van 18 of 38 stuks. De formaten en varianten mag je vrij combineren.',
    image: 'sun-vaatwastabletten.jpg',
    alt: 'Promotie-affiche met zakken Sun vaatwastabletten van 18 en 38 capsules aan 1+1',
  },
  {
    id: 'bref',
    deal: '2+3',
    title: 'Bref WC Power Activ',
    subtitle: 'Voor een frisse toiletpot',
    detail:
      'Bref WC Power Activ toiletblokken, los en in duo pack, in de geuren Pin, Lavendel, Ocean en Munt-Eucalyptus.',
    image: 'bref-wc-power-activ.jpg',
    alt: 'Promotie-affiche met Bref WC Power Activ toiletblokken in vier geuren aan 2+3',
  },
];

// Build-time check: loopt er op dit moment een actie? Gebruikt de Brusselse datum,
// want de site wordt vanuit een server in een andere tijdzone gebouwd.
export function promosActive(): boolean {
  if (PROMOS.length === 0) return false;
  if (!PROMO_VALID_UNTIL) return true;
  const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Brussels' });
  return PROMO_VALID_UNTIL >= today;
}
