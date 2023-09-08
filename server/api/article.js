import Http from '@/utils/http'
 
export default new class Article extends Http {
 
    cate() {
        return this.get('/api/article/cate')
    }

    lists(params) {
        return this.get('/api/article/lists', params)
    }

    detail(params) {
        return this.get('/api/article/commentsDetail', params)
    }

    collect(params) {
        return this.get('/api/article/collect', params)
    }

    addCollect(params) {
        return this.get('/api/article/addCollect', params)
    }

    cancelCollect(params) {
        return this.get('/api/article/cancelCollect', params)
    }

    addComments (params) {
        return this.post('/api/article/addComments ', params)
    }

    addReplies (params) {
        return this.post('/api/article/addReplies', params)
    }

}