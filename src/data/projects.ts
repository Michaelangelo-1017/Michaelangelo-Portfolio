export interface Project {
  title: string
  tag: string
  description: string
  link: string
  stack: string[]
}

export const projects: Project[] = [
  {
    title: 'Aurelia Turnover Cleaning',
    tag: 'Small Business Website',
    description: 'Aurelia Turnover Cleaning is a demo website that provides cleaning services to the community which I designed and built. I built this as a demo website to learn Next.js and Tailwind CSS.',
    link: 'https://aurelia-turnover-cleaning-webpage.vercel.app',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    title: 'Momentum Peak',
    tag: 'Landing Page + Automation',
    description: 'Momentum Peak is a demo website for a personal trainer which I designed and built. I built this as a demo website to learn Next.js, Tailwind CSS, Framer Motion and automation.',
    link: 'https://momentum-peak-web-page.vercel.app',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript', 'Vercel'],
  },
  {
    title: 'Michaelangelo Portfolio',
    tag: 'Portfolio Website',
    description: 'Michaelangelo Portfolio is a portfolio website for myself a full-stack developer. I built this as a portfolio website to learn Next.js, Tailwind CSS, Framer Motion, AI integration and automation.',
    link: 'https://michaelangelo-portfolio.vercel.app',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript', 'Vercel', 'n8n'],
  },
]
