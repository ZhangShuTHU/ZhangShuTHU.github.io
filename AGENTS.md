# Agent guidelines for Shu Zhang's al-folio v1 site

This is a customized user site. The v1 starter provides configuration and dependency wiring; versioned gems own the runtime. Read [upstream AGENTS.md](https://github.com/alshedivat/al-folio/blob/main/AGENTS.md) and [BOUNDARIES.md](https://github.com/alshedivat/al-folio/blob/main/docs/BOUNDARIES.md) before changing runtime behavior.

## Site contract

- Preserve `url: https://zhang-shu.top` and an empty `baseurl` together.
- Keep `theme: al_folio_core`, the `al_folio` API contract, and the plugin lists in `Gemfile` and `_config.yml` aligned. Keep `Gemfile.lock` tracked.
- Content, data, bibliography, PDFs, and images belong to this site.
- `_includes/head.liquid` loads `assets/css/site.css`; `_includes/header.liquid` keeps the icon-only search button with v1 navigation handlers.
- `_layouts/bib.liquid` preserves FrontPage thumbnails, icon links, badge rules, and exact citation-data lookup.
- `_layouts/cv.liquid` preserves the bilingual PDF viewer and mobile fallback. This site's CV intentionally replaces the stock data-driven CV renderer.
- `assets/js/bibsearch.js` applies the 300 ms delay through a callback, fixing the core 1.0.15 CSP error. Keep this one-line compatibility fix tracked until the owning plugin incorporates it.
- Keep `jekyll-minifier.compress_css: false`. The gem already builds its CSS; do not restore the old PurgeCSS stage.
- Bootstrap compatibility is disabled: the pinned compatibility gem hides desktop navigation. Native v1 handlers support the retained popover marker. Inspect desktop and mobile navigation after plugin updates.

## Upgrade and review

Use [the migration skill](.agents/skills/al-folio-v1-migration/SKILL.md) in a disposable branch. For every retained override, run `bundle exec al-folio upgrade overrides diff PATH`, review the change, then `bundle exec al-folio upgrade overrides accept PATH`. Check in `.al-folio-overrides.yml` with the matching templates.

Shared runtime fixes belong in the owning plugin repository. Intentional user-site overrides are valid here; the upstream starter-only style-contract test does not apply to this customized site.

## Validation

Use Docker (`docker compose up --build`) and inspect http://localhost:8080. Builds go to container-local `/tmp/_site`. Validate home, publications, CV, projects, repositories, news and project details, `/Summary/`, and `/SummaryCN/`; verify navigation, search, publication toggles, image zoom, language switching, and dark mode at desktop and mobile widths.

Run `bundle exec al-folio upgrade audit` and `bundle exec al-folio upgrade overrides audit --fail-on-stale` inside the container. Format changes with Prettier before accepting override checksums. Before committing, run `npx prettier . --write` and the Docker build/visual checks. Stage only intended changes, following [.github/GIT_WORKFLOW.md](.github/GIT_WORKFLOW.md).

See [the migration report](docs/migration-v1.html) for the reviewed boundary decisions and validation results.
