'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-display text-2xl tracking-widest text-off-black hover:text-blue transition-colors"
          aria-label="Michaelangelo — Home"
        >
          MICHAELANGELO
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none" role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-body text-sm font-medium text-gray-600 hover:text-blue transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#contact" size="sm">
          Start a Project
        </Button>
      </nav>
    </motion.header>
  )
}
