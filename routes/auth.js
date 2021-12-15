const express = require('express');
const passport = require('passport');
const router = express.Router();

// Sign Up
router.get('/signup',function(req,res) {
  res.render('signup', {
    title: "Signup",
    message: req.flash('signupMessage')
  });
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: 'http://localhost:3000',
  failureRedirect: '/auth/signup',
  failureFlash: true
}));

