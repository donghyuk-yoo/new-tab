import axios from "axios";
import React, { useState, useEffect } from "react";

const GeoTest = ({ lat, lon }) => {
  const API_KEY = "6ec556521fe3cc745950e32ddf07139f";
  const [data, setData] = useState("");

  const getWeather = async () => {
    console.log("get" + lat);
    console.log("get" + lon);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    setData(response.data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      lat : {lat}
      <br />
      lon : {lon}
      <br />
      {data && data.main.temp}
      <br />
      {data && data.name}
    </div>
  );
};

export default GeoTest;
