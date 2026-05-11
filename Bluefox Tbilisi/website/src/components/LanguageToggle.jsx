import { useLanguage } from '../hooks/useLanguage'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center text-xs tracking-wider font-sans">
      <button
        onClick={() => setLang('ka')}
        className={`px-2 py-1 transition-colors duration-300 cursor-pointer ${
          lang === 'ka' ? 'text-text-primary' : 'text-text-muted hover:text-text-secondary'
        }`}
      >
        GE
      </button>
      <span className="text-white/10 mx-1">/</span>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 transition-colors duration-300 cursor-pointer ${
          lang === 'en' ? 'text-text-primary' : 'text-text-muted hover:text-text-secondary'
        }`}
      >
        EN
      </button>
    </div>
  )
}
