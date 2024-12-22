import { Routes, Route } from "react-router-dom";
import {
  Divider,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import UncompletedTasks from "./pages/UncompletedTasks";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

import { BackDropContext } from "./contexts/backdropContext";
import { useContext, useState } from "react";
import { DarkThemeContext } from "./contexts/DarkThemeContext";

import { AlertContext } from "./contexts/AlertContext";
import PopUpAlert from "./components/PopUpAlert";

function App() {
  const { alertText } = useContext(AlertContext);
  const [open, setOpen] = useState(false);
  const [actions, setaction] = useState("");
  const { dark } = useContext(DarkThemeContext);

  // theme configuration
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: { main: "#009688" },

      background: {
        default: dark ? "#121212" : "#ffffff",
        paper: dark ? "#1e1e1e" : "#f5f5f5",
      },
      text: {
        primary: dark ? "#009688" : "#000000",
        secondary: dark ? "#00968894" : "#b0b0b0",
      },
    },
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            color: dark && "#009688",
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontWeight: 800,
            fontSize: 18,
          },
          secondary: {
            fontSize: 14,
          },
        },
      },
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const actionEdit = (text) => setaction(`${text}`);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent styles for dark/light mode */}
      <div
        style={{
          width: "100%",
          height: "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          position: "relative",
        }}
      >
        <div
          className={`main gap-1  p-2 h-[98%] w-[99%] md:w-2/4 border border-mainColor border-opacity-40 px-4`}
        >
          <Header />
          <Divider />

          <Divider />

          <BackDropContext.Provider
            value={{ open, handleClose, handleOpen, actionEdit, actions }}
          >
            {/* <AlertProvider> */}
            <div className="w-full">
              <Divider />
            </div>
            <div
              style={{
                // height: "400px",
                flex: 1,
                width: "100%",
                overflowY: "auto",
                scrollbarWidth: dark ? "thin" : "none",
              }}
            >
              <Routes>
                <Route path="/" element={<AllTasks />} />
                <Route path="/completed" element={<CompletedTasks />} />
                <Route path="/uncompleted" element={<UncompletedTasks />} />
              </Routes>
            </div>
            <Footer />
            {alertText && <PopUpAlert actions={actions} />}
          </BackDropContext.Provider>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
