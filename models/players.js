/* Players Model */

/* Includes Player information from Numberfire. */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DATABASE_URI = "mongodb://localhost:27017/dailyfs"
var db = mongoose.connect(DATABASE_URI).connection;

var playerSchema = new mongoose.Schema({
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
	position_group:{
		type: Number
	},
	fanduel_fp:{
		type: Number
	},
	fanduel_salary:{
		type: Number
	},
	fanduel_ratio:{
		type: Number
	},	
	isOutfield:{
		type: Number
	}
});

var Player = mongoose.model('Player', playerSchema)

module.exports = Player;