/* Players Model */

/* Includes Pitcher information from Numberfire. */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var DATABASE_URI = "mongodb://localhost:27017/dailyfs"
// var db = mongoose.connect(DATABASE_URI).connection;

var nfPitcherSchema = new mongoose.Schema({
	id:{
		type: Number,
		ref: 'id'
	},
	name:{
		type: String,
		ref: 'name'
	},
	team:{
		type: String,
	},
	depth_position:{
		type: String,
		ref: 'position'
	},
	fanduel_fp:{
		type: Number
	},
	fanduel_salary:{
		type: Number
	},
	fanduel_ratio:{
		type: Number
	}
});

var nfPitcher = mongoose.model('nfPitcher', nfPitcherSchema)

module.exports = nfPitcher;