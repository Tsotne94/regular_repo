import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import LanguageToggle from './LanguageToggle'

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'menu', href: '#menu' },
  { key: 'about', href: '#about' },
  { key: 'reservation', href: '#reservation' },
  { key: 'contact', href: '#contact' },
]

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setOpen(false)
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-primary/95 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="font-serif text-xl text-text-primary hover:text-amber transition-colors duration-300"
          >
            Blue Fox
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-[13px] text-text-muted hover:text-text-primary transition-colors duration-300"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1px] bg-text-primary transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block w-5 h-[1px] bg-text-primary transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.key}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="text-2xl text-text-primary hover:text-amber transition-colors"
              >
                {t(`nav.${link.key}`)}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <LanguageToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
