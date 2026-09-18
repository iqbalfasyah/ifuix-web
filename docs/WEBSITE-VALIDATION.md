# IFUIX website refresh — validation

Date: 2026-09-18

## Delivered

- Refreshed home page, two-product catalog, and shared download center.
- KebunPintar product gallery and Android installation/download page in Indonesian and English.
- Existing signed Android APK 3.2.1, Android 8.0+, 10,361,545 bytes; trial and WhatsApp activation described explicitly.
- Screenshot assets captured from the exact APK's bundled web content. These do not simulate Android's native activation screens.
- Fuira remains available at `/products/fuira` and `/download/fuira`.
- Fourteen generated static HTML route entry points, route-specific initial metadata, sitemap updates.
- Implementation roadmap in `docs/plans/IFUIX-IMPLEMENTATION-PLAN.md`, also saved at `D:\ifuix\IFUIX-IMPLEMENTATION-PLAN.md`.

## Checks completed

- `npm.cmd ci --no-audit --no-fund`: original lockfile installed successfully; no dependency changes required.
- `npm.cmd run lint`: passed without warnings/errors.
- `npm.cmd run build`: TypeScript and Vite passed; static route pages generated.
- `git diff --check`: passed after whitespace cleanup.
- Browser smoke tests against the actual production `dist` using a plain local static server with no SPA fallback, at 390, 768, and 1440 pixels:
  - Seven routes render with HTTP 200 and one h1: `/`, `/products`, `/products/kebunpintar`, `/download`, `/download/kebunpintar`, `/download/fuira`, `/products/fuira`.
  - No horizontal page overflow or broken images.
  - Screenshot dialog opens and closes with Escape.
  - Indonesian/English switch works; no untranslated new content keys.
  - Mobile navigation opens, follows product link, and closes.
  - Android download returns HTTP 200 and expected binary size.
  - Version 3.2.1 and 24-hour trial information are visible.
  - No browser JavaScript errors.
- Android `aapt dump badging`: package `id.kebunpintar.android`, versionCode `30201`, versionName `3.2.1`, min SDK 26.
- Android `apksigner verify --verbose`: signed APK verifies using v2 scheme.
- APK SHA-256: `8715292fab0f324bf3ffe84f4bf992408ac004c9809703c8a820bfc44c9583c2`.

## Scope of validation

This change distributes the existing APK; it does not rebuild or modify the Android application. No physical-device installation or payment/activation transaction was performed. Future login, PWA, membership, and payment features are documented plans, not currently enabled features.

Review screenshots are saved outside the repository at `D:\ifuix\website-review`.
