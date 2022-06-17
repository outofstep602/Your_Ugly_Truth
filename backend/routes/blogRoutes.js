const router = require('express').Router();
const {
    createPost,
    getBlogs, 
    createComment,
     topPosts
} = require('../controllers/blogControllers')


router.route('/createPost').post(createPost)

router.route('/getBlogs').get(getBlogs)

router.route('/createComment').post(createComment)

router.route('/topPosts').get(topPosts)
module.exports = router;