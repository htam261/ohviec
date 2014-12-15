var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// User model // 
var User = new Schema ({
    password: {type: 'string', required: true},
    fullname: {type: 'string', required: true},
    email: {type: 'string', required: true},
    avatar:{type:'string',required:false},
    phone:{type:'number',required:false},
    companyname:{type:'string',required:false},
    role:{type:'string',required:true},
    authentype:{type:'string',required:true}
  });
 module.exports = mongoose.model('User', User);

