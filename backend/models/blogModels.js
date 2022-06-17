const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogSchema = new Schema({

        blogName: {
            type: String
        },
        content: {
            type: String
        },
        description: {
            type: String
        },
        username: {
            type: String
        },
        userID: {
            type: String
        },
        date: {
            type: String,
            default: new Date()
        },  
        userImage: {
            type: String,
            default:'robot'
        },
    comments: [
        {
            username: {
                type: String
            },
            userID: {
                type: String
            },
            date:{
                type:String,
                default: new Date()

            },
            comment: {
                type: String
            }

        }

    ]
})
const BlogModel = mongoose.model('blog', BlogSchema)
module.exports = BlogModel;