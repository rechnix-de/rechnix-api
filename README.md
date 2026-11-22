# Rechnix API – XRechnung, ZUGFeRD & Peppol e-invoice API

Create, validate and convert EU e-invoices with one HTTP call.
Validation uses the **complete official rule sets**: CEN EN 16931 1.3.16, KoSIT XRechnung 3.0.2 and Peppol BIS 3.0.21 – the same rules as the KoSIT validator.
Invoices are processed in memory and never stored.

- **Docs:** https://rechnix-api.mbanzagroup.workers.dev/ (English) · [/de/](https://rechnix-api.mbanzagroup.workers.dev/de/) (Deutsch) · [/fr/](https://rechnix-api.mbanzagroup.workers.dev/fr/) (Français)
- **OpenAPI 3:** [`openapi.json`](openapi.json)
- **Postman:** import [`rechnix-api.postman_collection.json`](rechnix-api.postman_collection.json)
- **No-code web app:** https://rechnix.pages.dev

## Endpoints

| Method | Path | What it does |
| --- | --- | --- |
| POST | `/v1/invoices?format=` | JSON → XRechnung (CII/UBL), ZUGFeRD / Factur-X PDF, Peppol BIS UBL |
| POST | `/v1/validate?profile=` | Validate XML or ZUGFeRD PDF (`xrechnung`, `en16931`, `peppol`), messages in en/de/fr |
| POST | `/v1/convert?to=` | Convert between CII, UBL, ZUGFeRD PDF and JSON |
| GET | `/v1/iban/{iban}` | IBAN check (format, checksum, bank) |
| GET | `/v1/vat/{vat_id}` | EU VAT ID check (offline + VIES) |
| POST | `/v1/vat/batch` | Up to 100 VAT IDs at once |
| GET | `/v1/usage` | Calls used and left |

## Quick start

Try it with the public demo key `demo` (30 calls/day per IP), then get a free key (100 calls/month) on the docs page.

```bash
curl -X POST "https://rechnix-api.mbanzagroup.workers.dev/v1/invoices?format=xrechnung-cii" \
  -H "X-API-Key: demo" -H "Content-Type: application/json" \
  --data @examples/invoice.json -o invoice.xml

curl -X POST "https://rechnix-api.mbanzagroup.workers.dev/v1/validate?profile=xrechnung&lang=de" \
  -H "X-API-Key: demo" -H "Content-Type: application/xml" --data-binary @invoice.xml
```

More examples: [Python](examples/python.py) · [Node.js](examples/node.mjs) · [PHP](examples/php.php) · [C#](examples/csharp.cs)

## Plans

| Plan | Price | Calls / month |
| --- | --- | --- |
| Free | 0 € | 100 |
| Starter | 19 € / month | 2,000 |
| Pro | 59 € / month | 15,000 |
| Business | 199 € / month | 100,000 |

## Why Rechnix

- Germany: e-invoicing mandatory for issuers above €800k turnover from 1 Jan 2027, for all businesses from 1 Jan 2028.
- Belgium: B2B Peppol e-invoicing mandatory since 1 Jan 2026. France: SMEs from Sept 2027.
- One API for XRechnung, ZUGFeRD/Factur-X and Peppol, with error messages your users understand (German, French, English).

---

### Deutsch (kurz)

REST-API für E-Rechnungen: XRechnung und ZUGFeRD aus JSON erzeugen, mit den offiziellen KoSIT-Regeln prüfen, zwischen CII und UBL konvertieren, IBAN und USt-IdNr. prüfen. 100 Aufrufe/Monat kostenlos. Doku: https://rechnix-api.mbanzagroup.workers.dev/de/

### Français (court)

API REST pour la facture électronique : créer des Factur-X / ZUGFeRD et Peppol BIS depuis du JSON, valider avec les règles officielles EN 16931, convertir CII ↔ UBL, vérifier IBAN et TVA intracommunautaire. 100 appels/mois gratuits. Doc : https://rechnix-api.mbanzagroup.workers.dev/fr/

License of the examples in this repository: MIT. © Mbanza Group
