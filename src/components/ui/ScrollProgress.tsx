import { useScrollProgress } from '../../hooks/useScrollState'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-px bg-transparent"
    >
      <div
        className="h-px origin-left bg-fg/50 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
