# Delhaize Heers — website (primi.be)

Statische website voor Delhaize Heers, gebouwd met [Astro](https://astro.build) + Tailwind CSS.
Bedoeld om te draaien op het bestaande domein **www.primi.be**.

## Structuur

```
src/
├── consts.ts              # Winkelgegevens: adres, telefoon, openingsuren, links (pas hier aan)
├── layouts/Layout.astro   # <head>, SEO-tags, JSON-LD (GroceryStore schema)
├── components/
│   ├── Header.astro
│   ├── Hero.astro         # "nu open/gesloten"-badge, berekend in de browser
│   ├── Tiles.astro        # Online boodschappen (Collect), Folder, Magazine, App
│   ├── OpeningHours.astro
│   ├── Services.astro
│   ├── Contact.astro      # adres + Google Maps-embed
│   └── Footer.astro
└── pages/index.astro
public/
├── robots.txt
└── favicon.svg
```

## Commando's

| Commando          | Actie                                      |
| ----------------- | ------------------------------------------- |
| `npm install`      | Installeer dependencies                     |
| `npm run dev`      | Lokale dev-server op `localhost:4321`       |
| `npm run build`    | Bouw de statische site naar `./dist/`       |
| `npm run preview`  | Bekijk de build lokaal vóór het publiceren  |

## SEO — wat er al is ingebouwd

- Unieke `<title>` en meta description met adres en plaatsnaam ("Heers")
- Canonical URL, Open Graph- en Twitter-tags
- JSON-LD gestructureerde data (`GroceryStore`) met NAW-gegevens en openingsuren
- `robots.txt` + automatisch gegenereerde `sitemap-index.xml` (via `@astrojs/sitemap`)
- Semantische HTML (één `<h1>`, `<address>`, `<nav>`), volledig statisch en dus zeer snel
- Mobielvriendelijk (belangrijk: klanten scannen de QR-code op de winkel meestal met hun telefoon)

## Nog te doen vóór livegang

1. **Hosting & domein** — `www.primi.be` moet naar de host van deze site wijzen (DNS A/CNAME-record). Zodra je weet welke hosting-provider je gebruikt (bv. Netlify, Vercel, Cloudflare Pages), zeg het en dan zet ik de deploy-configuratie klaar.
2. **Foto's** — er zijn nog geen echte foto's van de winkel. Voeg een `og-image` (1200×630) en eventueel een winkelfoto toe voor een mooiere weergave bij het delen op sociale media (zie `TODO` in `src/layouts/Layout.astro`).
3. **Gegevens controleren** — adres, telefoonnummer en openingsuren in `src/consts.ts` komen van de officiële Delhaize-winkelpagina (stores.delhaize.be/nl/delhaize-heers, geraadpleegd 13/09/2026). Controleer of dit nog klopt.
4. **Analytics** (optioneel) — er is bewust geen tracking toegevoegd; als je bezoekersstatistieken wil, kan een privacyvriendelijke tool zoals Plausible of Fathom toegevoegd worden.
