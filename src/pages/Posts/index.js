import { useState, useEffect } from 'react'
import './style.css'

import SubmitPost from '../../components/submitPost'
import { getPosts, createPosts } from '../../api/post.api'

import PostCard from '../../components/postCard'

export default function Posts({getUser, currentUser}){
    const [posts, setPosts] = useState([])

    async function fetchPosts(){
        try {
            const { data } = await getPosts();
            setPosts(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function submitPost(title, body){
        try {

            const { data } = await createPosts({
                title, body, userId: currentUser
            });
            setPosts(prevState => ([data, ...prevState]))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
    <>
        <SubmitPost button="Post" placeholder="Whats in your mind?" withTitle onSubmit={submitPost}/>
        {posts.map((post,i) => <PostCard key={i} post={post} user={getUser(post.userId)} showComment/>)}
    </>
    )
}