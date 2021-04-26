import React from "react";

const Weather = () => {
  location();

  return (
    <div>
      <p>Weather</p>
    </div>
  );
};
function location() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess);
}

function handleGeoSuccess(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

export default Weather;
