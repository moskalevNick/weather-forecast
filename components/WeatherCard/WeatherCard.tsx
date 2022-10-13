import react from "react";
import Icon from "../Icon/Icon";
import { WeatherCardType } from "./types";

export const WeatherCard = ({
  WeatherData,
  WithTime = true,
}: WeatherCardType) => (
  <div
    key={WeatherData.dt}
    className="m-1 border-2 rounded-lg text-center p-3 bg-emerald-400"
  >
    <div>{Math.round(WeatherData.main.temp) + "℃"}</div>
    <div className="w-24">
      {new Date(WeatherData.dt * 1000).toLocaleString("ru", {
        month: "long",
        day: "numeric",
        hour: WithTime ? "numeric" : undefined,
        minute: WithTime ? "numeric" : undefined,
      })}
    </div>
    <Icon
      name={WeatherData?.weather[0].main}
      className="w-4 h-4 fill-yellow stroke-orange"
    />
  </div>
);
