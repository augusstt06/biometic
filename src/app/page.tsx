'use client'
import { useState } from 'react'

import BlinkText from '@/app/_components/blink/BlinkText'
import Button from '@/app/_components/button/Button'
import Input from '@/app/_components/input/Input'

export default function Home() {
  const [isBlinkComplete, setIsBlinkComplete] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('')
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }
  const isLocationInputComplete = () => {
    // FIXME: 데이터 검증 로직 추가하기
    return location.trim() !== ''
  }
  return (
    <main className="grid-row-3 grid h-screen">
      <section className="place-content-center grid-row-2 grid w-full grid-cols-5 row-span-2 gap-8">
        <article
          className={`col-span-3 col-start-2 row-span-1 grid w-full place-content-center`}
        >
          <BlinkText
            text="Weather AI ☀️"
            setIsBlinkComplete={setIsBlinkComplete}
          />
        </article>

        <article className="col-span-5 col-start-1 row-span-1 space-y-5">
          <Input
            value={location}
            className={`left-1/2 min-w-60 w-1/3 -translate-x-1/2 fade-in ${
              isBlinkComplete ? 'opacity-100' : 'opacity-0'
            }`}
            onChange={inputChangeHandler}
            title="Location"
            width="w-full"
          />
          <Button
            title="Apply"
            className={`relative px-4 py-2 left-1/2 -translate-x-1/2 rounded-lg border-[#588ac0] bg-[#588ac0] simple-transition hover:bg-[#476e99] ${isLocationInputComplete() ? 'opacity-100' : 'opacity-0'}`}
          />
        </article>
      </section>
      <section></section>
      <div>{isBlinkComplete}</div>
    </main>
  )
}
