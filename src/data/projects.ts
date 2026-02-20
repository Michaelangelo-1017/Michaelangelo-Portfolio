export interface Project {
  title: string
  tag: string
  description: string
  link: string
  stack: string[]
}

export const projects: Project[] = [
  {
    title: '[Project Name]',
    tag: 'Small Business Website',
    description: '[Brief one-line description of the project and outcome.]',
    link: '#',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    title: '[Project Name]',
    tag: 'Website + Automation',
    description: '[Brief one-line description of the project and outcome.]',
    link: '#',
    stack: ['Next.js', 'Mailchimp', 'Framer Motion'],
  },
  {
    title: '[Project Name]',
    tag: 'E-Commerce Build',
    description: '[Brief one-line description of the project and outcome.]',
    link: '#',
    stack: ['Next.js', 'Shopify', 'TypeScript'],
  },
]
