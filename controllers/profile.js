var mongoose = require('mongoose');
var Profile = require('../models/profile.js');
var _ = require('underscore');




exports.add = function (req, res) {
	var newprofile  = new Profile({
		IDProfile: "Profile01",
		name: "profile01",
		level: "1",
		expert: "1 nam",
		position: "leader team",
		work: "web programmer",
		skill : "coder",
		computing : "advance", // tin hoc
		english: "C",
		profession: "IT Web",
		email: "tam@mail.com"
	});
	newprofile.save(function (err, profile) {
		if (!err) {
			console.log("created");
			console.log(profile);
			res.send(profile);
		}
	});
}

module.exports.findAllProfile = function (req, res) {
		console.log("GET - /profile");
		return Profile.find(function (err, profiles) {
			if (!err) {
				return res.send(profiles);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single profile bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findByMail = function (req, res) {
 		console.log("GET - /profile/:id");
 		return Profile.find({email: req.params.id}, function (err, profile) {
 			if (!profile) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', profile:profile});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};
 	/***
 	* Find and retrieves a single profile bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /profile/:id");
 		return Profile.find({IDProfile: req.params.id}, function (err, profile) {
 			if (!profile) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', profile:profile});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new profile from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addProfile = function (req, res) {
 		console.log('POST - /profile');

 		var profile = new Profile(req.body);
 		profile.save(function (err) {
 			if (err) {
 				console.log('Error while saving profile :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("Profile created");
 				return res.send({ status: "OK", profile: profile});
 			}
 		});
 	};
 	/**
 	* Updata a profile by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateProfile = function (req, res) {
 		console.log("PUT - /Profile/:id");
 		return Profile.find({email:req.params.id}, function (err, profile) {
 			if (!profile) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			

 			return profile.save(function (err) {
 				if (!err) {
 					console.log('Updated');
 					return res.send({status : 'OK', profile: profile});
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
 				res.send(profile);
 			});
 		});
 	};


 	/**
 	* Delete a profile by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteProfile = function (req, res) {
 		console.log("DELETE - /Profile/:id");
 		return Profile.find({email: req.params.id}, function (err, profile) {
 			if (!err) {
 				console.log('Removed profile');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};