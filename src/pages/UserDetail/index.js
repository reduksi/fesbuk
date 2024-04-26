import { useState, useEffect } from 'react'
import './style.css'
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { getUserDetail, getUsers } from '../../api/user.api'
import { getPosts } from '../../api/post.api'

export default function UserDetail(){
    const { userId } = useParams();
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    async function fetchUser(){
        try {
            const { data } = await getUserDetail(userId);
            setUser(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function fetchUsers(){
        try {
            const { data } = await getUsers(userId);
            setUsers(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function fetchPosts(){
        try {
            const { data } = await getPosts(userId);
            const randomPost = data.map(value => ({ value, sort: Math.random() }))
                                .sort((a, b) => a.sort - b.sort)
                                .map(({ value }) => value)
            setPosts(randomPost)
        } catch (error) {
            console.error(error)
        }
    }

    function getUser(id){
        return users.find(user => user.id === id)
    }

    useEffect(() => {
        fetchUser();
        fetchPosts();
        fetchUsers();
    }, [])

    return (
    <div className="user-detail">
        <Row>
            <Col xs={3} className="profile-nav">
                <div className="panel">
                    <div className="user-heading round">
                        <a href="#">
                            <img src={`https://i.pravatar.cc/250?img=${user.id}`} alt=""/>
                        </a>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                        <ListGroup>
                            <ListGroupItem>Profile</ListGroupItem>
                            <ListGroupItem>Photos</ListGroupItem>
                        </ListGroup>
                    </div>

                </div>
            </Col>
            <Col xs={9} className="profile-info">
                 <div className="submit-post">
                    <form>
                        <textarea placeholder="Whats in your mind today?" rows="2" class="form-control input-lg p-text-area"></textarea>
                    </form>
                    <footer className="panel-footer">
                        <button>Post</button>
                    </footer>
                </div>

                {posts.map((post,i) => <div className="post">
                    <div className="user-profile">
                        <img src={`https://i.pravatar.cc/250?img=${getUser(post.userId).id}`} />
                        <div className="name">
                            <span>{getUser(post.userId).name}</span>
                            <span className="email">{`${getUser(post.userId).address?.street}, ${getUser(post.userId).address?.city}`}</span>
                        </div>
                    </div>
                    <div className="post-body">
                        <div className="post-title">"{post.title}"</div>
                        <div>{post.body}</div>
                    </div>
                    <div className="flex pb-6 pt-3 px-7">
                        <span className="border border-gray-300 gap-3 px-4 py-1 rounded rounded-lg">
                            <img src="https://rvs-accountable-social-media-feed.vercel.app/assets/Comments.svg" alt=""/>
                            <span> 11 comments</span>
                        </span>
                    </div>
                </div>)}
            </Col>
        </Row>
    </div>
    )
}