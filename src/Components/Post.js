import React, { useEffect, useState } from 'react';
import Header from './Header';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts')
            const dataFromApi = await resp.json();
            setPosts(dataFromApi.data.posts);
        }
        fetchPosts()
    }, [])


    return (<>
        <Header />
        {
            posts.map(post =>
                <div className='postCard2 animate__animated animate__backInLeft' key={post._id} >
                    <h2>{post.title}</h2>
                    <p className='description truncated'>{post.description}</p>
                    <p><strong>Price: </strong>{post.price}</p>
                    <p><strong>Seller: </strong>{post.author.username}</p>
                    <p><strong>Location: </strong>{post.location}</p>
                    <div className='sendMesForm'>
                    </div>
                </div>)
        }
    </>)
}

export default Posts