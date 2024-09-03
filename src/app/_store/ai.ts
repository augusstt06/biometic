import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  isChangeAiForm: boolean
  setIsChangeAiForm: () => void
}

export const useAiStore = create<State>()(
  persist(
    (set, get) => ({
      isChangeAiForm: false,
      setIsChangeAiForm: () => {
        set({ isChangeAiForm: !get().isChangeAiForm })
      },
    }),
    {
      name: 'ai',
      getStorage: () => localStorage,
    },
  ),
)
