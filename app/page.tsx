import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
} 