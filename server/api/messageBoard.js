import Http from '@/utils/http'
 
export default new class MessageBoard extends Http {
    // 列表
    lists(params) {
        return this.get('/api/messageBoard/lists', params)
    }
    // 添加留言
    addMessage(params) {
        return this.post('/api/messageBoard/add', params)
    }
    // 添加评论
    addComments(data) {
        return this.post('/api/messageBoard/addComments',data)
    }
    // 添加回复
    addReplies(data) {
        return this.post('/api/messageBoard/addReplies',data)
    }
}