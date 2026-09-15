# Delhaize Heers — website (delhaizeheers.be)

Statische website voor Delhaize Heers, gebouwd met [Astro](https://astro.build) + Tailwind CSS.
Bedoeld om te draaien op het domein **www.delhaizeheers.be**, gehost op **Netlify**.
Website door Coop Consult.

## Structuur

```
src/
├── consts.ts               # Winkelgegevens, bedrijfsgegevens, hosting-info, links (pas hier aan)
├── layouts/Layout.astro    # <head>, SEO-tags, JSON-LD (GroceryStore schema)
├── components/
│   ├── Header.astro         # Logo + navigatie
│   ├── Hero.astro           # "nu open/gesloten"-badge, berekend in de browser
│   ├── Tiles.astro          # Online boodschappen (Collect), Folder, Magazine, App
│   ├── OpeningHours.astro
│   ├── Services.astro
│   ├── Contact.astro        # adres + Google Maps (pas na klik geladen, zie privacy)
│   └── Footer.astro
└── pages/
    ├── index.astro
    └── privacybeleid.astro
public/
├── images/delhaize-lion-logo.png   # officieel Delhaize-beeldmerk (persmateriaal Delhaize)
├── robots.txt
└── favicon.svg
netlify.toml                 # build-config voor Netlify
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
- Canonical URL, Open Graph- en Twitter-tags (met het officiële Delhaize-beeldmerk als afbeelding)
- JSON-LD gestructureerde data (`GroceryStore`) met NAW-gegevens en openingsuren
- `robots.txt` + automatisch gegenereerde `sitemap-index.xml` (via `@astrojs/sitemap`)
- Semantische HTML (één `<h1>`, `<address>`, `<nav>`), volledig statisch en dus zeer snel
- Mobielvriendelijk (belangrijk: klanten scannen de QR-code op de winkel meestal met hun telefoon)

## Privacy

- [`privacybeleid.astro`](src/pages/privacybeleid.astro) legt uit welke (minimale) gegevens verwerkt worden, dat Netlify als hostingpartner optreedt, en wat de rechten van bezoekers zijn.
- De site plaatst zelf geen cookies en heeft geen analytics. De Google Maps-kaart in de contactsectie wordt pas geladen nadat de bezoeker er zelf op klikt, zodat er geen Google-cookies gezet worden zonder interactie.
- Bedrijfsgegevens (BV Company, ondernemingsnummer BE 0648.700.465, maatschappelijke zetel Sint-Barbarastraat(H.) 43) staan ingevuld in [`src/consts.ts`](src/consts.ts) (`COMPANY`-object), bron: companyweb.be. Nog **geen apart contact-e-mailadres** ontvangen — zolang dat leeg is (`privacyEmail: null`), verwijst het privacybeleid enkel naar het telefoonnummer. Vul het aan zodra je een adres wil gebruiken.

## Deployen op Netlify

1. Maak een nieuwe site op [app.netlify.com](https://app.netlify.com) en koppel deze Git-repository.
2. Build-instellingen (staan ook al in `netlify.toml`): build command `npm run build`, publish directory `dist`.
3. Voeg het domein toe onder **Domain settings → Add a domain** → `www.delhaizeheers.be` (en `delhaizeheers.be` als alias).
4. Zet bij de domeinregistrar van delhaizeheers.be een **CNAME** voor `www` naar het Netlify-subdomein dat je krijgt (bv. `jouwsite.netlify.app`), of gebruik Netlify DNS als je de volledige DNS wil laten beheren. Netlify toont de exacte instructie zodra je het domein toevoegt.
5. Netlify voorziet automatisch een gratis HTTPS-certificaat (Let's Encrypt) zodra de DNS correct wijst.
6. De redirect van het kale domein `delhaizeheers.be` naar `www.delhaizeheers.be` staat al vast in `netlify.toml` (301), zodat zoekmachines geen duplicate content zien op beide varianten.

## Logo & foto's

- Het beeldmerk (de rode leeuw) in de header/footer/social-preview is het officiële Delhaize-logo, gedownload van Delhaize's eigen perspagina (press.delhaize.be). Voor een sluitende merkgoedkeuring raad ik aan dit te laten bevestigen via je Delhaize-franchisecontact of het officiële partnerportaal — zij hebben doorgaans een volledige merkkit (exacte kleuren, logo-varianten, huisstijlregels) specifiek voor winkeluitbaters.
- De foto's in de "Snel geregeld"-kaartjes (`public/images/tiles/`) zijn **geen** foto's van jullie eigen winkel — dat had ik niet mogen overnemen van bv. Google Street View, Facebook of reviewsites, want die zijn auteursrechtelijk beschermd door anderen. Het zijn rechtenvrije stockfoto's (Unsplash- en Pexels-licentie, vrij voor commercieel gebruik, geen naamsvermelding vereist) die de sfeer van het designvoorbeeld benaderen. Stuur me gerust eigen foto's van de winkel (buitenkant, interieur, team, een volle boodschappenmand) door, dan vervang ik de stockfoto's daarmee — dat komt sowieso persoonlijker over.
- De App Store- en Google Play-badges bij de "Delhaize app"-tegel zijn de officiële downloadbadges (gedownload van delhaize.be, die op zijn beurt de standaard Apple/Google-badges gebruikt).

## Nog te doen vóór livegang

1. **Eigen foto's aanleveren** (optioneel, maar aanbevolen) — zie hierboven onder "Logo & foto's".
2. **Gegevens controleren** — adres, telefoonnummer en openingsuren in `src/consts.ts` komen van de officiële Delhaize-winkelpagina (stores.delhaize.be/nl/delhaize-heers, geraadpleegd 13/09/2026). Controleer of dit nog klopt.
3. **Contact-e-mailadres** (optioneel) — voor privacyvragen, in `COMPANY.privacyEmail` in `src/consts.ts`.
4. **Analytics** (optioneel) — er is bewust geen tracking toegevoegd; als je bezoekersstatistieken wil, kan een privacyvriendelijke tool zoals Plausible of Fathom toegevoegd worden (en moet het privacybeleid daarop aangepast worden).
