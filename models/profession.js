var mongoose = require('mongoose');
var Schema = mongoose.Schema;
  // Profession model //
  var Profession = new Schema({
  	IDProfession: {type: 'string', required: true},
    professionName: {type: 'string', required: true},
    priority: {type: 'Number'},
    imageName:{type: 'string'},
    IDJob: {type: 'string', required: true}
  });
module.exports = mongoose.model('Profession', Profession);
 
