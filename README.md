# Lifan Gu — Academic Homepage

Source for [https://gulifan.github.io/](https://gulifan.github.io/), an
English-first academic profile built with Jekyll and deployed through GitHub
Pages.

## Information architecture

The homepage follows this single-page structure:

1. About Me
2. Educations
3. Experiences
4. Publications
5. Projects
6. Honors and Awards

Profile facts and structured entries are maintained in `_config.yml` and
`_data/profile.yml`. Page copy and section markup live in `_pages/about.md`.

## Local development

Requirements:

- Ruby 3.3 or later
- Bundler

Install the locked dependencies:

```powershell
bundle config set --local path vendor/bundle
bundle install
```

Start the local server:

```powershell
bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000/`.

Run the production build and validation suite:

```powershell
bundle exec rake test
```

## Deployment

The workflow in `.github/workflows/deploy.yml` builds, validates, uploads, and
deploys `_site/`. GitHub Pages must use **GitHub Actions** as its only source.

## Analytics and deferred integrations

GoatCounter is enabled with the approved `gulifan` site code. Google Analytics
is not used. Google Scholar crawling and citation counters are intentionally
disabled until a verified Scholar profile is supplied and activation is
approved.

## Content and privacy

Review `_SPEC/` before changing scope. In particular:

- Never add the source CV or a downloadable CV.
- Never add a PI or supervisor name without explicit approval.
- Keep pending conference abstracts separate from published journal articles.
- Do not add advertising or another analytics provider without approval.

## Template provenance

The information architecture and profile-sidebar pattern are adapted from
[AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), audited at
commit `2cc1577eeaf2f74dede6d016a70722dbd409ea2f`. The original project is
available under the MIT License. Its example content, legacy dependency lock,
Google Analytics integration, and Google Scholar crawler are not included.
