import { useEffect, useState } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import Button from '@/app/_components/atoms/button/Button'
import LabelInput from '@/app/_components/molecules/input/LabelInput'
import { fetchingWeather } from '@/app/_modules/api/fetchingWeather'
import { convertEngToKr } from '@/app/_modules/utils/convertKr'
import { locationInputValidator } from '@/app/_modules/utils/inputValidate'
import { useWeatherStore } from '@/app/_store/weatherData'

export default function Nav() {
  const queryClient = useQueryClient()
  const { setWeather, setLocation, isCachingDataExist } = useWeatherStore()
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [locationValue, setLocationValue] = useState<string>('')

  const cachingLocation = () => {
    setLocation(locationValue)
    setLocationValue('')
  }
  const { mutate } = useMutation({
    mutationFn: async (locationValue: string) => {
      const weather = await fetchingWeather(convertEngToKr(locationValue))
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
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationValue(e.target.value)
  }
  const buttonClickHandler = async () => {
    if (!locationInputValidator(locationValue)) {
      alert('Please Enter your location')
      return
    }
    mutate(locationValue)
  }
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <nav
      className={`h-20 grid grid-cols-5 fixed w-full fade-in bg-white ${isMounted && isCachingDataExist() ? 'opacity-100' : 'opacity-0'} bg-opacity-30`}
    >
      <section className=" place-content-center text-center">
        Weather AI
      </section>
      <section className=" col-start-2 col-span-3 place-content-center sort-row-flex gap-4">
        <LabelInput
          className="w-2/3"
          title="New Location"
          onChange={inputChangeHandler}
        />
        <Button
          title="Search"
          className={`px-4 py-2 rounded-lg border-[#588ac0] bg-[#588ac0] simple-transition hover:bg-[#476e99]`}
          onClick={() => {
            void buttonClickHandler()
          }}
        />
      </section>
      <section className=""></section>
    </nav>
  )
}
