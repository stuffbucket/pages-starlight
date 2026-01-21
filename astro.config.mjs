// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages configuration
// For user/org sites (username.github.io): site = 'https://username.github.io', base = '/'
// For project sites: site = 'https://username.github.io', base = '/repo-name'
const GITHUB_USER = 'your-username'; // TODO: Update with your GitHub username or org
const REPO_NAME = 'your-repo-name'; // TODO: Update with your repository name
const IS_USER_SITE = false; // Set to true if this is username.github.io

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: IS_USER_SITE ? '/' : `/${REPO_NAME}`,
  integrations: [
    starlight({
      title: 'My Documentation', // TODO: Update with your project title
      description: 'Documentation built with Astro Starlight', // TODO: Update description
      favicon: '/favicon.svg',
      lastUpdated: true,
      editLink: {
        baseUrl: `https://github.com/${GITHUB_USER}/${REPO_NAME}/edit/main/`,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: `https://github.com/${GITHUB_USER}/${REPO_NAME}`,
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'index' },
            { label: 'Quick Start', slug: 'getting-started/quickstart' },
          ],
        },
        {
          label: 'Guides',
          items: [{ label: 'Workflow', slug: 'guides/example' }],
        },
        {
          label: 'Reference',
          items: [{ label: 'Configuration', slug: 'reference/configuration' }],
        },
      ],
    }),
  ],
});
