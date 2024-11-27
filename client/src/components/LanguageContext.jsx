import { createContext, useState } from "react";
import messages_es from "../languages/es-MX.json";
import messages_en from "../languages/en-US.json";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const messages = {
    es: messages_es,
    en: messages_en,
  };
  const locale = navigator.language.split(/[-_]/)[0]; // obtener el idioma del navegador
  const [language, setlanguage] = useState(locale);
  const [openButtonLanguage, setopenButtonLanguage] = useState(false);

  const changeLanguage = () => {
    setlanguage(language === "es" ? "en" : "es");
    setopenButtonLanguage(false);
  };

  const handleButtonLanguage = () => {
    if (openButtonLanguage === true) {
      setopenButtonLanguage(false);
    } else {
      setopenButtonLanguage(true);
    }
  };

  const data = {
    language,
    changeLanguage,
    messages,
    handleButtonLanguage,
    openButtonLanguage,
  };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
export { LanguageProvider };

export default LanguageContext;
