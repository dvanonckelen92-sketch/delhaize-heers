import type { APIRoute } from 'astro';
import { SITE, STORE, OPENING_HOURS, SERVICES, LINKS } from '../consts';

export const GET: APIRoute = () => {
  const hours = OPENING_HOURS.map(
    (d) => `- ${d.day}: ${d.opens && d.closes ? `${d.opens}–${d.closes}` : 'Gesloten'}`,
  ).join('\n');
  const services = SERVICES.map((s) => `- ${s}`).join('\n');

  const body = `# ${SITE.name}

> ${SITE.tagline}. ${SITE.name} (${SITE.legalFormat}) is een buurtsupermarkt op ${STORE.streetAddress}, ${STORE.postalCode} ${STORE.addressLocality}, België.

## Winkelgegevens
- Naam: ${SITE.name} (${SITE.legalFormat})
- Adres: ${STORE.streetAddress}, ${STORE.postalCode} ${STORE.addressLocality}, België
- Telefoon: ${STORE.phone}
- Website: ${SITE.url}

## Openingsuren
${hours}

## Diensten in de winkel
${services}

## Links
- [Website](${SITE.url}): Openingsuren, weekfolder, contactgegevens en online boodschappen doen.
- [Officiële Delhaize-winkelpagina](${LINKS.officialStorePage})
- [Click & Collect](${LINKS.collect}): Online bestellen en gratis afhalen in de winkel.
- [Weekfolder](${LINKS.folder})
- [Privacybeleid](${SITE.url}/privacybeleid)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
