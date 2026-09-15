---
applyTo: "assets/js/**/*.js"
---

# Site JavaScript

Follow [AGENTS.md](../../AGENTS.md). Feature scripts come from the pinned v1 gems. The local `assets/js/bibsearch.js` is an acknowledged core override with a one-line debounce/CSP fix.

Use browser callbacks for timers, preserve ES module imports, and test the generated site. Format the file before recording its checksum with the override audit. Shared runtime changes belong in the owning plugin.
