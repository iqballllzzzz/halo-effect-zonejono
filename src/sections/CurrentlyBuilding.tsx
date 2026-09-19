import { motion } from 'framer-motion'
import { ArrowUpRight, Boxes, Cpu, Layers, Sparkles } from 'lucide-react'
import { projects } from '../data/projects'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'
import { Reveal } from '../components/ui/Reveal'

const capabilities = [
  { label: 'Agents', icon: Cpu },
  { label: 'Workspace', icon: Layers },
  { label: 'Tooling', icon: Boxes },
  { label: 'Experiment', icon: Sparkles },
]

export function CurrentlyBuilding() {
  const project = projects[0]
  const reduced = usePrefersReducedMotion()

  return (
    <section className="border-t border-border py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 hairline-grid opacity-40 [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)]"
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.16em] text-subtle">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-fg/40" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-fg/70" />
                  </span>
                  Currently building
                </span>
                <h2 className="text-2xl font-medium tracking-[-0.025em] text-fg sm:text-3xl">
                  {project.name}
                </h2>
              </div>

              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                In development
              </span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div className="flex flex-col gap-5">
                <p className="max-w-lg text-pretty text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                  {project.description}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {project.highlights.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-muted"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-fg/30" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group inline-flex w-fit items-center gap-2 text-[0.8125rem] font-medium text-fg underline-offset-4 transition-colors hover:underline"
                >
                  Explore AquaLibriaAI
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="eyebrow">Build focus</span>
                  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                    {capabilities.map((capability) => (
                      <div
                        key={capability.label}
                        className="flex items-center gap-2 bg-surface px-3.5 py-3"
                      >
                        <capability.icon className="size-3.5 text-muted" aria-hidden="true" />
                        <span className="text-[0.8125rem] text-fg">{capability.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">Stack</span>
                    <span className="font-mono text-2xs text-subtle">{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-2xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <div className="absolute inset-0 rounded-full bg-fg/15" />
                  {reduced ? null : (
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-y-0 w-1/3 rounded-full bg-fg/40"
                      animate={{ x: ['-120%', '320%'] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
