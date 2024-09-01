'use client'
import { useEffect, useState } from 'react'

import InitialInputForm from '@/app/_components/organisms/form/initialInputForm'
import MainTextForm from '@/app/_components/organisms/form/mainTextForm'
import { fetchingWeather } from '@/app/_modules/api/fetchingWeather'
import { locationInputValidator } from '@/app/_modules/utils/inputValidate'
import { useCacheStore } from '@/app/_store/cachingData'
import { useWeatherStore } from '@/app/_store/weatherData'

export default function Home() {
  const { setWeather } = useWeatherStore()
  const { isCachingDataExist, setIsCachingDataExist, updateCacheStatus } =
    useCacheStore()

  const [isBlinkComplete, setIsBlinkComplete] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('')
  const [selectValue, setSelectValue] = useState<string>('국내')
  // FIXME: 국내/해외 나눠야 하나?
  const selectArr = ['국내', '해외']

  const getWeather = async () => {
    try {
      const weather = await fetchingWeather(location)
      if (weather === null)
        throw new Error('Problem occured while fetching weather')
      setWeather(weather)
    } catch (err) {
      alert(err)
    }
  }
  const cachingLocation = () => {
    localStorage.setItem('location', JSON.stringify(location))
    setIsCachingDataExist(true)
    setLocation('')
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }
  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value)
  }

  const buttonClickHandler = async () => {
    if (!locationInputValidator(location)) {
      alert('Please Enter your location')
      return
    }
    void getWeather()
    cachingLocation()
    alert(`Success ${selectValue}`)
  }
  useEffect(() => {
    updateCacheStatus()
    window.addEventListener('storage', updateCacheStatus)
    return () => {
      window.removeEventListener('storage', updateCacheStatus)
    }
  }, [])

  return (
    <main className="grid-row-3 grid h-screen">
      {!isCachingDataExist && (
        <section className="place-content-center grid-row-2 grid w-full grid-cols-5 row-span-2 gap-8">
          <MainTextForm setIsBlinkComplete={setIsBlinkComplete} />
          <InitialInputForm
            inputProps={{
              selectChangeHandler,
              inputChangeHandler,
              selectArr,
              value: location,
              isBlinkComplete,
            }}
            buttonProps={{ buttonClickHandler }}
          />
        </section>
      )}

      <section></section>
      <div>{isBlinkComplete}</div>
    </main>
  )
}
