import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { type Weather } from '@/app/_type/api'

type State = {
  weather: Weather | null
  setWeather: (weather: Weather) => void
  resetWeather: () => void
}

export const useWeatherStore = create<State>()(
  persist(
    (set) => ({
      weather: null,
      resetWeather: () => {
        set({ weather: null })
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
