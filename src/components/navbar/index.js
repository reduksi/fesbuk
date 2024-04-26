import logo from '../../assets/logo-navbar.png'
import './style.css'

export default function navbar(){
    return (
    <div className="navbar">
        <img src={logo} className="img" width="150" alt="logo"/>
        
        <div className="right-nav">
            <button className="nav-sign">SIGN OUT</button>
        </div>
    </div>
    )
}