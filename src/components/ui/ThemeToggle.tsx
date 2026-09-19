import { Moon, Sun } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { Theme } from '../../hooks/useTheme'

export function ThemeToggle({
  theme,
  onToggle,
  className,
}: {
  theme: Theme
  onToggle: () => void
  className?: string
}) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className={cn(
        'relative inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors duration-200 hover:border-fg/20 hover:text-fg',
        className,
      )}
    >
      <Sun
        className={cn(
          'absolute size-4 transition-all duration-300 ease-smooth',
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
        )}
      />
      <Moon
        className={cn(
          'absolute size-4 transition-all duration-300 ease-smooth',
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0',
        )}
      />
    </button>
  )
}
