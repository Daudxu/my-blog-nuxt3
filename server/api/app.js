import Http from '@/utils/http'
 
export default new class App extends Http {
 
  config() {
     return this.get('/api/pc/config')
  }
  
  getHomeData() {
     return this.get('/api/pc/home')
  }

}