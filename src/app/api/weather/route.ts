import { NextResponse } from 'next/server'

// 날씨 api server
export async function GET(req: Response) {
  let requestBody
  try {
    requestBody = await req.json()
    return requestBody
    // console.log(requestBody)
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch weather' },
      { status: 500 },
    )
  }
}
