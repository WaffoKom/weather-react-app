import Search from "./components/search.jsx";
import CurrentWeather from "./components/current-weather/current-weather.jsx";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api.js";
import { useState } from "react";
import Forecast from "./components/forecast/forecast.jsx";

export default function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        console.log(response);
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setcurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.error(error));
    // console.log(currentWeather, forecast);
  };
  return (
    <div className="bg-[#d5d4d4] flex-col w-full h-screen overflow-y-auto">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}
