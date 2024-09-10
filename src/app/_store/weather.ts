import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { type Weather } from '@/app/_type/api'

type State = {
  location: string
  weather: Weather | null
  isCachingDataExist: () => boolean
  setLocation: (locationData: string) => void
  setWeather: (weather: Weather) => void
  resetWeather: () => void
}

export const useWeatherStore = create<State>()(
  persist(
    (set, get) => ({
      location: '',
      weather: null,
      isCachingDataExist: () => {
        const { location, weather } = get()
        return location !== '' && weather !== null
      },
      setLocation: (locationData: string) => {
        set({ location: locationData })
      },
      resetWeather: () => {
        set({ location: '', weather: null })
      },
      setWeather: (weatherData: Weather) => {
        set({ weather: weatherData })
      },
    }),
    {
      name: 'weather',
      getStorage: () => localStorage,
    },
  ),
)
