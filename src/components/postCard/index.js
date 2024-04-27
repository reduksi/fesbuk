import './style.css'
import { Link } from 'react-router-dom';

export default function postCard({user = {}, post, showComment}){
    return (
        <div className="post-card">
            <div className="user-profile">
                <img src={`https://i.pravatar.cc/250?img=${user.id}`} alt={user.id}/>
                <div className="name">
                    <span>{user.name}</span>
                    <span className="email">{`${user.address?.street}, ${user.address?.city}`}</span>
                </div>
            </div>
            <div className="post-body">
                <div className="post-title">"{post.title}"</div>
                <div>{post.body}</div>
            </div>
            {showComment &&
                <div className="flex pb-6 pt-3 px-7">
                    <Link to={`/post/${post.id}`} className="comment-button">
                        <span className="border border-gray-300 gap-3 px-4 py-1 rounded rounded-lg">
                            <span> comments</span>
                        </span>
                    </Link>
                </div>
            }
        </div>
    )
}