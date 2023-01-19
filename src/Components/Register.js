import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './style.css'

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: `${username}`,
                    password: `${password}`
                }
            })
        }).then(response => response.json())
        
            .then(result => {
                console.log (result)
            })
            .catch(console.log("error"))

    }
    const handleName = (event) => {
        console.log(username)
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        console.log(password)
        setPassword(event.target.value)
    }

    return <>
        <Header />
        <body>
            <div id='loginContainer'>
                <form className='registerForm' onSubmit={handleSubmit}>
                    <h1 className='loginTitle'>Welcome to Stranger's Things
                    </h1>
                    <p className='loginTitle'> Register To Your Account</p>
                    <label className='labelForm'>Username</label>
                    <input type='text' name='username' value={username} onChange={handleName} />
                    <label className='labelForm'>Password</label>
                    <input type='password' name='password' value={password} onChange={handlePassword} />
                    <button type='submit'>Register</button>
                    <Link to="/login" className='registerLink'>Log in</Link>
                </form>
            </div>
        </body>

    </>
}

export default Register