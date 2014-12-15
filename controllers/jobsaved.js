var Jobsaved = require('../models/jobsaved.js');
var _ = require('underscore');




module.exports.add = function (req, res) {
	var jobsaved  = new Jobsaved({
		IDJobsaved: "Jobsaved 02",
		isApply: true,
    	IDJob: "Job01",
    	user: "abc@mail.com"
	});
	jobsaved.save(function (err, jobsaved) {
		if (!err) {
			console.log("created comment");
			console.log(jobsaved);
			res.send(jobsaved);
		}
	});
}

module.exports.findAllJobsaved = function (req, res) {
		console.log("GET - /jobsaveds");
		return Jobsaved.find(function (err, jobsaveds) {
			if (!err) {
				return res.send(jobsaveds);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single jobsaved bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /jobsaveds/:id");
 		return Jobsaved.find({IDJobsaved: req.params.id}, function (err, jobsaved) {
 			if (!jobsaved) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', jobsaved:jobsaved});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};
  	/***
 	* Find and retrieves a single jobsaved bu its email
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findByMail = function (req, res) {
 		console.log("GET - /jobsaveds/:id");
 		return Jobsaved.find({email: req.params.id}, function (err, jobsaved) {
 			if (!jobsaved) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', jobsaved:jobsaved});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};
  	/***
 	* Find and retrieves a single jobsaved bu its IDJob
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findByIdJob = function (req, res) {
 		console.log("GET - /jobsaveds/:id");
 		return Jobsaved.find({IDJob: req.params.id}, function (err, jobsaved) {
 			if (!jobsaved) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', jobsaved:jobsaved});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new jobsaved from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addJobsaved = function (req, res) {
 		console.log('POST - /jobsaveds');

 		var jobsaved = new Jobsaved(req.body);
 		jobsaved.save(function (err) {
 			if (err) {
 				console.log('Error while saving comment :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("User created");
 				return res.send({ status: "OK", jobsaved: jobsaved});
 			}
 		});
 	};
 	/**
 	* Updata a jobsaved by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateJobsaved = function (req, res) {
 		console.log("PUT - /comment/:id");
 		return Jobsaved.find({ IDjJobsaved: req.params.id}, function (err, jobsaved) {
 			if (!jobsaved) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			jobsaved = _.extend({IDJobsaved : jobsaved.IDJobsaved}, req.body);

 			return jobsaved.save(function (err) {
 				if (!err) {
 					console.log('Updated');
 					return res.send({status : 'OK', jobsaved: jobsaved});
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
 				res.send(jobsaved);
 			});
 		});
 	};


 	/**
 	* Delete a jobsaved by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteJobsaved = function (req, res) {
 		console.log("DELETE - /User/:id");
 		return Jobsaved.find({ IDJobsaved: req.params.id }, function (err, jobsaved) {
 			if (!err) {
 				console.log('Removed jobsaved');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};
