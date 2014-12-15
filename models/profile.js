var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// profile model // 
var Profile = new Schema ({
	IDProfile: { type: 'string', required: true},
	name: { type: 'string', required: true},
	level: { type: 'string', required: true},
	expert: { type: 'string', required: true},
	position: { type: 'string', required: true},
	work: { type: 'string', required: true},
	skill : { type: 'string', required: true},
	computing : { type: 'string', required: true}, // tin hoc
	english: { type: 'string', required: true},
	profession: { type: 'string', required: true},
	email: { type: 'string', required: true}
  });
 module.exports = mongoose.model('Profile', Profile);


