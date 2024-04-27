import './style.css'
import { Col} from 'react-bootstrap'


export default function photoCard({user = {}, photo}){
    return (
        <Col xs={4} className="photo-card-container">
            <div className="photo-card">
                <div className="user-profile">
                    <img src={`https://i.pravatar.cc/250?img=${user.id}`} alt={user.id}/>
                    <div className="name">
                        <span>{user.name}</span>
                        <span className="email">{`${user.address?.street}, ${user.address?.city}`}</span>
                    </div>
                </div>
            </div>
            <div className="photo-card-image">
                <img src={photo.url} alt={user.id} className="image"/>
            </div>
            <div className="photo-card pt-1">
                <div className="photo-body">
                    <div className="photo-title">{photo.title}</div>
                </div>
            </div>
        </Col>
    )
}
