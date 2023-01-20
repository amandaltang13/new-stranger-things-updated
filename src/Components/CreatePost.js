import React, { useState } from 'react';
import './style.css'
import Header from './Header';

const CreatePost = ({token}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [deliver, setDeliver] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: `${title}`,
                    description: `${body}`,
                    price: `${price}`,
                    location: `${location}`,
                    willDeliver: `${deliver}`
                }
            })
        }).then(response => response.json())
            .then(result => {
            })
            .catch(console.error);
    }

        const handleTitle = (event) => {
            console.log (title) 
            setTitle(event.target.value)
        }
        const handleBody = (event) => {
            console.log (body) 
            setBody(event.target.value)
        }
        const handlePrice = (event) => {
            console.log (price) 
            setPrice(event.target.value)
        }
        const handleLocation = (event) => {
            console.log (location)
            setLocation(event.target.value)
        }
        return (<>
            <Header></Header>
            <h1 className='createHeader'>Create Post</h1>
            <form className='submitContainer'onSubmit= {handleSubmit}>
                <input className='createTitle' type="text" placeholder="title" value={title} onChange={handleTitle}></input>
                <input className='createBody' type="text" placeholder="body" value={body} onChange={handleBody}></input>
                <input className='createPrice' type="number" placeholder="price" value={price} onChange={handlePrice}></input>
                <input className='createLocation' type="text" placeholder="location" value={location} onChange={handleLocation}></input>
                <button className='createBtn'type="submit">Create Now!</button>
            </form>
        </>)
    }

    export default CreatePost

