# IFUIX website

Company website for Framix Editor, Fuira, and Kebun Pintar. Next.js 16.4, React 19, TypeScript, and Tailwind CSS 4. Routes render to real static HTML for the existing GitHub Pages setup.

Read `../../AGENTS.md`, `../../PROJECT_CONTEXT.md`, and `../../HANDOFF.md` before working here. Task records are in `docs/`; current migration state is [WEBSITE-NEXT-HANDOFF.md](docs/WEBSITE-NEXT-HANDOFF.md). Existing no-push and screenshot-first constraints remain in effect.

## Local development

```sh
npm ci
npm run dev
```

Webpack is selected explicitly because the native Turbopack PostCSS subprocess fails on the current Windows host. The default build uses the same compiler locally and in CI.

## Production verification

```sh
npm run lint
npm run typecheck
npm run build
npm run verify:export
npm run preview
```

Preview serves `out/` on `http://127.0.0.1:4175`, without a SPA fallback; unknown routes return the exported 404. Use `npm run preview -- --port 4176` for another port. Video byte ranges are supported.

`src/app/` owns actual routes and metadata; `src/views/` holds translated page components. `src/components/LanguageProvider.tsx` renders English on the server and applies a saved ID/EN choice after hydration, including when storage is denied. `src/data/site.ts` owns canonical URLs and route metadata. Public downloads, screenshots, and videos remain in `public/`.

See [ARCHITECTURE.md](docs/ARCHITECTURE.md) for component boundaries, language rendering, and the static hosting constraints. The current custom domain serves the site at `/`; changing to a GitHub repository subpath also requires reviewing asset URLs.

The GitHub Pages workflow verifies and uploads `out/`, including checks for filename case on internal paths. Actions deployment skips Jekyll and serves `_next` assets; `CNAME` retains the existing domain. Static export requires no Next.js server or hosting change. Publishing requires owner review. See [deployment audit](docs/DEPLOYMENT-HANDOFF.md) for verified hosting settings and the remaining hosted validation.

Keep product and company claims verifiable. [DESIGN.md](DESIGN.md) records the owner's solo-developer direction and the UI/copy decisions. [Anti-slop workflow](docs/design/ANTI-SLOP.md) contains portable core-only rules and provenance; no optional packages or global preferences were installed. [STARTUP-CONTEXT.md](docs/STARTUP-CONTEXT.md) distinguishes reported facts from suggestions. Binary metadata must match the actual signed artifact; Framix has enquiry/demo links and no public installer.
