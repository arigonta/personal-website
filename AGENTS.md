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

- Project period: April 2019 to November 2019.
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

## Other resume facts

- Current: PT Bank Negara Indonesia (BNI), Manager - iOS Dev, New Maverick Digital Delivery, September 2024 to present.
- Accenture: Business & Integration Arch Specialist / iOS Team Lead, September 2022 to August 2024.
- Allianz Indonesia: iOS Engineer - Assistant Manager, June 2020 to August 2022.
- Earlier experience includes Pegipegi, PHINCON, and PT Krakatau Information Technology.
- Core technologies include Swift, UIKit, SwiftUI, Combine, Objective-C, MVVM, MVP, VIPER, REST APIs, XCTest, XCUITest, Fastlane, Jenkins, GitHub Actions, CocoaPods, Swift Package Manager, and Firebase.

## Content rules

- Site copy is written in professional English unless Armadi explicitly requests Indonesian.
- Use first-person copy only in the hero/introduction. Project cards should use concise factual descriptions.
- Avoid unsupported impact numbers and exaggerated claims.
- Keep company and product capitalization exact: Wondr by BNI, Livin' by Mandiri, MyTelkomsel, and SingHealth EMOS v4.
- Keep the resume download and contact links working.
- Do not add confidential implementation details, internal endpoints, credentials, client data, or unreleased product information.
- Never commit tokens, passwords, private keys, or GitHub credentials. If a credential appears in chat or terminal output, instruct the user to revoke it immediately.

## Visual direction

- Premium dark editorial portfolio.
- Palette: near-black backgrounds, cobalt blue, and electric cyan.
- Typography: Geist for display/body and Geist Mono for technical labels.
- Maintain the current technical mobile-system visual language, generous spacing, restrained motion, and strong readability.
- Project cards use official product logos stored in `public/logos/`.
- Preserve responsive behavior and `prefers-reduced-motion` support.
- Do not replace official logos with generated approximations.

## Important files

- `app/page.tsx`: page content and project data.
- `app/globals.css`: all primary styling and responsive behavior.
- `app/layout.tsx`: metadata, icons, and social preview configuration.
- `public/logos/`: project logo assets.
- `public/og.png`: social preview image.
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
