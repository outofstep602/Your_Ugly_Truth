import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogPost = ({ blogPost, setBlogPost, getBlogs }) => {
    const navigate = useNavigate();
    const username = JSON.parse(localStorage.getItem('user')).username;
    const userImage = JSON.parse(localStorage.getItem('user')).userImage;
    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setBlogPost({
            ...blogPost,
            [name]: value
        })
    };

    const submitHandler = (e) => {
        console.log('click me');
        blogPost.username = username
        blogPost.userImage = userImage

        e.preventDefault();
        axios.post('http://localhost:8800/createPost', blogPost).then((response) => {
            console.log('response', response);
            setBlogPost({
                username: '',
                blogName: '',
                content: ''
            })
            navigate(response.data.redirectUrl);
            getBlogs()
        })

    }
    return (

        <div className="container-post">
            <h3>Would you like to start a new feed?</h3>

            <form>

                <input type="text" className="form-control mt-3" placeholder="Blog Title" name='blogName' onChange={handleChange} value={blogPost.blogName} />
                <input type="text" className="form-control mt-3" placeholder="username Title" name='username' value={username} hidden onChange={handleChange} />
                <input type="text" className="form-control mt-3" name='userImage' value={userImage} hidden readOnly />
                <textarea type="textarea" name='content' value={blogPost.content} size='auto' wrap='soft' placeholder='But Why?' className='texta' onChange={handleChange} />
                <button type='submit' className='btn btn-primary' onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}
export default BlogPost;