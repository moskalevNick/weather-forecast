import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ClimbingBoxLoader } from "react-spinners";
import { WeatherCard } from "../components/WeatherCard/WeatherCard";
import { WeatherDataType } from "../components/WeatherCard/types";
import { fetchCityWeather } from "../helpers/api";
import { Modal } from "../components/Modal/Modal";

const cities = ["Minsk", "Moscow", "Bratislava"];

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherDataType[] | []>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeCity = (city: string) => {
    setCity(city);
    localStorage.setItem("city", city);
  };

  useEffect(() => {
    setLoading(true);
    fetchCityWeather(city)
      .then((data) => data?.list && setWeather(data.list))
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  useEffect(() => {
    const city = localStorage.getItem("city");
    if (!city) {
      setModalOpen(true);
    } else {
      changeCity(city);
    }
  }, []);

  const mainPageWeather = weather
    .filter(({ dt_txt }) => dt_txt?.includes("18:00"))
    .slice(0, 3);

  return (
    <div className="pt-20 min-h-screen bg-sky-400">
      <div className="text-center text-2xl mb-5">Выбранный город: {city}</div>
      {loading ? (
        <div className="flex justify-center">
          <ClimbingBoxLoader color="yellow" />
        </div>
      ) : (
        city && (
          <div className="flex justify-center gap-4">
            {mainPageWeather.map((data) => (
              <WeatherCard WeatherData={data} WithTime={false} key={data.dt} />
            ))}
          </div>
        )
      )}
      <div className="flex justify-center gap-2 my-10">
        {cities.map((city) => (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded"
            onClick={() => changeCity(city)}
            key={city}
          >
            {city}
          </button>
        ))}
      </div>
      <Link href={`in/${city}`}>
        <p className="w-40 flex justify-center cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold m-auto py-2 px-4 rounded">
          Подробнее
        </p>
      </Link>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          onClose={() => !city && changeCity("Minsk")}
        >
          Выберите город:
          <select
            onChange={({ target }) => {
              if (target.value) {
                changeCity(target.value);
                setModalOpen(false);
              }
            }}
            className="z-10 w-44 mt-3 bg-grey rounded shadow border-grey border-2 "
          >
            <option value="">--- Select City ---</option>
            {cities.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </Modal>
      )}
    </div>
  );
}
