import { ArrowUpRight, Check } from 'lucide-react'
import type { Project } from '../data/projects'
import { cn } from '../lib/utils'

export function ProjectCard({
  project,
  index,
  onOpen,
  className,
}: {
  project: Project
  index: number
  onOpen: (project: Project) => void
  className?: string
}) {
  return (
    <article
      className={cn(
        'group surface-card relative flex flex-col overflow-hidden hover:border-fg/20 hover:shadow-lifted',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100',
          project.accent,
        )}
      />

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
            {String(index + 1).padStart(2, '0')} — {project.category}
          </span>
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`Open details for ${project.name}`}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all duration-200 ease-smooth hover:border-fg/25 hover:text-fg"
          >
            <ArrowUpRight className="size-4 transition-transform duration-200 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <h3 className="mt-8 text-lg font-medium tracking-[-0.02em] text-fg sm:text-xl">
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted">{project.tagline}</p>

        <p className="mt-4 text-pretty text-[0.8125rem] leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-col gap-2">
          {project.highlights.slice(0, 2).map((item) => (
            <span key={item} className="flex gap-2 text-[0.8125rem] leading-relaxed text-muted">
              <Check className="mt-0.5 size-3.5 shrink-0 text-fg/40" />
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-6">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-surface/80 px-2 py-0.5 font-mono text-2xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-between gap-3 border-t border-border px-5 py-3 sm:px-6">
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
          {project.metric.value} {project.metric.label}
        </span>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="text-[0.8125rem] font-medium text-fg underline-offset-4 transition-colors hover:underline"
        >
          View case
        </button>
      </div>
    </article>
  )
}
