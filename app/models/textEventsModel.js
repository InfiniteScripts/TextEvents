'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the Event'
  },
  profilePic:{
    type: String,
    default: 'assets/img/profile/pokerchip.png'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String
  },
  desc: {
    type: String,
  },
  day: {
    type: String,
  },
  start_text_time: {
    type: String,
  },
  start_text_am_pm: {
    type: String,
  },
  contacts:{
    type: Array,

  }

  
});

module.exports = mongoose.model('Events', EventSchema);