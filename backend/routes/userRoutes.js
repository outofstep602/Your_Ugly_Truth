const router = require('express').Router();
const {
    Register,
    mainPage,
    logIn,
    delAll,
    changePassword,
    logOut

} = require('../controllers/userControllers')

const { ensureAuthenticated } = require('../../ensure')
// const passport = require('passport')

router.route('/register').post(Register)

router.route('/login').post(logIn)

router.route('/main').get(ensureAuthenticated, mainPage)

router.route('/delete').post(delAll)

router.route('/changepassword').post(changePassword, logIn)

router.route('/logout').get(logOut)

module.exports = router;