import axios from "axios";
import React, { useState, useEffect } from "react";

const Weather_API = ({ lat, lon }) => {
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
    <div>
      {data && <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon" />}
      <span>{data && Math.floor(data.main.temp)}°C</span>
      <div>{data && data.name}</div>
    </div>
  );
};

export default Weather_API;
