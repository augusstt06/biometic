import { useAiStore } from '@/app/_store/ai'
import { useWeatherStore } from '@/app/_store/weather'

export default function NavIcon() {
  const { resetWeather } = useWeatherStore()
  const { resetChatQue } = useAiStore()
  const clickHandler = () => {
    resetWeather()
    resetChatQue()
  }
  return (
    <section
      className="place-content-center text-center sort-row-flex hover:scale-110 simple-transition cursor-pointer"
      onClick={clickHandler}
    >
      Weather AI
      <img src="/icon/cat.png" alt="kuku" className="w-12 h-12" />
    </section>
  )
}
