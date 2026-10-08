# GitHub Pages pipeline audit

Updated: 7 October 2026 (Asia/Bangkok). Status: done for the owner-authorized push and deployed verification.

## Published verification

The owner explicitly requested the push on 7 October, superseding the earlier no-push constraint for this release. Migration commit `b6ff8fd` and pipeline commit `a56e504cdc8a1f2d7c524fd2341cabd9e97978cb` were pushed normally to `origin/master` without force. [Run 37609137865](https://github.com/iqbalfasyah/ifuix-web/actions/runs/37609137865) completed successfully in 1m8s for `a56e504`: Node 22 lockfile install, lint, typecheck, Ubuntu Webpack build, export verification, artifact upload and Pages deployment all passed.

Verified `https://ifuix.com/` after deployment with `node ../../website-review/2026-10-07/verify-live.mjs`: all 18 direct routes return 200 with one H1, expected canonical, visible initial HTML and Next assets; 60 other internal asset targets return 200 with JavaScript/CSS MIME checks. Unknown route returns 404/noindex. Public APK SHA-256 matches the recorded unchanged binary. Video byte range returns 206 with 1024 bytes. No contact form submitted. Evidence outside Git: `../../website-review/2026-10-07/deployed-qa.json` and `deployed-actions.json`. These paths are relative to the repository root; copy evidence separately when moving machines. This documentation follow-up does not change application code.

GitHub reported dependency alerts during push. A read-only API check found two open alerts still present in the lockfile: source-map-js 1.2.1 (high, patched 1.2.2) and development dependency brace-expansion 5.0.7 (medium, patched 5.0.12). No dependency patch or security audit was performed as part of the push. Follow-up: assess/update these dependencies and validate separately. Runner annotations also report internal Node 20 actions being automatically run on Node 24 and a future ubuntu-latest image migration; this deployment passed despite those annotations.

Earlier audit below records what was verified before push. Its unpublished/Linux-unverified statements are historical, superseded by the successful hosted run above. Future publication still requires owner authorization.

## Objective and checkout

Check the existing GitHub Pages pipeline against the accepted Next.js static export. Confirm repository hosting settings and recent runs, correct relevant workflow issues, and validate the local artifact without publishing.

Repository: `iqbalfasyah/ifuix-web`, branch `master`, base `b6ff8fd6792f82e27076152ba871911f49174aec`. No pre-existing uncommitted changes at audit start. The owner previously authorized a local commit; no push or deployment is authorized. Use `git log -1` for the resulting follow-up commit.

## Findings and changes

- GitHub API confirms default branch `master`, public repository, Pages source `workflow`, custom domain `ifuix.com`, and HTTPS enforcement enabled. The Pages `status` field was null; this alone does not establish a failure.
- The three most recent `deploy.yml` runs completed successfully. Latest: [run 37133442275](https://github.com/iqbalfasyah/ifuix-web/actions/runs/37133442275), 3 October 2026, commit `158a3e7b91f1c45e032f523d323d7718ca4058b5`. These runs predate the local Next.js migration and do not validate its Linux build.
- Workflow triggers on pushes to `master`/`main`, installs the lockfile with Node 22, and runs lint, typecheck, Webpack build and export verification before uploading `out/`. Pages permissions, environment URL and concurrency are configured. The current custom domain serves from `/`, matching asset URLs; no repository-subpath `basePath` is needed.
- Updated official actions: checkout/setup-node v7, configure-pages v5 and upload-pages-artifact v4. deploy-pages remains v4. Verified each updated tag through GitHub's API and checked official action/documentation requirements. Hosted Ubuntu runners support the Node 24 runtime used internally by the updated actions; setup-node still selects Node 22 for project commands.
- `scripts/verify-export.mjs` now rejects case-mismatched internal paths even on Windows. The Ubuntu deployment filesystem treats filename case as significant.
- Inspected the upload-pages-artifact v4 action source: it creates the Pages archive and omits dotfiles. The exported `.nojekyll` is therefore not included in that archive; Actions-based Pages deployment does not use Jekyll, and `_next` is preserved. `CNAME` is included. No unsupported action input was added.
- Existing export: 187 files, 51,950,205 bytes (49.54 MiB), no symlinks. Application/UI and download binaries were not changed by this audit.

## Validation

- `npx --no-install prettier --write .github/workflows/deploy.yml scripts/verify-export.mjs`: passed, workflow YAML parsed and formatted. This is not a complete Actions runtime validation.
- `npm run lint`: passed.
- `npm run verify:export`: passed, 18 routes, 76 internal targets, metadata/structured data/visible HTML, 16 sitemap URLs, noindex 404, CNAME/.nojekyll and unchanged APK hash.
- Negative fixture: `/ICON.png` rejected when only `icon.png` exists. Fixture and `pipeline-local-qa.json` are outside Git at `../../website-review/2026-10-07/`, relative to the repository root.
- `git diff --check`: passed.
- No additional application build/typecheck/browser checks: application source is unchanged from the previously validated migration commit.
- A fresh Ubuntu `npm ci`/build and actual Pages deployment remain unverified. Local Docker's Linux engine is stopped; WSL has only docker-desktop. No container service was started or installed. No workflow dispatched and no push performed.

## Historical next step before push

After explicit push authorization, push the local commits, inspect that exact commit's Actions run, and verify the deployed home page, deep routes, `_next` assets, downloads and unknown-route 404 at `https://ifuix.com/`. A prior successful deployment does not prove the new commit succeeds.

References: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [checkout](https://github.com/actions/checkout), [setup-node](https://github.com/actions/setup-node), [upload-pages-artifact v4 source](https://github.com/actions/upload-pages-artifact/blob/v4/action.yml).

## Published, 8 October 2026

Status: done. Explicit owner push/deploy authorization fulfilled. Application commit e7a5c20e5cac493588f5e9c3775014d807467681 pushed to origin/master. Actions run https://github.com/iqbalfasyah/ifuix-web/actions/runs/37717583436 succeeded (Ubuntu install/lint/typecheck/build/export/deploy). Live verify-ai-saas-live.mjs passed 19 routes and 61 asset targets, updated Home AI positioning, Finance coming-soon, Framix clipping roadmap, Next HTML/canonical, real 404/noindex, unchanged APK hash and video range206. Evidence ../../../website-review/2026-10-07/ai-saas-deployed-qa.json and runnable verification script. This follow-up updates documentation only, uses [skip ci] to avoid an identical deployment, and does not alter deployed application content. No remaining deployment work. No startup application/support contact submitted.
