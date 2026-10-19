# AI Experiments

A blog of experiments in building with AI agents, built with [Astro](https://astro.build) and published on
GitHub Pages at https://mustafabagdatli-git.github.io/blog_demo/.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321/blog_demo/
npm run build     # static site in dist/
```

## Write a post

The easy way: ask Claude to write up an experiment. It drafts the post and opens a pull request for you to read
and merge, following the rules in [CLAUDE.md](CLAUDE.md).

By hand: add a Markdown file to `src/content/posts/`. The file name becomes the URL.

```markdown
---
title: "The title"
description: "One or two sentences shown in the list and under the title."
date: 2026-10-19
tags: ["agents"]
experiment: "my-experiment.html"   # optional: a runnable page in public/experiments/
run:                               # optional: the facts of the run; leave out what you don't know
  date: 2026-10-19
  models: "..."
  setup: "..."
  result: "..."
  cost: "..."
---

The post.
```

Runnable experiments go in `public/experiments/`; data behind a post goes in `public/data/`.

## Publish

Every push to `main` builds and deploys the site (`.github/workflows/deploy.yml`). One-time setup: in the repo's
**Settings → Pages**, set **Source** to **GitHub Actions**.

To use your own domain, set `site` to it and `base` to `"/"` in `astro.config.mjs`.
