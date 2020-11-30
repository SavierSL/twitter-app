import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "../src/components/GlobalContext/GlobalContext";
import { ThemeProvider } from "styled-components";
const lightTheme = {
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};
const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};
ReactDOM.render(
  <Router>
    <GlobalProvider>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </GlobalProvider>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
