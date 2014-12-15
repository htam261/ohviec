var Comment = require('../models/comment.js');
var _ = require('underscore');




exports.add = function (req, res) {
	var comment  = new Comment({
		IDComment: "CM04",
		IDJob: "Job02",
		email: "abc@mail.com",
		fullname: "abc",
    	contain: "tam huynh"
	});
	comment.save(function (err, comment) {
		if (!err) {
			console.log("created comment");
			console.log(comment);
			res.send(comment);
		}
	});
}

module.exports.findAllComment = function (req, res) {
		console.log("GET - /comment");
		return Comment.find(function (err, comments) {
			if (!err) {
				return res.send(comments);
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
module.exports.findById = function (req, res) {
 		console.log("GET - /comment/:id");
 		return Comment.find({IDComment: req.params.id}, function (err, comment) {
 			if (!comment) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', comment:comment});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};
 	/***
 	* Find and retrieves a single tshirt bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findIDJob = function (req, res) {
 		console.log("GET - /commentIDJob/:id");
 		return Comment.find({IDJob: req.params.id}, function (err, comment) {
 			if (!comment) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', comment:comment});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new tshirt from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addComment = function (req, res) {
 		console.log('POST - /comment');

 		var comment = new Comment(req.body);
 		comment.save(function (err) {
 			if (err) {
 				console.log('Error while saving comment :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("User created");
 				return res.send({ status: "OK", comment: comment});
 			}
 		});
 	};
 	/**
 	* Updata a tshirt by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateComment = function (req, res) {
 		console.log("PUT - /comment/:id");
 		return Comment.find({ IDComment: req.params.id}, function (err, comment) {
 			if (!user) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			comment = _.extend({IDComment : comment.IDComment}, req.body);

 			return comment.save(function (err) {
 				if (!err) {
 					console.log('Updated');
 					return res.send({status : 'OK', comment: comment});
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
 				res.send(comment);
 			});
 		});
 	};


 	/**
 	* Delete a tshirt by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteComment = function (req, res) {
 		console.log("DELETE - /User/:id");
 		return Comment.find({ IDComment: req.params.id }, function (err, comment) {
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
