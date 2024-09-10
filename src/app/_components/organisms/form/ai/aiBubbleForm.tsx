import Bubble from '@/app/_components/atoms/bubble/Bubble'
import { type Chat } from '@/app/_components/organisms/form/weather/childs/AiForm'

type Props = {
  chatQue: Chat[]
}
export default function AiBubbleForm(props: Props) {
  const { chatQue } = props
  return (
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
  )
}
