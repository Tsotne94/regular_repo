import { LanguageProvider } from './context/LanguageContext.jsx'
import { translations } from './data/translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider translations={translations}>
      <div className="min-h-screen bg-bg-primary text-text-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Reservation />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
