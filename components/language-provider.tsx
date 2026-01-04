"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations, Language } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["EN", "HI", "GU", "AR", "ES", "FR", "ZH", "PT"].includes(saved)) {
      setLanguageState(saved)
      if (typeof document !== "undefined") {
        document.documentElement.lang = saved.toLowerCase()
      }
    } else if (typeof document !== "undefined") {
      document.documentElement.lang = "en"
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang.toLowerCase()
    }
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.EN[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

