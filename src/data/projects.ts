export type Project = {
  slug: string
  name: string
  category: string
  year: string
  tagline: string
  description: string
  overview: string
  highlights: string[]
  stack: string[]
  status: 'Live' | 'In development' | 'Private beta'
  accent: string
  metric: { value: string; label: string }
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: 'aqualibria-ai',
    name: 'AquaLibriaAI',
    category: 'AI Platform',
    year: '2026',
    tagline: 'A conversational workspace for research-heavy teams.',
    description:
      'An AI platform where documents, models, and conversations live in one place — built around streaming responses and cited answers.',
    overview:
      'AquaLibriaAI started from a simple frustration: research work was spread across chat windows, PDFs, and bookmark folders. The goal was a single surface where a team could ask a question, see exactly which sources answered it, and continue the thread later without losing context.',
    highlights: [
      'Streaming response UI with token-level rendering and graceful cancellation',
      'Inline source citations that deep-link back to the originating document',
      'Threaded conversation workspace with persistent, searchable history',
      'Optimistic message handling so the interface never blocks on the network',
      'Composable prompt controls built on a small, typed state machine',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Node.js', 'PostgreSQL'],
    status: 'In development',
    accent: 'from-zinc-500/20 to-zinc-500/0',
    metric: { value: '< 90ms', label: 'First token to paint' },
    links: [{ label: 'Case study', href: '#contact' }],
  },
  {
    slug: 'fniplay',
    name: 'FNIPLAY',
    category: 'Gaming Platform',
    year: '2025',
    tagline: 'Discovery and community for competitive players.',
    description:
      'A gaming platform combining match discovery, player profiles, and live community feeds with a focus on low-latency interaction.',
    overview:
      'FNIPLAY needed to feel instant. Competitive players abandon a platform the moment it stutters, so the architecture leans on aggressive caching, skeleton-first rendering, and a component layer that keeps re-renders contained to the smallest possible subtree.',
    highlights: [
      'Virtualised match lists that stay smooth past ten thousand rows',
      'Realtime presence and scoreboard updates over websockets',
      'Route-level code splitting with prefetching on hover',
      'Player profile pages with shareable, server-rendered metadata',
      'Dark-first theme system tuned for long late-night sessions',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'WebSockets'],
    status: 'Live',
    accent: 'from-zinc-400/20 to-zinc-400/0',
    metric: { value: '60fps', label: 'Sustained during live feeds' },
    links: [{ label: 'View platform', href: '#contact' }],
  },
  {
    slug: 'cortexclip-ai',
    name: 'CortexClipAI',
    category: 'AI SaaS',
    year: '2025',
    tagline: 'Turning long-form video into publishable clips.',
    description:
      'An AI SaaS product that transcribes, segments, and repackages long video into short clips — with an editor built for speed.',
    overview:
      'The hard part of CortexClipAI was never the model; it was the editing surface. Creators needed to review dozens of generated clips quickly, keep the good ones, and export without fighting a timeline. The interface is built around keyboard-driven triage and instant preview.',
    highlights: [
      'Timeline editor with frame-accurate scrubbing and keyboard shortcuts',
      'Job queue UI that surfaces progress, failures, and retries honestly',
      'Billing and usage meters wired to plan limits without layout shift',
      'Caption editing with per-word timing controls',
      'Export presets for the major short-form platforms',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Stripe', 'FFmpeg'],
    status: 'Private beta',
    accent: 'from-zinc-500/20 to-zinc-500/0',
    metric: { value: '3×', label: 'Faster clip triage' },
    links: [{ label: 'Request access', href: '#contact' }],
  },
  {
    slug: 'pixelcoder',
    name: 'PixelCoder',
    category: 'Education',
    year: '2024',
    tagline: 'Learning frontend by building real interfaces.',
    description:
      'An education platform that teaches frontend engineering through guided, browser-based builds instead of video lectures.',
    overview:
      'PixelCoder replaces passive watching with active building. Every lesson ends in a working component. The platform pairs a structured curriculum with an in-browser editor, instant preview, and tests that explain what went wrong rather than just failing.',
    highlights: [
      'In-browser editor with instant, sandboxed preview',
      'Curriculum structured as progressive, self-contained builds',
      'Assertion-based challenges with human-readable failure messages',
      'Progress tracking and streaks that respect the learner\u2019s time',
      'Accessible, mobile-friendly reading experience throughout',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Monaco Editor', 'Node.js', 'SQLite'],
    status: 'Live',
    accent: 'from-zinc-400/20 to-zinc-400/0',
    metric: { value: '12k+', label: 'Lessons completed' },
    links: [{ label: 'Visit project', href: '#contact' }],
  },
]
