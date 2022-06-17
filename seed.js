// const UserModel = require('../models/userModels');
const BlogModel = require('./backend/models/blogModels')
const BlogData = require('./blogData')
const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, data) => {
        if (err) {
            console.log('database error' + err)
        } else {
            BlogModel.insertMany(BlogData)
            console.log('success')
        }
    })

