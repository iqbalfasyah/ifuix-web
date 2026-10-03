# IFUIX — website update, 2026-10-03

## Published changes

- Added Framix Editor (`/products/framix/`) to the home page, product catalog, and footer. The source project's approved name is **Framix by IFUIX** (Frame + Mix), rather than Fremix.
- Framix interest buttons open the official WhatsApp `+62 85211225262` with a prepared enquiry. There is no Framix application, installer, source code, or application download link in this website; Framix is excluded from the download center.
- Added four genuine Framix UI captures, a real 84.667-second launch demo, and Indonesian WebVTT captions. Screenshots are resized WebP files; video loading waits for visitor interaction.
- Added the existing Kebun Pintar development preview video and two development screenshots. Kept the four screenshots from the downloadable APK 3.2.1. Labels clearly distinguish development previews from the downloadable release.
- Both media galleries support enlargement, previous/next controls, arrow keys, Escape, and restored page scrolling.
- Added an official WhatsApp contact card.

## SEO and GitHub Pages

Previously the initial HTML contained metadata and an empty React root. Every public route now serves the actual rendered content, links, headings, and metadata from the same React tree used in the browser. Client-side interactivity hydrates this HTML; a saved English preference uses a fresh render to avoid mismatches.

- 18 complete static HTML entry points; 16 unique canonical URLs in the generated sitemap.
- One centrally managed title, description, canonical, Open Graph/Twitter metadata set per route, including client-side navigation.
- Organization, WebSite, WebPage, SoftwareApplication and product breadcrumb JSON-LD, without invented reviews or offers.
- Canonicals use GitHub Pages directory URLs with trailing slashes. Legacy product/privacy aliases point to their canonical routes and are excluded from the sitemap.
- `robots.txt` permits crawling and advertises `https://ifuix.com/sitemap.xml`.
- Unknown pages return GitHub Pages' custom 404 and include `noindex, follow`.
- Build-time server rendering uses existing dependencies. The Pages workflow uses Node 22 and preserves the generated 404 instead of overwriting it with the home page.

## Validation

- `npm run build`: TypeScript, browser bundle, server bundle and static rendering passed.
- `npm run lint` and `git diff --check`: passed.
- Package dependencies still match the original lockfile.
- Production browser checks at 390, 768 and 1440 pixels: key routes render with HTTP 200, one h1, no horizontal overflow, and exactly one title/description/canonical.
- Actual playback of both H.264 + AAC videos confirmed at 1920 × 1080.
- Gallery opening, arrow navigation, Escape, scroll restoration, WhatsApp links, and exclusion of Framix from downloads confirmed.
- Client navigation updates canonical URLs; Indonesian/English switching and stored English preference passed without JavaScript errors.
- With JavaScript disabled, pages retain substantive content, links, headings and valid JSON-LD.
- Android APK unchanged; SHA-256 remains `dba0ac7294012d10450ec4cc9627153da9becc11499c8f381a510cdba85f35a6`.

Local browser evidence and verification script: `D:/IFUIX/website-review/2026-10-03/` (not published).

## Google indexing follow-up

The available browser was not signed in to Google Search Console, so an account-level sitemap submission or URL Inspection request was not performed. This cannot be completed through GitHub credentials. The public sitemap is discoverable through robots.txt.

For the verified `https://ifuix.com/` property, submit `sitemap.xml` in Search Console, then inspect the home page and product URLs and request indexing if eligible. A successful deployment does not guarantee indexing or ranking; Google must crawl and evaluate the content.

Official guidance:
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
