import { type Dispatch, type SetStateAction } from 'react'

import BlinkText from '@/app/_components/atoms/blink/BlinkText'

type Props = {
  setIsBlinkComplete: Dispatch<SetStateAction<boolean>>
}

export default function MainTextForm(props: Props) {
  const { setIsBlinkComplete } = props
  return (
    <article
      className={`col-span-3 col-start-2 row-span-1 grid w-full place-content-center`}
    >
      <BlinkText text="Weather AI ☀️" setIsBlinkComplete={setIsBlinkComplete} />
    </article>
  )
}
