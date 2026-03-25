import { createContext, useContext, useState, useCallback } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("alpha-ndt-lang") || "vi";
    } catch {
      return "vi";
    }
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "vi" ? "en" : "vi";
      try { localStorage.setItem("alpha-ndt-lang", next); } catch {}
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
}
