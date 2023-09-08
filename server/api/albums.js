import Http from '@/utils/http'
 
export default new class Albums extends Http {
 
    lists(data) {
        return this.get('/api/albums/lists', data)
    }

    detail(params) {
        return this.get('/api/albums/detail',params)
    }

}