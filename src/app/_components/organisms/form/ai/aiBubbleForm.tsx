import Bubble from '@/app/_components/atoms/bubble/Bubble'
import { BOT } from '@/app/_constant'
import { type Chat } from '@/app/_type'

type Props = {
  chatQue: Chat[]
}
export default function AiBubbleForm(props: Props) {
  const { chatQue } = props
  return (
    <div className="w-full h-44 overflow-scroll row-start-1 row-span-6">
      {chatQue.map((data) => (
        <div
          key={data.text}
          className={`flex w-full ${
            data.type === BOT ? 'justify-start' : 'justify-end'
          }`}
        >
          <Bubble type={data.type}>{data.text}</Bubble>
        </div>
      ))}
    </div>
  )
}
