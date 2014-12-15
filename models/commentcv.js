var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// CV saved //
var CommentCV = new Schema({
	IDCV: {type: 'string', required: true},
    IDComment: {type: 'string', required: true}
  });

module.exports = mongoose.model('CommentCV', CommentCV);

