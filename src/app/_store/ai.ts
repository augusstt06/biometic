import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type AIResponse = {
  id: string
  object: string
  created: number
  model: string
  choices: Array<{
    index: number
    message: {
      role: string
      content: string
    }
    finish_reason: string
  }>
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}
export type Response = {
  data: AIResponse
  status: number
  statusText: string
}
type State = {
  isChangeAiForm: boolean
  viewAiInfo: () => void
  viewWeatherInfo: () => void
  simpleResponse: AIResponse | null
  setSimpleResponse: (response: Response) => void
}

export const useAiStore = create<State>()(
  persist(
    (set, get) => ({
      isChangeAiForm: false,
      viewAiInfo: () => {
        set({ isChangeAiForm: true })
      },
      viewWeatherInfo: () => {
        set({ isChangeAiForm: false })
      },
      simpleResponse: null,
      setSimpleResponse: (response: Response) => {
        set({ simpleResponse: response.data })
      },
    }),
    {
      name: 'ai',
      getStorage: () => localStorage,
    },
  ),
)
