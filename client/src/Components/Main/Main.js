import React from 'react';
import axios from 'axios'
import '../Main/Main.css'
import BlogPost from '../BlogPost/Post'
import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import CommentCard from "../CommentCard/CommentCard"
import PopularPost from '../PopularPost/PopularPost';
import Footer from '../Footer/Footer';

const MainPage = ({ blogPost, setBlogPost }) => {
    const [blogList, setBlogList] = useState([])
    const [comment, setComment] = useState([])
    const [active, setActive] = useState({
        isActive: false
    })

    const username = JSON.parse(localStorage.getItem('user')).username;
    const getBlogs = async () => {
        const res = await axios('http://localhost:8800/getBlogs');
        setBlogList(res.data.reverse());

    };


    useEffect(() => {
        getBlogs();

    }, []);

    return (

        <div id='bg'>
            <Navbar />

            <div className="row ">
                <div className="leftcolumn">
                    <div className="card">

                        <h3>Hello {username}</h3>
                        <BlogPost blogPost={blogPost} setBlogPost={setBlogPost} getBlogs={getBlogs} />
                        <p id='intro-state'>we will tolerate no grandstanding, ego stroking self-promotion. If you are unable to identify your flaws or lack of perfection, you are in the wrong place. There will only be love and respect for the things others look down on you for.</p>

                    </div>

                    <div>
                        {
                            blogList.map(({ _id, blogName, content, username,
                                date, comments, userImage }) => {


                                return (

                                    <CommentCard
                                        key={_id}
                                        _id={_id}
                                        blogName={blogName}
                                        content={content}
                                        username={username}
                                        date={date}
                                        comments={comments}
                                        comment={comment}
                                        setComment={setComment}
                                        active={active}
                                        setActive={setActive}
                                        blogList={blogList}
                                        setBlogList={setBlogList}
                                        userImage={userImage}
                                    />
                                )
                            })}
                    </div>
                </div>

                <div className="rightcolumn">
                    <div className="card">
                        <AboutMe />
                    </div>

                    <PopularPost blogList={blogList} />

                </div>

            </div>

            <>
                <Footer />
            </>
        </div>

    )
};

export default MainPage;



