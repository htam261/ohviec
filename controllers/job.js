var Job = require('../models/job.js');
var _ = require('underscore');




exports.add = function (req, res) {
	var job  = new Job({
    	IDJob: "Job02",
   		title: "Job 01",
    	jobDescription: "description",
    	timeDescription: "two days",
    	address: "air",
    	salary: "500000000",
    	viewkey:  50000,
    	province: "abc",
    	profession: "abc",
    	email: "tam@mail.com"
	});
	job.save(function (err, job) {
		if (!err) {
			console.log("created job");
			console.log(job);
			res.send(job);
		}
	});
}

module.exports.findAllJob = function (req, res) {
		console.log("GET - /jobs");
		return Job.find(function (err, jobs) {
			if (!err) {
				return res.send(jobs);
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
 		console.log("GET - /jobs/:id");
 		return Job.find({IDJob: req.params.id}, function (err, job) {
 			if (!job) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', job:job});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};
  	/***
 	* Find and retrieves a single iob bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findByMail = function (req, res) {
 		console.log("GET - /jobsMail/:id");
 		return Job.find({email: req.params.id}, function (err, job) {
 			if (!job) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', job:job});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new job from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addJob = function (req, res) {
 		console.log('POST - /jobs');

 		var job = new Job(req.body);
 		job.save(function (err) {
 			if (err) {
 				console.log('Error while saving comment :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("User created");
 				return res.send({ status: "OK", job: job});
 			}
 		});
 	};
 	/**
 	* Updata a job by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateJob = function (req, res) {
 		console.log("PUT - /jobs/:id");
 		return Job.find({ IDJob: req.params.id }, function (err, job) {
 			if (!job) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			job = _.extend({IDJob : job.IDJob }, req.body);

 			return job.save(function (err) {
 				if (!err) {
 					console.log('Updated');
 					return res.send({status : 'OK', job: job});
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
 				res.send(job);
 			});
 		});
 	};


 	/**
 	* Delete a job by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteJob = function (req, res) {
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
