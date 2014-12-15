var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Job model //
 var CV = new Schema({
    IDCV: {type: 'string', required: true},
    title: {type: 'string', required: true},
    jobDescription: {type: 'string', required: true},
    timeDescription: {type: 'string', required: true},
    viewkey:  {type:'number'},
    province: {type: 'string', required: true},
    profession: {type: 'string', required: true},
    postDate: {type: 'date', required: true, default: Date.now},
    email: {type: 'string', required: true}
  });
module.exports = mongoose.model('CV', CV);
