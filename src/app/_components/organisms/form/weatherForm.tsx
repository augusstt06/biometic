import {
  weatherClassificationToIcon,
  weatherClassificationToString,
} from '@/app/_modules/utils/weather'
import { type Weather } from '@/app/_type/api'

type Props = {
  weather: Weather
}
export default function WeatherForm(props: Props) {
  const { weather } = props

  return (
    <article className="pt-20 h-screen grid grid-rows-3">
      <div className="sort-col-flex">
        <span className="text-4xl">
          {weatherClassificationToString(weather.weather[0].main)}
        </span>
        {weatherClassificationToIcon(weather.weather[0].main)}
      </div>
    </article>
  )
}
