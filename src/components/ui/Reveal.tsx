import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery'

type RevealTag = 'div' | 'li' | 'section' | 'article'

export function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: RevealTag
}) {
  const reduced = usePrefersReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const shared = {
    className,
    initial: reduced ? false : ('hidden' as const),
    whileInView: reduced ? undefined : ('visible' as const),
    viewport: { once: true, margin: '-80px 0px -60px 0px' },
    variants,
  }

  if (as === 'li') return <motion.li {...shared}>{children}</motion.li>
  if (as === 'section') return <motion.section {...shared}>{children}</motion.section>
  if (as === 'article') return <motion.article {...shared}>{children}</motion.article>

  return <motion.div {...shared}>{children}</motion.div>
}
