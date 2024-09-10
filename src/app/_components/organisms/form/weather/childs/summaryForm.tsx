import { useEffect } from 'react'

import axios from 'axios'

import { cityMap } from '@/app/_constant/cities'
import {
  weatherClassificationToIcon,
  weatherClassificationToString,
} from '@/app/_modules/utils/weather'
import { useAiStore } from '@/app/_store/ai'
import { useWeatherStore } from '@/app/_store/weatherData'
import { type SimpleAiResponse } from '@/app/_type/api'

type BasicProps = {
  type: string
}
export default function SummaryForm() {
  const { weather, location } = useWeatherStore()
  const {
    isChangeAiForm,
    viewAiInfo,
    viewWeatherInfo,
    setAiCategory,
    setSimpleResponse,
  } = useAiStore()
  const searchClickHandler = (type: string) => {
    switch (type) {
      case 'clothes':
        void fetchingBasicOpenAi({ type: 'clothes' })
        setAiCategory('clothes')
        if (!isChangeAiForm) viewAiInfo()
        break
      case 'outdoor':
        void fetchingBasicOpenAi({ type: 'outdoor' })
        setAiCategory('outdoor')
        if (!isChangeAiForm) viewAiInfo()
        break
      case 'search':
        if (!isChangeAiForm) viewAiInfo()
        setAiCategory('search')
        break
      default:
        viewWeatherInfo()
        setAiCategory('')
    }
  }
  const imgs = [
    { src: '/icon/clothes.png', alt: 'clothes' },
    {
      src: '/icon/outside.png',
      alt: 'outdoor',
    },
    {
      src: '/icon/search.png',
      alt: 'search',
    },
    ...(!isChangeAiForm ? [] : [{ src: 'icon/re.png', alt: 're' }]),
  ]
  const fetchingBasicOpenAi = async ({ type }: BasicProps): Promise<void> => {
    try {
      let inputValue: string
      if (weather === null) throw new Error('No Weather Data')
      switch (type) {
        case 'clothes': {
          inputValue = `The weather is ${weather.weather[0].main} today. Please recommend what to wear. Please list it down to about 5 things. Without any other words, in the format 1. xx 2. xx using korean`
          break
        }
        default: {
          inputValue = `The weather is ${weather.weather[0].main} today. Please recommend outdoor activities in ${cityMap[location]}. All you have to do is list them down to 5 simple things and let me know using korean.`
          break
        }
      }
      const res: SimpleAiResponse = await axios.post('/api/gpt', { inputValue })
      setSimpleResponse(res)
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    viewWeatherInfo()
  }, [])
  return (
    <div className="relative pt-5 bg-white bg-opacity-30 rounded-xl py-5">
      <div className="sort-col-flex">
        <span className="w-full text-center">
          <p className="text-5xl">{weather?.main.temp} &#8451; </p>
          <p className="text-2xl">
            {location}&nbsp;&nbsp;
            {weather && weatherClassificationToString(weather.weather[0].main)}
          </p>
        </span>
        {weather && weatherClassificationToIcon(weather.weather[0].main)}
        <section className="w-2/3 sort-row-flex justify-around rounded-xl border-4 border-white-400 mt-5 py-2">
          {imgs.map((data) => (
            <img
              key={data.src}
              src={data.src}
              alt={data.alt}
              className={`${data.alt === 're' ? 'w-12 h-12' : 'w-16 h-16'} cursor-pointer hover:scale-110 simple-transition`}
              onClick={() => {
                searchClickHandler(data.alt)
              }}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
