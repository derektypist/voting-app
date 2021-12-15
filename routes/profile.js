// Set Up Constants
const express = require('express');
const router = express.Router();
const Poll = require('../models').Poll;
const User = require('../models').User;

// Set Up Routes

// Login Function
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/auth/login');
}

module.exports = router;