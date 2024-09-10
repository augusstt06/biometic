import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { BOT } from '../_constant'

import { type Chat } from '@/app/_type'
import { type Ai, type SimpleAiResponse } from '@/app/_type/api'

type State = {
  chatQue: Chat[]
  setChatQue: (chat: Chat) => void
  deleteLoadingChatQue: (chat: Chat) => void
  resetChatQue: () => void
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
      chatQue: [],
      setChatQue: (chat: Chat) => {
        set({ chatQue: [...get().chatQue, chat] })
      },
      deleteLoadingChatQue: (chat: Chat) => {
        set((state) => {
          const newQue = [...state.chatQue]
          if (newQue.length > 0) {
            newQue[newQue.length - 1] = {
              type: BOT,
              text: chat.text,
            }
          }
          return { chatQue: newQue }
        })
      },
      resetChatQue: () => {
        set({ chatQue: [] })
      },
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
