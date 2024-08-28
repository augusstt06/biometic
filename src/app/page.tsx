'use client'
import { useState } from 'react'

import BlinkText from '@/app/_components/blink/BlinkText'

export default function Home() {
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false)

  return (
    <div>
      <BlinkText
        text="Weather AI ☀️"
        setIsTypingComplete={setIsTypingComplete}
      />
      <div>{isTypingComplete}</div>
    </div>
  )
}
