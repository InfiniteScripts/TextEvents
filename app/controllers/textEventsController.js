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
  new_event.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.read_a_event = function(req, res) {
  Event.findById(req.params.TaskId, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.update_a_event = function(req, res) {
  Event.findOneAndUpdate({_id: req.params.TaskId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.delete_a_event = function(req, res) {
  Event.remove({
    _id: req.params.TaskId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'Event ID ' + req.params.TaskId +' successfully deleted' });
  });
};