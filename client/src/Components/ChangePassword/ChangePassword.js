import React from 'react';
// import '../ChangePassword/ChangePassword.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangePassword = ({ userInfo, setUserInfo }) => {
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
        console.log('click')
        e.preventDefault()

        if (userInfo.newpassword !== userInfo.confirm) {
            // console.log('user', userInfo.password)
            alert("passwords don't match")
        } else {
            axios.post('http://localhost:8800/changepassword', userInfo).then((response) => {
                if (response.data.success) {
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    navigate(response.data.redirectUrl, userInfo)
                } else {
                    console.log(response.data)
                }
            })
        }
    };


    return (
        <div>
            <form className="signup">
                <div className="container">
                    <h1>Change Password</h1>
                    <p>Verify Current Password</p>
                    <hr />

                    <label htmlFor="username"><b>UserName</b></label>
                    <input type="text" placeholder="Username" name="username" id="username" onChange={handleChange} autoComplete='on' required />

                    <label htmlFor='old-pass'><b>Old Password</b></label>

                    <input type="password" placeholder="Old Password"
                        onChange={handleChange} name='password'
                        autoComplete='on' required />

                    <label htmlFor="psw"><b>Password</b></label>

                    <input type="password" placeholder="Enter Password" onChange={handleChange} name='newpassword' autoComplete='on' required />

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>

                    <input type="password" placeholder="Repeat Password" onChange={handleChange} name='confirm' autoComplete='on' required />
                    <hr />

                    <button type="submit" className='registerbtn' onClick={submitHandler}>Change Password</button>
                    <div className='signin'>

                    </div>
                </div>

            </form>


        </div>
    )
};
export default ChangePassword