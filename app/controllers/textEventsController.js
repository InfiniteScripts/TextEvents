'use strict';

var mongoose = require('mongoose'),
  Event = mongoose.model('Events');

exports.list_all_events_by_user = function(req, res) {
  Event.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.create_a_event = function(req, res) {
  var new_event = new Event(req.body);
  res.json(req.headers);/*
  new_event.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  }); */
};

exports.read_a_event = function(req, res) {
  Event.findById(req.params.eventId, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.update_a_event = function(req, res) {
  Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.delete_a_event = function(req, res) {
  Event.remove({
    _id: req.params.eventId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'event successfully deleted' });
  });
};