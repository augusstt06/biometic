import { useEffect, useState } from 'react'

import {
  weatherClassificationToIcon,
  weatherClassificationToString,
} from '@/app/_modules/utils/weather'
import { useWeatherStore } from '@/app/_store/weatherData'

export default function WeatherForm() {
  const { weather, location } = useWeatherStore()
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <article className="pt-20 h-screen grid grid-rows-9 grid-cols-7 place-content-center">
      <div
        className={`bg-white bg-opacity-50 rounded-xl row-start-2 row-span-7 col-start-2 col-span-5 fade-in ${isMounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="sort-col-flex pt-5">
          <span className="w-full text-center">
            <p className="text-5xl">{weather?.main.temp} &#8451; </p>
            <p className="text-3xl">
              {location}&nbsp;&nbsp;
              {weather &&
                weatherClassificationToString(weather.weather[0].main)}
            </p>
          </span>
          {weather && weatherClassificationToIcon(weather.weather[0].main)}
        </div>
      </div>
    </article>
  )
}
