export default function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block px-4 py-2 font-body text-sm font-semibold rounded-full bg-gray-50 border border-gray-100 text-off-black hover:border-blue/40 hover:bg-blue/5 transition-all duration-200 cursor-default">
      {label}
    </span>
  )
}
