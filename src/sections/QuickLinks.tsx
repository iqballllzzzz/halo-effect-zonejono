import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'

const icons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Email: Mail,
  X: Mail,
}

export function QuickLinks() {
  return (
    <section aria-label="Quick links" className="pt-16 sm:pt-20">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="eyebrow">Find me elsewhere</span>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
            {profile.socials.map((social) => {
              const Icon = icons[social.label] ?? ArrowUpRight
              const external = social.href.startsWith('http')
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-[0.8125rem] text-muted transition-all duration-200 ease-smooth hover:border-fg/20 hover:bg-surface-2 hover:text-fg"
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                  {social.label}
                  <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
