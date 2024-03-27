const CurrentWeather = ({ data }) => {
  return (
    <div className="weather flex-col w-[350px]  rounded-xl shadow-xl shadow-gray-600 text-white bg-[#333] mt-5 mx-auto mb-0 ">
      <div className="top w-[350px] flex justify-between items-center">
        <div className="ml-4 pb-6">
          <p className="city text-2xl m-0 tracking-widest">{data.city}</p>
          <p className="weather-description text-lg leading-none">
            {data.weather[0].description}
          </p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon w-[115px] pr-5"
        />
      </div>
      <div className="bottom mt-2 pb-5 flex justify-around items-center">
        <p className="temperature text-[70px] font-bold w-auto tracking-[-5px] ">
          {Math.round(data.main.temp)}°C
        </p>
        <p className="details  text-sm mr-2 w-40">
          <div className="parameter-row">
            <span className="parameter-label font-semibold"> Details</span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label "> Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value"> {data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value"> {data.main.humidity}% </span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value"> {data.main.pressure} hPa</span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
