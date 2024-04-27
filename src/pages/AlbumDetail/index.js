import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import './style.css'
import { getAlbum, getAlbumPhotos } from '../../api/album.api'

import PostCard from '../../components/postCard'
import PhotoCard from '../../components/photoCard'

export default function Album({getUser}){
    const [album, setAlbum] = useState({})
    const [photos, setPhotos] = useState([])
    const { albumId } = useParams();

    async function fetchAlbum(){
        try {
            const { data } = await getAlbum(albumId);
            setAlbum(data)
        } catch (error) {
            console.error(error)
        }
    }
    async function fetchPhotos(){
        try {
            const { data } = await getAlbumPhotos(albumId);
            setPhotos(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchAlbum();
        fetchPhotos();
        // eslint-disable-next-line
    }, [])

    return (
    <>
        {album.userId && <PostCard post={album} user={getUser(album.userId)}/>}
        <Row>
            {photos.map((photo,i) =>  
                <PhotoCard key={i} user={getUser(album.userId)} photo={photo}/>
            )}
        </Row>
    </>
    )
}