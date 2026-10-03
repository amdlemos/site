# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node.js >= 22.12. No test suite or linter; validation is type-check plus build.

- `npm run dev` — Astro dev server
- `npm run check` — `astro check` (TypeScript/Astro diagnostics)
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built output

Always commit `package-lock.json` alongside sources; never fabricate a lockfile offline.

## Architecture

Static Astro site (`output: 'static'`, `trailingSlash: 'always'`), a single institutional home for AMDLEMOS (web sites for small businesses in Maringá, PR). No client framework, hydration, backend, CMS, analytics or forms; there must be no executable JavaScript. All assets and the font (Instrument Sans WOFF2) are local.

- `src/pages/index.astro` composes the home from section components in `src/components/`. Order: header, Hero, ServiceOverview, Services, Benefits, CymhCase, Process, About, Faq, Contact, footer. Each component is a full section.
- `src/layouts/BaseLayout.astro` owns language, meta/SEO and Organization JSON-LD.
- `src/config/site.ts` is the single source of confirmed business data (origin, WhatsApp, phone, email, address, CNPJ, CYMH URL, social image). It validates values at build time (throws on non-HTTPS or malformed input). `astro.config.ts` reads `origin` from it.
- `src/pages/robots.txt.ts` and `sitemap.xml.ts` are generated from `site.ts`.
- `Brand.astro` is the wordmark (lowercase `amdlemos`, square green dot).
- Styling is plain CSS in `src/styles/global.css` (design tokens + section rules).

### Review-mode defaults (important)

While `site.ts` fields are empty, the site is intentionally `noindex`, robots block indexing, the sitemap has no URL and the final CTA is disabled with a notice. Fill fields only with confirmed real data; never invent domain, contact, prices, testimonials, metrics or proofs. Setting `origin` activates canonical, OG/Twitter, sitemap and permissive robots — do that only with real content and visual review. `socialImage` must point to an existing raster file in `public/images`.

### Design constraints

`DESIGN.md` is the decision record; read it before visual changes. Key points:
- The original artifact `AMDLEMOS — identidade e home.html` must stay untouched (SHA-256 `eab3f75a010d2a24a595be3d7f4aee128aa624afd5ab3817745d78e4e089ec43`); it is reference only.
- Palette tokens and the font file/CSS range are fixed by the identity (Verde Maringá `#0A6B4B`, grafite `#141618`, paper `#FAFAF8`, light green `#3FB58A` only on dark). Composition is Filament-inspired, but copy no Filament assets, text or stats.
- Copy must not promise search ranking or results; other products are "planned", not available.
- Future pages (`sites-institucionais-maringa`, `seo-local-maringa`, `projetos/cymh`, `produtos/[produto]`) are created only when approved content exists; reuse `BaseLayout`, `Brand` and tokens.

Acceptance: check at 390, 768, 1024, 1440, 1920 px; keyboard nav, skip link, focus, FAQ; one H1; local resources only.

The project language is Portuguese (pt-BR) for copy, docs and commit messages (Conventional style, e.g. `style: ...`).

## Working style

Keep the workflow lightweight and direct.

- Do not use `/plan-review`, `/review`, review agents, or similar review workflows unless explicitly requested.
- Do not ask another agent/model to validate plans or implementations by default.
- For normal tasks, inspect the relevant files, make the change, run the appropriate validation (`npm run check` and/or `npm run build`), and report the result.
- Do not create elaborate implementation plans for small or straightforward changes.
- Do not stop for approval between routine implementation steps unless a decision genuinely requires user input.
- Visual review means checking the resulting page against the project's design constraints and requested viewport sizes; it does not imply invoking a separate review workflow.
