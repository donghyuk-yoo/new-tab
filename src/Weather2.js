import axios from "axios";
import React, { useEffect, useState } from "react";
import GeoTest from "./GeoTest";

const Weather = () => {
  const [data, setData] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [temp, setTemp] = useState("");
  const API_KEY = "6ec556521fe3cc745950e32ddf07139f";

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (e) => console.log("this device can't use geolocation")
    );

    // getWeather();
    if (lat && lon) {
      console.log("w" + lat);
      console.log("w" + lon);
    }
  };

  const getWeather = async () => {
    if (lat && lon) {
      console.log(lat, lon);
      // fetch 만으로는 데이터 바로 사용x
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6ec556521fe3cc745950e32ddf07139f&units=metric`)
        .then(
          (res) => {
            return res.json();
          } //Promise 반환
        )
        .then((json) => {
          console.log(json); // 서버에서 주는 json데이터가 출력 됨
          setTemp(json.main.temp);
        });
    }
    // 모든 문제는 lat과 lon이 api요청 전에 상태 업데이트가 되어있지 않다는 것.
    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6ec556521fe3cc745950e32ddf07139f&units=metric`);
    // setTemp(response.data);

    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&APPID=6ec556521fe3cc745950e32ddf07139f`)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });

    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  useEffect(() => {
    getPosition();
  }, []);

  return (
    <div>
      <div>
        {/* <span className="temprature">{data && Math.floor(data.main.temp)}°C</span> */}
        {/* temp: {temp && Math.floor(JSON.stringify(temp))} */}
      </div>
      {lat && lon && <GeoTest lat={lat} lon={lon} />}
      {/* <p>습도 : {data && data.main.humidity}%</p> */}
    </div>
  );
};

export default Weather;
