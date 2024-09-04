// import { useState } from 'react'

import { useAiStore } from '@/app/_store/ai'

export default function AiForm() {
  const { simpleResponse } = useAiStore()
  //   const [input, setInput] = useState<string>('')
  const seperateString = (msg: string | undefined) => {
    if (msg === undefined) return []
    return msg.split(/(?=\d\.\s)/)
  }
  return (
    <article className="bg-white bg-opacity-30 rounded-xl h-72 sort-col-flex space-y-4">
      <h1 className="text-lg px-3 py-2">Ai Recommend</h1>
      <div className="sort-col-flex space-y-2">
        {seperateString(simpleResponse?.choices[0].message.content).map(
          (data) => (
            <p key={data}>{data.trim()}</p>
          ),
        )}
      </div>
    </article>
  )
}
