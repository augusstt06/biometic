'use client'
import { useEffect, useState } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import InitialInputForm from '@/app/_components/organisms/form/initialInputForm'
import MainTextForm from '@/app/_components/organisms/form/mainTextForm'
import WeatherForm from '@/app/_components/organisms/form/weatherForm'
import { fetchingWeather } from '@/app/_modules/api/fetchingWeather'
import { locationInputValidator } from '@/app/_modules/utils/inputValidate'
import { weatherClassificationToBackground } from '@/app/_modules/utils/weather'
import { useWeatherStore } from '@/app/_store/weatherData'

export default function Home() {
  const queryClient = useQueryClient()
  const { weather, setWeather, setLocation, isCachingDataExist } =
    useWeatherStore()

  const [isMounted, setIsMounted] = useState(false)
  const [isBlinkComplete, setIsBlinkComplete] = useState<boolean>(false)
  const [locationValue, setLocationValue] = useState<string>('')
  const [selectValue, setSelectValue] = useState<string>('국내')
  // FIXME: 국내/해외 나눠야 하나?
  const selectArr = ['국내', '해외']

  const mutation = useMutation({
    mutationFn: async (locationValue: string) => {
      const weather = await fetchingWeather(locationValue)
      if (weather === null) throw new Error('Failed to fetch weather')
      return weather
    },
    onSuccess: (data) => {
      setWeather(data)
      queryClient.setQueryData(['weather', data.weather[0].main], data)
      cachingLocation()
    },
    onError: (error) => {
      alert(error.message)
    },
  })

  const cachingLocation = () => {
    setLocation(locationValue)
    setLocationValue('')
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationValue(e.target.value)
  }
  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value)
  }

  const buttonClickHandler = async () => {
    if (!locationInputValidator(locationValue)) {
      alert('Please Enter your location')
      return
    }
    mutation.mutate(locationValue)
    alert(`Success ${selectValue}`)
  }

  const sholudWeatherRender = isMounted && weather

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <main
      className={`grid-row-3 grid h-screen ${isMounted && weather && weatherClassificationToBackground(weather.weather[0].main)}`}
    >
      {isMounted && !isCachingDataExist() && (
        <section className="place-content-center grid-row-2 grid w-full grid-cols-5 row-span-2 gap-8">
          <MainTextForm setIsBlinkComplete={setIsBlinkComplete} />
          <InitialInputForm
            inputProps={{
              selectChangeHandler,
              inputChangeHandler,
              selectArr,
              value: locationValue,
              isBlinkComplete,
            }}
            buttonProps={{ buttonClickHandler }}
          />
        </section>
      )}

      {sholudWeatherRender ? (
        <section>
          <WeatherForm />
        </section>
      ) : (
        <section></section>
      )}
      <div>{isBlinkComplete}</div>
    </main>
  )
}
