import {
  weatherClassificationToIcon,
  weatherClassificationToString,
} from '@/app/_modules/utils/weather'
import { useWeatherStore } from '@/app/_store/weatherData'

export default function MainWeatherInfoForm() {
  const { weather, location } = useWeatherStore()
  const imgs = [
    { src: '/icon/clothes.png', alt: 'clothes' },
    { src: '/icon/outside.png', alt: 'outside' },
    { src: '/icon/search.png', alt: 'search' },
  ]
  return (
    <div className="relative pt-5 bg-white bg-opacity-30 rounded-xl py-5">
      <div className="sort-col-flex">
        <span className="w-full text-center">
          <p className="text-5xl">{weather?.main.temp} &#8451; </p>
          <p className="text-2xl">
            {location}&nbsp;&nbsp;
            {weather && weatherClassificationToString(weather.weather[0].main)}
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
  )
}
