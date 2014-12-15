var CommentJob = require('../models/commentjob.js');
var _ = require('underscore');




module.exports.add = function (req, res) {
	var commentjob  = new CommentJob({
		IDJob: "job01",
    	IDComment: "comment01"
	});
	commentjob.save(function (err, commentjob) {
		if (!err) {
			console.log("created commentjob");
			console.log(commentjob);
			res.send(commentjob);
		} else {
			console.log(err);
			return res.send({error: 'Server error'});
		}
	});
}

module.exports.findAllCommentJob = function (req, res) {
		console.log("GET - /commentjobs");
		return CommentJob.find(function (err, commentjob) {
			if (!err) {
				return res.send(commentjob);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single commentjob bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /cvsaveds/:id");
 		return CommentJob.find({IDJob: req.params.id}, function (err, commentjob) {
 			if (!commentjob) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', commentjob:commentjob});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};
  	/***
 	* Find and retrieves a single cvsaved bu its email
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findByIDComment = function (req, res) {
 		console.log("GET - /cvsaveds/:id");
 		return CommentJob.find({IDComment: req.params.id}, function (err, commentjob) {
 			if (!commentjob) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', commentjob:commentjob});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new commentjob from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addCommentJob = function (req, res) {
 		console.log('POST - /commentjobs');

 		var commentjob = new CommentJob(req.body);
 		commentjob.save(function (err) {
 			if (err) {
 				console.log('Error while saving commentjob :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("commentjob created");
 				return res.send({ status: "OK", commentjob: commentjob});
 			}
 		});
 	};
 	/**
 	* Updata a commentjob by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateCommentJob = function (req, res) {
 		console.log("PUT - /cvsaveds/:id");
 		return CommentJob.find({ IDJob: req.params.id}, function (err, commentcv) {
 			if (!commentcv) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			commentcv = _.extend({IDCVsaved : commentcv.IDCV}, req.body);

 			return cvsaved.save(function (err) {
 				if (!err) {
 					console.log('Updated');
 					return res.send({status : 'OK', cvsaved: cvsaved});
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
 				res.send(commentcv);
 			});
 		});
 	};


 	/**
 	* Delete a cvsaved by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteCommentJob = function (req, res) {
 		console.log("DELETE - /commentjobs/:id");
 		return CommentJob.find({ IDCV: req.params.id }, function (err, commentjob) {
 			if (!err) {
 				console.log('Removed commentjob');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};
