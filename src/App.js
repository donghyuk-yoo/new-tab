import React from "react";
import Weather from "./Weather";
import Weather2 from "./Weather2";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
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
      <p>App</p>
      <Weather />
      <Line />
      <Weather2 />
      <Line />
    </>
  );
}

export default App;
