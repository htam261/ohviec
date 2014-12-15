var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 // passport region //
 var Passport = new Schema({
 	IDPassport : {type : 'string'},
    authType: {type: 'string'},
    key: {type: 'string'},
    user: {type: 'string', required: true},
    email: {type: 'string', required: true}
});
module.exports = mongoose.model('Passport', Passport);


