import Http from '@/utils/http'
 
export default new class Poster extends Http {
 
    lists(data:object) {
        return this.get('/api/poster/lists', data)
    }

    detail() {
        return this.get('/api/poster/detail')
    }

}