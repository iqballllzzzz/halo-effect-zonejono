export type ExperienceItem = {
  period: string
  title: string
  org: string
  location: string
  description: string
  points: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: '2024 — Present',
    title: 'Independent Developer',
    org: 'Self-directed',
    location: 'Remote',
    description:
      'Designing and building products end-to-end — from interface architecture to deployment.',
    points: [
      'Shipped four product surfaces spanning AI tooling, gaming, and education',
      'Own the full stack: design system, frontend, API layer, and release pipeline',
      'Write about frontend architecture and interface craft for a developer audience',
    ],
    tags: ['React', 'TypeScript', 'Product', 'Design Systems'],
  },
  {
    period: '2023 — 2024',
    title: 'Frontend Engineer',
    org: 'Product Studio',
    location: 'Hybrid',
    description:
      'Built customer-facing interfaces for early-stage products under tight timelines.',
    points: [
      'Led the migration of a legacy dashboard to a typed React architecture',
      'Reduced initial bundle size by 42% through route splitting and dependency pruning',
      'Established the shared component library still in use across three products',
    ],
    tags: ['Next.js', 'TanStack Query', 'Performance', 'Accessibility'],
  },
  {
    period: '2022 — 2023',
    title: 'UI Engineer',
    org: 'Digital Agency',
    location: 'On-site',
    description:
      'Translated design intent into precise, responsive, production-ready interfaces.',
    points: [
      'Delivered twenty-plus marketing and product sites with consistent quality',
      'Introduced a token-driven theming layer that cut design-to-dev turnaround',
      'Mentored two junior developers on component composition and review practice',
    ],
    tags: ['Tailwind CSS', 'Framer Motion', 'Figma', 'SEO'],
  },
  {
    period: '2021 — 2022',
    title: 'Junior Web Developer',
    org: 'Freelance',
    location: 'Remote',
    description:
      'Learned the craft by shipping real work for real clients, one project at a time.',
    points: [
      'Built responsive sites for small businesses and independent creators',
      'Handled hosting, domains, SSL, and the non-code details clients actually need',
      'Developed the habit of reading documentation carefully before reaching for a library',
    ],
    tags: ['JavaScript', 'HTML/CSS', 'Deployment'],
  },
]

export type TimelineEntry = {
  date: string
  title: string
  description: string
  kind: 'build' | 'design' | 'research' | 'note'
}

export const timeline: TimelineEntry[] = [
  {
    date: '15 Aug 2026',
    title: 'Portfolio design direction locked',
    description:
      'My portfolio website will have a minimalist, premium, and modern design — neutral palette, tight typography, no decoration for its own sake.',
    kind: 'design',
  },
  {
    date: '8 Aug 2026',
    title: 'Portfolio rebuild in progress',
    description:
      'Building a portfolio website using React, TypeScript, Tailwind CSS, and Framer Motion — component-first, fully typed, accessible by default.',
    kind: 'build',
  },
  {
    date: '13 Jul 2026',
    title: 'Infrastructure decision',
    description:
      'Compared Hostinger and Wix for hosting this site, choosing one for a free domain and SSL to keep the stack lean and ownership complete.',
    kind: 'note',
  },
  {
    date: '7 Jul 2026',
    title: 'Background reading',
    description:
      'US charges Lawrence Bishnoi and Goldy Brar over the Nijjar killing in a wider global crime crackdown — noted while following how large investigations get reported.',
    kind: 'research',
  },
]

export const education = [
  {
    period: '2018 — 2021',
    title: 'Computer Science',
    org: 'University coursework',
    description:
      'Foundations in algorithms, data structures, and software engineering — useful mostly as vocabulary for the problems that came later.',
  },
  {
    period: 'Ongoing',
    title: 'Self-directed practice',
    org: 'Every day',
    description:
      'Reading source code, rebuilding interfaces I admire, and writing up what I learn.',
  },
]
