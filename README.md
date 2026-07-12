# Armadi Gonta · Personal Website

Public portfolio of **Armadi Gonta**, a Senior iOS Engineer based in Jakarta, Indonesia, with 7+ years building secure, high-scale mobile products across digital banking, fintech, insurance, telco, and travel.

**Live site:** https://arigonta.github.io/personal-website/

## Highlights

- **Wondr by BNI** · Greenfield digital banking, from proof-of-concept to the current App Store release
- **Livin' by Mandiri** · Mobile banking at scale, releases R3–R7
- **MyTelkomsel** · React Native refactor to the first fully native iOS release (v5.0)
- **SingHealth EMOS v4** · Enterprise healthcare iPadOS app, delivered end to end

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js (static export) |
| Styling | Single hand-written CSS file, Tailwind base |
| Fonts | Geist and Geist Mono |
| Hosting | GitHub Pages via GitHub Actions |
| SEO | JSON-LD Person schema, Open Graph, sitemap, robots.txt |

## Project structure

```
app/page.tsx        page content and project data
app/globals.css     all primary styling and responsive behavior
app/layout.tsx      metadata, JSON-LD, analytics
public/logos/       official product logos
public/…            resume PDF, OG image, sitemap, robots
```

## Development

Requires Node.js 22.

```bash
npm install
PATH=/opt/homebrew/opt/node@22/bin:$PATH npm run build:github   # static export to out/
```

Every push to `main` deploys automatically through `.github/workflows/deploy-pages.yml`.

## Contact

- Email: arigonta@gmail.com
- LinkedIn: https://linkedin.com/in/arigonta
- GitHub: https://github.com/arigonta
