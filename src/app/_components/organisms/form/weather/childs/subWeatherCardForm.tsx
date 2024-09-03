import AiForm from './AiForm'
import DetailWeatherInfoForm from './detailWeatherInfoForm'

import { useAiStore } from '@/app/_store/ai'

export default function SubWeatherCardForm() {
  const { isChangeAiForm } = useAiStore()

  return (
    <div className="relative w-full perspective-1000">
      <div
        className={`absolute inset-0 backface-hidden transform simple-transition ${
          isChangeAiForm ? 'rotate-y-180' : ''
        }`}
      >
        <DetailWeatherInfoForm />
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
