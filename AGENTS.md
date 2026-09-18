# AGENTS.md

## Project purpose

This repository contains Armadi Gonta's public personal portfolio. The primary audience is recruiters, engineering managers, and technology leaders evaluating Armadi for Senior iOS Engineer roles.

Keep the portfolio confident, precise, concise, and evidence-based. Do not invent metrics, responsibilities, technologies, dates, or product claims that are not documented here or in the resume.

## Personal positioning

- Name: Armadi Gonta
- Primary title: Senior iOS Engineer
- Location: Jakarta, Indonesia
- Experience: 7+ years
- Email: arigonta@gmail.com
- WhatsApp: +62 815 1082 2471. Always link as `https://wa.me/6281510822471` (international format, no leading zero, no plus sign). The shared `whatsappLink` constant in `app/page.tsx` carries a URL-encoded prefilled message; reuse it instead of hardcoding new WhatsApp URLs.
- LinkedIn: https://linkedin.com/in/arigonta
- GitHub: https://github.com/arigonta
- Public site: https://arigonta.github.io/personal-website/

Do not use "iOS Lead" or "Mobile Architect" as Armadi's primary headline unless Armadi explicitly asks to restore those titles. Leadership, architecture, and delivery ownership may still be described as capabilities or contributions.

## Canonical project facts

Use these facts as the source of truth. Preserve the distinctions between joining an established product and building one from scratch.

### Wondr by BNI

- Project period: June 2023 to present.
- Role: Senior iOS Engineer; core development team.
- Armadi helped build the iOS application from scratch.
- His involvement spans the initial proof-of-concept, architecture, app security, CI/CD, feature delivery, release readiness, production launch, production support, and continued development through the version currently available on the App Store.
- Do not describe this as joining midway through development.
- Prefer wording such as: "from inception to the current App Store release."

### Livin' by Mandiri

- Project period: September 2022 to June 2023.
- Role: Senior iOS Engineer working on an established product.
- Armadi joined during the middle of development and contributed specifically across releases R3 through R7.
- Contributions include feature development, stability improvements, analytics integration, iOS compatibility, and banking security requirements.
- Do not imply that Armadi created Livin' from scratch.

### MyTelkomsel

- Project period: April 2019 to October 2019.
- Role: iOS Engineer on the native refactor initiative.
- Armadi joined during development for the refactor from React Native to the first native iOS release, version 5.0.
- Contributions include native implementation, feature delivery, platform performance, and maintainability.
- Do not imply that Armadi owned MyTelkomsel from its original inception.

### SingHealth EMOS v4

- Project period: November 2024 to present.
- Product name: SingHealth EMOS v4. Do not call it SingHealth PBT.
- Role: Sole iPadOS Engineer; end-to-end delivery.
- Armadi independently built the iPad application.
- Contributions include iPadOS architecture, implementation, integration, quality, and release readiness for enterprise healthcare workflows.
- Prefer "iPadOS" over "iPad iOS" in polished copy.

### Pegipegi

- Project period: November 2019 to April 2020.
- Role: iOS Engineer on an established consumer travel booking app.
- Armadi joined mid-development and contributed across iOS versions 2.9 through 3.4.
- Contributions include feature delivery and maintenance inside the existing codebase.
- Do not imply that Armadi built Pegipegi from scratch or owned the product.
- Pegipegi ceased operations and the iOS app is no longer listed on the App Store. Do not link to a store page. Its card is labeled "Archived".

### Allianz Inspire

- Project period: June 2020 to August 2022, during the Allianz Indonesia tenure.
- Product: Inspire, the Allianz Indonesia bancassurance sales application used by bank partner channels.
- Role: iOS Engineer, in-house, contributing through the version 2.4 release cycle.
- Contributions include native feature development and maintenance.
- Internal application with no public App Store listing. Do not fabricate a link; its card is labeled "Internal".
- The card uses the Allianz corporate logo, since Inspire has no public product mark.

### Restaurant POS (unnamed client)

- Project period: September 2026 to present. Active development, not released.
- Role: sole iPadOS Engineer, end-to-end delivery, in progress.
- Product: a point of sale iPad application for a restaurant client.
- The client is deliberately unnamed and the card carries no client logo. Armadi chose to anonymize it because the app is unreleased and the engagement is active. Do not add the client name, the client logo, a location, or a store link unless Armadi explicitly says the client has approved being named.
- Do not invent technical details for this card. Only architecture, implementation, and release readiness ownership are documented.
- Badge: "In development". This is the only card that is not a shipped product, so it is excluded from the "Products shipped" hero metric.
- Because it has no logo, its `logo` is `null` and its `mark` is `markGlyph`, which renders an inline abstract tablet illustration instead of an `<img>`. Reuse this pattern for any future anonymized or logo-less project rather than drawing a stand-in brand mark.
- No experience timeline row is added for this engagement, the same way SingHealth EMOS v4 is not attributed to a company row.

## Public App Store links

Verified via the iTunes Search API. Use these exact URLs when linking project cards.

- Wondr by BNI: https://apps.apple.com/id/app/wondr-by-bni/id6499518320
- Livin' by Mandiri: https://apps.apple.com/id/app/livin-by-mandiri/id1555414743
- MyTelkomsel: https://apps.apple.com/id/app/mytelkomsel/id651412430
- SingHealth EMOS v4 is an internal enterprise app with no public App Store listing. Do not fabricate a link; its card is labeled "Enterprise".
- Pegipegi, Allianz Inspire, and the Restaurant POS project have no public listing either. Do not fabricate links for them.

## Other resume facts

- Current: PT Bank Negara Indonesia (BNI), Senior iOS Engineer / Sub Lead, New Maverick Digital Delivery, September 2024 to present. The internal job grade is "Manager, iOS Dev"; publish the Senior / Sub Lead framing instead.
- Accenture: Business & Integration Arch Specialist / Senior iOS Developer, September 2022 to August 2024. Do not publish "iOS Team Lead" as the public role line.
- Allianz Indonesia: iOS Engineer - Assistant Manager, June 2020 to August 2022.
- Earlier experience includes Pegipegi (Nov 2019 to Apr 2020), PHINCON, and PT Krakatau Information Technology. MyTelkomsel (Apr 2019 to Oct 2019) preceded the Pegipegi tenure.
- Timeline note: Livin' by Mandiri (Sep 2022 – Jun 2023) and the Wondr by BNI proof-of-concept onward (from Jun 2023) were delivered during the Accenture tenure; Wondr development continues under the BNI role (Sep 2024 – present).
- The employer for SingHealth EMOS v4 is not documented. Do not attribute it to any company row in the experience timeline.
- Core technologies include Swift, UIKit, SwiftUI, Combine, Objective-C, MVVM, MVP, VIPER, REST APIs, XCTest, XCUITest, Fastlane, Jenkins, GitHub Actions, CocoaPods, Swift Package Manager, and Firebase.

## Experience section copy

Each timeline role shows a one-line title, a short factual summary, and product chips linking the role to Selected Work. Canonical summaries (keep aligned with the facts above; do not add impact numbers):

- BNI: "Leading iOS delivery inside New Maverick Digital Delivery and continuing Wondr by BNI through the version on the App Store today, covering architecture, app security, CI/CD, release readiness, and production support." Chips: Wondr by BNI. This row is highlighted as the current role with a "Now" badge.
- Accenture: "Senior iOS engineer on banking engagements: Livin' by Mandiri across releases R3–R7, covering feature delivery, stability, analytics, and banking security requirements, then Wondr by BNI from its initial proof-of-concept into architecture, app security, and CI/CD foundations." Chips: Livin' by Mandiri, Wondr by BNI.
- Allianz Indonesia: "In-house iOS engineering for Allianz insurance products, including Inspire, the bancassurance sales application for bank partner channels, building and maintaining native features across the full development and release cycle." Chips: Allianz Inspire.
- Pegipegi · PHINCON · Krakatau IT: "Early career across travel, telco, and IT services: contributing to the MyTelkomsel refactor from React Native to its first fully native iOS release, then to the Pegipegi travel app across versions 2.9 through 3.4, with a focus on native implementation, platform performance, and maintainability." Chips: MyTelkomsel, Pegipegi.

Timeline rows are not links; do not add decorative arrows that imply clickability.

## Selected work section copy

- Heading: "Built from scratch, or joined mid-flight." The section deliberately distinguishes products Armadi helped build from the ground up from established apps he joined and contributed to. Do not flatten this back into a single "products built" claim.
- Each project carries an explicit `badge` shown in the card header: "App Store ↗" for linked apps, "Enterprise" for SingHealth EMOS v4, "Archived" for Pegipegi, "Internal" for Allianz Inspire, "In development" for the Restaurant POS project. Do not derive the badge from whether a link exists.
- Cards for products joined mid-development state the exact scope in the role line (releases, or version ranges such as "v2.9 – v3.4").

## Services section copy

Section "03 / Services" sits between Core capabilities and the contact footer. It advertises Armadi's freelance and contract availability without displacing the Senior iOS Engineer positioning, so keep it after the work, experience, and capability sections.

- Heading: "Building products for your business."
- Intro note: freelance and contract projects taken on alongside full-time engineering work, delivered with the same architecture, security, and release discipline as the enterprise products.
- Four service cards, defined by the `services` array in `app/page.tsx`:
  1. Mobile · "iOS & Android apps"
  2. Web · "Websites & web apps"
  3. Business systems · "Web ERP & internal tools"
  4. Advisory · "Consulting & support"
- CTA panel headline: "Have something in mind? Let's talk." Engagement chips: Project based, Monthly retainer, Technical consultation.
- CTA buttons: WhatsApp (primary) and an email brief (outline). WhatsApp is presented as the fastest channel.
- Do not publish rates, day rates, or fixed prices unless Armadi supplies them.
- The Android and web/ERP offerings are service commitments Armadi chose to advertise. Do not move them into the resume, experience timeline, or Core capabilities, which stay iOS-focused and evidence-based.

## Footer copy

- Headline: "Let's build your next iOS product."
- Eyebrow: "Let's connect · Open to senior iOS opportunities and freelance projects."
- Primary CTA is the email button (arigonta@gmail.com), followed by outline buttons for WhatsApp, the resume PDF, LinkedIn, and GitHub.
- Facts column: Location "Jakarta, Indonesia · GMT+7"; Currently "Senior iOS Engineer / Sub Lead at PT Bank Negara Indonesia (BNI)"; Open to "Senior iOS engineering roles, freelance product builds, and meaningful conversations".
- Keep the facts column aligned with the resume facts above when roles change.

## Hero metrics

The hero metric strip reads "7+ years delivering mobile products", "5 enterprise product domains", and "6 products shipped · banking · insurance · telco". The "products shipped" count covers released products only, so the in-development Restaurant POS project is excluded. Update the count when a project actually ships.

## Content rules

- Site copy is written in professional English unless Armadi explicitly requests Indonesian.
- Never use em dashes (—) anywhere in site copy, headings, roles, or metadata. Armadi considers them an AI-writing tell. Rewrite with commas, colons, periods, or middle dots (·). Date and release ranges use an en dash (e.g. "Jun 2023 – Present", "R3–R7").
- Use first-person copy only in the hero/introduction. Project cards should use concise factual descriptions.
- Avoid unsupported impact numbers and exaggerated claims.
- Keep company and product capitalization exact: Wondr by BNI, Livin' by Mandiri, MyTelkomsel, and SingHealth EMOS v4.
- Keep the resume download and contact links working.
- Do not add confidential implementation details, internal endpoints, credentials, client data, or unreleased product information.
- Never commit tokens, passwords, private keys, or GitHub credentials. If a credential appears in chat or terminal output, instruct the user to revoke it immediately.
- `app/layout.tsx` embeds JSON-LD Person structured data and a GoatCounter analytics script (site code `arigonta`). Keep both when editing the layout. The Person schema also carries `telephone` and a `makesOffer` list mirroring the four services; keep it in sync with the Services section.

## Visual direction

- Premium dark editorial portfolio.
- Palette: near-black backgrounds, cobalt blue, and electric cyan.
- Typography: Geist for display/body and Geist Mono for technical labels.
- Maintain the current technical mobile-system visual language, generous spacing, restrained motion, and strong readability.
- Project cards use official product logos stored in `public/logos/`. Each entry in the `projects` array carries a `mark` class (`markDefault`, `markPill`, `markIcon`, `markTall`, `markWide`, `markBlock`) that controls logo sizing and background in `app/globals.css`. Do not reintroduce positional `:nth-child` logo rules, which break whenever a project is added or reordered.
- Logos that are dark on transparent (Livin', Pegipegi) sit on a white pill so they stay legible on the dark card. The Allianz mark ships with its own blue block and needs no pill.
- `pegipegi.png` and `allianz.svg` were sourced from Wikimedia Commons, because neither app has a live App Store listing to pull artwork from.
- Preserve responsive behavior and `prefers-reduced-motion` support.
- Do not replace official logos with generated approximations.

## Important files

- `app/page.tsx`: page content and project data.
- `app/globals.css`: all primary styling and responsive behavior.
- `app/layout.tsx`: metadata, icons, and social preview configuration.
- `public/logos/`: project logo assets.
- `public/og.jpg`: social preview image (1200x630, keep under ~300 KB so WhatsApp renders the preview).
- `public/favicon.svg`: "AG." monogram in the site palette.
- `app/not-found.tsx`: branded 404 page.
- `public/robots.txt` and `public/sitemap.xml`: SEO files pointing at the GitHub Pages URL.
- `public/Armadi_Gonta_Resume.pdf`: downloadable resume.
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow.
- `next.config.ts`: static export and GitHub Pages base path.

## Build and validation

The machine requires Node.js 22. When Homebrew Node 20 is the default, run commands with:

```bash
PATH=/opt/homebrew/opt/node@22/bin:$PATH npm run build:github
```

The GitHub Pages build must produce the static `out/` directory successfully before changes are pushed.

For the original Sites/Cloudflare-compatible build, use:

```bash
PATH=/opt/homebrew/opt/node@22/bin:$PATH npm run build
```

Do not treat the existing Cloudflare worker-only types as part of the GitHub Pages static application.

## Git and deployment

- Repository: `git@github.com:arigonta/personal-website.git`
- Default branch: `main`
- GitHub Pages URL: https://arigonta.github.io/personal-website/
- Every push to `main` triggers `.github/workflows/deploy-pages.yml`.
- Confirm the GitHub Actions workflow succeeds after pushing deployment-related changes.
- Use normal, descriptive commit messages. Do not add AI attribution, GPT/Codex co-author lines, or generated-by badges unless Armadi explicitly requests them.
- Preserve user changes and do not rewrite published history.

## Definition of done

A portfolio change is complete only when:

1. The requested content is factually aligned with this file.
2. The static GitHub Pages build succeeds.
3. Changes are committed and pushed to `main` when deployment was requested.
4. The GitHub Pages workflow succeeds.
5. The public URL is reported to Armadi.
