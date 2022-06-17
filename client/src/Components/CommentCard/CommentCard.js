import React, { useState } from 'react';
import ToggleComment from '../ToggleComment/ToggleComment';
import '../CommentCard/CommentCard.css'


const CommentCard = ({ _id, blogName, content, username, date, comments, comment, setComment, userImage, blogList, setBlogList }) => {
    const [active, setActive] = useState({
        isActive: false,
        showHide: "Show"
    })


    const toggler = (e) => {
        e.preventDefault()
        if (active.isActive) {
            setActive({
                isActive: false,
                showHide: "Show"
            })
        } else {
            setActive({
                isActive: true,
                showHide: "Hide"
            })
        }
    }

    let thedate = date.match(/\D{3}\s\d{1,}\s\d{4}/)


    return (
   
            <div key={_id} id={_id} className="card">

                <div id='card-text'>

                    <img id='img-card' alt='avatar' src={`./assets/images/${userImage}.png`} ></img>

                    <h3 id='blog-card' className='blogtitle'><u>{blogName}... was started by {username} on {thedate} </u> </h3>
                    <div id='blog-content'>{content}</div>
                </div>

                <div>{comments.map(({ username, date, comment }, i) => {

                    if (active.isActive) {

                        return (
                            <>
                                <div className='card' id='com-card' key={i}> {username} said ... {comment} on {thedate}</div><br />
                            </>
                        )
                    }
                })}</div>

                <ToggleComment _id={_id} comment={comment} setComment={setComment} blogList={blogList}
                    setBlogList={setBlogList} />
                <a href="#" onClick={toggler} id='comm-text '>{active.showHide} Comments</a>

            </div>
       

    )
}
export default CommentCard;