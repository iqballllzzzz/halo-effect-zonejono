import { Quote } from 'lucide-react'
import { profile, stats } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="About"
          title="A frontend engineer who cares about the details nobody asks for."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <p className="text-pretty text-base leading-relaxed text-muted sm:text-[1.0625rem]">
              {profile.summary}
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted sm:text-[1.0625rem]">
              I work primarily in React and TypeScript with Tailwind, and I have a soft spot for
              interfaces that stay quiet: tight spacing, honest states, no decoration that has to
              justify itself. That means leaning on composition, types, and a small shared component
              layer instead of one-off solutions that only make sense in the file they were written
              in.
            </p>

            <figure className="mt-2 flex gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6">
              <Quote className="size-4 shrink-0 text-subtle" aria-hidden="true" />
              <blockquote className="text-pretty text-sm leading-relaxed text-fg sm:text-[0.9375rem]">
                My goal is straightforward: build interfaces that feel fast, read clearly, and hold
                up under real use — then keep improving them long after launch.
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-px overflow-hidden rounded-xl border border-border bg-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-4 bg-surface px-5 py-5"
              >
                <span className="text-2xl font-medium tracking-[-0.03em] text-fg">{stat.value}</span>
                <span className="text-right text-[0.8125rem] leading-snug text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
