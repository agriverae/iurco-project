import { createContext, useContext } from "react";
import languageJson from "@/data/language.json";

const LangContext = createContext({});

const useLang = () => {
  const context = useContext(LangContext);
  if (context === undefined)
    throw new Error("useCount must be used within a CountProvider");

  return context;
};

export const LangProvider = ({ children, lang }) => {
  return (
    <LangContext.Provider value={languageJson[lang]}>
      {children}
    </LangContext.Provider>
  );
};

export default useLang;
