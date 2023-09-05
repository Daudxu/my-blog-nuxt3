import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      webConfig: {},
    }
  },
  persist: {
    storage: persistedState.localStorage
  },
})
