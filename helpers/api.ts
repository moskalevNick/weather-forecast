import { apiUrl, token } from "./consts";

export const fetchCityWeather = async (city: string) => {
  if (!city) return;
  try {
    const res = await fetch(
      `${apiUrl}?q=${city}&units=metric&mode=json&appid=${token}`
    );
    const data = await res.json();
    if (data?.cod === "404") return;
    return data;
  } catch (e) {
    return;
  }
};
