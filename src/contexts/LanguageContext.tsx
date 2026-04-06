import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ru" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (ru: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ru");
  const toggleLang = () => setLang((l) => (l === "ru" ? "en" : "ru"));
  const t = (ru: string, en: string) => (lang === "ru" ? ru : en);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
