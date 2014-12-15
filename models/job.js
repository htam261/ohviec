var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Job model //
 var Job = new Schema({
    IDJob: {type: 'string', required: true},
    title: {type: 'string', required: true},
    jobDescription: {type: 'string', required: true},
    timeDescription: {type: 'string', required: true},
    address: {type: 'string', required: true},
    salary: {type: 'string', required: true},
    expiryTime: {type: 'date', required: true, default: Date.now},
    viewkey:  {type:'number'},
    province: {type: 'string', required: true},
    profession: {type: 'string', required: true},
    postDate: {type: 'date', required: true, default: Date.now},
    email: {type: 'string', required: true}
  });
module.exports = mongoose.model('Job', Job);
