import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import AutomationAngle from '@/components/sections/AutomationAngle'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe">
        <Hero />
        <Services />
        <AutomationAngle />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
