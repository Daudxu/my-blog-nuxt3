import Http from '@/utils/http'
 
export default new class User extends Http {
 
  login(data) {
     return this.post('/api/login/account', data)
  }

  register(data) {
     return this.post('/api/login/register', data)
  }

  logout() {
     return this.get('/api/login/logout')
  }

  resetPassword(data) {
     return this.post('/api/user/resetPassword', data)
  }

  sendCode(email) {
     return this.post('/api/sms/sendCode', email)
  }

}