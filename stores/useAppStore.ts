import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      someState: 'hello pinia',
    }
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
        sameSite: 'strict',
    }),
  },
})
