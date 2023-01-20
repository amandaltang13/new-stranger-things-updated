import React, { useEffect, useState } from 'react';
import './style.css'
import Header from './Header';
import { Link } from 'react-router-dom'

const Posts = ({token, username}) => {
    const [posts, setPosts] = useState([])
    const [message, setMessage]= useState([])
    const [open, setOpen] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false) 
    const [myPost, setMyPost] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts')
            const dataResp = await resp.json();
            setPosts(dataResp.data.posts);
            if(token){
                setLoggedIn(true)
            }
        }
        fetchPosts()
    }, [])

    const handleDeletePost = (post) => {

        fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts/${post._id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(result => {
                console.log(result);
                const fetchPosts = async () => {
                    const resp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts')
                    const dataApi = await resp.json();
                    setPosts(dataApi.data.posts);
                }
                fetchPosts()
            })
            .catch(console.error);
    }

    const messageForm = () => {
        
        const handleSendMess = (post, event) => {
            event.preventDefault(); 
            fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts/${post._id}/messages`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    message: {
                        content: `${message}`
                    }
                })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
        }
        const handleMessage = (event) => {
            setMessage (event.target.value)
        }
        return (<>
        <h1>SEND MESSAGE</h1>
         <form onSubmit={handleSendMess}>
            <input type='text' value= {message} onChange= {handleMessage}></input>
        <button type='submit'>SEND</button>
        </form>
        </>
       )
    }

    const handleMyPost = (post) => {
        setOpen(!open)
        if (post.author.username === username){
          
            setMyPost(true)
        }else{
            setMyPost(false)
        }
    }

    return (<>
        <Header />
        <button className='createPostBtn'> <Link to="/CreatePost">Create A New Post</Link></button>
        {
            posts.map(post =>
                <div className='post' key={post._id} >
                    <h2>{post.title}</h2>
                    <p className='description'>{post.description}</p>
                    <p><strong>Price: </strong>{post.price}</p>
                    <p><strong>Location: </strong>{post.location}</p>
                    <p><strong>Seller: </strong>{post.author.username}</p>
                    {loggedIn && <section><button type='button' className='messageBtn' onClick={() => handleDeletePost(post)}>DELETE</button>
                    <button type='button' className='messageBtn' onClick={() => handleMyPost(post) }>SEND MESSAGE</button></section>}
                <div>
                    {!myPost && open && messageForm()}
                </div>
                </div>)
        }
    </>)
}

export default Posts