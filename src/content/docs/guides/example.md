---
title: Development Workflow
description: How to work with this template day-to-day.
sidebar:
  label: Workflow
---

## Available Commands

All commands run on host by default. Run `make help` for the full list.

| Command      | Description                                 |
| ------------ | ------------------------------------------- |
| `make dev`   | Start development server with hot reload    |
| `make ci`    | Run full CI: audit, lint, type-check, build |
| `make build` | Build production site                       |
| `make serve` | Preview production build locally            |
| `make clean` | Remove build artifacts and node_modules     |

## Writing Content

Documentation goes in `src/content/docs/`. Supported formats:

- **Markdown** (`.md`) — Simple content
- **MDX** (`.mdx`) — Markdown with JSX components

### Frontmatter

Every page needs frontmatter:

```markdown
---
title: Page Title
description: Brief description for SEO
sidebar:
  order: 1 # Optional: control sort order
  label: Short # Optional: shorter sidebar label
---

Your content here.
```

### Adding Images

Put images in `src/assets/` and reference them:

```markdown
![Alt text](../../assets/my-image.png)
```

Or in `public/` for static assets referenced by absolute path.

## Git Hooks

The template includes pre-configured git hooks:

**Pre-commit:**

- Formats staged files with Prettier
- Lints markdown with markdownlint
- Validates Astro/TypeScript

**Pre-push:**

- Runs full CI pipeline before push
- Blocks push if checks fail

Hooks auto-skip if you're using Docker-only workflow (no local `node_modules`).

## Docker Workflow

If you prefer Docker (no host Node.js required), use `docker-` prefix:

```bash
make docker-dev
make docker-ci
make docker-shell  # Open container shell
```
