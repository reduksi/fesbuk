
import './style.css'
import { Link } from 'react-router-dom';
import { Col} from 'react-bootstrap'


export default function albumCard({user = {}, album}){
    return (
        <Col xs={4}>
            <div className="album-card">
                <div className="user-profile">
                    <img src={`https://i.pravatar.cc/250?img=${user.id}`} alt={user.id}/>
                    <div className="name">
                        <span>{user.name}</span>
                        <span className="email">{`${user.address?.street}, ${user.address?.city}`}</span>
                    </div>
                </div>
                <div className="album-body">
                    <div className="album-title">{album.title}</div>
                </div>
                <div className="flex pb-6 pt-3 px-7">
                    <Link to={`/album/${album.id}`} className="comment-button">
                        <div className="border border-gray-300 gap-3 px-4 py-1 rounded rounded-lg">
                            <span> open album</span>
                        </div>
                    </Link>
                </div>
            </div>
        </Col>
    )
}