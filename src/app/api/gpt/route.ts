import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openAi = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
})

export async function POST(request: Request) {
  let requestBody
  try {
    requestBody = await request.json()
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { prompt } = requestBody

  try {
    const completion = await openAi.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    return NextResponse.json(completion)
  } catch (error) {
    // console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch from OpenAI' },
      { status: 500 },
    )
  }
}
