var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 // Province model //
 var Province = new Schema({
    name: {type: 'string', required: true,unique:true},
    priority: {type: 'Number'}
  });
module.exports = mongoose.model('Province', Province);

