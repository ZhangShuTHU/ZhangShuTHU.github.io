# Shu Zhang · Academic website

This site runs on the al-folio v1 starter contract. It publishes at [zhang-shu.top](https://zhang-shu.top) with an empty `baseurl`.

Site content lives in `_pages`, `_news`, `_projects`, `_bibliography`, `_data`, and `assets`. Versioned gems provide the theme and feature runtime. The five intentional runtime overrides are recorded in `.al-folio-overrides.yml`; site styling lives in `assets/css/site.css`.

## Preview and validate

```sh
docker compose up --build
```

Open http://localhost:8080. The container writes the preview to `/tmp/_site`.

```sh
docker compose exec jekyll bundle exec al-folio upgrade audit
docker compose exec jekyll bundle exec al-folio upgrade overrides audit --fail-on-stale
npm ci
npm run lint:prettier
```

The deployment workflow builds and checks overrides on pull requests, and publishes pushes to `master` or `main`.

See the [migration report](docs/migration-v1.html), [agent guidelines](AGENTS.md), and [upstream v1 documentation](https://github.com/alshedivat/al-folio/tree/main/docs).
