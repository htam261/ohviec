var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// JobSaved //
var Jobsearch =  new Schema({
	IDJobsearch: {type: 'string', required: true},
    title: {type: 'string', required: true},
    jobDescription: {type: 'string', required: true},
    timeDescription: {type: 'string', required: true},
    view:{type:'number'},
    province: {type: 'string', required: true},
    profession: {type: 'string', required: true},
    email: {type: 'string', required: true}
});
module.exports  = mongoose.model('Jobsearch', Jobsearch);

