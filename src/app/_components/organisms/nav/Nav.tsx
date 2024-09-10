import { useEffect, useState } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import NavIcon from '../../molecules/nav/NavIcon'

import NavInput from '@/app/_components/molecules/nav/NavInput'
import { fetchWeather } from '@/app/_modules/api'
import { convertEngToKr } from '@/app/_modules/utils/convertKr'
import { locationInputValidator } from '@/app/_modules/utils/inputValidate'
import { useAiStore } from '@/app/_store/ai'
import { useWeatherStore } from '@/app/_store/weather'
import { type Weather } from '@/app/_type/api'

export default function Nav() {
  const queryClient = useQueryClient()
  const { viewWeatherInfo } = useAiStore()
  const { setWeather, setLocation, isCachingDataExist } = useWeatherStore()
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [locationValue, setLocationValue] = useState<string>('')

  const cachingLocation = () => {
    setLocation(locationValue)
    setLocationValue('')
  }
  const { mutate } = useMutation({
    mutationFn: async (locationValue: string) => {
      const weather = await fetchWeather(convertEngToKr(locationValue))
      if (weather === null)
        throw new Error('도시를 찾을수 없습니다 다시 입력해주세요.')
      return weather
    },
    onSuccess: (data: Weather) => {
      if (data !== undefined) {
        setWeather(data)
        queryClient.setQueryData(['weather', data.weather[0].main], data)
        setLocationValue('')
        cachingLocation()
      }
    },
    onError: () => {
      alert('날씨를 불러오던중 오류가 발생했습니다.')
      setLocationValue('')
    },
  })
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationValue(e.target.value)
  }
  const buttonClickHandler = async () => {
    if (!locationInputValidator(locationValue)) {
      alert('도시를 입력해주세요!')
      return
    }
    mutate(locationValue)
    viewWeatherInfo()
  }
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <nav
      className={`h-20 grid grid-cols-5 fixed w-full fade-in bg-white ${isMounted && isCachingDataExist() ? 'opacity-100' : 'opacity-0'} bg-opacity-30`}
    >
      <NavIcon />
      <NavInput
        value={locationValue}
        changeHandler={inputChangeHandler}
        clickHandler={buttonClickHandler}
      />
    </nav>
  )
}
