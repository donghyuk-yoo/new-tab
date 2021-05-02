import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import News from "./News";
import Todo from "./Todo";

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

const Viewer = styled.div`
  height: 50rem;
  margin: 0 auto;
  border: 1px solid #000;
`;

const Navigation = () => {
  return (
    <>
      <Inner>
        {/* <button type="button" className="Navigation_Btn">
          뉴스
        </button>
        <button className="Navigation_Btn">날씨</button> */}

        <Link to="/news">뉴스</Link>
        <Link to="/todo">투두</Link>
        <Viewer>
          <Route path="/" component={News} exact={true} />
          <Route path="/news" component={News} />
          <Route path="/todo" component={Todo} />
        </Viewer>
      </Inner>
    </>
  );
};

export default Navigation;
