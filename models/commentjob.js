var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// commentjob saved //
var CommentJob = new Schema({
	IDJob: {type: 'string', required: true},
    IDComment: {type: 'string', required: true}
  });

module.exports = mongoose.model('CommentJob', CommentJob);


