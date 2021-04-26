import axios from "axios";
import React, { useState } from "react";

const Weather = () => {
  const [lat, setLat] = useState("위도");
  const [lon, setLon] = useState("경도");
  const [data, setData] = useState(null);
  const API_KEY = "6ec556521fe3cc745950e32ddf07139f";

  const location = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    getWeather();
  };

  const handleGeoSuccess = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  };

  function handleGeoError() {
    console.log("Can't access geo location");
  }
  // 무한 요청 해결할 것
  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then((response) => {
      setData(response.data);
    });
  };

  return (
    <div>
      {location()}
      <p>위도 : {lat}</p>
      <p>경도 : {lon}</p>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default Weather;
