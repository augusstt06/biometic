import { type ChangeEvent, useState } from 'react'

import { useMutation } from '@tanstack/react-query'

import Bubble from '@/app/_components/atoms/bubble/Bubble'
import AiBubbleForm from '@/app/_components/organisms/form/ai/aiBubbleForm'
import AiInputForm from '@/app/_components/organisms/form/ai/aiInputForm'
import { BOT, USER } from '@/app/_constant'
import { fetchOpenAi } from '@/app/_modules/api'
import { useAiStore } from '@/app/_store/ai'
// import { type Chat } from '@/app/_type'
import { type AiChatResponse } from '@/app/_type/api'

export default function AiForm() {
  const {
    simpleResponse,
    category,
    chatQue,
    setChatQue,
    deleteLoadingChatQue,
  } = useAiStore()
  const [inputValue, setInputValue] = useState<string>('')
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const clickHandler = () => {
    if (inputValue.trim() === '') {
      alert('입력란을 채워주세요!')
      return
    } else {
      setChatQue({ type: USER, text: inputValue })
      setChatQue({ type: BOT, text: '...' })
    }
    mutate()
  }
  const seperateString = (msg: string | undefined) => {
    if (msg === undefined) return []
    return msg.split(/(?=\d\.\s)/)
  }
  const { mutate } = useMutation({
    mutationFn: async () => {
      const res: Promise<AiChatResponse[]> = await fetchOpenAi(inputValue)
      return res
    },
    onSuccess: (data) => {
      deleteLoadingChatQue({
        type: BOT,
        text: data[0].message.content,
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
              value={inputValue}
              changeHandler={changeHandler}
              clickHandler={clickHandler}
            />
          </div>
        )
      default:
        return (
          <div className="sort-col-flex space-y-2 w-2/3 justify-center pb-5">
            {seperateString(simpleResponse?.choices[0].message.content).map(
              (data) => (
                <Bubble key={data} type={BOT}>
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
