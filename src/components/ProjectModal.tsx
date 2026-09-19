import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, X } from 'lucide-react'
import type { Project } from '../data/projects'
import { useLockBodyScroll } from '../hooks/useScrollState'
import { Badge } from './ui/Badge'
import { ButtonLink } from './ui/Button'

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  useLockBodyScroll(Boolean(project))

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-bg/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-border bg-surface shadow-lifted sm:rounded-2xl"
            initial={{ y: 24, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-6">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge dot>{project.status}</Badge>
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
                    {project.category} · {project.year}
                  </span>
                </div>
                <h3
                  id="project-modal-title"
                  className="text-xl font-medium tracking-[-0.02em] text-fg sm:text-2xl"
                >
                  {project.name}
                </h3>
                <p className="text-sm text-muted">{project.tagline}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-muted transition-colors duration-200 hover:text-fg"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="no-scrollbar flex-1 overflow-y-auto p-5 sm:p-6">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
                {[
                  { label: 'Role', value: 'Frontend' },
                  { label: 'Timeline', value: project.year },
                  { label: 'Status', value: project.status },
                  { label: project.metric.label, value: project.metric.value },
                ].map((cell) => (
                  <div key={cell.label} className="flex flex-col gap-1.5 bg-surface p-3.5">
                    <span className="font-mono text-2xs uppercase tracking-[0.12em] text-subtle">
                      {cell.label}
                    </span>
                    <span className="text-sm font-medium tracking-[-0.01em] text-fg">
                      {cell.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <span className="eyebrow">Overview</span>
                <p className="text-pretty text-sm leading-relaxed text-muted">{project.overview}</p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <span className="eyebrow">What I built</span>
                <ul className="flex flex-col gap-2.5">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-fg/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <span className="eyebrow">Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-2xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-border p-5 sm:p-6">
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
                {project.slug}
              </span>
              {project.links?.[0] ? (
                <ButtonLink
                  href={project.links[0].href}
                  size="sm"
                  onClick={onClose}
                >
                  {project.links[0].label}
                  <ArrowUpRight className="size-3.5" />
                </ButtonLink>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
