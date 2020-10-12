import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

function App() {
  const THEME = createMuiTheme({
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    palette: {
      primary: {
        main: "#2196f3",
      },
    },
  });
  return (
    <MuiThemeProvider theme={THEME}>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
