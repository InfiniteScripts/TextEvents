'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the Event'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: 'No user ID'
  },
  desc: {
    type: String,
    required: 'No Description'
  },
  day: {
    type: String,
    required: 'Day of the Week Required'
  },
  contacts:{
    type: Array,

  }

  
});

module.exports = mongoose.model('Events', EventSchema);