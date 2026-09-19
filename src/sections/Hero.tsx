import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'
import { Badge } from '../components/ui/Badge'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hairline-grid opacity-[0.55] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-fg/[0.035] blur-3xl"
      />

      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <motion.div
            variants={container}
            initial={reduced ? false : 'hidden'}
            animate={reduced ? undefined : 'show'}
            className="flex flex-col items-start"
          >
            <motion.div variants={item}>
              <Badge dot>{profile.availability}</Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 max-w-[18ch] text-balance text-[2.125rem] font-medium leading-[1.08] tracking-[-0.035em] text-fg sm:text-5xl lg:text-[3.5rem]"
            >
              Building digital experiences,{' '}
              <span className="text-muted">one pixel at a time.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-[0.9375rem] leading-relaxed text-muted sm:text-base"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center"
            >
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium tracking-[-0.01em] text-bg shadow-subtle transition-all duration-200 ease-smooth hover:opacity-90 active:scale-[0.985]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-medium tracking-[-0.01em] text-fg transition-all duration-200 ease-smooth hover:border-fg/20 hover:bg-surface-2 active:scale-[0.985]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Contact Me
              </a>
            </motion.div>

            <motion.a
              variants={item}
              href="#about"
              className="group mt-8 inline-flex items-center gap-2 text-[0.8125rem] text-muted transition-colors duration-200 hover:text-fg"
            >
              Explore my work
              <ArrowDown
                className="size-3.5 transition-transform duration-300 ease-smooth group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </motion.a>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 font-mono text-2xs uppercase tracking-[0.14em] text-subtle"
            >
              <span>{profile.role}</span>
              <span className="hidden size-1 rounded-full bg-border sm:block" aria-hidden="true" />
              <span>{profile.secondaryRole}</span>
              <span className="hidden size-1 rounded-full bg-border sm:block" aria-hidden="true" />
              <span>{profile.location}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroPanel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeroPanel() {
  return (
    <div className="surface-card overflow-hidden shadow-lifted">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <span className="font-mono text-2xs text-subtle">engineer.ts</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
          <span className="size-1.5 rounded-full bg-fg/50" aria-hidden="true" />
          Live
        </span>
      </div>

      <div className="p-5 font-mono text-[0.75rem] leading-relaxed sm:text-[0.8125rem]">
        <pre className="overflow-x-auto text-muted">
          <code>{`const engineer = {
  name: 'M. Iqbal S.',
  role: 'Frontend Engineer',
  focus: ['UI', 'DX', 'Performance'],
  stack: ['React', 'TypeScript', 'Tailwind'],
  status: 'open_to_work',
}`}</code>
        </pre>

        <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-muted">
          <span className="text-fg">$</span>
          <span className="truncate">status.check()</span>
          <motion.span
            aria-hidden="true"
            className="inline-block h-4 w-1.5 bg-fg/70"
            animate={{ opacity: [1, 0.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px border-t border-border bg-border">
        <div className="flex flex-col gap-1 bg-surface px-5 py-4">
          <span className="eyebrow">Currently building</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium tracking-[-0.01em] text-fg">
            {projects[0].name}
            <ArrowUpRight className="size-3.5 text-muted" aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-col gap-1 bg-surface px-5 py-4">
          <span className="eyebrow">Response time</span>
          <span className="text-sm font-medium tracking-[-0.01em] text-fg">
            Usually within a day
          </span>
        </div>
      </div>
    </div>
  )
}
