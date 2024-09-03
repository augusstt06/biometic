import {
  ASH,
  CLOUDS,
  DRIZZLE,
  DUST,
  FOG,
  HAZE,
  MIST,
  RAIN,
  SAND,
  SNOW,
  SQUALL,
  THUNDERSTORM,
  TORNADO,
} from '@/app/_constant'

export const weatherClassificationToIcon = (weatherSummary: string) => {
  switch (weatherSummary) {
    case RAIN:
      return <img src="/weather/rain.png" alt="rain" className="w-28 h-28" />
    case DRIZZLE:
      return (
        <img src="/weather/drizzle.png" alt="drizzle" className="w-28 h-28" />
      )
    case THUNDERSTORM:
      return (
        <img src="/weather/thunder.png" alt="thunder" className="w-28 h-28" />
      )
    case CLOUDS:
      return (
        <img src="/weather/cloudy.png" alt="clouds" className="w-28 h-28" />
      )
    case SNOW:
      return <img src="/weather/snow.png" alt="snow" className="w-28 h-28" />
    case MIST || FOG || HAZE:
      return <img src="/weather/mist.png" alt="mist" className="w-28 h-28" />
    case DUST || SAND || ASH:
      return <img src="/weather/dust.png" alt="dust" className="w-28 h-28" />
    case SQUALL || TORNADO:
      return (
        <img src="/weather/tornado.png" alt="tornado" className="w-28 h-28" />
      )
    default:
      return <img src="/weather/clear.png" alt="clear" className="w-28 h-28" />
  }
}

export const weatherClassificationToString = (weatherSummary: string) => {
  switch (weatherSummary) {
    case CLOUDS:
      return '구름 많음'
    case RAIN:
      return '비'
    case DRIZZLE:
      return '이슬비'
    case THUNDERSTORM:
      return '천둥번개'
    case SNOW:
      return '눈'
    case MIST || FOG:
      return '안개'
    case HAZE:
      return '연무'
    case DUST:
      return '미세먼지 많음'
    case SAND || ASH:
      return '모래'
    case SQUALL || TORNADO:
      return '태풍'
    default:
      return '맑음'
  }
}

export const weatherClassificationToBackground = (weatherSummary: string) => {
  switch (weatherSummary) {
    case CLOUDS:
      return 'bg-[#809bbf]'
    case RAIN:
      return 'bg-[#4682B4]'
    case DRIZZLE:
      return 'bg-[#B0E0E6]'
    case THUNDERSTORM:
      return 'bg-[#2F4F4F]'
    case SNOW:
      return 'bg-[#F0F8FF]'
    case MIST || FOG:
      return 'bg-[#F5F5F5]'
    case HAZE:
      return 'bg-[#E0E0E0]'
    case DUST:
      return 'bg-[#D2B48C]'
    case SAND || ASH:
      return 'bg-[#A9A9A9]'
    case SQUALL || TORNADO:
      return 'bg-[#708090]'
    default:
      return 'bg-[#87CEEB]'
  }
}
