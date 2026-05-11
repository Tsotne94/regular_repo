import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-28 md:py-40">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Two column: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight tracking-tight mb-10 whitespace-pre-line">
              {t('about.heading')}
            </h2>
            <p className="text-text-secondary text-[15px] leading-[1.85] mb-6">
              {t('about.p1')}
            </p>
            <p className="text-text-secondary text-[15px] leading-[1.85]">
              {t('about.p2')}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img
              src="/images/greenhouse-candles.jpg"
              alt="Blue Fox conservatory"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Chef */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-5 pt-10 border-t border-white/[0.06]"
        >
          <img
            src="/images/chef-zuka.jpg"
            alt="Chef Zuka"
            className="w-14 h-14 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-text-primary font-medium text-sm">{t('about.chefLabel')}</p>
            <p className="text-text-muted text-xs mt-0.5">{t('about.chefTitle')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
