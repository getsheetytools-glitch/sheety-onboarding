# Sheety Onboarding

Landing page for [Sheety Onboarding](https://onboarding.sheety.tools) — employee onboarding built on Fillout, no code required.

Part of the [Sheety Tools](https://sheety.tools) family.

## Stack

- [Eleventy](https://www.11ty.dev/) (v2) — static site generator
- Nunjucks — templating
- Vanilla HTML/CSS/JS
- GitHub Pages — hosting

## Structure

```
├── _data/
│   └── site.js          # Global site data (name, URLs, etc.)
├── _includes/
│   ├── nav.html          # Shared navigation
│   └── footer.html       # Shared footer
├── _layouts/
│   └── base.html         # Base HTML layout
├── css/
│   └── shared.css        # Design system tokens + components
├── public/               # Static assets (logo, icons)
├── index.html            # Landing page
├── CNAME                 # onboarding.sheety.tools
└── .eleventy.js          # Eleventy config
```

## Development

```bash
npm install
npm start       # dev server at localhost:8080
npm run build   # build to _site/
```

## Deployment

Deployed via GitHub Pages. Push to `main` triggers a build via GitHub Actions (or configure Pages to build from branch directly).

The `CNAME` file points to `onboarding.sheety.tools` — add a CNAME DNS record pointing to `[your-github-username].github.io`.

## Adding pages

Add a new folder with an `index.html` using front matter:

```yaml
---
layout: base.html
title: Page Title
description: Page description for SEO.
---
```
