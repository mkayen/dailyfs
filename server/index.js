/* Express Server */

'use strict';
var express = require('express');
var router = require('express').Router();
var mongoose = require('mongoose');
var path = require('path');
var player = require('../models/players');
var pitcher = require('../models/numberfire_pitchers');
var app = express();

/* Setting path to our index file. */

var publicPath = path.join(__dirname, '../public');
var cacheJSONPath = path.join(__dirname, '../cache/optLineup.html');

// app.use(express.static())

app.get('/lineup', function(req, res){
	res.sendFile(cacheJSONPath)
})

/* Test */

app.get('/', function (req, res) {
  res.sendFile(indexHtmlPath);
});

/* Dump of All Hitters API */

app.get('/api/hitters', function(req, res, next){
	player.find({}, function(err, data){
		res.json(data);
	});
});

/* Dump of All Pitchers API */

app.get('/api/pitchers', function(req, res, next){
	pitcher.find({}, function(err, data){
		res.json(data);
	});
});

/* Query for any DB Parameter (exact search), where position is parameter (for pitchers) */

app.get('/api/pitchers/search', function(req, res, next){
	pitcher.find(req.query, function(err, data){
		if(req.query.minPoints){
			var minimum = req.query.minPoints;
			delete req.query.minPoints;
			console.log(req.query);
			pitcher.find({ $and: [req.query, {fanduel_fp: { $gt: minimum }}]}, function(err, data){
				res.json(data);
			});
		}else{
			res.json(data);	
		};
	});
});

/* Query for any DB Parameter (exact search), where position is parameter for hitters*/

app.get('/api/hitters/search', function(req, res, next){
	player.find(req.query, function(err, data){
		if(req.query.minPoints){
			var minimum = req.query.minPoints;
			delete req.query.minPoints;
			console.log(req.query);
			player.find({ $and: [req.query, {fanduel_fp: { $gt: minimum }}]}, function(err, data){
				res.json(data);
			});
		}else{
			res.json(data);	
		};
	});
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

