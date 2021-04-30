import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState(null);
  const API_KEY = "6ec556521fe3cc745950e32ddf07139f";
  let img_url = null;

  // 미운트 된 후(다른 함수들은 마운트 전 이미 실행됨?) 실행
  useEffect(() => {
    const getWeather = async () => {
      try {
        // await 기다리고 다음 작업 실행, &units=metric : 섭씨온도로 요청
        // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`);

        // response.data는 json객체값이 들어있다. setData로 상태 업데이트를 했는데 바로 아래에서 data를 조회하면 업데이트가 안되있는 이유.
        // 아래 setData는 await가 완료되면 그때 실행됨, 아직 실행안됬으므로 try,catch문이 있는 getWeather 함수는 대기 중이 걸리고,
        // 그 함수 아래 코드가 실행됨, 이후 await 완료, setData로 상태업데이트 하는 순간 state 변화로 인한 리렌더링 발생
        // 그러나 useEffect는 마운트 된 후 첫 렌더링에만 실행되므로 이번에는 실행안되고 그 외에 코드 실행 후,
        // 다시 setData가 실행된 순간=리렌더링 전 try,catch문으로 돌아옴, setData는 실행됬으나 돌아온 코드는 리렌더링 전이라 data값 없음
        // 각 줄의 코드를 줄세워 놓는다고 생각하면 편함, await이후 setData로 잠시 새 코드가 새치기해서 비집고 들어왔을 뿐, 그 뒤의 코드들은
        // 예전 상태 그대로 인 것과 같다.
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getWeather();
  }, []);

  // 여기에 data에서 추출한 객체 값을 다른 상태에 넣기 위해
  // if (data && setTemp(data.main.temp)); 선언시 일단 setTemp()문은 선언이 아닌 실행이므로 조건 만족시 바로 실행되게 되는데
  // 조건은 data가 참, 즉 await로 요청이 완료 후 setData로 state변경으로 인한 리렌더링 발생할때 setTemp도 실행되고 그러면 또 state가 변경된다.
  // 그러면 다시 리렌더링이 발생하고 이번에도 data가 참이므로 setTemp 실행, 이번에는 값 변경이 없어서 리렌더링이 안될 것 같은데
  // 오류로 too many rerender라고 뜬다.
  // data에 있는 값은 다른 state에 저장안하고 참조하는 방식으로 사용하는 것이 좋을 듯 하다.

  // const img_url = `http://openweathermap.org/img/wn/${data && data.weather[0].icon}@2x.png`;
  if (data) {
    img_url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  }
  // 객체는 렌더링 불가, JSON.stringify(data)로 JSON문자열로 변환 후 렌더링 가능,
  // 객체내의 문자열은 JSON.stringify() 필요없다.
  return (
    <div>
      <div>
        <span className="icon">
          <img src={img_url} alt="icon" />
        </span>
        <span className="temprature">
          {/* {data && data.weather[0].main} */}
          {data && Math.floor(data.main.temp)}°C
        </span>
      </div>

      {/* <p>체감 온도 : {data && Math.floor(data.main.feels_like)}°C</p> */}
      {/* <p>
        오늘 최저~최고 온도 : {data && Math.floor(data.main.temp_min)}°C ~ {data && Math.floor(data.main.temp_max)}°C
      </p> */}
      {/* <p>습도 : {data && data.main.humidity}%</p> */}
    </div>
  );
};

// 컴포넌트의 props가 바뀌지 않았을때 리렌더링 방지
export default React.memo(Weather);
