import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { menuData } from '../data/menu'

const categories = ['breakfast', 'appetizers', 'mains', 'oven', 'desserts']

function BreakfastSection({ subcategories, lang, currency }) {
  return (
    <div className="space-y-12">
      {subcategories.map((sub, idx) => (
        <div key={idx}>
          <div className="flex items-baseline justify-between pb-3 mb-6 border-b border-white/[0.06]">
            <h4 className="font-serif text-xl md:text-2xl text-text-primary">{sub[lang]}</h4>
            <span className="text-amber text-base font-sans ml-4 shrink-0">{sub.price} {currency}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2.5">
            {sub.items.map((item, i) => (
              <p key={i} className="text-text-secondary text-sm leading-relaxed">
                {item[lang]}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ItemsList({ items, lang, currency }) {
  return (
    <div className="divide-y divide-white/[0.04]">
      {items.map((item, idx) => (
        <div key={idx} className="py-5 first:pt-0 last:pb-0">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg md:text-xl text-text-primary mb-0.5">{item[lang]}</h4>
              {item.description?.[lang] && (
                <p className="text-text-muted text-sm mt-1">{item.description[lang]}</p>
              )}
            </div>
            <span className="text-amber text-sm font-sans shrink-0">{item.price} {currency}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Menu() {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState('breakfast')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const currency = t('menu.currency')
  const data = menuData[active]

  return (
    <section id="menu" className="py-28 md:py-40 bg-bg-secondary">
      <div ref={ref} className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {t('menu.heading')}
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-md mx-auto leading-relaxed">
            {t('menu.subheading')}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 text-[12px] tracking-wider uppercase font-sans transition-all duration-300 cursor-pointer border ${
                active === key
                  ? 'border-amber/40 text-amber bg-amber/[0.05]'
                  : 'border-white/[0.06] text-text-muted hover:text-text-secondary hover:border-white/[0.1]'
              }`}
            >
              {t(`menu.categories.${key}`)}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {active === 'breakfast'
              ? <BreakfastSection subcategories={data.subcategories} lang={lang} currency={currency} />
              : <ItemsList items={data.items} lang={lang} currency={currency} />
            }
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-text-muted text-[11px] tracking-wider mt-14 pt-8 border-t border-white/[0.04]">
          {t('menu.note')}
        </p>
      </div>
    </section>
  )
}
