import { BookOpen, Palette, Wrench, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { timeline } from '../data/experience'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'

const kindIcon: Record<string, LucideIcon> = {
  build: Wrench,
  design: Palette,
  research: BookOpen,
  note: Zap,
}

export function Timeline() {
  return (
    <section className="border-t border-border py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Activity"
          title="Recent notes from the workbench."
          description="Design decisions, build logs, and the occasional piece of research that shaped how this site and the products on it came together."
        />

        <ol className="mt-12 flex flex-col">
          {timeline.map((entry, index) => {
            const Icon = kindIcon[entry.kind] ?? Zap
            return (
              <Reveal key={entry.title} as="li" delay={index * 0.05}>
                <article className="group grid gap-4 border-t border-border py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
                    {entry.date}
                  </span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-muted transition-colors duration-300 group-hover:text-fg">
                        <Icon className="size-3" aria-hidden="true" />
                      </span>
                      <h3 className="text-[0.9375rem] font-medium tracking-[-0.01em] text-fg">
                        {entry.title}
                      </h3>
                    </div>
                    <p className="text-pretty pl-9 text-[0.8125rem] leading-relaxed text-muted">
                      {entry.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
