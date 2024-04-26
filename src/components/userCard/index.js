import './style.css'

export default function UserCard({data}){
    return (
        <a href={`/user/${data.id}`} className="userCard">
            <div className="profile-image"><img src={`https://i.pravatar.cc/250?img=${data.id}`}/></div>
            <div className="caption">
                <h3>{data.username}</h3>
                <h4>{data.name}</h4>
                <p>{`${data.address?.suite} ${data.address?.street}, ${data.address?.city}`}</p>
            </div>
        </a>
    )
}