import { ThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import Demo from "./Demo";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Demo />
    </ThemeProvider>
  );
}

export default App;
