import Http from '@/utils/http'
 
export default new class Laboratory extends Http {
 
    lists(data) {
        return this.get('/api/laboratory/lists', data)
    }

    detail(params) {
        return this.get('/api/laboratory/detail',params)
    }

}