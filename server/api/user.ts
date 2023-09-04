import Http from '@/utils/http'
 
export default new class User extends Http {
 
  login(data: object) {
     return this.post('/api/login/account', data)
  }

  register(data: object) {
     return this.post('/api/login/register', data)
  }

  logout() {
     return this.get('/api/login/logout')
  }

  resetPassword(data: object) {
     return this.post('/api/user/resetPassword', data)
  }

  sendCode(email: string) {
     return this.post('/api/sms/sendCode', email)
  }

}