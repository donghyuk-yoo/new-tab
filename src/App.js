import React from "react";
import Home from "./Home";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    background: #fff;
    /* font-family: ''; */
    font-size: 1rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
