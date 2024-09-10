import { type ChangeEvent, useState } from 'react'

import { useMutation } from '@tanstack/react-query'

import Bubble from '@/app/_components/atoms/bubble/Bubble'
import AiBubbleForm from '@/app/_components/organisms/form/ai/aiBubbleForm'
import AiInputForm from '@/app/_components/organisms/form/ai/aiInputForm'
import { fetchOpenAi } from '@/app/_modules/api'
import { useAiStore } from '@/app/_store/ai'
import { type AiResponse } from '@/app/_type/api'

export type Chat = {
  type: 'chat' | 'user'
  text: string
}

export default function AiForm() {
  const { simpleResponse, category } = useAiStore()
  const [inputValue, setInputValue] = useState<string>('')
  const [chatQue, setChatQue] = useState<Chat[]>([])
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const clickHandler = () => {
    if (inputValue.trim() === '') {
      alert('입력란을 채워주세요!')
      return
    } else {
      setChatQue((prev) => [
        ...prev,
        { type: 'user', text: inputValue },
        { type: 'chat', text: '...' },
      ])
    }
    mutate()
  }
  const seperateString = (msg: string | undefined) => {
    if (msg === undefined) return []
    return msg.split(/(?=\d\.\s)/)
  }
  const { mutate } = useMutation({
    mutationFn: async () => {
      const res: Promise<AiResponse[]> = await fetchOpenAi(inputValue)
      return res
    },
    onSuccess: (data) => {
      setChatQue((prev) => {
        const newQue = [...prev]
        newQue[newQue.length - 1] = {
          type: 'chat',
          text: data[0].message.content,
        }
        return newQue
      })

      setInputValue('')
    },
    onError: () => {
      setInputValue('')
    },
  })

  const renderAiForm = () => {
    switch (category) {
      case 'search':
        return (
          <div className="grid grid-rows-8 relative w-5/6 h-full space-y-2 rounded-lg ">
            <AiBubbleForm chatQue={chatQue} />
            <AiInputForm
              changeHandler={changeHandler}
              clickHandler={clickHandler}
            />
          </div>
        )
      default:
        return (
          <div className="sort-col-flex space-y-2 w-2/3 justify-center">
            {seperateString(simpleResponse?.choices[0].message.content).map(
              (data) => (
                <Bubble key={data} type="chat">
                  {data.trim()}
                </Bubble>
              ),
            )}
          </div>
        )
    }
  }
  return (
    <article className="bg-opacity-30 rounded-xl h-72 sort-col-flex  bg-white overflow-scroll">
      <h1 className="px-3 py-2 text-lg">Ai Recommend</h1>
      {renderAiForm()}
    </article>
  )
}
