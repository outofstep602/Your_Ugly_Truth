
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import Register from './Components/Register/register'
import MainPage from './Components/Main/Main'
import Login from './Components/Login/login';
import ChangePassword from './Components/ChangePassword/ChangePassword';

function App() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    confirm: '',
    message: '',
    image: "robot",
    login: false
  })
  const [blogPost, setBlogPost] = useState({
    username: '',
    blogName: '',
    content: ''
  })
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/register' element={<Register userInfo={userInfo} setUserInfo={setUserInfo} />} />

          <Route path='/main' element={<MainPage blogPost={blogPost} setBlogPost={setBlogPost} />} />

          <Route exact path='/' element={<Login userInfo={userInfo} setUserInfo={setUserInfo} />} />

          <Route path='/changepassword' element={<ChangePassword userInfo={userInfo} setUserInfo={setUserInfo} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
