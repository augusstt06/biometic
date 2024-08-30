import axios from 'axios'

type Props = {
  location: string
}

export const fetchingWeather = async (props: Props) => {
  try {
    const { location } = props
    const WEATHER_API_ENDPOINT = process.env.NEXT_PUBLIC_WEATHER_API_ENDPOINT
    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY
    if (WEATHER_API_ENDPOINT === undefined)
      throw new Error('Weather API Endpoint is not available')
    if (WEATHER_API_KEY === undefined)
      throw new Error('Weather API key is not available')
    const res = await axios.get(WEATHER_API_ENDPOINT, {
      params: {
        q: location,
        appid: WEATHER_API_KEY,
        units: 'metric',
        lang: 'kr',
      },
    })
    return res.data
  } catch (err) {
    alert(err)
  }
}
