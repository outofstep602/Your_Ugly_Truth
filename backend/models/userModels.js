const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String
    },
    password:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    userImage: {
        type: String,
        default: "robot" // I commented this out, you may need to restart the server and/or drop the collection
    },
})
const UserModel = mongoose.model('login', UserSchema)
module.exports = UserModel;