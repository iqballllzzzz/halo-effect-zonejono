import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export function Badge({
  children,
  className,
  dot = false,
}: {
  children: ReactNode
  className?: string
  dot?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-2xs uppercase tracking-[0.12em] text-muted',
        className,
      )}
    >
      {dot ? <span className="size-1.5 rounded-full bg-fg/60" /> : null}
      {children}
    </span>
  )
}
