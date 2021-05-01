import React from "react";
import Weather_Location from "./Weather_Location";
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

const WeatherBox = styled.div`
  /* width: 10rem; */
  /* height: 10rem; */
  margin: 0 auto;
  border: 1px solid #000;
`;

const Box = styled.div`
  width: 50rem;
  height: 50rem;
  margin: 0 auto;
  border: 1px solid #000;
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
      <WeatherBox>
        <Weather_Location />
      </WeatherBox>
      <Line />
      <Box>123</Box>
    </>
  );
}

export default App;
