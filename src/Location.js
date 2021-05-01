import React, { useEffect, useState } from "react";
import Weather_API from "./Weather_API";

const Location = () => {
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

  return <div>{lat && lon && <Weather_API lat={lat} lon={lon} />}</div>;
};

export default Location;
