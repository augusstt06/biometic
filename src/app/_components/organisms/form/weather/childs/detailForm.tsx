import AiForm from './AiForm'
import DetailWeather from './detailWeather'

import { useAiStore } from '@/app/_store/ai'

export default function DetailForm() {
  const { isChangeAiForm } = useAiStore()

  return (
    <div className="relative w-full perspective-1000">
      <div
        className={`absolute inset-0 backface-hidden transform simple-transition ${
          isChangeAiForm ? 'rotate-y-180' : ''
        }`}
      >
        <DetailWeather />
      </div>
      <div
        className={`absolute inset-0 backface-hidden transform simple-transition ${
          isChangeAiForm ? '' : 'rotate-y-180'
        }`}
      >
        <AiForm />
      </div>
    </div>
  )
}
