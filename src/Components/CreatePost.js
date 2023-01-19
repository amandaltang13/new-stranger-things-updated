import React, { useEffect, useState } from 'react';
import './style.css'
import Header from './Header';

const CreatePost = ({token, mainPassword}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [deliver, setDeliver] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch ('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts', {
            method: "POST", 
            headers: {
                'Content-type': 'Application/JSON',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                title: `${title}`,
                body: `${body}`, 
                price: `${price}`,
                location: `${location}`,
                deliver: `${deliver}`

            })});
            const data = await response.json();
            console.log ('data:', data); 
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
            <h1>Create Post</h1>
            <form onSubmit= {handleSubmit}>
                <input type="text" placeholder="title" value={title} onChange={handleTitle}></input>
                <input type="text" placeholder="body" value={body} onChange={handleBody}></input>
                <input type="number" placeholder="price" value={price} onChange={handlePrice}></input>
                <input type="text" placeholder="location" value={location} onChange={handleLocation}></input>
                <button type="submit">Create Now!</button>
            </form>
        </>)
    }

    export default CreatePost

