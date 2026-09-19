import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../data/profile'
import { useActiveSection, useLockBodyScroll, useScrolled } from '../hooks/useScrollState'
import { cn } from '../lib/utils'
import { ThemeToggle } from './ui/ThemeToggle'
import { ButtonLink } from './ui/Button'
import type { Theme } from '../hooks/useTheme'

const sectionIds = navItems.map((item) => item.id)

export function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const scrolled = useScrolled(12)
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useLockBodyScroll(open)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth',
          scrolled
            ? 'border-b border-border bg-bg/85 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/70'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav
          aria-label="Primary"
          className="container-page flex h-16 items-center justify-between gap-6"
        >
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            aria-label={`${profile.name} — home`}
          >
            <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-fg text-[0.6875rem] font-semibold tracking-tight text-bg transition-transform duration-300 ease-smooth group-hover:scale-105">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-medium tracking-[-0.01em] text-fg sm:block">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative rounded-md px-3 py-2 text-[0.8125rem] transition-colors duration-200',
                      isActive ? 'text-fg' : 'text-muted hover:text-fg',
                    )}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-px h-px bg-fg"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <ButtonLink href="#contact" size="sm" className="hidden sm:inline-flex">
              Let&apos;s Talk
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors duration-200 hover:text-fg lg:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="absolute inset-x-0 top-0 border-b border-border bg-surface p-5 sm:p-6"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-fg text-[0.6875rem] font-semibold text-bg">
                    {profile.initials}
                  </span>
                  <span className="text-sm font-medium text-fg">{profile.name}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-fg"
                >
                  <X className="size-4" />
                </button>
              </div>

              <ul className="mt-8 flex flex-col">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.04 * index }}
                    className="border-b border-border last:border-b-0"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-[0.9375rem] text-fg transition-colors hover:text-muted"
                    >
                      {item.label}
                      <span className="font-mono text-2xs text-subtle">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <ButtonLink
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 w-full"
              >
                Let&apos;s Talk
              </ButtonLink>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
