'use client'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background accent blobs */}
      <div
        aria-hidden="true"
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] rounded-full bg-purple/5 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue animate-pulse" aria-hidden="true" />
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Full Stack Developer · Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(72px,12vw,160px)] leading-[0.9] tracking-wider text-off-black mb-6"
        >
          Bold websites.
          <br />
          <span className="text-blue">Built to convert.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build fast, automated websites for small businesses
          from design to deployment in 10-14 days so you can spend more time on the things that matter!
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button href="#contact" size="lg">
            Start a Project
          </Button>
          <Button href="mailto:jagbodyke01@gmail.com" variant="secondary" size="lg">
            Email Me
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex justify-center"
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  )
}
