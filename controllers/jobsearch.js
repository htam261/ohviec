var Jobsearch = require('../models/jobsearch.js');
var _ = require('underscore');




module.exports.add = function (req, res) {
	var jobsearch  = new Jobsearch({
		IDJobsearch: "Jobsearch01",
   		title: "tim kiem viec",
    	jobDescription: "tim viec",
    	timeDescription: "two days",
    	view: 5000000,
    	province: "Tien Giang",
    	profession: "my home",
    	email: "TamHome@mail.com"
	});
	jobsearch.save(function (err, jobsearch) {
		if (!err) {
			console.log("created jobsearch");
			console.log(jobsearch);
			res.send(jobsearch);
		}
	});
}

module.exports.findAllJobsearch = function (req, res) {
		console.log("GET - /jobsearchs");
		return Jobsearch.find(function (err, jobsearchs) {
			if (!err) {
				return res.send(jobsearchs);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single jobsearch bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /jobsaveds/:id");
 		return Jobsearch.find({IDJobsearch: req.params.id}, function (err, jobsearch) {
 			if (!jobsearch) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', jobsearch:jobsearch});
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
 	module.exports.addJobsearch = function (req, res) {
 		console.log('POST - /jobsearchs');

 		var jobsearch = new Jobsaved(req.body);
 		jobsearch.save(function (err) {
 			if (err) {
 				console.log('Error while saving comment :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("User created");
 				return res.send({ status: "OK", jobsearch: jobsearch});
 			}
 		});
 	};
 	/**
 	* Updata a jobsearch by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateJobsearch = function (req, res) {
 		console.log("PUT - /jobsearch/:id");
 		return Jobsearch.find({ IDJobsearch: req.params.id}, function (err, jobsearch) {
 			if (!jobsearch) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			jobsearch = _.extend({IDJobsearch : jobsearch.IDJobsearch}, req.body);

 			return jobsearch.save(function (err) {
 				if (!err) {
 					console.log('Updated');
 					return res.send({status : 'OK', jobsearch: jobsearch});
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
 				res.send(jobsearch);
 			});
 		});
 	};


 	/**
 	* Delete a jobsearch by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteJobsearch = function (req, res) {
 		console.log("DELETE - /jobsearchs/:id");
 		return Jobsearch.find({ IDJobsearch: req.params.id }, function (err, jobsaved) {
 			if (!err) {
 				console.log('Removed jobsearch');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};
