import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import styled from "styled-components";

const Weather_Position = styled.div`
  height: 10rem;
  /* background: red; */
  position: relative;
`;

const Weather_Location = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      () => alert(`위치 액세스가 차단되어 있거나 지원하지 않는 장치입니다.\n(Please allow location access or this device not supported geolocation).`)
    );
  };

  useEffect(() => {
    getPosition();
  }, []);

  return <Weather_Position>{lat && lon && <Weather lat={lat} lon={lon} />}</Weather_Position>;
};

export default Weather_Location;
