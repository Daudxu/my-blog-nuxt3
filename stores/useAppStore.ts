import { defineStore } from 'pinia'

export const useAppStore = defineStore('main', {
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
