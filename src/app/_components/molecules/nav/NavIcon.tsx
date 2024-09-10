import { useWeatherStore } from '@/app/_store/weatherData'

export default function NavIcon() {
  const { resetWeather } = useWeatherStore()
  return (
    <section
      className="place-content-center text-center sort-row-flex hover:scale-110 simple-transition cursor-pointer"
      onClick={resetWeather}
    >
      Weather AI
      <img src="/icon/cat.png" alt="kuku" className="w-12 h-12" />
    </section>
  )
}
