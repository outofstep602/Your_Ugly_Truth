const UserModel = require('../models/userModels');
// const BlogModel = require('../models/blogModels')
const bcrypt = require('bcryptjs')
const passport = require('passport')


const Register = (req, res, next) => {
    console.log("register req.body", req.body);

    UserModel.findOne({ username: req.body.username }, (err, data) => {
        var hash = bcrypt.hashSync(req.body.password, 12)
        if (err) {
            console.log(err)
        } else if (data) {
            res.send('Username already exists')
        } else {
            //  can add a teast to verify their is an image before saving
            let person = new UserModel({
                username: req.body.username,
                password: hash,
                userImage: req.body.image
            })
            person.save((err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    passport.authenticate('local', (err, user, info) => {
                        if (err) throw err
                        else {
                            req.logIn(user, (err) => {
                                if (err) throw err;
                                res.status(200).json({
                                    success: true,
                                    redirectUrl: '/main',
                                    user: req.user
                                })
                            })
                        }
                    })(req, res, next);

                }
            })
        }
    })
}

function mainPage(req, res) {
    res.status(200).json({
        success: true,
        redirectUrl: '/',
        user: req.user
    })
}

const logIn = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) res.send('Please Try Again')
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.status(200).json({
                    success: true,
                    redirectUrl: '/main',
                    user: req.user
                })
            })
        }
    })(req, res, next)
}

const delAll = (req, res) => {

    UserModel.findByIdAndRemove({ _id: req.body._id },
        (err, data) => {
            console.log("data", data);
            if (err) {
                console.log(err);
            } else {
                res.status(200).json({
                    success: true,
                    redirectUrl: '/register'
                })
            }
        }
    )

}
const changePassword = (req, res) => {
    console.log(req.body);
    if (req.body.newpassword == req.body.confirm) {
        var newhash = bcrypt.hashSync(req.body.newpassword, 12)
        console.log(newhash);
        UserModel.findOneAndUpdate({ username: req.body.username }, { password: newhash }, {
            new: true
        },
            (err, data, info) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("data", data);
                    req.logout()
                    res.status(200).json({
                        success: true,
                        redirectUrl: '/main'
                    })
                }
            })
    }
}

const logOut = (req, res) => {
    req.logOut();
    res.status(200).json({
        success: true,
        redirectUrl: '/'
    })
}

module.exports = { Register, mainPage, logIn, delAll, changePassword, logOut }










