import Http from '@/utils/http'
 
export default new class User extends Http {
 
  login() {
     return this.post('/api/login/account')
  }

  register() {
     return this.post('/api/login/register')
  }

  logout() {
     return this.get('/api/login/logout')
  }

  resetPassword() {
     return this.post('/api/user/resetPassword')
  }

  sendCode() {
     return this.post('/api/sms/sendCode')
  }

}