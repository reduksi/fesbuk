import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom';

export default function profileNav({user}){
    return (
    <Col xs={3} className="profile-nav">
        <div className="panel">
            <div className="user-heading round">
                {/* eslint-disable-next-line */}
                <a href="#" className="link-user">
                    <img src={`https://i.pravatar.cc/250?img=${user.id}`} alt={user.id}/>
                </a>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <ListGroup>
                    <Link
                        to='/'
                        >
                        <ListGroupItem>Home</ListGroupItem>
                    </Link>
                    <Link
                        to='/albums'
                        >
                        <ListGroupItem>Albums</ListGroupItem>
                    </Link>
                    <Link
                        to='/friends'
                        >
                        <ListGroupItem>Friends</ListGroupItem>
                    </Link>
                </ListGroup>
            </div>
        </div>
    </Col>
    )
}