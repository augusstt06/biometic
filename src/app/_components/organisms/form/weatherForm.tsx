import {
  weatherClassificationToIcon,
  weatherClassificationToString,
} from '@/app/_modules/utils/weather'
import { useWeatherStore } from '@/app/_store/weatherData'

export default function WeatherForm() {
  const { weather } = useWeatherStore()

  return (
    <article className="pt-20 h-screen grid grid-rows-9 grid-cols-7 place-content-center">
      <div className="bg-white bg-opacity-30 rounded-xl row-start-2 row-span-7 col-start-2 col-span-5 ">
        <div className="sort-col-flex pt-5">
          <span className="text-4xl">
            {weatherClassificationToString(weather.weather[0].main)}
          </span>
          {weatherClassificationToIcon(weather.weather[0].main)}
        </div>
      </div>
    </article>
  )
}
