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

router.post('/addpoll', isLoggedIn, function(req, res) {
  let title = req.body.title;
  let answer = req.body.answer;
  let createdUser = req.user._id;
  Poll.findOne({"title": title}, function(err, poll) {
    if (err) {
      throw (error);
      return;
    }
    if (poll) {
      // This poll is already existed
      console.log("This question is already existed");
      req.flash('pollMessage','Poll is already existed');
      res.redirect('/profile/addpoll');
    } else {
      let theNewPoll = new Poll();
      theNewPoll.createdBy = createdUser;
      theNewPoll.title = title;
      // For single option answer
      if (typeof answer === 'string') {
        theNewPoll.answer.push({
          title: answer,
          number: 0
        });
      } else {
        // Multiple options answer
        answer.forEach(function(item) {
          theNewPoll.answer.push({
            title: item,
            number: 0
          });
        });
      }
      theNewPoll.voteBy.push({
        userID: req.user._id,
        isVoted: false
      });

      theNewPoll.save(function(err) {
        if (err) {
          console.log(err);
        }
        res.redirect('/profile');
      });
    }
  });
});

router.get('/:id', isLoggedIn, function(req, res) {
  let id = req.params.id;
  Poll.findOne({"_id":id}, function(err,poll) {
    if (err) {
      console.log(err);
      return;
    }
    res.render('singlePoll', {
      title: "Single Poll",
      poll: poll,
      message: req.flash('pollMessage')
    });
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