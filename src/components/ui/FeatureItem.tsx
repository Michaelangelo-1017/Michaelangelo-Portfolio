import { LucideIcon } from 'lucide-react'

interface FeatureItemProps {
  icon: LucideIcon
  label: string
  iconColor?: string
  backgroundColor?: string
}

export default function FeatureItem({ icon: Icon, label, iconColor = 'text-blue', backgroundColor = 'bg-blue/10' }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className={`flex-shrink-0 mt-0.5 p-1.5 rounded-md ${backgroundColor}`}>
        <Icon size={16} className={iconColor} />
      </div>
      <span className="font-body text-sm sm:text-base text-off-black leading-snug">{label}</span>
    </div>
  )
}
