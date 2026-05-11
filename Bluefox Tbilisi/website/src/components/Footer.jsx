import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="py-20 md:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-text-primary mb-2">Blue Fox</p>
            <p className="text-text-muted text-sm">{t('hero.subtitle')}</p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-text-muted mb-4">{t('footer.hours')}</h4>
            <p className="text-text-secondary text-sm">{t('footer.hoursValue')}</p>
            <div className="mt-6">
              <h4 className="text-[11px] tracking-[0.3em] uppercase text-text-muted mb-3">{t('footer.location')}</h4>
              <p className="text-text-secondary text-sm mb-2">{t('footer.locationValue')}</p>
              <a
                href="https://share.google/TdiiKvyucr2ihNZOw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber text-sm hover:text-amber-light transition-colors inline-flex items-center gap-1"
              >
                {t('footer.viewOnMap')}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-text-muted mb-4">{t('footer.contact')}</h4>
            <a href="tel:+995591986598" className="block text-text-secondary text-sm hover:text-amber transition-colors mb-2">
              +995 591 98 65 98
            </a>
            <a href="mailto:bluefoxtbilisi@gmail.com" className="block text-text-secondary text-sm hover:text-amber transition-colors">
              bluefoxtbilisi@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-text-muted mb-4">{t('footer.followUs')}</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/bluefox.restaurant/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/[0.07] flex items-center justify-center text-text-muted hover:text-amber hover:border-amber/30 transition-all" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.facebook.com/Bluefox.Tbilisi" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/[0.07] flex items-center justify-center text-text-muted hover:text-amber hover:border-amber/30 transition-all" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g294195-d25251864-Reviews-Blue_Fox_Restaurant_Tbilisi-Tbilisi.html" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/[0.07] flex items-center justify-center text-text-muted hover:text-amber hover:border-amber/30 transition-all" aria-label="TripAdvisor">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="7" cy="14" r="3"/><circle cx="17" cy="14" r="3"/><path d="M12 7l-4 3h8l-4-3z"/><circle cx="7" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="17" cy="14" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04] text-center">
          <p className="text-text-muted/40 text-xs">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
