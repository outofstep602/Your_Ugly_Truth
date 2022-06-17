
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Login/login.css'


const Login = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8800/login', userInfo).then((response) => {
      console.log('response', response.data.user);
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate(response.data.redirectUrl, userInfo);
      } else {
        alert('please try again')
      }
    })
  }

  return (
  
    <div id='log-bg'>
      <form>
        <div className="container" id='reg-con'>
          <h2><b>Please log in to share the ugliest parts of yourself</b></h2>
          <br></br>
          <label id='head'htmlFor="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" onChange={handleChange} required />

          <label id='head'htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required />

          <button type="submit" onClick={submitHandler}>Login</button>
          <a href='/register'>Register</a>
        </div>
        
      </form>

    </div>
  
  )
}


export default Login;