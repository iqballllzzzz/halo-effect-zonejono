import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { principles } from '../data/profile'

export function Philosophy() {
  return (
    <section className="border-t border-border py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Philosophy"
          title="How I think about building software."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <blockquote className="border-l border-fg/20 pl-6">
              <p className="text-balance text-xl font-normal leading-relaxed tracking-[-0.02em] text-fg sm:text-2xl sm:leading-[1.5]">
                “Good software doesn&apos;t need to be complicated.{' '}
                <span className="text-muted">
                  It needs to make complicated things feel simple.
                </span>
                ”
              </p>
              <footer className="mt-5 font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
                M. Iqbal S.
              </footer>
            </blockquote>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={index * 0.05}
                className="flex flex-col gap-2 bg-surface p-5"
              >
                <span className="font-mono text-2xs tracking-[0.14em] text-subtle">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[0.9375rem] font-medium tracking-[-0.01em] text-fg">
                  {principle.title}
                </span>
                <p className="text-pretty text-[0.8125rem] leading-relaxed text-muted">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
