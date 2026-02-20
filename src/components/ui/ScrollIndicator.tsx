'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-1 text-gray-400"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
    >
      <span className="font-body text-xs tracking-[0.15em] uppercase">Scroll</span>
      <ChevronDown size={18} />
    </motion.div>
  )
}
