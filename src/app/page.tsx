'use client'
import { useState } from 'react'

import Input from './_components/input/input'

import BlinkText from '@/app/_components/blink/BlinkText'

export default function Home() {
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false)
  const [local, setLocal] = useState<string>('')
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocal(e.target.value)
  }

  return (
    <main className="grid-row-3 grid h-screen">
      <section className="place-content-center grid-row-2 grid w-full grid-cols-5 row-span-2 gap-8">
        <div
          className={`col-span-3 col-start-2 row-span-1 grid w-full place-content-center`}
        >
          <BlinkText
            text="Weather AI ☀️"
            setIsTypingComplete={setIsTypingComplete}
          />
        </div>

        <div className="col-span-5 col-start-1 row-span-1">
          <Input
            value={local}
            className={`left-1/2 min-w-60 w-1/3 -translate-x-1/2 fade-in ${
              isTypingComplete ? 'opacity-100' : 'opacity-0'
            }`}
            onChange={inputChangeHandler}
            title="Local"
            width="w-full"
          />
        </div>
      </section>
      <section></section>
      <div>{isTypingComplete}</div>
    </main>
  )
}
