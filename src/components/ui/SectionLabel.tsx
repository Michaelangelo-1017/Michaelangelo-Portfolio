interface SectionLabelProps {
  children: string
  light?: boolean
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block font-body text-xs font-bold uppercase tracking-[0.2em] mb-4 ${
        light ? 'text-blue/80' : 'text-blue'
      }`}
    >
      {children}
    </span>
  )
}
