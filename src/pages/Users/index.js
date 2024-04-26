import { useState, useEffect } from 'react'
import './style.css'
import { Row, Col } from 'react-bootstrap'
import UserCard from '../../components/userCard'
import { getUsers } from '../../api/user.api'

export default function Users(){
    const [users, setUsers] = useState([])

    async function fetchUser(){
        try {
            const { data } = await getUsers();
            setUsers(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
    <div className="user-list">
        <Row> 
            {users.map((user, i) => 
                <Col xs={4}>
                    <UserCard key={i} data={user}/>
                </Col>)}
        </Row>
    </div>
    )
}