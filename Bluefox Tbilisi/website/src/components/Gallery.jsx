import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { galleryImages } from '../data/menu'

const filterKeys = ['all', 'courtyard', 'food', 'atmosphere']

export default function Gallery() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const filtered = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter)

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const navigate = useCallback((dir) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null
      const next = prev + dir
      if (next < 0) return filtered.length - 1
      if (next >= filtered.length) return 0
      return next
    })
  }, [filtered.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, closeLightbox, navigate])

  return (
    <section id="gallery" className="relative py-40 md:py-56">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="block text-[10px] tracking-[0.5em] uppercase text-turquoise font-sans mb-8"
          >
            {t('gallery.label')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tight mb-6"
          >
            {t('gallery.heading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-secondary text-base md:text-lg max-w-xl mx-auto font-sans"
          >
            {t('gallery.subheading')}
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center flex-wrap gap-3 mb-14 md:mb-16"
        >
          {filterKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-sans transition-all duration-400 cursor-pointer border ${
                activeFilter === key
                  ? 'border-amber/40 text-amber bg-amber/[0.06]'
                  : 'border-white/[0.06] text-text-muted hover:text-text-secondary hover:border-white/[0.1]'
              }`}
            >
              {t(`gallery.filters.${key}`)}
            </button>
          ))}
        </motion.div>

        {/* Grid — natural aspect ratios, no cropping */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
                className="break-inside-avoid mb-5 md:mb-6 cursor-pointer group relative overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-8"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Close"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
              className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
              className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors cursor-pointer"
              aria-label="Next"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Image */}
            <motion.img
              key={filtered[lightboxIndex].src}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs font-sans tracking-wider tabular-nums">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
