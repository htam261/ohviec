var Passport = require('../models/passport.js');
var _ = require('underscore');




module.exports.add = function (req, res) {
	var passport  = new Passport({
		IDPassport : "Passport03",
    	authType: "abc",
    	key: "abc co len nhe",
    	user: "Tam oi co len ! cai nay qua de =))",
    	email: "TamHome@mail.com"
	});
	passport.save(function (err, passport) {
		if (!err) {
			console.log("created passport");
			console.log(passport);
			res.send(passport);
		}
	});
}

module.exports.findAllPassport = function (req, res) {
		console.log("GET - /passports");
		return Passport.find(function (err, passports) {
			if (!err) {
				return res.send(passports);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single passport bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /passports/:id");
 		return Passport.find({IDPassport: req.params.id}, function (err, passport) {
 			if (!passport) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', passport:passport});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new jobsearch from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addPassport = function (req, res) {
 		console.log('POST - /passports');

 		var passport = new Passport(req.body);
 		passport.save(function (err) {
 			if (err) {
 				console.log('Error while saving comment :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("Passport created");
 				return res.send({ status: "OK", passport: passport});
 			}
 		});
 	};
 	/**
 	* Updata a jobsearch by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updatePassport = function (req, res) {
 		console.log("PUT - /passports/:id");
 		return Passport.find({ IDPassport: req.params.id}, function (err, passport) {
 			if (!passport) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			passport = _.extend({IDPassport : passport.IDPassport}, req.body);

 			return passport.save(function (err) {
 				if (!err) {
 					console.log('Updated passport');
 					return res.send({status : 'OK', passport: passport});
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
 				res.send(passport);
 			});
 		});
 	};


 	/**
 	* Delete a jobsearch by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deletePassport = function (req, res) {
 		console.log("DELETE - /passports/:id");
 		return Passport.find({ IDPassport: req.params.id }, function (err, passport) {
 			if (!err) {
 				console.log('Removed passport');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};
