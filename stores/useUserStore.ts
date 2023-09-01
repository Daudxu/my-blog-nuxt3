import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userName: 'userName',
      email: 'sdfasdfasf@qq.com',
      token: 'asdfq23rrfsefg23gedfgdcsdf',
      account: 'userName',
    }
  }, 
  persist: {
    storage: persistedState.cookiesWithOptions({
        sameSite: 'strict', // 设置 SameSite 属性 
        secure: true,       // 设置 secure 属性 设置为 true 时，只有在 HTTPS 连接下，浏览器才会发送该 Cookie。
        httpOnly: true,     // 设置 httpOnly 属性 当设置为 true 时，JavaScript 无法通过 document.cookie 访问这个 Cookie。这有助于防止某些类型的 XSS 攻击。
        maxAge: 60 * 60 * 24 * 7, // 设置 Cookie 的过期时间（单位：秒）
    }),
  },
})
