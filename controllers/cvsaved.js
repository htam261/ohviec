var CVsaved = require('../models/cvsaved.js');
var _ = require('underscore');




module.exports.add = function (req, res) {
	var cvsaved  = new CVsaved({
		IDCVsaved: "IDCVsaved01",    	
    	IDCV: "IDCV01",
    	user: "tam@mail.com"
	});
	cvsaved.save(function (err, cvsaved) {
		if (!err) {
			console.log("created cvsaved");
			console.log(cvsaved);
			res.send(cvsaved);
		} else {
			console.log(err);
			return res.send({error: 'Server error'});
		}
	});
}

module.exports.findAllCVsaved = function (req, res) {
		console.log("GET - /cvsaveds");
		return CVsaved.find(function (err, cvsaveds) {
			if (!err) {
				return res.send(cvsaveds);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single cvsaved bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /cvsaveds/:id");
 		return CVsaved.find({IDCVsaved: req.params.id}, function (err, cvsaved) {
 			if (!cvsaved) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', cvsaved:cvsaved});
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
module.exports.findByMail = function (req, res) {
 		console.log("GET - /cvsaveds/:id");
 		return CVsaved.find({user: req.params.id}, function (err, cvsaved) {
 			if (!cvsaved) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', cvsaved:cvsaved});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};
  	/***
 	* Find and retrieves a single cvsaved bu its IDJob
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findByIdCV = function (req, res) {
 		console.log("GET - /cvsaveds/:id");
 		return CVsaved.find({IDCV: req.params.id}, function (err, cvsaved) {
 			if (!cvsaved) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', cvsaved:cvsaved});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new cvsaved from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addCVsaved = function (req, res) {
 		console.log('POST - /cvsaveds');

 		var cvsaved = new CVsaved(req.body);
 		cvsaved.save(function (err) {
 			if (err) {
 				console.log('Error while saving cvsaved :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("cvsaved created");
 				return res.send({ status: "OK", cvsaved: cvsaved});
 			}
 		});
 	};
 	/**
 	* Update a cvsaved by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateCVsaved = function (req, res) {
 		console.log("PUT - /cvsaveds/:id");
 		return CVsaved.find({ IDCVsaved: req.params.id}, function (err, cvsaved) {
 			if (!cvsaved) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			cvsaved = _.extend({IDCVsaved : cvsaved.IDCVsaved}, req.body);

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
 				res.send(cvsaved);
 			});
 		});
 	};


 	/**
 	* Delete a cvsaved by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteCVsaved = function (req, res) {
 		console.log("DELETE - /cvsaveds/:id");
 		return CVsaved.find({ IDCVsaved: req.params.id }, function (err, cvsaved) {
 			if (!err) {
 				console.log('Removed cvsaved');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};
