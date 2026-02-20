export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl tracking-widest text-off-black">
          MICHAELANGELO
        </span>
        <p className="font-body text-sm text-gray-400">
          © {new Date().getFullYear()} Michaelangelo · Full-Stack Developer
        </p>
      </div>
    </footer>
  )
}
