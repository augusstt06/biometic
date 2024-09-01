import { CLOUDS } from '@/app/_constant'

export const weatherClassificationToIcon = (weatherSummary: string) => {
  switch (weatherSummary) {
    case CLOUDS:
      return <img src="/gif/clouds.gif" alt="clouds" className="w-52 h-52" />
    default:
      return (
        <img
          src="/gif/clo uds.gif"
          alt="clouds"
          style={{ width: '500px', height: 'auto' }}
        />
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
