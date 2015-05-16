/* NumberFire DB Seeder */

'use strict';
var cheerio = require("cheerio");
var request = require("request");
var json = require("json");
var mongoose = require("mongoose");
var player = require('../models/players');
var jsonData = require('../cache/numberfire.json');
var q = require('q');

// Connect to Database

// var db = mongoose.connection;

var wipeDB = function () {

   	player.find({}).remove(function () {});

    return q.resolve();
};

var seed = function(data){
	
	/* Associate Player Projections with Player based on id (jsonData.players) & player_id (jsonData.projections)*/
	var projectionData = jsonData.projections;
	var playersData = jsonData.players;
	var length = projectionData.length;
	for(var i = 0; i < length; i++){
		var playerId = projectionData[i].mlb_player_id
		playersData[playerId].fanduel_fp = projectionData[i].fanduel_fp
		playersData[playerId].fanduel_ratio = projectionData[i].fanduel_ratio
		playersData[playerId].fanduel_salary = projectionData[i].fanduel_salary
	}

	/* Associate Team Abbreviation with Player based on team_id */
	var playerArray = [];
	for(var key in playersData){
		var teamId = playersData[key].team_id
		playersData[key].team = jsonData.teams[teamId].abbrev;
	
	/* Turn object of objects into array of objects for Mongo compatibility */
		playerArray.push(playersData[key])
	}

	console.log(playerArray)

	/* Push Data to DB */
	player.create(playerArray, function(err, data){
	   	console.log('Error ' + err);
	   	console.log('Data ' + data);
	})

};

mongoose.connection.once('open', function(){
	wipeDB().then(seed);
})
