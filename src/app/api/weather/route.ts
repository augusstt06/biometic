import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const location = url.searchParams.get('location')
    const API_ENDPOINT = process.env.NEXT_PUBLIC_WEATHER_API_ENDPOINT
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY
    if (API_ENDPOINT === undefined || API_KEY === undefined)
      throw new Error(
        'Fail to fetch Weaterh api. Please Check API Endpoint or API Key',
      )
    const res = await axios.get(API_ENDPOINT, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric',
        lang: 'kr',
      },
    })
    return NextResponse.json(res.data)
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch weather' },
      { status: 500 },
    )
  }
}
