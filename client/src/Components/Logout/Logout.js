import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Logout/Logout.css'

const Logout = () => {
    const navigate = useNavigate();
    const logoutHandler = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8800/logout').then((response) => {
            localStorage.setItem('user', null);
            console.log("response", response);

            navigate(response.data.redirectUrl)
        })
    }
    return (
        <div>
            <a className='nav-link' onClick={logoutHandler}
                href='#'>Log Out</a>
        </div>
    )

}
export default Logout