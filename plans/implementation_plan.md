# IFUIX Website v1.0 - Implementation Plan

This plan treats the website as the **Company Website v1.0** for IFUIX (a parent software company), rather than just a landing page for a single app. Since IFUIX is the parent company that will have many products in the future, the website is structured to accommodate this scale. The upcoming desktop app (Fuira) will be featured as the flagship launch product.

## User Review Required

> [!IMPORTANT]
> **Tailwind CSS Version**
> As per your updated plan, we will use **Tailwind CSS v4**. 
>
> **Project Management**
> I have included your Project Epic board below. Once you approve this plan, I will create a `task.md` file to track all these checkboxes as we execute Phase 1.

## Phase 1 — Foundation (Highest Priority)
**Goal:** Menyiapkan fondasi website yang scalable.

### Project Setup
- [ ] React 19 + Vite + TypeScript
- [ ] Tailwind CSS v4
- [ ] React Router
- [ ] Framer Motion
- [ ] Lucide React
- [ ] ESLint & Prettier
- [ ] GitHub Repository initialized

### Folder Structure
```text
ifuix-website/
├── docs/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── sections/
│   ├── styles/
│   └── utils/
├── package.json
└── vite.config.ts
```

### Design System
- [ ] Colors (Primary, Secondary, Background)
- [ ] Typography (Geist, Inter)
- [ ] Spacing & Responsive Breakpoints
- [ ] Shadows & Radius

---

## Phase 2 — Branding
**Goal:** Membangun identitas IFUIX.

- [ ] Final logo & Favicon (Dark & Light versions)
- [ ] Brand Guidelines setup (Color Palette, Fonts, Tone of Voice, Icon Style)

---

## Phase 3 — Homepage (MVP)
*Ini halaman paling penting.*

- **Hero:** Company intro, Tagline, CTA, Background Illustration, Hero Screenshot.
- **Featured Product (Fuira):** Product Card, Screenshot, Download Button, Learn More.
- **Why IFUIX:** Privacy First, Offline First, Beautiful UX, Cross Platform.
- **Vision:** Company Philosophy.
- **Roadmap:** Current & Upcoming Products.
- **CTA:** Download Fuira, Join Beta.
- **Footer:** Navigation, Copyright, Social Links, GitHub.

---

## Phase 4 — Pages
- **About:** Company Story, Mission, Vision, Founder.
- **Products:** Product List & Future Products.
- **Product Detail (/products/fuira):** Hero, Features, Screenshots, Download, Changelog, FAQ.
- **Download:** Latest Version (Windows, macOS coming soon), Release Notes.
- **Contact:** Email, GitHub, X (Twitter).
- **Privacy Policy & Terms of Service:** Legal pages emphasizing the privacy-first approach.

---

## Phase 5 — SEO & Phase 6 — Performance
**Goal:** Lighthouse 95+, Accessibility 100, SEO 100.

- **SEO:** Meta (Title, Desc, Keywords), Social (Open Graph, Twitter Card), Technical (robots.txt, sitemap.xml, manifest, Canonical URL).
- **Performance:** Image Optimization, Lazy Loading, Code Splitting.

---

## Phase 7 — GitHub Pages Deployment
**Goal:** Automated deployment to `ifuix.com` using GitHub Actions.

- [ ] GitHub Actions workflow
- [ ] GitHub Pages setup
- [ ] Custom Domain & HTTPS

---

## Phase 8 & 9 — Documentation and Future (Post-MVP)
- **Documentation:** README, Contribution Guide, Changelog, Release Process.
- **Future:** Blog, Docs, Careers, Newsletter, Analytics, RSS, Multi-language.

---

## Project Epic Board

| Epic | Priority | Status |
| :--- | :--- | :--- |
| Foundation | 🔴 Critical | ⬜ |
| Branding | 🔴 Critical | ⬜ |
| Homepage | 🔴 Critical | ⬜ |
| Product Page | 🔴 Critical | ⬜ |
| Download Page | 🟠 High | ⬜ |
| About | 🟠 High | ⬜ |
| Privacy & Terms | 🟠 High | ⬜ |
| SEO | 🟡 Medium | ⬜ |
| GitHub Pages Deployment | 🟡 Medium | ⬜ |
| Blog | 🟢 Low | ⬜ |

## Verification Plan
1. We will verify the UI locally via `npm run dev`.
2. We will run a production build to check for errors.
3. We will run a Lighthouse audit to ensure we hit the 95+ performance target.
