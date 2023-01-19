import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Posts from './Components/Posts';
import CreatePost from './Components/CreatePost';
import Profile from './Components/Profile';



const App = () => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/posts'
            element={<Posts token={token} />}
          />
          <Route
            path='/'
            element={<Login setToken={setToken} setUsername={setUsername} username={username} token={token}
            />}
          />
          <Route
            path='/login'
            element={<Login setToken={setToken} setUsername={setUsername} username={username} token={token}
            />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
          path='/CreatePost'
          element={<CreatePost  token={token}/>}
          />
          <Route 
          path='/profile'
          element={<Profile token={token}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
