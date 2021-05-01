import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WeatherInfo = styled.div`
  width: 10rem;
  height: 9rem;
  /* float: right; */
  // 우측으로 정렬

  .iconTemp {
    width: 10rem;
    height: 7rem;

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

const Weather = ({ lat, lon }) => {
  const API_KEY = "6ec556521fe3cc745950e32ddf07139f";
  const [data, setData] = useState("");

  const getWeather = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    setData(response.data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <WeatherInfo>
      <div className="iconTemp">
        <div className="icon">{data && <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon" />}</div>
        <div className="Temp">{data && Math.floor(data.main.temp)}°C</div>
      </div>
      <div className="name">{data && data.name}</div>
    </WeatherInfo>
  );
};

// props 변경외에는 리렌더링시 메모이징 된 내용 그대로 사용 => 성능상 이점(최적화)
export default React.memo(Weather);
