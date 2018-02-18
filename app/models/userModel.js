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

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});
module.exports = mongoose.model('User', UserSchema);