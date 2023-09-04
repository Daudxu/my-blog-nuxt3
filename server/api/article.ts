import Http from '@/utils/http'
 
export default new class Article extends Http {
 
    cate() {
        return this.get('/api/article/cate')
    }

    lists() {
        return this.get('/api/article/lists')
    }

    detail() {
        return this.get('/api/article/detail')
    }

    collect() {
        return this.get('/api/article/collect')
    }

    addCollect() {
        return this.get('/api/article/addCollect')
    }

    cancelCollect() {
        return this.get('/api/article/cancelCollect')
    }

}