import React from 'react';



const PopularPost = ({ blogList }) => {

    return (
        <div>
            <div className="card">
                <h3><u>Popular Post</u></h3>
                {
                    blogList !== [] ?
                        blogList.map((post) =>
                            <a href={`#${post._id}`} key={post._id} className="fakeimg" value={post.blogName} >{post.blogName}</a>

                        )
                        : console.log("nerp")
                }

            </div>
        </div>

    )


}



export default PopularPost