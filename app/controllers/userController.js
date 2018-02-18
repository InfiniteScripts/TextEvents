'use strict';
var User = require('../models/userModel');
var bcrypt = require('bcrypt');
const mongoose = require('mongoose');

exports.register_user = function(req, res) {
    
    User.findOne({'email' : req.body.email}, function (err, found_user){
        if (err) return handleError(err);

        if(found_user) {
            res.json('Email in use');
        } else {
            var new_user = new User(req.body);
            new_user.save();
            res.json('success');
        }
    });
};
exports.login_user = function(req, res) {
    
    User.findOne({'email' : req.body.email}, function (err, found_user){
        if (err) return handleError(err);

        if(found_user) {
            bcrypt.compare(password, user.password, function (err, result) {
       			 if (result === true) {
       			 	res.json('success');
       			 }
       		)};
            } else {
            
            res.json('Invalid Password');
            }
        } else {
            
            res.json('Invalid Email');
        }
    });
};


