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

import { useDarkTheme } from "./contexts/DarkThemeContext";

import { useAlert } from "./contexts/AlertContext";
import PopUpAlert from "./components/PopUpAlert";
import { BackdropProvider } from "./contexts/BackdropContext";

function App() {
  const { alertText } = useAlert();
  const { dark } = useDarkTheme();

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

          <BackdropProvider>
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
            {alertText && <PopUpAlert />}
          </BackdropProvider>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
