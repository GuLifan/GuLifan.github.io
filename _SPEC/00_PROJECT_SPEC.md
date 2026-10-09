# Project Specification

## 1. Objective

Build and publish an English-first academic personal website for Lifan Gu at
`https://gulifan.github.io/`, using the information architecture and core
functionality of the MIT-licensed AcadHomepage Jekyll template.

## 2. In scope

- A responsive single-page academic profile with a persistent author sidebar.
- Sections, in order: About Me, Educations, Experiences, Publications,
  Projects, and Honors and Awards.
- Projects are limited to the four repositories pinned on the owner's GitHub
  profile at the time of the migration.
- Default dark appearance with a persistent light/dark theme switch.
- A macOS-inspired glass interface without decorative traffic-light buttons.
- Jekyll-based content and GitHub Pages deployment through a custom workflow.
- Privacy-conscious GoatCounter page-view and selected outbound-link events.
- SEO metadata, Open Graph metadata, sitemap, robots.txt, and Person JSON-LD.
- A documented but disabled future integration point for Google Scholar.

## 3. Out of scope

- No backend, database, contact form, user accounts, comments, or CMS.
- No downloadable CV and no copy of the source CV in the repository.
- No PI names, institutional logos, advertising pixels, or marketing trackers.
- No unsupported claims about research outcomes or publication status.
- No Google Scholar crawler, citation badges, or Google Analytics in this
  release.

## 4. Technical architecture

- Jekyll 4.4.1 on Ruby 3.3 or later.
- Liquid templates, Markdown content, YAML data, semantic HTML, SCSS, and
  minimal vanilla JavaScript.
- Bundler locks dependencies; generated files and local Ruby tooling stay out
  of Git.
- GitHub Actions builds `_site/`, validates it, and deploys it with the
  official GitHub Pages actions. The repository must use GitHub Actions as its
  only Pages source.
- The previous Eleventy release is recoverable from the local branch
  `backup-eleventy-site-2026-10-09`.

## 5. Template provenance

- Upstream: `RayeRen/acad-homepage.github.io`.
- Audited upstream commit: `2cc1577eeaf2f74dede6d016a70722dbd409ea2f`.
- License: MIT. The upstream copyright and license notice remain in the
  repository.
- The original 2023 dependency lock and example content are not reused.

## 6. Content authority

1. Direct user statements in this project.
2. The user-provided CV, used only as an internal factual source.
3. Official publication pages and PubMed records.
4. Public GitHub repository descriptions.

When sources conflict, direct user statements take precedence.
