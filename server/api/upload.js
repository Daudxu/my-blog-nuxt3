import Http from '@/utils/http'
 
export default new class Article extends Http {
 
    upload() {
        return this.get('/api/upload/image')
    }


}