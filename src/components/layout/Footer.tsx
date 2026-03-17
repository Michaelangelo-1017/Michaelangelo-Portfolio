export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-6 sm:py-8 px-4 sm:px-6 pb-safe">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl tracking-widest text-off-black">
          MICHAELANGELO
        </span>
        <p className="font-body text-sm text-gray-400">
          © {new Date().getFullYear()} Michaelangelo · Automation Consultant & Full-Stack Developer
        </p>
      </div>
    </footer>
  )
}
