import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Posts from './Components/Posts';
import CreatePost from './Components/CreatePost';



const App = () => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/posts'
            element={<Posts />}
          />
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='/login'
            element={<Login setToken={setToken} setUsername={setUsername} username={username}
            />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
          path='/CreatePost'
          element={<CreatePost  />}
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
