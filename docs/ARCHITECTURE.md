# Website architecture

The website uses Next.js App Router, React, TypeScript, and Tailwind. It is built as static HTML for GitHub Pages. There is no Next.js process running in production.

## Responsibilities

| Location | Responsibility |
| --- | --- |
| `src/app/` | Explicit routes, root layout, page metadata, and exported 404. Route modules are Server Components. |
| `src/views/` | Page content. Translated and interactive views are Client Components. Terms retains its existing English contract as a Server Component. |
| `src/sections/` | Restored home carousel and product cards. Home also renders its original values and contact sections. Other legacy sections are not mounted. |
| `src/components/` | Shared UI, navigation, language provider, product gallery, and build-time structured data. |
| `src/data/` | Product information, typed route metadata, canonical aliases, JSON-LD, and validated public release data. |
| `src/i18n/locales/` | Indonesian and English content. |
| `src/styles/` | Shared styles and Tailwind entry point. |
| `public/` | Product screenshots, videos, download binaries, CNAME, sitemap, and other static assets. |
| `scripts/` | Static-output verification and a local HTTP preview. |

Keep route modules small. Shared metadata and JSON-LD belong in `src/data/`, rather than client effects. `SiteRoute` derives from the metadata map so misspelled metadata routes fail type checking. `StructuredData` handles JSON serialization in one place and escapes `<` before inserting JSON into HTML.

Use a client boundary for state, effects, browser APIs, translations, or motion. Passing server-rendered content through `LanguageProvider` does not turn it into a Client Component. Privacy views use client boundaries for ID/EN translation; Terms stays on the server/build side. The current translated views use page-sized boundaries; narrow them when a feature benefits from a smaller interactive island. All views still have build-time static HTML.

## Rendering and language

Every route has its own exported HTML and metadata. Indonesian renders during the build and on the client's first render. The provider creates its own i18next instance instead of mutating shared server state. After hydration it reads the saved language and updates the page and `html` language attribute. Storage denial is handled gracefully. Keep browser-dependent values out of the first render to avoid hydration errors.

The existing language switch is a client preference. Exported HTML, canonical URLs, and page metadata remain Indonesian; there are no separate `/en/` pages or `hreflang` alternatives. Localized search-indexable URLs would be a separate routing/content change.

Navigation uses Next.js Link. The compatibility wrapper normalizes internal page links to trailing slashes, matching the exported directory layout, and provides the existing `to` interface. Restored Navbar uses its pathname wrapper to close the mobile menu after navigation. React Router and React Helmet remain removed.

## GitHub Pages

`next.config.ts` sets `output: 'export'` and `trailingSlash: true`. `next build --webpack` creates `out/`. Existing routes and the two canonical aliases remain real HTML pages, including direct deep links. Unknown paths use `404.html`.

The current `public/CNAME` is `ifuix.com`, so the site is served from the domain root and no repository `basePath` is needed. If hosting changes to `username.github.io/repository/`, configure the repository path and audit root-relative asset URLs before deploying. `basePath` alone does not rewrite plain image/video/download strings in page content.

`.nojekyll` preserves `_next` files when static hosting applies Jekyll rules. The existing Actions workflow installs locked dependencies with Node 22, runs lint and type checking, builds, verifies `out/`, and uploads that directory to GitHub Pages. Changes remain local until the owner reviews screenshots and authorizes publication.

Static export supports the current informational pages, galleries, language switch, and public API requests. It does not provide runtime API routes, Server Actions, secrets, database operations, or server-based authentication. Put any future server-required feature behind a separately hosted backend. Never put secret credentials in client code or public environment variables.

`useFuiraReleases` owns the public GitHub request shared by the product and download views, aborts after ten seconds, and cancels on unmount. `parseFuiraReleases` accepts unknown input, normalizes nullable fields, and restricts installer destinations to the existing release repository. Loading, empty, and explicitly labelled recorded-release fallback states are visible. Release-note headings are demoted below the page heading. Kebun Pintar's local APK is copied unchanged and verified by SHA-256.

`Navbar` and `Footer` restore the prior appearance, with Next-compatible links and the smaller PNG logo. Footer and Contact retain LinkedIn. Contact restores the original FormSubmit form plus email/WhatsApp links; website privacy copy discloses that third-party processing. Form delivery is unverified and no submission was made. Privacy views use `PageHeader` styled to match the original page layout. Product cards reuse `ProductCards`. The rejected editorial header/footer/styles were removed; the current owner decision in `DESIGN.md` supersedes that historical design.

## Validation

Run `npm run lint`, `npm run typecheck`, `npm run build`, and `npm run verify:export`. Type checking runs `next typegen` first, so it works on a fresh checkout without an existing build. Generated `next-env.d.ts` and `.next/` files are ignored. The export check verifies all 18 routes, one primary heading/title/description/canonical per route, JSON-LD, visible initial content, internal targets, sitemap count, exported 404, Pages files, and the APK hash. It is a build-artifact check, not a replacement for browser interaction checks.

Use `npm run preview` to serve `out/` locally. This preview intentionally has no SPA fallback and supports video byte ranges. Browser QA must include direct navigation, client navigation, saved language hydration, mobile menu, gallery keyboard behavior, overflow, and console errors. Production Pages deployment and owner visual acceptance require separate verification after publication is authorized.

Webpack is explicit because the native Turbopack PostCSS worker exits before connecting on the current Windows machine, including under normal process permissions. This does not change the exported hosting model. Next.js agent-file generation is disabled so the project's ordinary shared workflow remains authoritative.
