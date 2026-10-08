# Profile and AI presentation

Updated: 7 October 2026 (Asia/Bangkok). Status: done for local implementation and verification; owner review/publication pending.

Objective: add IFUIX developer profile and concrete AI product positioning while retaining the approved appearance. Acceptance: ID/EN profile on Home/About, AI coverage on Home/Products/Framix, clear current-development versus roadmap distinction, existing WhatsApp-only Framix enquiry preserved, static export and desktop/mobile evidence.

Repository: Web/ifuix-web, master, base e57f2e31af83f0cf76624af8844cc93f89debe14. Checkout initially clean. Current changes uncommitted. No publication under the latest project review constraints.

Implemented: shared StudioPresentation components, ID/EN presentation copy, Framix caption/prompt feature copy and metadata. Profile uses confirmed solo developer identity and existing LinkedIn. AI claims grounded in Branding/Iqbal/editor/README.md and docs/AI-PROMPT.md: local prompt interpretation, editable draft/timeline revisions and captions. Fuira/learning AI and Claude integration explicitly planned. No new application integration, download or invented company facts.

Validation: npm run lint, npm run typecheck, npm run build, npm run verify:export and git diff --check passed. Export verifies 18 routes, 76 internal targets, 16 sitemap URLs and unchanged APK. Browser script ../../../website-review/2026-10-07/verify-profile-ai.cjs passed 16 checks across Home/About/Products/Framix, ID/EN and widths 390/1440: no overflow, runtime errors or raw translation keys; profile link and AI copy present. Screenshots profile-ai-*.png and profile-ai-qa.json in that evidence directory. Desktop/mobile AI and mobile profile captures visually reviewed. Initial sandbox build EPERM was resolved with normal Windows process permissions. No hosted/live deployment, real-device or screen-reader audit. Preview: http://127.0.0.1:4178. Next: owner reviews local result. Owner review/publication remains pending; no messaging or application submissions authorized.

## Claude Startups positioning follow-up

7 October: owner clarified approval-review objective. Added confirmed February 2023 brand start (not incorporation) to developer profile and explicit ID/EN planned Claude API workflow: editing requests + transcripts + project metadata -> proposed cuts/caption revisions/editable timeline actions -> user review before export. Current local AI distinguished from unavailable Claude integration. Direct existing WhatsApp enquiry added. Official program FAQ rechecked at https://claude.com/programs/startups: company-domain email/website, Console account and product description; bootstrapped applicants accepted; approval not guaranteed. No claim of acceptance or formal entity. Required incorporation-date clarification remains unresolved in ../../../STARTUP-REAPPLICATION.md.

Follow-up validation: lint/build (including TypeScript) and export pass; responsive browser script rerun against updated output. No deployment/application/support message. Next: owner review of local preview; program form verification remains a separate task.

## Publication authorization

8 October 2026: owner explicitly requested push and deployment, superseding the no-push constraint for this reviewed release. Publishing the existing verified profile/AI/Finance changes to origin/master. Hosted verification pending.

## Published, 8 October 2026

Status: done. Explicit owner push/deploy authorization fulfilled. Application commit e7a5c20e5cac493588f5e9c3775014d807467681 pushed to origin/master. Actions run https://github.com/iqbalfasyah/ifuix-web/actions/runs/37717583436 succeeded (Ubuntu install/lint/typecheck/build/export/deploy). Live verify-ai-saas-live.mjs passed 19 routes and 61 asset targets, updated Home AI positioning, Finance coming-soon, Framix clipping roadmap, Next HTML/canonical, real 404/noindex, unchanged APK hash and video range206. Evidence ../../../website-review/2026-10-07/ai-saas-deployed-qa.json and runnable verification script. This follow-up updates documentation only, uses [skip ci] to avoid an identical deployment, and does not alter deployed application content. No remaining deployment work. No startup application/support contact submitted.
