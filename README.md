# Lifan Gu - Academic Personal Website

Source code for `https://gulifan.github.io/`. The site is generated with
Eleventy and deployed to GitHub Pages through GitHub Actions.

## Local development

Requirements: Node.js 20 or later.

```powershell
npm install
npm run serve
```

Open `http://localhost:8080/`.

Production verification:

```powershell
npm test
```

## Edit the self-introduction

Edit:

```text
src/_includes/content/about.md
```

Write ordinary Markdown paragraphs. Commit and push the change; GitHub Actions
will rebuild and publish the site automatically.

Most structured facts, publications, projects, honors, and links are kept in:

```text
src/_data/profile.json
```

## Configure GoatCounter

After registering a GoatCounter site, its dashboard address will look like:

```text
https://YOUR-CODE.goatcounter.com
```

Only copy `YOUR-CODE` - not the full URL.

1. Open `src/_data/profile.json`.
2. Find this line:

   ```json
   "goatCounterCode": ""
   ```

3. Replace it with your site code. Example:

   ```json
   "goatCounterCode": "gulifan"
   ```

4. Run `npm test` and push the change.
5. Open the published site once with any ad blocker disabled. GoatCounter notes
   that a page view normally appears in its dashboard within about 10 seconds.

When the value is blank, the build omits GoatCounter completely. Important
email, GitHub, ORCID, publication, and project links already contain approved
event labels and will start reporting after the code is enabled.

To avoid counting your own visits, use GoatCounter's documented ignore options
or keep its domain blocked in your everyday browser after the initial test.

## Content and privacy rules

Review `_SPEC/` before changing scope. In particular:

- Never add the source CV or a CV download.
- Never add PI names without a new explicit approval.
- Keep pending conference abstracts visibly separated from publications.
- Do not add another analytics or advertising provider without approval.

## Deployment

The workflow at `.github/workflows/deploy.yml` builds, validates, uploads, and
deploys `_site/`. In the repository settings, GitHub Pages must use **GitHub
Actions** as its source.
