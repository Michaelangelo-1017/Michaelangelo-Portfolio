'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '@/types'

export default function ProjectCard({ title, tag, description, link, stack }: Project) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between p-8 bg-white border border-gray-100 rounded-2xl hover:border-blue/30 hover:shadow-[0_8px_40px_rgba(25,155,255,0.12)] transition-all duration-300"
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue bg-blue/10 rounded-full font-body">
            {tag}
          </span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title}`}
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
          >
            <ArrowUpRight size={20} className="text-off-black" />
          </a>
        </div>
        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl tracking-wide text-off-black mb-3 leading-none">
          {title}
        </h3>
        <p className="font-body text-sm sm:text-base text-gray-500 leading-relaxed">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {stack.map((s) => (
          <span
            key={s}
            className="text-xs font-body font-medium px-3 py-1 rounded-full bg-gray-50 text-gray-600"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
