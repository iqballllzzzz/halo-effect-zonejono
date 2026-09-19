import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { education, experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked and what I took from it."
          description="A short history of shipping software — from freelance sites to leading frontend work on product teams."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <ol className="relative flex flex-col">
            {experience.map((role, index) => (
              <Reveal key={role.title} as="li" delay={index * 0.05} className="relative">
                <div className="relative flex gap-5 pb-10 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-fg/70 ring-4 ring-bg" />
                    {index < experience.length - 1 ? (
                      <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col gap-3 pb-2">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
                        {role.period}
                      </span>
                      <span className="hidden size-1 rounded-full bg-border sm:block" />
                      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
                        {role.location}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-[0.9375rem] font-medium tracking-[-0.01em] text-fg sm:text-base">
                        {role.title}
                      </h3>
                      <span className="text-[0.8125rem] text-muted">{role.org}</span>
                    </div>

                    <p className="text-pretty text-[0.8125rem] leading-relaxed text-muted">
                      {role.description}
                    </p>

                    <ul className="flex flex-col gap-1.5">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-muted"
                        >
                          <span
                            className="mt-2 size-1 shrink-0 rounded-full bg-border"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-2xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.12} className="flex flex-col gap-6">
            <span className="eyebrow">Education &amp; practice</span>
            <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-border bg-border">
              {education.map((entry) => (
                <div key={entry.title} className="flex flex-col gap-2 bg-surface p-5">
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
                    {entry.period}
                  </span>
                  <span className="text-sm font-medium tracking-[-0.01em] text-fg">
                    {entry.title}
                  </span>
                  <span className="text-[0.8125rem] text-muted">{entry.org}</span>
                  <p className="text-pretty text-[0.8125rem] leading-relaxed text-muted">
                    {entry.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
