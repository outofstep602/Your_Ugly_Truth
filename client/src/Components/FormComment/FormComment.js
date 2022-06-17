import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import getBlogs from '../../util/api'

const FormComment = ({ _id, setOpen, onFormClose, comment, setComment, blogList, setBlogList }) => {


  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setComment({
      ...comment,
      [name]: value
    })
  };
  const getBlogs = async () => {
    const res = await axios('http://localhost:8800/getBlogs');
    setBlogList(res.data.reverse());
  };

  const axiosHandler = (e) => {
    comment.username = JSON.parse(localStorage.getItem('user')).username;
    comment.blogId = _id
    console.log("axios comment", comment)
    e.preventDefault();
    axios.post('http://localhost:8800/createComment', comment).then((response) => {
      console.log('response', response);
      document.getElementById("comment").value = ""
      setOpen({ isOpen: false });
      navigate(response.data.redirectUrl);
      getBlogs()
    })

  }

  return (
    <div className='ui centered card'>
      <div className='content'>
        <div className='ui form'>
          <div className='field'>
            <form className='blogcomment'>
              <textarea type='textarea' size='auto' wrap='soft' id="comment" name="comment" placeholder="Comments" onChange={handleChange}></textarea>
              <button id='btn btn-primary' type="submit" onClick={axiosHandler}>Submit</button>
            </form>
          </div>

          <div className='cancel-button'>
            <button className='btn btn-warning' onClick={onFormClose}>
              Cancel</button>

          </div>
        </div>
      </div>
    </div>
  );

}
export default FormComment