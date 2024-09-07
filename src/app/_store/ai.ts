import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { type Ai } from '../_type/api'

export type Response = {
  data: Ai
  status: number
  statusText: string
}
type State = {
  isChangeAiForm: boolean
  category: string
  setAiCategory: (category: string) => void
  viewAiInfo: () => void
  viewWeatherInfo: () => void
  simpleResponse: Ai | null
  setSimpleResponse: (response: Response) => void
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
