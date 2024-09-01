'use client'
import { useEffect, useState } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

import InitialInputForm from '@/app/_components/organisms/form/initialInputForm'
import MainTextForm from '@/app/_components/organisms/form/mainTextForm'
import { fetchingWeather } from '@/app/_modules/api/fetchingWeather'
import { locationInputValidator } from '@/app/_modules/utils/inputValidate'
import { useCacheStore } from '@/app/_store/cachingData'
import { useWeatherStore } from '@/app/_store/weatherData'

const WeatherForm = dynamic(
  async () => import('@/app/_components/organisms/form/weatherForm'),
  {
    ssr: false,
  },
)
export default function Home() {
  const queryClient = useQueryClient()
  const { weather, setWeather } = useWeatherStore()
  const { isCachingDataExist, setIsCachingDataExist, updateCacheStatus } =
    useCacheStore()

  const [isMounted, setIsMounted] = useState(false)
  const [isBlinkComplete, setIsBlinkComplete] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('')
  const [selectValue, setSelectValue] = useState<string>('국내')
  // FIXME: 국내/해외 나눠야 하나?
  const selectArr = ['국내', '해외']

  const mutation = useMutation({
    mutationFn: async (location: string) => {
      const weather = await fetchingWeather(location)
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
    mutation.mutate(location)
    cachingLocation()
    alert(`Success ${selectValue}`)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])
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

      <section>
        {isMounted && weather && <WeatherForm weather={weather} />}
      </section>
      <div>{isBlinkComplete}</div>
    </main>
  )
}
