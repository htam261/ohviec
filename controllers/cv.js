var CV = require('../models/cv.js');
var _ = require('underscore');




exports.add = function (req, res) {
	var cv  = new CV({
    	IDCV: "CV01",
   		title: "Job 01",
    	jobDescription: "description",
    	timeDescription: "two days",
    	viewkey:  50000,
    	province: "abc",
    	profession: "abc",
    	email: "tam@mail.com"
	});
	cv.save(function (err, cv) {
		if (!err) {
			console.log("created CV");
			console.log(cv);
			res.send(cv);
		}
	});
}

module.exports.findAllCV = function (req, res) {
		console.log("GET - /jobs");
		return CV.find(function (err, cvs) {
			if (!err) {
				return res.send(cvs);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single iob bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /cv/:id");
 		return CV.find({IDCV: req.params.id}, function (err, cv) {
 			if (!cv) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', cv:cv});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};
  	/***
 	* Find and retrieves a single cv bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findByMail = function (req, res) {
 		console.log("GET - /cvMail/:id");
 		return CV.find({email: req.params.id}, function (err, cv) {
 			if (!cv) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', cv:cv});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new cv from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addCV = function (req, res) {
 		console.log('POST - /cvs');

 		var cv = new CV(req.body);
 		cv.save(function (err) {
 			if (err) {
 				console.log('Error while saving cv :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("CV created");
 				return res.send({ status: "OK", cv: cv});
 			}
 		});
 	};
 	/**
 	* Update a cvs by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateCV = function (req, res) {
 		console.log("PUT - /cvs/:id");
 		return CV.find({ IDCV: req.params.id }, function (err, cv) {
 			if (!cv) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			cv = _.extend({IDCV : job.IDCV }, req.body);

 			return cv.save(function (err) {
 				if (!err) {
 					console.log('Updated');
 					return res.send({status : 'OK', cv: cv});
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
 				res.send(cv);
 			});
 		});
 	};


 	/**
 	* Delete a job by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteCV = function (req, res) {
 		console.log("DELETE - /Job/:id");
 		return Job.find({ IDJob :req.params.id}, function (err, job) {
 			if (!err) {
 				console.log('Removed comment');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};
