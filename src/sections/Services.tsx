import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { processSteps, services } from '../data/profile'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-border py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Services"
          title="What I can help you build."
          description="Available for freelance projects, contract work, and long-term collaborations. Small scopes welcome."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05} className="h-full">
              <div className="surface-card group flex h-full flex-col gap-4 p-5 hover:border-fg/20 sm:p-6">
                <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-fg transition-colors duration-300 group-hover:border-fg/20">
                  <service.icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="text-[0.9375rem] font-medium tracking-[-0.01em] text-fg">
                  {service.title}
                </h3>
                <p className="text-pretty text-[0.8125rem] leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16">
          <div className="surface-card overflow-hidden">
            <div className="flex flex-col gap-2 border-b border-border p-5 sm:p-6">
              <span className="eyebrow">How I work</span>
              <h3 className="text-lg font-medium tracking-[-0.02em] text-fg">
                A simple, predictable process.
              </h3>
            </div>
            <ol className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <li key={step.step} className="flex flex-col gap-3 bg-surface p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xs tracking-[0.14em] text-subtle">
                      {step.step}
                    </span>
                    <step.icon className="size-4 text-muted" aria-hidden="true" />
                  </div>
                  <span className="text-[0.9375rem] font-medium tracking-[-0.01em] text-fg">
                    {step.title}
                  </span>
                  <p className="text-pretty text-[0.8125rem] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
