import { LucideIcon } from 'lucide-react'

interface FeatureItemProps {
  icon: LucideIcon
  label: string
}

export default function FeatureItem({ icon: Icon, label }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-md bg-blue/10">
        <Icon size={16} className="text-blue" />
      </div>
      <span className="font-body text-sm sm:text-base text-off-black leading-snug">{label}</span>
    </div>
  )
}
