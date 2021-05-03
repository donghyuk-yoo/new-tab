import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";

const Weather_Info = styled.div`
  /* float: right; */
  // 우측으로 정렬
  position: absolute;
  right: 2rem;

  .iconTemp {
    /* width: 10rem;
    height: 7rem; */

    .icon {
      width: 5rem;

      img {
        width: 5rem;
      }
    }

    .Temp {
      width: 3rem;
      height: 3rem;
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  .name {
    font-size: 1rem;
  }
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      // 기존 상태를 반환하여 유지해도 되지만 보통 useReducer에서는 에러 발생시킴
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const Weather = ({ lat, lon }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const API_KEY = "6ec556521fe3cc745950e32ddf07139f";

  const getWeather = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      // console.log(e.response.status);
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  const { loading, data, error } = state;
  if (loading) return <div>불러오는 중...</div>;
  if (error) return <div>에러</div>;
  if (!data) return null;

  return (
    <Weather_Info>
      <div className="iconTemp">
        <div className="icon">{data && <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon" />}</div>
        <div className="Temp">{data && Math.floor(data.main.temp)}°C</div>
      </div>
      <div className="name">{data && data.name}</div>
    </Weather_Info>
  );
};

// props 변경외에는 리렌더링시 메모이징 된 내용 그대로 사용 => 성능상 이점(최적화)
export default React.memo(Weather);
