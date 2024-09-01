import { create } from 'zustand'

import { type Weather } from '@/app/_type/api'

type State = {
  weather: Weather | null
  setWeather: (weather: Weather) => void
}

export const useWeatherStore = create<State>((set) => ({
  weather: null,
  setWeather: (weatherData: Weather) => {
    set({ weather: weatherData })
  },
}))
