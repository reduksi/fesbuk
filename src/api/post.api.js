import API from './index.api'

export const getPosts= async() => {
    return API.get(`/posts`);
}
