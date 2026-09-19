import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { skillGroups, toolkit } from '../data/profile'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Capabilities"
          title="Tools I work with."
          description="A pragmatic stack — chosen because it stays fast, scales cleanly, and keeps the codebase readable a year from now."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05} className="h-full">
              <div className="surface-card flex h-full flex-col p-5 hover:border-fg/20 sm:p-6">
                <div className="flex items-start gap-3.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-fg">
                    <group.icon className="size-4" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[0.9375rem] font-medium tracking-[-0.01em] text-fg">
                      {group.title}
                    </h3>
                    <p className="text-[0.8125rem] leading-relaxed text-muted">
                      {group.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-col">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-4 border-t border-border py-2.5 first:border-t-0 first:pt-0"
                    >
                      <span className="text-[0.8125rem] text-muted">{skill.name}</span>
                      <div className="flex items-center gap-2" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.round(skill.level / 20)
                                ? 'h-3 w-0.5 rounded-full bg-fg/70'
                                : 'h-3 w-0.5 rounded-full bg-border'
                            }
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="surface-card flex flex-col gap-4 p-5 sm:p-6">
            <span className="eyebrow">Also comfortable with</span>
            <ul className="flex flex-wrap gap-1.5">
              {toolkit.map((tool) => (
                <li
                  key={tool}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-2xs text-muted transition-colors duration-200 hover:border-fg/20 hover:text-fg"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
