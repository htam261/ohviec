var Profession = require('../models/profession.js');
var _ = require('underscore');




module.exports.add = function (req, res) {
	var profession  = new Profession({
		IDProfession: "Profession02",
    	professionName: "Coder =))",
    	priority: 5000000000,
    	imageName:"myImage.image",
    	IDJob: "Job01"
	});
	profession.save(function (err, profession) {
		if (!err) {
			console.log("created profession");
			console.log(profession);
			res.send(profession);
		}
	});
}

module.exports.findAllProfession = function (req, res) {
		console.log("GET - /professions");
		return Profession.find(function (err, professions) {
			if (!err) {
				return res.send(professions);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single profession bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /professions/:id");
 		return Profession.find({IDProfession: req.params.id}, function (err, profession) {
 			if (!profession) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', profession:profession});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new profession from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addProfession = function (req, res) {
 		console.log('POST - /professions');

 		var profession = new Profession(req.body);
 		profession.save(function (err) {
 			if (err) {
 				console.log('Error while saving profession :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("Profession created");
 				return res.send({ status: "OK", profession: profession});
 			}
 		});
 	};
 	/**
 	* Updata a profession by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateProfession = function (req, res) {
 		console.log("PUT - /professions/:id");
 		return Profession.find({ IDProfession: req.params.id}, function (err, profession) {
 			if (!profession) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			profession = _.extend({IDProfession : profession.IDProfession}, req.body);

 			return profession.save(function (err) {
 				if (!err) {
 					console.log('Updated profession');
 					return res.send({status : 'OK', profession: profession});
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
 				res.send(profession);
 			});
 		});
 	};


 	/**
 	* Delete a profession by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteProfession = function (req, res) {
 		console.log("DELETE - /professions/:id");
 		return Profession.find({ IDProfession: req.params.id }, function (err, profession) {
 			if (!err) {
 				console.log('Removed profession');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};
