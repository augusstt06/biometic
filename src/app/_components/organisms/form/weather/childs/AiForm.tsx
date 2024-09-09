import { type ChangeEvent, useState } from 'react'

import Button from '@/app/_components/atoms/button/Button'
import LabelInput from '@/app/_components/molecules/input/LabelInput'
import { fetchOpenAi } from '@/app/_modules/api'
import { useAiStore } from '@/app/_store/ai'
import { useMutation } from '@tanstack/react-query'

export default function AiForm() {
  const { simpleResponse, category } = useAiStore()
  const [inputValue, setInputValue] = useState<string>('')
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const clickHandler = () => {
    if (inputValue.trim() === '') {
      alert('입력란을 채워주세요!')
      // return
    }
    // void fetchOpenAi(inputValue)
  }
  const seperateString = (msg: string | undefined) => {
    if (msg === undefined) return []
    return msg.split(/(?=\d\.\s)/)
  }
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await fetchOpenAi(inputValue)
      return res
    },
    onSuccess: (data) => {},
    onError: () => {},
  })
  const renderAiForm = () => {
    switch (category) {
      case 'search':
        return (
          <div className="sort-col-flex relative w-2/3 h-full space-y-2 rounded-lg">
            <div className="top-44 sort-row-flex absolute justify-center w-2/3 space-x-3">
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
    <article className="bg-opacity-30 rounded-xl h-72 sort-col-flex space-y-4 bg-white">
      <h1 className="px-3 py-2 text-lg">Ai Recommend</h1>
      {renderAiForm()}
    </article>
  )
}
