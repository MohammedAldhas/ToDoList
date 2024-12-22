import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DarkThemeProvider } from "./contexts/DarkThemeContext";
import { LangProvider } from "./contexts/LangContext.jsx";
import { AlertProvider } from "./contexts/AlertContext.jsx";
import { TasksContextProvider } from "./contexts/TasksContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkThemeProvider>
      <LangProvider>
        <TasksContextProvider>
          <AlertProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AlertProvider>
        </TasksContextProvider>
      </LangProvider>
    </DarkThemeProvider>
  </StrictMode>
);
