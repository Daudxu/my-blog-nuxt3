import Http from '@/utils/http'
 
export default new class App extends Http {
 
  config() {
     return this.get('/api/pc/config')
  }

//   login() {
//      return this.get('/api/login/account')
//   }

//   register() {
//      return this.get('/api/login/register')
//   }

//   resetPassword() {
//      return this.get('/api/user/resetPassword')
//   }

//   sendCode() {
//      return this.get('/api/sms/sendCode')
//   }
 

  // /**
  //  * 获取文章详情
  //  * @param { Number } id 文章id
  //  */
  // getDetail(id: number) {
  //   return this.get('/app/v1/article/detail/' + id)
  // }
 
  // getList() {
  //   return this.get("/api/List")
  // }

}