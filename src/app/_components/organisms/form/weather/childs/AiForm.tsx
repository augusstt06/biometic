import { type ChangeEvent, useState } from 'react'

import { useMutation } from '@tanstack/react-query'

import Bubble from '@/app/_components/atoms/bubble/Bubble'
import Button from '@/app/_components/atoms/button/Button'
import LabelInput from '@/app/_components/molecules/input/LabelInput'
import { fetchOpenAi } from '@/app/_modules/api'
import { useAiStore } from '@/app/_store/ai'
import { type AiResponse } from '@/app/_type/api'

type Chat = {
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
            <div className="w-full h-full max-h-44 overflow-scroll row-start-1 row-span-6">
              {chatQue.map((data) => (
                <div
                  key={data.text}
                  className={`flex w-full ${
                    data.type === 'chat' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <Bubble type={data.type}>{data.text}</Bubble>
                </div>
              ))}
            </div>
            <div className="sort-row-flex justify-center w-2/3 space-x-3 fixed top-56 left-1/2 -translate-x-1/2">
              <LabelInput
                title="search"
                className="w-2/3"
                onChange={changeHandler}
              />
              <Button
                title="검색"
                className="bg-[#588ac0] px-4 py-3 rounded-lg hover:bg-[#476e99] simple-transition"
                onClick={clickHandler}
              />
            </div>
          </div>
        )
      default:
        return (
          <div className="sort-col-flex space-y-2">
            {seperateString(simpleResponse?.choices[0].message.content).map(
              (data) => (
                <p key={data}>{data.trim()}</p>
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
