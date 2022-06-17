'use strict'
const mongoose = require('mongoose')
const express = require("express");
const cors = require('cors');
require('dotenv').config();
const passport = require('passport');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcryptjs')
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const BlogModel = require('./backend/models/blogModels')
const UserModel = require('./backend/models/userModels')
const userRoutes = require('./backend/routes/userRoutes');
const blogRoutes = require('./backend/routes/blogRoutes');
const helmet = require('helmet');
const LocalStrategy = require('passport-local').Strategy
const { ObjectID } = require('mongodb');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(cookieparser('process.env.SESSION_SECRET'))
app.use(passport.initialize())
app.use(passport.session())
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))



mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true },
  (err, data) => {
    if (err) {
      console.log('database error' + err)
    } else {
      console.log('success')
    }
  })
passport.serializeUser((user, done) => {
  done(null, user._id)
})
passport.deserializeUser((id, done) => {
  UserModel.findOne(
    { _id: new ObjectID(id) },
    (err, doc) => {
      done(null, doc)
    }
  )
})
passport.use(new LocalStrategy(
  function (username, password, done) {
    UserModel.findOne({ username: username }, (err, user) => {
      console.log('User ' + username + " attempted to login.");
      if (err) throw err
      if (!user) return done(null, false)

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false)
        }
      })
    })
  }
))


app.use('/', userRoutes)
app.use('/', blogRoutes)

const PORT = process.env.PORT || 8800;
//this configuration is required for heroku
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
module.exports = app;