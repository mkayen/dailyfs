/* Bulk Seed File

node crawlers/numberfire.js > cache/numberfire.json
node crawlers/numberfire_pitchers.js > cache/numberfire_pitchers.json
node seeds/numberfire.js
node seeds/numberfire_pitchers.js
node algo.js > cache/optLineup.html

*/

// var masterFunction = require(../seeds/numberfire)

// masterFunction()

var mongoose = require('mongoose');
var Q = require('q');
var path = require('path');

// Crawlers

var pitcherCrawl = require('../crawlers/numberfire_pitchers.js')
var hitterCrawl = require('../crawlers/numberfire.js')

// Models

var numberfire_hitters = mongoose.model('Player');
var numberfire_pitchers = require('nfPitcher');

// Seed Files

var numberfire_hitters_seed = require('numberfire')
var numberfire_pitchers_seed = require('numberfire_pitchers')

// Define DB Connection

var DATABASE_URI = "mongodb://localhost:27017/dailyfs"
var db = mongoose.connect(DATABASE_URI).connection;

// Seed

var seed = function(){
	pitcherCrawl().then(hitterCrawl());
}