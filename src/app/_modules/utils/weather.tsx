import { CLOUDS } from '@/app/_constant'

export const weatherClassificationToIcon = (weatherSummary: string) => {
  switch (weatherSummary) {
    case CLOUDS:
      return (
        <img src="/weather/cloudy.png" alt="clouds" className="w-40 h-40" />
      )
    default:
      return (
        <img src="/weather/cloudy.png" alt="clouds" className="w-48 h-48" />
      )
  }
}

export const weatherClassificationToString = (weatherSummary: string) => {
  switch (weatherSummary) {
    case CLOUDS:
      return '구름 많음'
    default:
      return '맑음'
  }
}

export const weatherClassificationToBackground = (weatherSummary: string) => {
  switch (weatherSummary) {
    case CLOUDS:
      return 'bg-cloudy'
    default:
      return ''
  }
}
