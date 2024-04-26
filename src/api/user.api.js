import API from './index.api'

export const getUsers= async() => {
    return API.get(`/users`);
}

export const getUserPosts= async(userId) => {
    return API.get(`/users/${userId}/posts`);
}

export const getUserDetail= async(userId) => {
    return API.get(`/users/${userId}`);
}