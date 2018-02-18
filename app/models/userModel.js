var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the user'
  },
  email: {
    type: String,
    required: 'Enter your email address'
  },
  password: {
    type: String,
    required: 'Enter your password'
  }
});

module.exports = mongoose.model('User', UserSchema);