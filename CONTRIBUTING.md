# Contributing

Contributions are welcome! Here's how to get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install` or use `make docker-dev`
3. Start the dev server: `npm run dev`

## Making Changes

1. Create a branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run checks: `npm run ci`
4. Commit with a clear message
5. Push and open a pull request

## Code Style

This project uses Prettier for formatting. The pre-commit hook will
automatically format staged files.

Run manually: `npm run lint:fix`

## Content Guidelines

- Use clear, concise language
- Include code examples where helpful
- Test all code snippets
- Add frontmatter with title and description

## Reporting Issues

- Search existing issues first
- Include reproduction steps
- Provide environment details (Node version, OS)
