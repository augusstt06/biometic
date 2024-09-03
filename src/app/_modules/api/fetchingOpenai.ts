import axios from 'axios'

import { cityMap } from '@/app/_constant/cities'
import { useWeatherStore } from '@/app/_store/weatherData'

type Props = {
  inputValue: string
}
type BasicProps = {
  type: string
}
export const fetchingOpenAi = async ({ inputValue }: Props) => {
  try {
    const { data } = await axios.post('/api/gpt', { inputValue })
    return data
  } catch (err) {
    alert(err)
  }
}

export const fetchingBasicOpenAi = async ({ type }: BasicProps) => {
  try {
    const { weather, location } = useWeatherStore()
    let inputValue: string
    if (weather === null) throw new Error('No Weather Data')
    switch (type) {
      case 'clothes':
        inputValue = `The weather is ${weather.weather[0].main} today. Please recommend what to wear.`
        return await axios.post('/api/gpt', { prompt: inputValue })
      default:
        inputValue = `The weather is ${weather.weather[0].main} today. Please recommend outdoor activities in ${cityMap[location]}.`
        return await axios.post('/api/gpt', { prompt: inputValue })
    }
  } catch (err) {
    alert(err)
  }
}
