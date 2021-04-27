import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [lat, setLat] = useState("위도");
  const [lon, setLon] = useState("경도");
  const [data, setData] = useState(null);
  const [temp, setTemp] = useState("");
  const [place, setPlace] = useState("");
  const [icon, setIcon] = useState("");
  const API_KEY = "6ec556521fe3cc745950e32ddf07139f";

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`);
        setData(response.data);
        // setData(JSON.stringify(response.data));
      } catch (e) {
        console.log(e);
      }
    };
    getWeather();
  }, []);

  // 객체는 렌더링 불가, JSON.stringify(data)로 JSON문자열로 변환 후 렌더링 가능,
  return (
    <div>
      <div></div>
      {/* {data && JSON.stringify(data.name)} */}
      {/* {data} */}
      <br />
      {data && JSON.stringify(data.weather[0].main)}
      <br />
      {data && JSON.stringify(data.main.temp)}
      {/* {temp} */}
      {/* {icon} */}
    </div>
  );
};

// 컴포넌트의 props가 바뀌지 않았을때 리렌더링 방지
export default React.memo(Weather);
