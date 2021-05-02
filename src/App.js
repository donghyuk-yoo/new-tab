import React from "react";
import Weather_Location from "./Weather_Location";
import Navigation from "./Navigation";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    background: #e9ecef;
    /* font-family: ''; */
    font-size: 1rem;
  }
`;

// 대문자로 시작해야 함
const Line = styled.div`
  border-bottom: 3px solid #000;
  margin-top: 10px;
  margin-bottom: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Weather_Location />
      <Line />
      <Navigation />
    </>
  );
}

export default App;
