var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Job saved //
var Jobsaved = new Schema({
	IDJobsaved: {type: 'string', required: true},
    isApply: {type: 'boolean', required: true},
    SaveDay: {type: 'Date', required: true, Default: Date.now},
    IDJob: {type: 'string', required: true},
    user: {type: 'string', required: true}
  });

module.exports = mongoose.model('Jobsaved', Jobsaved);

