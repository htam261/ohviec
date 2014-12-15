var Province = require('../models/province.js');
var _ = require('underscore');




module.exports.add = function (req, res) {
	var province  = new Province({
		name: "My",
    	priority: 10
	});
	province.save(function (err, province) {
		if (!err) {
			console.log("created province");
			console.log(province);
			res.send(province);
		}
	});
}

module.exports.findAllProvince = function (req, res) {
		console.log("GET - /provinces");
		return Province.find(function (err, provinces) {
			if (!err) {
				return res.send(provinces);
			} else {
				res.statusCode = 500;
				console.log('Internal error (%d) : %s', res.statusCode, err.message );
					return res.send({error: 'Server error'});
			}
		});
 	};

 	/***
 	* Find and retrieves a single province bu its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} req HTTP response object.
 	*
 	*/
module.exports.findById = function (req, res) {
 		console.log("GET - /provinces/:id");
 		return Province.find({name: req.params.id}, function (err, province) {
 			if (!province) {
 				res.statusCode = 404;
 				return res.send({error : 'Not found'});
 			} if (!err) {
 				return res.send({ status : 'OK', province:province});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error (%d) : %s', res.statusCode, err.message);
 				return rs.send({ error: 'Server error'});
 			}
 		});
 	};

 	/***
 	* Creates a new province from the data request
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.addProvince = function (req, res) {
 		console.log('POST - /provinces');

 		var province = new Province(req.body);
 		province.save(function (err) {
 			if (err) {
 				console.log('Error while saving profession :' + err );
 				res.send({error : err});
 				return;
 			} else {
 				console.log("Province created");
 				return res.send({ status: "OK", province: province});
 			}
 		});
 	};
 	/**
 	* Updata a province by its ID
 	*
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*/
 	module.exports.updateProvince = function (req, res) {
 		console.log("PUT - /provinces/:id");
 		return Province.find({ name: req.params.id}, function (err, province) {
 			if (!province) {
 				res.statusCode = 404;
 				return res.send({error: 'Not found'});
 			}
 			province = _.extend({name : province.name}, req.body);

 			return province.save(function (err) {
 				if (!err) {
 					console.log('Updated province');
 					return res.send({status : 'OK', province: province});
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
 				res.send(province);
 			});
 		});
 	};


 	/**
 	* Delete a province by its ID
 	* @param {Object} req HTTP request object.
 	* @param {Object} res HTTP response object.
 	*
 	*/
 	module.exports.deleteProvince = function (req, res) {
 		console.log("DELETE - /provinces/:id");
 		return Province.find({ name: req.params.id }, function (err, province) {
 			if (!err) {
 				console.log('Removed province');
 				return res.send({ status : 'OK'});
 			} else {
 				res.statusCode = 500;
 				console.log('Internal error(%d) : %s', res.statusCode, err.message);
 				return res.send({ error: 'Server error'});
 			}
 		});
 	};
