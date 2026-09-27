# Dough Lab — Authentic Sourdough Pizza & Café

Pure HTML / CSS / JS. No build step. Deploys as a static site on Vercel.

## Edit content
- Business placeholders: `js/data.js` → `SITE_CONFIG` (address, city, phone, email, Instagram, WhatsApp, hours, Maps + order URLs).
- Menu + prices: `js/data.js` → `MENU_DATA`. Prices are transcribed verbatim from the physical boards.

## Run locally
Open `index.html`, or: `npx serve .`

## Deploy (Vercel)
Import the GitHub repo in Vercel → Framework: Other → no build command → deploy.

## Security
Never commit tokens. Use `gh auth login` / Vercel GitHub integration.
