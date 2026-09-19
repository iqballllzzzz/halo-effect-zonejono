export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]

/** Tiny classname joiner — avoids pulling in clsx for a handful of call sites. */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = []

  const walk = (value: ClassValue) => {
    if (value === null || value === undefined || value === false || value === true) return
    if (typeof value === 'number') {
      if (value !== 0) out.push(String(value))
      return
    }
    if (Array.isArray(value)) {
      value.forEach(walk)
      return
    }
    if (value) out.push(value)
  }

  inputs.forEach(walk)
  return out.join(' ')
}
