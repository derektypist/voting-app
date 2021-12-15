const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let saltRounds = 10;

// User Schema
const UserSchema = mongoose.Schema({
  local: {
    username: String,
    password: String
  }
});

// Apply Hashing Password
let salt = bcrypt.genSaltSync(saltRounds);
UserSchema.methods.genHash = function(password) {
  return bcrypt.hashSync(password, salt);
}

// Compare Input Password with Database Password
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

const User = mongoose.model('user', UserSchema);

// Poll Schema
const PollSchema = mongoose.Schema({
  createdBy: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  title: String,
  answer: [{
    title: String,
    number: Number
  }],
  voteBy: [{
    userID: String,
    isVoted: Boolean
  }]
});

const Poll = mongoose.model('poll', PollSchema);

// Export Modules
module.exports.User = User;
module.exports.Poll = Poll;