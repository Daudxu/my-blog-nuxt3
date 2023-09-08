import Http from '@/utils/http'
 
export default new class MessageBoard extends Http {
 
    lists(params) {
        return this.get('/api/messageBoard/lists', params)
    }

    detail(params) {
        return this.get('/api/messageBoard/commentsDetail', params)
    }

}