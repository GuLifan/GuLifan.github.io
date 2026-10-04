# Project Specification

## 1. Objective

Build and publish an English-first academic personal website for Lifan Gu at
`https://gulifan.github.io/`.

## 2. In scope

- A responsive single-page academic profile.
- Sections: About, Research, Publications, Software & Projects, Selected
  Honors, CV, and Contact.
- Default dark appearance with a persistent light/dark theme switch.
- Markdown-based self-introduction that the owner can edit independently.
- Static generation with Eleventy and deployment through GitHub Pages.
- Privacy-conscious GoatCounter page-view and selected outbound-link events.
- SEO metadata, Open Graph metadata, sitemap, robots.txt, and Person JSON-LD.

## 3. Out of scope

- No backend, database, contact form, user accounts, comments, or CMS.
- No downloadable CV and no copy of the source CV in the repository.
- No PI names, institutional logos, advertising pixels, or marketing trackers.
- No unsupported claims about research outcomes or publication status.

## 4. Technical architecture

- Eleventy 3.1.6 on Node.js 20 or later.
- Nunjucks templates, Markdown content, JSON data, semantic HTML, CSS, and
  minimal vanilla JavaScript.
- Project-local npm dependencies only; no global package installation.
- GitHub Actions builds `_site/` and deploys it with the official GitHub Pages
  actions.

## 5. Content authority

1. Direct user statements in this project.
2. The user-provided CV, used only as an internal factual source.
3. Official publication pages and PubMed records.
4. Public GitHub repository descriptions.

When sources conflict, direct user statements take precedence.
