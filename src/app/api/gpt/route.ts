// app/api/chatgpt/route.ts
import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { prompt } = await request.json()

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    )

    return NextResponse.json({ text: response.data.choices[0].text })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data from OpenAI' },
      { status: 500 },
    )
  }
}
