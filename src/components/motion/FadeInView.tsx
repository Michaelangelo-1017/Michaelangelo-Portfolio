'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface FadeInViewProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function FadeInView({
  children,
  delay = 0,
  className,
  direction = 'up',
}: FadeInViewProps) {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const translate = isMobile ? 10 : 32

  const directions = {
    up: { y: translate, x: 0 },
    down: { y: -translate, x: 0 },
    left: { y: 0, x: translate },
    right: { y: 0, x: -translate },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: isMobile ? '-40px' : '-80px' }}
      transition={{
        duration: isMobile ? 0.35 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
