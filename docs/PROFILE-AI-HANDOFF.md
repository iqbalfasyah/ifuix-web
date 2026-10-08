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

## Founder experience correction, 8 October 2026

Owner explicitly supplied the 10-year founder/developer experience and requested independent-since-2023 copy. Updated shared Home/About profile in ID/EN using those owner-provided facts. This supersedes the earlier removal of an unsupported experience statistic: the new claim now has direct owner confirmation. February2023 remains brand start, not legal incorporation. Prior push/deploy authorization continues for this website follow-up. Validation and deployment pending.

Founder follow-up validation: lint/build (including TypeScript), 19-route export and diff checks pass. Four ID/EN desktop/mobile profile checks pass, mobile screenshot visually reviewed; evidence ../../../website-review/2026-10-07/founder-experience-*.png and verify-founder.cjs. Publishing the checked copy under existing owner authorization; no other features changed.

## AI wording and privacy positioning, 8 October2026

Owner requested Framix AI wording without local qualifier and planned AI Assistant support for Fuira/Kebun. Updated ID/EN marketing/metadata and added planned-assistant sections to both product pages. Owner also requested removal of privacy positioning to allow future tracking: removed no-tracking/no-data/telemetry promises from marketing, preserving actual policies and factual current app-storage descriptions. No analytics/tracking code installed; no claim of consent, new collection or current assistant availability. Existing release binaries unchanged. Validation/deployment pending.

AI wording validation: lint/build including TypeScript/export/diff pass. Browser verify-ai-copy.cjs passed36 ID/EN390/1440 route checks, planned Assistant presence, no old local-AI/no-tracking marketing text, no overflow/runtime/raw-key issues. Export19routes/17sitemap/APK unchanged. Evidence ../../../website-review/2026-10-07/ai-copy-*.png and ai-copy-qa.json; mobile Kebun screenshot reviewed. Publishing under continuing owner authorization; hosted verification pending.

Owner follow-up: remove stays usable without internet positioning. Replaced Home offline-value copy/icon with AI direction, removed offline/privacy hero badges and hardcoded download promises, updated product cards/features/FAQ/metadata. Actual policy/storage facts remain. No connectivity or tracking architecture changed. Previous AI copy release4592571 deployed successfully in run37718306845; this follow-up validation pending.

Owner hero follow-up: nalarx.com content reference inspected8October. Adopted direct AI-purpose headline/use cases and action copy, without copying enterprise claims or changing approved carousel/layout. Hero ID: AI untuk berkarya. Dan mengelola usaha. Description names existing Framix workflow and coming-soon Finance/Assistant/generative roadmap. Offline-removal lint/build/export and44browser checks passed before this extra copy; final combined validation pending.

Final combined checks: lint/build including TypeScript, export19routes/17sitemap/unchangedAPK, diff and44 ID/ENdesktop/mobile checks pass. Hero mobile screenshot reviewed. Final evidence ai-final-copy-*.png/qa.json and verify-final-copy.cjs in ../../../website-review/2026-10-07/. Public copy focuses AI; actual policies unchanged and analytics not installed. Publishing verified changes under continuing authorization.

Owner provider-neutral wording correction: remove Claude from public titles/body and AI note in ID/EN. Public upcoming editor assistant now called AI Assistant; no API/provider named or availability invented. Internal historical keys/docs retain provenance. Final validation/publication pending.

Owner removed Behind IFUIX/Independent since2023 profile block after reviewing it. Removed shared profile mounts from Home and About; historic owner-provided experience facts remain documented, not emphasized in public UI. Current product/AI copy remains. This supersedes previous request to show that block. No other biography/company claims added.

Provider-neutral/profile-removal checks: lint/build TypeScript/export/diff pass;16ID/ENdesktop/mobile route checks confirm no visible Claude or removed profile block, no overflow/runtime/raw keys. Evidence provider-neutral-*.png/qa.json and verify-provider-neutral.cjs in ../../../website-review/2026-10-07/. Previous combined hero/offline commitdeb6cae deployed successfully in run37718735300. Publishing current copy revisions under continuing owner authorization; hosted checks pending.

English-default follow-up: first static render/hydration and no-preference fallback switched to English; existing saved Indonesian retained. HTML language/OG locale and all route SEO translated to English. Previous provider-neutral/profile removal releaseb014d73 deployed successfully in run37718962590. English-default validation/publishing pending.

English default verified: lint/build including TypeScript/export19routes/17sitemap/APK unchanged passed. Initial HTML en and English headline checked; fresh English, savedID/reload and denied-storage browser checks pass with no runtime errors. Mobile screenshot visually reviewed; evidence english-default-*.png and verify-english.cjs in ../../../website-review/2026-10-07/. README/architecture updated. Publishing under existing owner authorization.
