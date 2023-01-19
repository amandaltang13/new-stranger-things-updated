import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const LogIn = ({ setToken, username, setUsername, token, setMainPassword }) => {
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault()

        const fetchLogin = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/users/login', {
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
            })
            const dataApi = await resp.json()
            console.log (dataApi)
            if (dataApi.success){
                setToken(dataApi?.data?.token)
                fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/users/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${dataApi?.data?.token}`
                },
            }).then(response => response.json())
                .then(result => {
                })
                .catch(console.error);
        }
        
    }
    fetchLogin()
            }

    const handleName = (event) => {
        console.log (username)
        setUsername(event.target.value)
        
    }

    const handlePassword = (event) => {
        console.log (password)
        setPassword(event.target.value)
        setMainPassword(event.target.value)
    }

    return <>
        <Header />
        <body>
            <div className='loginContainer'>
                <h1 className='loginTitle'>Welcome to Stranger's Things
                </h1>
                <p className='loginTitle'> Login To Your Account</p>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label className='labelForm'>Username</label>
                    <input type='text' value={username} onChange={handleName} />
                    <label className='labelForm'>Password</label>
                    <input type='password' value={password} onChange={handlePassword} />
                    <button type='submit' onClick={handleSubmit()}>LOG IN</button>
                    <Link className='registerLink' to="/register"> Sign Up</Link>
                </form>
            </div>
        </body>
    </>
}

export default LogIn