import React, { useState } from "react"
import "./App.css"
import WeatherCard from "./components/Card/WeatherCard.jsx"
const App = () => {

  const [fahrenheitToggle, setFahrenheitToggle] = useState(false);
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [city, setCity] = useState("");



    const unitSystemToggle = () => {
      setFahrenheitToggle(!fahrenheitToggle); // смена системы F/C
    const unitsChange = fahrenheitToggle ? "metric" : "imperial";
      setUnits(unitsChange);
      getWeatherApi(city, unitsChange).then(r => console.log(r));
  };

  const API_KEY = "b7ec4e74a337a34d102c47eb43de2ed5";
  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
  };
//актуальная погода
  const getWeatherApi = async (city, unitsChange = units) => {
    try {
      const response = await fetch(
        `${api.base}weather?q=${city}&units=${unitsChange}&APPID=${API_KEY}`,
      );
      const result = await response.json();
      setWeather(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className='bg-[#EEF0F2] h-screen dark:bg-[#2E2E2E]'>
        <div className="h-screen flex items-center justify-center">
          <WeatherCard
              city={city}
              setCity={setCity}
              getWeatherApi={getWeatherApi}
              unitSystemToggle={unitSystemToggle}
              weather={weather}
              setWeather={setWeather}
              weatherForecast={weatherForecast}
              fahrenheit={fahrenheitToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
