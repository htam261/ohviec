var CommentCV = require('../models/commentcv.js');
var _ = require('underscore');




module.exports.add = function (req, res) {
	var commentcv  = new CommentCV({
		IDCV: "IDCVsaved01",    	
    	IDComment: "IDCV01",
	});
	commentcv.save(function (err, commentcv) {
		if (!err) {
			console.log("created commentcv");
			console.log(commentcv);
			res.send(commentcv);
		} else {
			console.log(err);
			return res.send({error: 'Server error'});
		}
	});
}

module.exports.findAllCommentCV = function (req, res) {
		console.log("GET - /commentcvs");
		return CommentCV.find(function (err, commentcvs) {
			if (!err) {
				return res.send(commentcvs);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single commentcv bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /cvsaveds/:id");
 		return CommentCV.find({IDCV: req.params.id}, function (err, commentcv) {
 			if (!commentcv) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', commentcv:commentcv});
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
 		return CommentCV.find({IDComment: req.params.id}, function (err, commentcv) {
 			if (!commentcv) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', commentcv:commentcv});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new commentcv from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addCommentCV = function (req, res) {
 		console.log('POST - /cvsaveds');

 		var commentcv = new CommentCV(req.body);
 		commentcv.save(function (err) {
 			if (err) {
 				console.log('Error while saving commentcv :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("User created");
 				return res.send({ status: "OK", commentcv: commentcv});
 			}
 		});
 	};
 	/**
 	* Updata a commentcv by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateCommentCV = function (req, res) {
 		console.log("PUT - /cvsaveds/:id");
 		return CommentCV.find({ IDCVsaved: req.params.id}, function (err, commentcv) {
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
 	module.exports.deleteCommentCV = function (req, res) {
 		console.log("DELETE - /cvsaveds/:id");
 		return CommentCV.find({ IDCV: req.params.id }, function (err, commentcv) {
 			if (!err) {
 				console.log('Removed commentcv');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};
