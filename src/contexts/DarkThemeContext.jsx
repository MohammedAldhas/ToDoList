/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const DarkThemeContext = createContext({ dark: null, setDark: null });
const DarkThemeProvider = ({ children }) => {
  const [darktheme, setDarkTheme] = useState(() => {
    const storedDark = localStorage.getItem("dark");
    return storedDark ? JSON.parse(storedDark) : false;
  });
  useEffect(() => {
    localStorage.setItem("dark", darktheme);
  }, [darktheme]);
  return (
    <DarkThemeContext.Provider
      value={{ dark: darktheme, setDark: setDarkTheme }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};
const useDarkTheme = () => {
  return useContext(DarkThemeContext);
};
export { useDarkTheme, DarkThemeProvider };
