import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import {
  type Language,
  type Translations,
  translations,
  getStoredLanguage,
  storeLanguage,
} from "../lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>("ka");

  useEffect(() => {
    setLang(getStoredLanguage());
  }, []);

  const setLanguage = (lang: Language) => {
    setLang(lang);
    storeLanguage(lang);
    document.documentElement.lang = lang;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
