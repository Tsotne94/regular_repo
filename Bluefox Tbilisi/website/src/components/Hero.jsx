import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (e) => {
    e.preventDefault()
    const el = document.querySelector('#reservation')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden">
      {/* Background */}
      <img
        src="/images/courtyard-wide.jpg"
        alt="Blue Fox courtyard"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-amber/90 font-sans mb-6"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-8"
        >
          Blue Fox
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-md leading-relaxed mb-12 font-sans font-light"
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.a
          href="#reservation"
          onClick={scrollTo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="px-10 py-3.5 border border-white/30 text-white text-[12px] tracking-[0.2em] uppercase font-sans
            hover:bg-white/10 hover:border-white/50 transition-all duration-400 cursor-pointer"
        >
          {t('hero.cta')}
        </motion.a>
      </div>
    </section>
  )
}
