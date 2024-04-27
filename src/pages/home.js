import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Routes, Route} from "react-router-dom"
import { getUserDetail, getUsers } from '../api/user.api'

import ProfileNav from '../components/profileNav'
import PostDetail from './PostDetail'
import AlbumDetail from './AlbumDetail'
import Posts from './Posts'
import Albums from './Albums'
import Users from './Users'


const userId = 2;

export default function UserDetail(){
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])

    async function fetchUsers(){
        try {
            const { data } = await getUsers();
            setUsers(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function fetchLoggedUser(){
        try {
            const { data } = await getUserDetail(userId);
            setUser(data)
        } catch (error) {
            console.error(error)
        }
    }

    function getUser(id){
        if(users.length > 0){
            return users.find(user => user.id === id)
        }
        return {}
    }

    useEffect(() => {
        fetchLoggedUser();
        fetchUsers();
    }, [])

    return (
    <div className="container">
        <Row>
            <ProfileNav user={user}/>
            <Col xs={9} className="content">
                <Routes>
                    <Route exact path={"/"} element={<Posts getUser={getUser} currentUser={userId}/>} />
                    <Route exact path={"/post/:postId"} element={<PostDetail getUser={getUser} currentUser={userId}/>} />
                    <Route path={"/albums"} element={<Albums getUser={getUser} currentUser={userId}/>} />
                    <Route path={"/album/:albumId"} element={<AlbumDetail users={users} getUser={getUser}/>} />
                    <Route path={"/friends"} element={<Users/>} />
                </Routes>
            </Col>
        </Row>
    </div>
    )
}