export type WeatherCardType = {
  WeatherData: WeatherDataType;
  WithTime: boolean;
};

export type WeatherDataType = {
  main: MainType;
  weather: IconWeather[];
  dt_txt: string;
  dt: number;
  days: string;
};

type MainType = {
  temp: number;
};

type IconWeather = {
  main: string;
  id: number;
  description: string;
  icon: string;
};
