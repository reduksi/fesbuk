import API from './index.api'

export const getPosts= async() => {
    return API.get(`/posts`);
}
export const createPosts= async(body) => {
    return API.post(`/posts`, body);
}
export const createComments= async(body) => {
    return API.post(`/posts/${body.postId}/comments`, body);
}
export const getPost= async(id) => {
    return API.get(`/posts/${id}`);
}
export const getPostComments= async(id) => {
    return API.get(`/posts/${id}/comments`);
}
