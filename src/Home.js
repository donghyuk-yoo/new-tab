import React from "react";
import Weather_Location from "./Weather_Location";
import Navigation from "./Navigation";
import styled from "styled-components";
// 대문자로 시작해야 함

const Line = styled.div`
  border-bottom: 3px solid #000;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <>
      <Weather_Location />
      <Line />
      <Navigation />
    </>
  );
};

export default Home;
