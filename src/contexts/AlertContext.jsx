/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const AlertContext = createContext({
  alertText: false,
  setAlertText: () => {},
});

function AlertProvider({ children }) {
  const [showAlertText, setShowAlertText] = useState(false);

  useEffect(() => {
    if (!showAlertText) return;
    const timeout = setTimeout(() => setShowAlertText(false), 3000);
    return () => clearTimeout(timeout);
  }, [showAlertText]);
  return (
    <AlertContext.Provider
      value={{ alertText: showAlertText, setAlertText: setShowAlertText }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export { AlertProvider, AlertContext };
