'use client'
import { useEffect, useState } from 'react'

import BlinkText from '@/app/_components/blink/BlinkText'
import Button from '@/app/_components/button/Button'
import InputWithSelect from '@/app/_components/input/InputWithSelect'
import { locationInputValidator } from '@/app/_modules/utils/inputValidate'

export default function Home() {
  const [isCachingDataExist, setIsCachingDataExist] = useState<boolean>(false)
  const [isBlinkComplete, setIsBlinkComplete] = useState<boolean>(false)
  const [location, setLocation] = useState<string>('')
  const [selectValue, setSelectValue] = useState<string>('국내')
  // FIXME: 국내/해외 나눠야 하나?
  const selectArr = ['국내', '해외']

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }
  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value)
  }

  const buttonClickHandler = () => {
    if (!locationInputValidator(location)) {
      alert('Please Enter your location')
      return
    }
    localStorage.setItem('location', JSON.stringify(location))
    setIsCachingDataExist(true)
    alert(`Success ${selectValue}`)
  }
  useEffect(() => {
    const updateCacheStatus = () => {
      setIsCachingDataExist(localStorage.getItem('location') !== null)
    }
    updateCacheStatus()
    window.addEventListener('storage', updateCacheStatus)
    return () => {
      window.removeEventListener('storage', updateCacheStatus)
    }
  }, [])

  return (
    <main className="grid-row-3 grid h-screen">
      {!isCachingDataExist && (
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
            <div>
              <InputWithSelect
                selectChangeHandler={selectChangeHandler}
                value={location}
                className={`left-1/2 min-w-60 w-1/3 -translate-x-1/2 fade-in ${
                  isBlinkComplete ? 'opacity-100' : 'opacity-0'
                }`}
                onChange={inputChangeHandler}
                title="Location"
                width="w-full"
                selectArr={selectArr}
              />
            </div>
            <Button
              title="Apply"
              className={`relative px-4 py-2 left-1/2 -translate-x-1/2 rounded-lg border-[#588ac0] bg-[#588ac0] simple-transition hover:bg-[#476e99] ${locationInputValidator(location) ? 'opacity-100' : 'opacity-0'}`}
              onClick={buttonClickHandler}
            />
          </article>
        </section>
      )}

      <section></section>
      <div>{isBlinkComplete}</div>
    </main>
  )
}
