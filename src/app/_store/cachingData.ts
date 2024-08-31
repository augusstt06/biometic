import { create } from 'zustand'

type State = {
  isCachingDataExist: boolean
  setIsCachingDataExist: (exists: boolean) => void
  updateCacheStatus: () => void
}

export const useCacheStore = create<State>((set) => ({
  isCachingDataExist: false,
  setIsCachingDataExist: (exists) => {
    set({ isCachingDataExist: exists })
  },
  updateCacheStatus: () => {
    const exists = localStorage.getItem('location') !== null
    set((state) => ({ ...state, isCachingDataExist: exists }))
  },
}))
