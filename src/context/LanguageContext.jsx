import { createContext, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  return (
    <LanguageContext.Provider value={{ lang: "en" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
}
