import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAweek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAweek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAweek)
  );
  return (
    <>
      <Accordion allowZeroExpanded>
        <label className="title text-2xl font-bold ml-[225px]">Daily</label>
        {data.list.splice(0, 7).map((item, id) => (
          <AccordionItem key={id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item bg-[#f5f5f5] w-[1000px] mx-auto rounded-2xl h-10 m-4 px-2 py-5 flex items-center justify-between text-lg cursor-pointer">
                  <img
                    alt="weather"
                    className="icon-small w-10"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day text-[#212121] font-semibold ml-5 flex-grow basis-auto">
                    {forecastDays[id]}
                  </label>
                  <label className="description mr-4 ">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max text-[#7575]">
                    {Math.round(item.main.temp_min)}°C /
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="w-[1000px] items-center justify-between mx-auto">
              <div className="daily-details-grid grid grid-cols-[repeat(2,auto)]  gap-x-4  gap-y-0 px-2 py-4 font-light">
                <div className="daily-details-grid-item  flex h-7 justify-between items-center ">
                  <label>Pressure : </label>
                  <label>{item.main.pressure}hPa</label>
                </div>
                <div className="daily-details-grid-item flex h-7 justify-between items-center">
                  <label>Humidity : </label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item  flex h-7 justify-between items-center">
                  <label>Clouds : </label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item flex h-7 justify-between items-center">
                  <label>Wind speed : </label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item flex h-7 justify-between items-center">
                  <label>Sea level : </label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-item flex h-7 justify-between items-center">
                  <label>Feels like: </label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default Forecast;
