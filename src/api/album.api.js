import API from './index.api'

export const getAlbums= async() => {
    return API.get(`/albums`);
}
export const getAlbum= async(id) => {
    return API.get(`/albums/${id}`);
}
export const getAlbumPhotos= async(id) => {
    return API.get(`/albums/${id}/photos`);
}
