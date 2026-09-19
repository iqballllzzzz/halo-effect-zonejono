export type Repo = {
  name: string
  description: string
  language: string
  stars: string
  forks: string
  updated: string
  href: string
}

export const repos: Repo[] = [
  {
    name: 'ui-primitives',
    description: 'Headless React primitives with sensible, accessible defaults built in.',
    language: 'TypeScript',
    stars: '482',
    forks: '37',
    updated: '2 days ago',
    href: 'https://github.com/',
  },
  {
    name: 'vite-ts-starter',
    description: 'Opinionated Vite + React + TypeScript starter with Tailwind and tests wired up.',
    language: 'TypeScript',
    stars: '268',
    forks: '41',
    updated: '1 week ago',
    href: 'https://github.com/',
  },
  {
    name: 'use-streaming',
    description: 'A tiny hook for rendering streamed model responses without layout jank.',
    language: 'TypeScript',
    stars: '193',
    forks: '14',
    updated: '3 weeks ago',
    href: 'https://github.com/',
  },
  {
    name: 'token-tools',
    description: 'Utilities for building and consuming design tokens across platforms.',
    language: 'TypeScript',
    stars: '121',
    forks: '9',
    updated: '1 month ago',
    href: 'https://github.com/',
  },
]

export const githubStats = {
  handle: 'iqbals',
  contributions: '1,240',
  repositories: '48',
  followers: '610',
}
