// Set Up Constants
const express = require('express');
const router = express.Router();
const Poll = require('../models').Poll;
const User = require('../models').User;

// Set Up Routes
router.get('/', isLoggedIn, function(req, res) {
  console.log(req.user);
  Poll.find({"createdBy": req.user._id}, function(err, polls) {
    if (err) {
      console.log(err);
      return;
    }

    res.render('profile', {
      title: "profile",
      polls: polls
    });
  });
});

router.get('/addpoll', isLoggedIn, function(req, res) {
  res.render('addnewpoll', {
    title: "Add Poll",
    message: req.flash('pollMessage')
  });
});





// Login Function
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/auth/login');
}

module.exports = router;