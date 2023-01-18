import React from "react"
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        <>
            <ul className="headerstyle">
                <h1>Stranger's Things</h1>
                <li><Link to='/posts' className="linkStyle">POSTS</Link></li>
                <li><Link to='/login' className="linkStyle">LOGIN</Link></li>
                <li><Link to='/register' className="linkStyle">REGISTER</Link></li>
            </ul>
        </>

    )

}

export default Header