import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: {'Authorization': 'np'}
});


class BlogApi {

    static getCategories() {
        return instance.get("/categories")
    }

    static getPosts(category=null) {
        const url = category ? `/${category}/posts` : '/posts'

        return instance.get(url)
    }


    static createPost(post) {
        return instance.post("/posts", post)
    }

    static getPost(id) {
        return instance.get(`/posts/${id}`)
    }

    static deletePost(id) {
        return instance.delete(`/posts/${id}`)
    }

    static updatePost(id, title, body) {
        const post = {
            title, body
        }
        return instance.put(`/posts/${id}`, post)
    }

    static updatePostScore(id, option) {
        const payload = {option}

        return instance.post(`/posts/${id}`, payload)
    }

    static getPostComments(postId) {
        return instance.get(`/posts/${postId}/comments`)
    }

    static getComment(commentId) {
        return instance.get(`/comments/${commentId}`)
    }

    static deleteComment(commentId) {
        return instance.delete(`/comments/${commentId}`)
    }

    static addComment(comment) {
        return instance.post(`/comments`, comment)
    }

    static updateComment(commentId, timestamp, body) {
        const comment = {timestamp, body}
        return instance.put(`/comments/${commentId}`, comment)
    }

    static voteComment(commentId, option) {
        return instance.post(`/comments/${commentId}`, {option})
    }


}

export default BlogApi