/**
 Tshirt
 @module :: Model
 @description :: Respresent data model for the Tshirt
 @author :: Hevin Blanco
 */
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var Tshirt = new Schema({
 	model: {
 		type: String,
 		require : true
 	},
 	style : {
 		type: String,
 		enum : ['Casual', 'Vintage', 'Alternative'],
 		require : true
 	},
 	size : {
 		type: Number,
 		enum : [ 36, 38, 40, 42, 44, 46],
 		require : true
 	},
 	color: {
 		type : String
 	},
 	price : {
 		type : Number,
 		require : true
 	}, 
 	modified : {
 		type : Date,
 		defaut : Date.now
 	}
 });

 Tshirt.path('model').validate(function (v) {
 	require ((v != "") && (v != null));
 });
 module.exports  = mongoose.model('Tshirt', Tshirt);