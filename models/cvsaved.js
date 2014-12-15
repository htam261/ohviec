var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// CV saved //
var CVsaved = new Schema({
	IDCVsaved: {type: 'string', required: true},
    savedDay: {type: 'date', required: true,  default: Date.now},
    IDCV: {type: 'string', required: true},
    user: {type: 'string', required: true}
  });

module.exports = mongoose.model('CVsaved', CVsaved);

