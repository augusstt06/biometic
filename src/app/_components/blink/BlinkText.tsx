import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'

type Props = {
  text: string
  setIsTypingComplete: Dispatch<SetStateAction<boolean>>
}

export default function TypingText(props: Props) {
  const { text, setIsTypingComplete } = props
  const [mainText, setMainText] = useState<string>('')
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    setIsTypingComplete(false)
    const typingText = text || ''
    const interval = setInterval(() => {
      setMainText((mainText) => {
        let updatedText = mainText
        updatedText = mainText + typingText[count]
        return updatedText
      })
      setCount(count + 1)
    }, 170)
    if (count === typingText.length) {
      clearInterval(interval)
      setIsTypingComplete(true)
    }

    return () => {
      clearInterval(interval)
    }
  })
  return (
    <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 text-4xl">
      {mainText}
      <span className="animate-blink inline-block bg-white w-[0.5rem] h-[2.5rem] ml-1 mb-3 align-middle"></span>
    </div>
  )
}
