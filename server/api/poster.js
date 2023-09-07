import Http from '@/utils/http'
 
export default new class Poster extends Http {
 
    lists(data) {
        return this.get('/api/poster/lists', data)
    }

    detail(params) {
        return this.get('/api/poster/detail',params)
    }

    addComments(data) {
        return this.post('/api/poster/addComments',data)
    }

    addReplies(data) {
        return this.post('/api/poster/addReplies',data)
    }

}