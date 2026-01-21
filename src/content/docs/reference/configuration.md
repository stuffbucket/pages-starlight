---
title: Configuration Reference
description: Key files and settings to customize your site.
---

## astro.config.mjs

Core site configuration:

```javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repo-name', // Remove if using apex domain
  integrations: [
    starlight({
      title: 'Your Site',
      social: { github: '...' },
      sidebar: [
        /* ... */
      ],
    }),
  ],
});
```

**Important:** Update `site` and `base` to match your GitHub Pages URL.

## Sidebar Navigation

Defined in `astro.config.mjs` under `starlight({ sidebar })`:

```javascript
sidebar: [
  { label: 'Home', link: '/' },
  {
    label: 'Guides',
    items: [
      { label: 'Workflow', slug: 'guides/example' },
    ],
  },
  {
    label: 'Reference',
    autogenerate: { directory: 'reference' },  // Auto-gen from folder
  },
],
```

See [Starlight sidebar docs](https://starlight.astro.build/reference/configuration/#sidebar) for full options.

## GitHub Actions

Deployment configured in `.github/workflows/deploy.yml`:

- Triggers on push to `main`
- Runs security audit and CI checks
- Deploys to GitHub Pages

**Repository settings required:**

1. Settings → Pages → Source: GitHub Actions
2. Settings → Actions → General → Workflow permissions: Read and write

## Environment Files

| File             | Purpose                           |
| ---------------- | --------------------------------- |
| `.node-version`  | Node.js version for host workflow |
| `.nvmrc`         | Alternative for nvm users         |
| `.prettierrc`    | Code formatting rules             |
| `.markdownlint*` | Markdown linting configuration    |
| `tsconfig.json`  | TypeScript compiler options       |

## Docker Configuration

Development container in `.docker/`:

- `Dockerfile` — Alpine-based Node 22 image
- `docker-compose.yml` — Service definitions for dev/serve/ci

The compose file mounts your project at `/app` and caches `node_modules` in a named volume.
