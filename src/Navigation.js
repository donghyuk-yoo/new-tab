import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  width: 50rem;
  margin: 0 auto;

  .Navigation_Btn {
    width: 3rem;

    border: 1px solid #000;
    border-radius: 10%;

    margin-right: 1px;
  }
`;

const Box = styled.div`
  height: 50rem;
  margin: 0 auto;
  border: 1px solid #000;
`;

const Navigation = () => {
  return (
    <>
      <Inner>
        <button className="Navigation_Btn">홈</button>
        <button className="Navigation_Btn">뉴스</button>
        <button className="Navigation_Btn">날씨</button>
        <button className="Navigation_Btn">투두</button>
        <Box></Box>
      </Inner>
    </>
  );
};

export default Navigation;
