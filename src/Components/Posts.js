import React, { useEffect, useState } from 'react';
import './style.css'
import Header from './Header';
import { Link } from 'react-router-dom'

const Posts = ({token}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts')
            const dataResp = await resp.json();
            setPosts(dataResp.data.posts);
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

    const handleSendMess = (post) => {
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

    return (<>
        <Header />
        <button  > <Link to="/CreatePost">Create A New Post</Link></button>
        {
            posts.map(post =>
                <div className='post' key={post._id} >
                    <h2>{post.title}</h2>
                    <p className='description truncated'>{post.description}</p>
                    <p><strong>Price: </strong>{post.price}</p>
                    <p><strong>Location: </strong>{post.location}</p>
                    <p><strong>Seller: </strong>{post.author.username}</p>
                    <button type='button' className='messageBtn red' onClick={() => handleDeletePost(post)}>DELETE</button>
                    <button type='button' className='messageBtn red' onClick={() => handleSendMess(post)}>SEND MESSAGE</button>
                </div>)
        }
    </>)
}

export default Posts