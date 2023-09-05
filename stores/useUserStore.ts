import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      username: '',
      password: '',
      rememberMe: false,
      token: '',
      email: '',
      userinfo: '',
    }
  }, 
  persist: {
    storage: persistedState.localStorage
  }
})
