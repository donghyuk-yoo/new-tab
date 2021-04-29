import React from "react";
import Weather from "./Weather";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <p>App</p>
      <Weather />
    </>
  );
}

export default App;
