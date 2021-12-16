const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const url = require('./config/db.js').url;
mongoose.connect(url);
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const app = express();

// App Configuration
app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser);
app.use(session({
  secret:'keyboard cat',
  resave:true,
  saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function(req,res,next) {
  res.locals.user = req.user;
  next();
});

// DB
let db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
});

db.on('open', function() {
  console.log('Connected to DB');
});

const User = require('./models').User;
const Poll = require('./models').Poll;

// Passport Configuration
require('./config/passport.js')(passport);

