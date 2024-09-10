import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { type Ai, type SimpleAiResponse } from '@/app/_type/api'

type State = {
  isChangeAiForm: boolean
  category: string
  setAiCategory: (category: string) => void
  viewAiInfo: () => void
  viewWeatherInfo: () => void
  simpleResponse: Ai | null
  setSimpleResponse: (response: SimpleAiResponse) => void
}

export const useAiStore = create<State>()(
  persist(
    (set, get) => ({
      isChangeAiForm: false,
      category: '',
      setAiCategory: (keyword: string) => {
        set({ category: keyword })
      },
      viewAiInfo: () => {
        set({ isChangeAiForm: true })
      },
      viewWeatherInfo: () => {
        set({ isChangeAiForm: false })
      },
      simpleResponse: null,
      setSimpleResponse: (response: SimpleAiResponse) => {
        set({ simpleResponse: response.data })
      },
    }),
    {
      name: 'ai',
      getStorage: () => localStorage,
    },
  ),
)
