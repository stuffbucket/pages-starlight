# Starlight GitHub Pages Template

A batteries-included template for building documentation sites with [Astro Starlight](https://starlight.astro.build/) and deploying to GitHub Pages.

## Features

- **Zero config**: Clone, install, start writing
- **Pinned dependencies**: Exact versions for reproducible builds (January 2026)
- **Security scanning**: `npm audit` runs in CI pipeline
- **CI/CD ready**: GitHub Actions auto-deploy on push to main
- **Quality gates**: Pre-commit and pre-push hooks with smart content detection
- **Type-safe**: TypeScript + Astro check for frontmatter validation
- **Docker option**: Full Docker workflow available with `docker-` prefix

## Quick Start

**Requirements:** Node.js 22+ and `make` (standard on macOS/Linux)

1. Clone and enter the directory:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git my-docs
   cd my-docs
   npm install
   ```

2. Start developing:

   ```bash
   make dev
   ```

The dev server auto-finds a free port starting from 4321.

## Project Structure

```text
├── src/
│   └── content/
│       └── docs/           # Your documentation (Markdown/MDX)
├── public/                 # Static assets
├── .docker/                # Docker configuration (Alpine-based)
├── .github/workflows/      # GitHub Actions CI/CD
├── .husky/                 # Git hooks
├── astro.config.mjs        # Astro + Starlight configuration
├── Makefile                # Build targets
└── package.json            # Pinned dependencies
```

## Available Commands

All commands run on host by default (requires Node.js 22+).

| Command      | Description                                 |
| ------------ | ------------------------------------------- |
| `make dev`   | Start development server with hot reload    |
| `make serve` | Preview production build                    |
| `make ci`    | Run full CI: audit, lint, type-check, build |
| `make build` | Build production site                       |
| `make clean` | Remove node_modules and build artifacts     |

Run `make help` for the complete list including Docker targets.

### Docker Workflow

If you prefer Docker (no host Node.js required), prefix commands with `docker-`:

```bash
make docker-dev
make docker-ci
make docker-shell  # Debug in container
```

## GitHub Pages Setup

1. Push to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to "GitHub Actions"
4. Push to `main` branch—the site deploys automatically

### Configuration

Edit `astro.config.mjs` to set your GitHub details:

```javascript
const GITHUB_USER = 'your-username';
const REPO_NAME = 'your-repo-name';
const IS_USER_SITE = false; // true for username.github.io
```

**URL patterns:**

- User/org site (`username.github.io`): `base: '/'`
- Project site: `base: '/repo-name'`

## Writing Content

Documentation lives in `src/content/docs/`. Starlight supports:

- **Markdown** (`.md`)
- **MDX** (`.mdx`) for interactive components
- **Markdoc** (`.mdoc`) with plugin

### Frontmatter

```markdown
---
title: Page Title
description: Brief description for SEO
sidebar:
  order: 1
  label: Short Label
---

Your content here.
```

See [Starlight docs](https://starlight.astro.build/guides/authoring-content/) for full authoring guide.

## Security

- **Pinned versions**: All dependencies use exact versions (no `^` ranges)
- **npm audit**: Runs automatically in CI and can be run locally with `make audit`
- **Dependabot**: Consider enabling for automated security updates

To update dependencies:

```bash
make update   # Updates and runs audit
make ci       # Verify everything still works
```

## Git Hooks

Smart git hooks run appropriate checks based on what changed:

**Pre-commit:**

- Content-only changes → Astro schema validation
- Code changes → Prettier formatting + Astro check

**Pre-push:**

- Content-only → Build validation
- Code changes → Full CI pipeline

Hooks degrade gracefully when using Docker-only workflow (no local `node_modules`).

## Customization

### Sidebar

Edit `sidebar` in `astro.config.mjs`:

```javascript
sidebar: [
  {
    label: 'Getting Started',
    items: [{ slug: 'index' }, { slug: 'installation' }],
  },
  {
    label: 'Guides',
    autogenerate: { directory: 'guides' },
  },
];
```

### Theme & Styles

Add custom CSS in `astro.config.mjs`:

```javascript
starlight({
  customCss: ['./src/styles/custom.css'],
});
```

### Components

Override Starlight components:

```javascript
starlight({
  components: {
    Header: './src/components/CustomHeader.astro',
  },
});
```

## Troubleshooting

### 404 on deployed site

Check that `base` in `astro.config.mjs` matches your repo name exactly.

### Missing styles in production

Ensure `site` URL matches your GitHub Pages URL.

### CI fails locally

Run `make ci` to see detailed errors. For security issues, run `make audit`.

### Docker issues

```bash
make clean   # Reset containers and volumes
make prune   # Full reset including images
```

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build/)
