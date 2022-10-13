import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ClimbingBoxLoader } from "react-spinners";
import { fetchCityWeather } from "../../helpers/api";
import { WeatherDataType } from "../../components/WeatherCard/types";
import { WeatherCard } from "../../components/WeatherCard/WeatherCard";

export default function Home() {
  const router = useRouter();
  const [weather, setWeather] = useState<WeatherDataType[] | []>([]);
  const [city, setCity] = useState("");
  const [cityStr, setCityStr] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { city: cityFromUrl } = router.query;

  useEffect(() => {
    if (cityFromUrl && typeof cityFromUrl === "string") {
      setCityStr(cityFromUrl);
      setCity(cityFromUrl);
    }
  }, [cityFromUrl]);

  useEffect(() => {
    if (city && typeof city === "string") {
      router.replace(`/in/${cityStr}`);

      setLoading(true);
      fetchCityWeather(city)
        .then((data) => {
          if (data) {
            setError(false);
            setWeather(data.list);
            localStorage.setItem("city", city);
          } else {
            setError(true);
            setWeather([]);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [city]);

  return (
    <div className="py-4 bg-sky-400 text-center min-h-screen">
      <div className="p-5 capitalize font-bold ">Город: {city}</div>
      {loading ? (
        <div className="flex justify-center">
          <ClimbingBoxLoader color="yellow" />
        </div>
      ) : (
        city && (
          <div className="flex justify-center flex-wrap">
            {weather?.map((data) => (
              <WeatherCard WeatherData={data} WithTime={true} key={data.dt} />
            ))}
          </div>
        )
      )}
      {error && <div className="p-5 lg font-bold">города НЕТ!</div>}
      <div className="mt-6">
        <p className="font-bold">Чтобы изменить город введите название:</p>
        <input
          className="my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-64 mx-auto"
          placeholder="Введите название города"
          value={cityStr}
          onChange={(e) => {
            setCityStr(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") setCity(e.currentTarget.value);
          }}
        />
      </div>
      <div className="flex gap-6 justify-center">
        <button
          className="w-40  bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded"
          onClick={() => {
            setCity(cityStr);
          }}
        >
          Поиск
        </button>
        <Link href={"/"}>
          <a className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded">
            Назад
          </a>
        </Link>
      </div>
    </div>
  );
}
