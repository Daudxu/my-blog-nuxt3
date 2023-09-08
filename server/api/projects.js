import Http from '@/utils/http'
 
export default new class Projects extends Http {
 
    lists(params) {
        return this.get('/api/projects/lists', params)
    }

    detail(params) {
        return this.get('/api/projects/commentsDetail', params)
    }

}