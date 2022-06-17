const BlogModel = require('../models/blogModels')

const createPost = (req, res) => {
    console.log("req.body from our createPost client request", req.body);
    BlogModel.findOne({ blogName: req.body.blogName }, (err, data) => {
        if (err) {
            console.log(err)
        } else if (data) {
            res.json({ message: 'Blogname Already Exsits' })
        } else {
            let blog = new BlogModel({
                username: req.body.username,
                blogName: req.body.blogName,
                content: req.body.content,
                userImage: req.body.userImage

            })
            blog.save((err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json({
                        success: true,
                        redirectUrl: '/main'
                    })
                }
            })
        }
    })

}

const getBlogs = (req, res) => {
    BlogModel.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }

    })
}
const topPosts = (req, res) => {
    BlogModel
        .find()
        .limit(3)
        .exec(
            (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    res.json(data)
                }

            });
}



const createComment = (req, res) => {
    BlogModel.findById({ _id: req.body.blogId }, (err, data) => {
        console.log("data", data);

        if (err) {
            console.log(err);

        } else {
            let blogComment = {
                username: req.body.username,
                date: new Date(),
                comment: req.body.comment,

            }
            console.log(blogComment)
            data.comments.unshift(blogComment)
            data.save((err, info) => {
                if (err) {
                    console.log(err);

                } else {
                    res.status(200).json({
                        success: true,
                        redirectUrl: '/main'
                    })
                }
            })
        }
    })
}

module.exports = { createPost, getBlogs, createComment, topPosts }