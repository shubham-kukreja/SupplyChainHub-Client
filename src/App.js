import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Web3 from "web3";

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

  const [accountAddress, setaccountAddress] = useState("");
  const [balance, setBalance] = useState(0);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      setaccountAddress(accounts[0]);
    } else {
      window.alert("Please Install MetaMask.");
    }
  };

  useEffect(() => {
    loadWeb3();
  }, []);

  return (
    <MuiThemeProvider theme={THEME}>
      <div className="App">
        <Navbar accountAddress={accountAddress} />
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
