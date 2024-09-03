import { useEffect, useState } from 'react'

import MainWeatherInfoForm from './childs/mainWeatherInfoForm'
import SubWeatherCardForm from './childs/subWeatherCardForm'

export default function WeatherForm() {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <article className="pt-5 h-screen grid grid-rows-9 grid-cols-7 place-content-center">
      <div
        className={`row-start-2 row-span-7 col-start-2 col-span-5 fade-in ${isMounted ? 'opacity-100' : 'opacity-0'} space-y-6`}
      >
        <MainWeatherInfoForm />
        <SubWeatherCardForm />
      </div>
    </article>
  )
}
