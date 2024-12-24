/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext({ lang: null, changeLang: null });
const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  const changeLang = () => {
    setLang((pre) => (pre === "ar" ? "en" : "ar"));
  };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};
const useLang = () => {
  return useContext(LangContext);
};
export { useLang, LangProvider };
