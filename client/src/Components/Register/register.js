import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Register/register.css'


const Register = ({ userInfo, setUserInfo }) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(
        "robot"
    )
    const imageChange = (e) => {
        e.preventDefault()
        setImage(e.target.value)
        setUserInfo({
            ...userInfo,
            image: e.target.value

        })
    }

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
        e.preventDefault()

        if (userInfo.password !== userInfo.confirm) {
            alert("passwords don't match")
        } else {
            axios.post('http://localhost:8800/register', userInfo).then((response) => {
                if (response.data.success) {
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    navigate(response.data.redirectUrl, userInfo)
                } else {
                    alert('Username Already Exists')
                    console.log(response.data)

                }
            })
        }
    };


    return (
        <div id='bg-img'>
            <form>
                <div className='container' id='reg-con'>

                    <label htmlFor="username"><b>UserName</b></label>
                    <input type="text" placeholder="Username" name="username" id="username" onChange={handleChange} autoComplete='on' required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" id="psw" onChange={handleChange} autoComplete='on' required />
                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="confirm" id="psw-repeat" onChange={handleChange} autoComplete='on' required />
                    <input type="text" placeholder="image" name="image" id="image" value={image} hidden readOnly />
                    <hr />
                    <br />
                    <fieldset>
                        <b>Please Pick An Avatar</b>
                        <br />
                        <select
                            onChange={imageChange}
                            id="select"
                            autoComplete="off"
                        >
                            <option >Robot</option>
                            <option >Mindfulness</option>
                            <option>Telephone</option>
                        </select>
                        <img id='image-size' src={`./assets/images/${image.toLocaleLowerCase()}.png`}></img>
                    </fieldset>
                    <button type="submit" className='registerbtn' onClick={submitHandler}>Register</button>

                    <a href='/'>Log In</a>
                </div>
            </form>
        </div>
    )
};
export default Register;