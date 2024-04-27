import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import './style.css'
import { getPost, getPostComments, createComments } from '../../api/post.api'

import SubmitPost from '../../components/submitPost'
import PostCard from '../../components/postCard'

export default function PostDetail({getUser, currentUser}){
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const { postId } = useParams();

    async function fetchPost(){
        try {
            const { data } = await getPost(postId);
            setPost(data)
        } catch (error) {
            console.error(error)
        }
    }
    async function fetchComments(){
        try {
            const { data } = await getPostComments(postId);
            setComments(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function submitComment(title, body){
        try {
            const currentUserDetail = getUser(currentUser)
            const { data } = await createComments({
                postId: post.userId, body, email: currentUserDetail.email, name: currentUserDetail.name
            });
            console.log(data)
            setComments(prevState => ([...prevState, data]))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPost();
        fetchComments();
        // eslint-disable-next-line
    }, [])

    return (
    <>
        {post.userId && <PostCard post={post} user={getUser(post.userId)}/>}
        {comments.map((comment,i) =>  
            <div className="comment-card">
                <Row key={i} >
                    <Col xs={post.userId === currentUser ? 11 : 12}>
                        <span className="comment-name">{comment.name}{' '}</span>
                        <span>{comment.body}</span>
                    </Col>
                    {post.userId === currentUser && 
                        <Col xs={1} className="delete-container">
                            <img width={20} height={20} src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" alt="trash"/>
                        </Col>}
                </Row>
            </div>)}
        <SubmitPost button="Comment" placeholder="type a comment .." onSubmit={submitComment}/>
       
    </>
    )
}