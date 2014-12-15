var mongoose = require('mongoose');

var Schema = mongoose.Schema;

 // Comment region //
var Comment = new Schema({
	IDComment: {type: 'string', required: true},
	IDJob: {type: 'string', required: true},
	email: {type: 'string', required: true},
	fullname: {type: 'string', required: true},
    contain: {type: 'string', required: true}
  });

 module.exports = mongoose.model('Comment', Comment);
