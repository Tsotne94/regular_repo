import { createContext, useState, useEffect, useCallback } from 'react'

export const LanguageContext = createContext({
  lang: 'ka',
  setLang: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children, translations }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bluefox-lang') || 'ka'
    }
    return 'ka'
  })

  const setLang = useCallback((newLang) => {
    setLangState(newLang)
    localStorage.setItem('bluefox-lang', newLang)
    document.documentElement.lang = newLang
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    return value
  }, [lang, translations])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
