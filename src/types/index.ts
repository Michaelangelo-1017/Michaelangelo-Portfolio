export interface Project {
  title: string
  tag: string
  description: string
  link: string
  stack: string[]
}

export interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
}
