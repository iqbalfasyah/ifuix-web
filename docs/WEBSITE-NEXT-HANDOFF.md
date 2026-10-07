# IFUIX website: Next.js and company presentation

## Current state: published after explicit owner request

7 October 2026. Status done. Owner requested `push lah`; migration/pipeline commits were pushed to origin/master. Actions run 37609137865 succeeded for `a56e504`, including the previously unverified Ubuntu build and Pages deployment. Live verification passed for 18 routes, 60 asset targets, Next HTML/canonical, 404/noindex, unchanged APK and video range. No contact submission. This documentation update changes no application code. See [deployment handoff](DEPLOYMENT-HANDOFF.md) for evidence and the two remaining dependency alerts. Earlier no-push/deployment-pending entries below are historical; future publishing still needs owner authorization.

## Current follow-up: deployment pipeline checked

7 October 2026. Status: done for local audit and fixes, based on accepted migration commit `b6ff8fd6792f82e27076152ba871911f49174aec`. Pages uses GitHub Actions, `ifuix.com` and enforced HTTPS; the three latest deployments succeeded for older commits. Updated official action versions and added filename-case checks to export verification. Lint, export verification, negative case fixture and diff check pass. No UI changes, push or deployment; the new Next.js Ubuntu run remains unverified. Details and next authorized step: [deployment handoff](DEPLOYMENT-HANDOFF.md). Use Git history for the follow-up commit identity. Earlier restoration/refresh entries below are dated history.

## Current state: owner requested visual rollback

Owner acceptance and commit authorization, 7 October 2026: the owner approved the restored appearance, reviewed the explanation of remaining technical/content differences, and requested a local commit. This handoff is part of that authorized snapshot; use `git log -1` for its commit identity. Next.js/static Pages, restored layout and factual/copy corrections are the accepted scope. No push or publication authorized. Final pre-commit lint, typecheck, static-export verification and diff check passed; production build and 36 browser route checks remain the previously verified results for this unchanged implementation. Workspace handoff records the resulting commit hash after creation. Root workspace files and screenshot evidence live outside this Git repository.

7 October 2026. Status: done for local restoration. Owner said the new design looked worse and asked to revert. Restored the pre-refresh presentation from the verified base source, adapted to the already-migrated Next.js architecture: original hero/carousel, product cards, colors, header/footer and page layouts. Both shared CSS files now match base HEAD. New editorial header/footer/site stylesheet removed. MainLayout still excludes legacy Helmet/SEO; routes and metadata remain Next.js.

Retained no-em-dash correction, smaller PNG logo, LinkedIn in Contact/footer (also visible from About footer), solo-developer About copy, removal of the fabricated 10+ experience statistic, verified APK/privacy corrections and deterministic Terms date. Fuira typed release hook/parser and Markdown heading corrections preserved in the restored layout; original Fuira carousel returns. Original contact form restored; privacy copy now discloses FormSubmit. No form submitted and delivery is unverified. This is a presentation rollback, not a Git reset or undo of the migration.

Backup before restoration: `../../../website-review/2026-10-07/rejected-design-backup/` contains src/docs/design instructions. Recovery script `restore-design.mjs` records source mapping; it intentionally refuses to overwrite an existing backup. Previous refresh evidence below is historical and does not indicate owner acceptance.

Validation: `npm run lint`, `npm run typecheck`, `npm run build`, `npm run verify:export`, `git diff --check` passed. Build finished with all 18 static routes. Final export check found 76 internal targets and unchanged APK. Browser direct-route checks at 390 and 1440 widths: 36 passed, no overflow, missing primary heading/title/canonical, em dashes or broken completed images. Carousel manual advance and saved English reload checked. LinkedIn/form destinations inspected without submission. Fresh screenshots and `restored-browser-qa.json` in the same evidence directory. Hosted Actions/Pages and form delivery remain unverified. No commit/push/deploy. Next: normal owner use; no broad redesign without a new brief.


Historical refresh record follows. Updated: 7 October 2026 (Asia/Bangkok). That implementation passed local checks, but the owner rejected its appearance and requested the restoration recorded above. It is not an accepted design. Publication remains unauthorized.

## Objective and acceptance

Improve the website using Next.js/React and readable architecture, present Iqbal as its sole developer, use concrete ID/EN product copy and real assets, remove em dashes, and show the existing LinkedIn profile. Preserve GitHub Pages, all existing routes, demos, downloads and language controls. Validate static output, responsive layouts and meaningful interactions; deliver screenshots. No push or publishing.

## Verified checkout

Repository `Web/ifuix-web`, branch `master`, base/current HEAD `158a3e7b91f1c45e032f523d323d7718ca4058b5`. All implementation remains uncommitted. The pre-existing untracked anti-slop handoff was retained and updated; no unrelated project code was edited. Root instructions/context/handoff, project README and relevant source/release documents were read. No separate implementation checkout substituted.

## Implemented

- Next.js 16.4.0 App Router, React 19.2.7, TypeScript and Tailwind. Explicit server route modules export 18 real HTML pages to `out/`; typed metadata/canonical aliases and escaped JSON-LD are centralized. Vite, React Router, Helmet and the old HTML export entry points were removed.
- GitHub Pages workflow uses Node 22, lint/typecheck/build/export checks, then uploads `out/`. Existing `CNAME` (`ifuix.com`) and download binaries stay intact; `.nojekyll` preserves Next assets. Root-domain deployment needs no basePath. Repository-subpath deployment would need an asset-path audit.
- Deterministic Indonesian build/first render; saved ID/EN preference applies after hydration using a provider-owned i18next instance. Storage denial is handled. SEO metadata remains Indonesian; localized SEO routes are not implemented.
- Real Framix home screenshot, product directory rows, first-person founder story, practical services/FAQ/support/contact copy, responsive header/footer, and scoped styles. Removed generic carousel/value cards, invented experience, unavailable platform buttons, and unverified FormSubmit form. No founder photo, testimonial, metric, funding or provider claim was invented.
- Existing LinkedIn `https://linkedin.com/in/iqbalfasyah` appears in About, Contact and footer; founder JSON-LD uses the same existing social destinations. Contact has direct WhatsApp/email links, with no message sent during testing.
- Fuira manual screenshot selection, shared typed release parser/hook with timeout/cancellation, loading/empty/recorded-fallback states, official installer links and release Markdown headings below H1. Live API confirmed v0.9.8-beta, installer 73066843 bytes, published 6 July 2026.
- Website and Kebun privacy views now support ID/EN and describe the actual public distribution. Binary manifest of APK 3.2.1 confirms package `id.kebunpintar.android`, versionCode 30201, minSdk 26, targetSdk 36, and no declared Android permissions. Removed incorrect package, Google Play billing and unsupported compliance claims. Policy scope is this public APK, not future app source. Manifest inspection is not a full SDK/traffic audit or legal certification.
- Existing Terms contract remains English; layout updated and effective date fixed to verified source-change date 2 July 2026. Its substantive contract paragraphs were retained.
- Portable `DESIGN.md`, repository `AGENTS.md`, architecture and task records. Source formatted using the existing Prettier configuration. No global preferences or optional skill packages installed.

## Anti-slop decision and provenance

The owner's later instruction to update everything and leave the best choices to the assistant superseded the earlier pending during/after clarification. Applied the already-read core during editing and audited the result; this is a delegated decision, not a claim that the owner explicitly selected a named mode. See `docs/design/ANTI-SLOP.md` and the pinned core reference `antislop-upstream.md`.

Source: https://github.com/miqdadbadjuber/anti-slop/blob/main/skills/antislop/SKILL.md
Full hash: `64a1ff70bafbfb7a105083cdff0026a6f09baf7e19d3aa1bc3e880cf7233f90c`.
Core-only workflow, not the upstream optional setup wizard.

## Final validation

- `npm run lint`, `npm run typecheck` (`next typegen && tsc --noEmit`), `npm run build` (Webpack), `npm run verify:export`: passed. Formatting-only source cleanup followed with lint/typecheck. Export check: 18 routes, one H1/title/description/canonical, valid JSON-LD, visible initial content, 65 internal targets, 16 sitemap URLs, noindex 404, CNAME/.nojekyll.
- APK SHA-256 unchanged: `dba0ac7294012d10450ec4cc9627153da9becc11499c8f381a510cdba85f35a6`.
- 108 browser checks: all 18 direct routes in ID and EN at 390/768/1440 requested widths. No horizontal overflow, missing primary heading/metadata, em dashes, raw translation keys or broken completed images. Fuira live notes were also inspected after loading; one H1 retained.
- Flat-background rendered-text contrast audit covered 18 pages. Found gallery numbering at 3.36:1; fixed `studio.css` to #686b61 and rechecked all three affected routes at 5.16:1. Other checked text met 4.5:1 normal / 3:1 large thresholds. This DOM audit does not validate text embedded in screenshot/video pixels.
- Actual interactions: mobile open/Escape/focus return, product navigation/menu closure, saved English reload, Fuira screenshot selection, all six FAQ disclosures, release and installation disclosures, Kebun checksum and FAQ disclosures, Framix viewer next/ArrowLeft/Escape/focus/scroll return, product anchor and visible keyboard focus. Native Framix demo played a 1920-pixel frame and advanced beyond 22 seconds, then paused. About/Contact LinkedIn and mail/WhatsApp destinations inspected.
- Release parser checked using Node's `--experimental-strip-types --input-type=module`: empty array accepted, non-array error payload rejected, nullable fields normalized, download URL outside official repository excluded. Live public GitHub API read matched recorded installer. No installer execution, phone installation or external form submission.
- Browser error logs empty after interaction checks. `git diff --check` passed; ordinary LF/CRLF notices only. Export/source text scan found no em dash or old experience/package/FormSubmit claims.
- Earlier migration HTTP verification: sampled direct routes 200, unknown route 404, video range 206/1024 bytes, webmanifest MIME correct. Still the same preview script and assets. Baseline Vite build and 54 migration browser checks passed before this redesign.
- Native Turbopack failed at its PostCSS worker on this Windows host; explicit Webpack passes. Sandbox filesystem/loopback restrictions required normal Windows process permissions for builds/read-only preview/API checks. No automatic approval rejection occurred.
- Not verified: hosted Ubuntu Actions/Pages, Safari/Firefox/real devices, screen-reader audit, all API failure states in a real browser, all external destination account states, Android app runtime/SDK traffic or legal review. Terms remains English. No complete accessibility certification or optional anti-slop skill audit is claimed.

## Evidence and next steps

Evidence outside Git: `../../../website-review/2026-10-07/`.
Before: `before-desktop.jpg`, `before-mobile.jpg`.
After: `refresh-desktop.jpg`, `refresh-mobile.jpg`, `refresh-about.jpg`, `refresh-contact.jpg`, `refresh-services.jpg`.
Checks: `refresh-browser-qa.json`, `refresh-interaction-qa.json`, `refresh-contrast-qa.json`; initial contrast findings retained separately. Migration/em-dash screenshots and earlier reports remain. Copy evidence separately when moving machines.

Portable reproduction: `npm ci`, run validation commands above, then `npm run preview` at http://127.0.0.1:4175. Local preview is running for owner review. No scheduled task, commit, push or deployment.

Next: owner reviews screenshots/local preview. Make any requested revisions; only publish after explicit authorization, then verify actual Actions and deployed deep links.

## Brief history

5 October: original anti-slop adoption request, no-push/screenshots-first constraints; pending setup choice recorded.
7 October: learned shared startup conversation without application/inbox actions; migrated hosting architecture and verified output.
7 October: owner explicitly removed em dashes, confirmed sole developer, delegated full design/copy update and requested LinkedIn. Local refresh and verification completed; earlier setup question resolved by that authorization.
