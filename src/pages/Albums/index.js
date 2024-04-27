import { useState, useEffect } from 'react'
import './style.css'
import { Row } from 'react-bootstrap'
import { getAlbums } from '../../api/album.api'

import AlbumCard from '../../components/albumCard'

export default function Albums({getUser}){
    const [Albums, setAlbums] = useState([])

    async function fetchAlbums(){
        try {
            const { data } = await getAlbums();
            setAlbums(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchAlbums();
    }, [])

    return (
    <Row gap={1}>
        {Albums.map((album,i) => <AlbumCard key={i} album={album} user={getUser(album.userId)} showComment/>)}
    </Row>

  
    )
}