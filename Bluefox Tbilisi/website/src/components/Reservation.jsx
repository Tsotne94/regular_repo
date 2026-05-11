import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'

const timeSlots = []
for (let h = 8; h <= 22; h++) {
  for (let m = 0; m < 60; m += 30) {
    if (h === 22 && m > 0) break
    timeSlots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
  }
}

export default function Reservation() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const [form, setForm] = useState({ date: '', time: '', guests: '2', name: '', phone: '', requests: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = t('reservation.validation.name')
    if (!form.phone.trim()) e.phone = t('reservation.validation.phone')
    if (!form.date) e.date = t('reservation.validation.date')
    if (!form.time) e.time = t('reservation.validation.time')
    setErrors(e)
    return !Object.keys(e).length
  }

  const submit = (e) => { e.preventDefault(); if (validate()) setDone(true) }
  const change = (f) => (e) => {
    setForm((p) => ({ ...p, [f]: e.target.value }))
    if (errors[f]) setErrors((p) => ({ ...p, [f]: undefined }))
  }
  const reset = () => { setForm({ date: '', time: '', guests: '2', name: '', phone: '', requests: '' }); setErrors({}); setDone(false) }

  const today = new Date().toISOString().split('T')[0]

  const input = (f) =>
    `w-full bg-white/[0.03] border ${errors[f] ? 'border-red-500/30' : 'border-white/[0.07]'} px-4 py-3.5 text-text-primary text-sm
    focus:outline-none focus:border-amber/40 transition-all duration-300 placeholder:text-text-muted/40 appearance-none`

  return (
    <section id="reservation" className="py-28 md:py-40">
      <div ref={ref} className="max-w-lg mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            {t('reservation.heading')}
          </h2>
          <p className="text-text-secondary text-sm">{t('reservation.subheading')}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onSubmit={submit}
              noValidate
              className="space-y-5"
            >
              {/* Date + Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-text-muted mb-2">{t('reservation.form.date')}</label>
                  <input type="date" value={form.date} onChange={change('date')} min={today} className={input('date')} />
                  {errors.date && <p className="text-red-400/70 text-xs mt-1.5">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-[11px] tracking-wider uppercase text-text-muted mb-2">{t('reservation.form.time')}</label>
                  <select value={form.time} onChange={change('time')} className={input('time')}>
                    <option value="">—</option>
                    {timeSlots.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.time && <p className="text-red-400/70 text-xs mt-1.5">{errors.time}</p>}
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-[11px] tracking-wider uppercase text-text-muted mb-2">{t('reservation.form.guests')}</label>
                <select value={form.guests} onChange={change('guests')} className={input('guests')}>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? t('reservation.form.guest') : t('reservation.form.guests_plural')}</option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-[11px] tracking-wider uppercase text-text-muted mb-2">{t('reservation.form.name')}</label>
                <input type="text" value={form.name} onChange={change('name')} className={input('name')} />
                {errors.name && <p className="text-red-400/70 text-xs mt-1.5">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] tracking-wider uppercase text-text-muted mb-2">{t('reservation.form.phone')}</label>
                <input type="tel" value={form.phone} onChange={change('phone')} className={input('phone')} />
                {errors.phone && <p className="text-red-400/70 text-xs mt-1.5">{errors.phone}</p>}
              </div>

              {/* Requests */}
              <div>
                <label className="block text-[11px] tracking-wider uppercase text-text-muted mb-2">{t('reservation.form.requests')}</label>
                <textarea
                  value={form.requests}
                  onChange={change('requests')}
                  rows={3}
                  placeholder={t('reservation.form.requestsPlaceholder')}
                  className={`${input('requests')} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 mt-2 bg-amber text-bg-primary text-[12px] tracking-[0.15em] uppercase font-medium
                  hover:bg-amber-light transition-colors duration-300 cursor-pointer"
              >
                {t('reservation.form.submit')}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <div className="w-14 h-14 rounded-full border border-amber/40 mx-auto mb-6 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-text-primary mb-3">{t('reservation.success.title')}</h3>
              <p className="text-text-secondary text-sm mb-8 max-w-xs mx-auto leading-relaxed">{t('reservation.success.message')}</p>
              <button
                onClick={reset}
                className="px-6 py-2.5 border border-white/[0.08] text-text-muted text-[11px] tracking-wider uppercase
                  hover:border-amber/30 hover:text-amber transition-all duration-300 cursor-pointer"
              >
                {t('reservation.success.back')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
