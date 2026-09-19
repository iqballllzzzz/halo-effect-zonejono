import { ArrowUpRight } from 'lucide-react'
import { navItems, profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-fg text-[0.6875rem] font-semibold tracking-tight text-bg">
                {profile.initials}
              </span>
              <span className="text-sm font-medium tracking-[-0.01em] text-fg">
                {profile.name}
              </span>
            </a>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted">
              {profile.role} &amp; {profile.secondaryRole}. Building modern, performant digital
              products.
            </p>
            <span className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
              {profile.location}
            </span>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <span className="eyebrow">Navigate</span>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted transition-colors duration-200 hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow">Elsewhere</span>
            <ul className="flex flex-col gap-2">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors duration-200 hover:text-fg"
                  >
                    {social.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
            © {year} {profile.name} — All rights reserved
          </p>
          <p className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
            Built with React, TypeScript &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
