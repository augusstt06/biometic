import { useEffect, useState } from 'react'

import Clouds from '@/app/_components/atoms/icon/clouds/Clouds'
import Pinwheel from '@/app/_components/atoms/icon/pinwheel/Pinwheel'
import Progressbar from '@/app/_components/atoms/progressbar/Progressbar'
import {
  weatherClassificationToIcon,
  weatherClassificationToString,
} from '@/app/_modules/utils/weather'
import { useWeatherStore } from '@/app/_store/weatherData'

type TdetailData = {
  label: string
  type: 'temperature' | 'humidity'
  value: number | undefined
}
export default function WeatherForm() {
  const { weather, location } = useWeatherStore()
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const detailData: TdetailData[] = [
    { label: '체감온도', type: 'temperature', value: weather?.main.feels_like },
    { label: '최고 온도', type: 'temperature', value: weather?.main.temp_max },
    { label: '최저 온도', type: 'temperature', value: weather?.main.temp_min },
    { label: '습도', type: 'humidity', value: weather?.main.humidity },
  ]
  const imgs = [
    { src: '/icon/clothes.png', alt: 'clothes' },
    { src: '/icon/outside.png', alt: 'outside' },
    { src: '/icon/search.png', alt: 'search' },
  ]
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <article className="pt-5 h-screen grid grid-rows-9 grid-cols-7 place-content-center">
      <div
        className={`row-start-2 row-span-7 col-start-2 col-span-5 fade-in ${isMounted ? 'opacity-100' : 'opacity-0'} space-y-6`}
      >
        <div className="relative pt-5 bg-white bg-opacity-30 rounded-xl py-5">
          <div className="sort-col-flex">
            <span className="w-full text-center">
              <p className="text-5xl">{weather?.main.temp} &#8451; </p>
              <p className="text-2xl">
                {location}&nbsp;&nbsp;
                {weather &&
                  weatherClassificationToString(weather.weather[0].main)}
              </p>
            </span>
            {weather && weatherClassificationToIcon(weather.weather[0].main)}
            {/* <p>Ai Recommend </p> */}
            <section className="w-full sort-row-flex justify-around">
              {imgs.map((data) => (
                <img
                  key={data.src}
                  src={data.src}
                  alt={data.alt}
                  className="w-16 h-16 cursor-pointer hover:scale-110 simple-transition"
                />
              ))}
            </section>
          </div>
        </div>

        <div className="bg-white bg-opacity-30 rounded-xl grid grid-cols-2 grid-row-3 h-72">
          {detailData.map((data) => (
            <span
              className="sort-col-flex justify-around px-5"
              key={data.label}
            >
              <p className="text-lg">{data.label}</p>
              <Progressbar type={data.type} value={data.value} />
            </span>
          ))}

          <span className="sort-col-flex justify-around px-5">
            <p className="text-lg">구름 양</p>
            <Clouds cloudiness={weather?.clouds.all} />
          </span>
          <span className="sort-col-flex justify-around px-5">
            <p className="text-lg">바람 속도</p>
            <Pinwheel speed={weather?.wind.speed} />
          </span>
        </div>
      </div>
    </article>
  )
}
