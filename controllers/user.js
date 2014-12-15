var mongoose = require('mongoose');
var User = require('../models/user.js');
var _ = require('underscore');




exports.add = function (req, res) {
	var newuser  = new User({
		password: "abc",
    	fullname: "tam huynh",
    	email: "abc@mail.com",
	    avatar: "abc.png",
	    phone: "1111",
	    companyname: "abc",
	    role: "admin",
	    authentype: "admin"
	});
	newuser.save(function (err, user) {
		if (!err) {
			console.log("created");
			console.log(user);
			res.send(user);
		}
	});
}

module.exports.findAllUser = function (req, res) {
		console.log("GET - /user");
		return User.find(function (err, users) {
			if (!err) {
				return res.send(users);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single tshirt bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.find = function (req, res) {
 		console.log("GET - /user/:id");
 		return User.find({ email: req.params.id}, function (err, user) {
 			if (!user) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', user:user});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new user from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addUser = function (req, res) {
 		console.log('POST - /user');

 		var user = new User(req.body);
 		user.save(function (err) {
 			if (err) {
 				console.log('Error while saving tshirt :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("User created");
 				return res.send({ status: "OK", user: user});
 			}
 		});
 	};
 	/**
 	* Updata a user by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateUser = function (req, res) {
 		console.log("PUT - /User/:id");
 		return User.find({email:req.params.id}, function (err, user) {
 			if (!user) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			

 			return user.save(function (err) {
 				if (!err) {
 					console.log('Updated');
 					return res.send({status : 'OK', user: user});
 				} else {
 					if ( err.name == 'ValidationError') {
 						res.statusCode = 400;
 						res.send({ error: 'Validation error'});
 					} else {
 						res.statusCode = 500;
 						res.send({ error : 'Server error'});
 					}
 					console.log('Internal error(%d): %s', res.statusCode, err.message);
 				}
 				res.send(user);
 			});
 		});
 	};


 	/**
 	* Delete a user by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteUser = function (req, res) {
 		console.log("DELETE - /User/:id");
 		return User.find({email: req.params.id}, function (err, user) {
 			if (!err) {
 				console.log('Removed user');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};