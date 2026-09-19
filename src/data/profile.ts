import type { LucideIcon } from 'lucide-react'
import {
  Blocks,
  Boxes,
  Braces,
  Cpu,
  Gauge,
  LayoutDashboard,
  Layers,
  Palette,
  Rocket,
  Search,
  ServerCog,
  Settings,
  Workflow,
} from 'lucide-react'

export const profile = {
  name: 'M. Iqbal S.',
  initials: 'MI',
  role: 'Frontend Engineer',
  secondaryRole: 'Independent Developer',
  location: 'Remote · Working worldwide',
  email: 'hello@iqbals.dev',
  availability: 'Available for opportunities',
  headline: 'Building digital experiences, one pixel at a time.',
  subheadline:
    "I'm M. Iqbal S., a frontend engineer and independent developer focused on building modern, performant, and thoughtful digital products.",
  summary:
    'I design and ship interfaces that feel inevitable — fast to load, calm to use, and precise down to the last pixel. My work sits at the seam between design systems and production engineering, where the details that people never notice are the ones that make software feel trustworthy.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
    { label: 'Email', href: 'mailto:hello@iqbals.dev' },
  ],
}

export type SkillGroup = {
  title: string
  description: string
  icon: LucideIcon
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core Frontend',
    description: 'The foundation of everything I ship.',
    icon: Braces,
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 94 },
    ],
  },
  {
    title: 'Interface & Motion',
    description: 'Making products feel considered.',
    icon: Palette,
    skills: [
      { name: 'Design Systems', level: 90 },
      { name: 'Framer Motion', level: 86 },
      { name: 'Accessibility', level: 88 },
      { name: 'Responsive Layout', level: 95 },
    ],
  },
  {
    title: 'Tooling & Platform',
    description: 'Modern build and delivery workflows.',
    icon: ServerCog,
    skills: [
      { name: 'Vite', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'Git & CI', level: 84 },
      { name: 'Testing', level: 78 },
    ],
  },
  {
    title: 'Product Adjacent',
    description: 'Beyond the pixel — context and craft.',
    icon: Workflow,
    skills: [
      { name: 'UI/UX Thinking', level: 87 },
      { name: 'Performance', level: 90 },
      { name: 'SEO Basics', level: 80 },
      { name: 'Technical Writing', level: 76 },
    ],
  },
]

export const toolkit = [
  'React',
  'TypeScript',
  'Next.js',
  'Vite',
  'Tailwind CSS',
  'Framer Motion',
  'Radix UI',
  'Zustand',
  'TanStack Query',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Figma',
  'Vitest',
  'Playwright',
  'GitHub Actions',
  'Vercel',
  'Docker',
]

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Product Interfaces',
    description:
      'End-to-end frontend builds — from design handoff to production, typed and tested.',
    icon: Layers,
  },
  {
    title: 'Design Systems',
    description:
      'Scalable component libraries with tokens, documentation, and sensible defaults.',
    icon: Blocks,
  },
  {
    title: 'Performance Audits',
    description:
      'Core Web Vitals work: bundle trimming, render profiling, and perceived-speed tuning.',
    icon: Gauge,
  },
  {
    title: 'AI Product Surfaces',
    description:
      'Streaming UI, tool-calling flows, and interfaces that make model output usable.',
    icon: Cpu,
  },
  {
    title: 'Dashboards & Tooling',
    description:
      'Data-dense internal tools that stay fast and readable as they grow.',
    icon: LayoutDashboard,
  },
  {
    title: 'Launch Support',
    description:
      'Landing pages, SEO fundamentals, analytics, and the unglamorous final mile.',
    icon: Rocket,
  },
]

export type ProcessStep = {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Understand the problem, the users, and the constraints before writing a single line.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Architect',
    description:
      'Map the components, data flow, and states. Decide what to build and what to skip.',
    icon: Boxes,
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Small commits, typed boundaries, and a preview link on day one — always shippable.',
    icon: Blocks,
  },
  {
    step: '04',
    title: 'Refine',
    description:
      'Measure, polish interactions, tighten accessibility, and ship with confidence.',
    icon: Settings,
  },
]

export const principles = [
  {
    title: 'Clarity over cleverness',
    description: 'The best interface is one nobody has to think about.',
  },
  {
    title: 'Performance is a feature',
    description: 'Speed changes how people feel about a product before they read a word.',
  },
  {
    title: 'Systems, not screens',
    description: 'Consistent primitives compound; one-off pages decay.',
  },
  {
    title: 'Ship, then sharpen',
    description: 'Real feedback beats speculative polish every single time.',
  },
]

export const stats = [
  { value: '5+', label: 'Years building for the web' },
  { value: '30+', label: 'Projects shipped end-to-end' },
  { value: '4', label: 'Products in active development' },
  { value: '100%', label: 'TypeScript across new work' },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
