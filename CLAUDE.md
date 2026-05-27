# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Plain static website — HTML + CSS + vanilla JS. No build step, no framework, no package manager.

## Local preview

```bash
python3 -m http.server 8000   # or: npx serve .
```

## Architecture

- `index.html`, `about.html`, `contact.html` — top-level pages, each a full HTML document. The header/nav and footer markup is duplicated across pages (intentional given no template engine). When adding a page, copy an existing one and update the nav `<ul>` in **all** pages to keep navigation consistent.
- `assets/css/styles.css` — single global stylesheet. Design tokens live in `:root` CSS custom properties (`--color-*`, `--space`, `--max-width`); reuse them instead of hardcoding values.
- `assets/js/main.js` — single global script loaded by every page. Guards behavior by checking for page-specific elements (e.g. `getElementById('contact-form')`) so one file can serve all pages safely.
- `assets/images/` — static image assets.

## Conventions

- Keep it dependency-free unless the user asks otherwise. Don't introduce a bundler, framework, or npm setup on your own initiative.
- Relative links only (`href="about.html"`), so the site works from any subpath when deployed.
