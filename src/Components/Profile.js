import React, { useEffect, useState } from 'react';
import './style.css'
import Header from './Header';
// import { Link } from 'react-router-dom'

const Profile = ({token, setToken, usename, setUsername, profileMessages}) => {
    console.log(profileMessages)
    return (<>
        <Header>
        </Header>
        <h1 className='messageHeader'>My Messages</h1>
        {
            profileMessages.map(profMessage =>
               <div key={profMessage._id} className='messageContainer'>
                <p className='username'> {profMessage.fromUser.username}</p>
                <p className='profMessage'> {profMessage.content}</p>
                 
               </div> )
        }
    </>)

}
export default Profile

