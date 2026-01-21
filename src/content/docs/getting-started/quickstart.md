---
title: Quick Start
description: Get your documentation site running in under 5 minutes.
---

## Prerequisites

- **Node.js 22+** and **npm**
- **make** (standard on macOS/Linux)

Alternatively, use Docker with `docker-` prefixed targets (no Node.js required).

## Clone and Initialize

```bash
git clone https://github.com/your-username/your-repo-name.git my-docs
cd my-docs
make init
```

The init script will prompt for:

- Project name
- Site title
- GitHub username/org
- Repository name

## Start Development

```bash
make dev
```

Opens at `http://localhost:4321` (or next available port).

## Verify Everything Works

```bash
make ci
```

Runs the full pipeline: security audit → lint → type-check → build.

## Project Structure

```text
src/content/docs/     # Your documentation (delete this template content)
public/               # Static assets (images, fonts)
astro.config.mjs      # Site configuration and sidebar
.docker/              # Docker configuration
.github/workflows/    # GitHub Actions CI/CD
```

## Next Steps

1. Read the [Workflow guide](/guides/workflow/) to understand the development process
2. Configure your sidebar in `astro.config.mjs`
3. Delete this template content and add your own
4. Push to GitHub and enable Pages
