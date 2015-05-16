'use strict';
var request = require("request");
var json = require("json");
// var positions = require('./cache/dataService');
var q = require('q');
var axios = require('axios');

// 1B
var firstBasePromise = 
axios.get('http://localhost:3000/api/hitters/search?depth_position=1B&minPoints=2')
	.then(function(response){
		// console.log(response)
		return response.data
	})

// 2B
var secondBasePromise = 
axios.get('http://localhost:3000/api/hitters/search?depth_position=2B&minPoints=2')
	.then(function(response){
		// console.log(response)
		return response.data
	})

// SS
var shortStopPromise = 
axios.get('http://localhost:3000/api/hitters/search?depth_position=SS&minPoints=2')
	.then(function(response){
		// console.log(response)
		return response.data
	})

// 3B
var thirdBasePromise = 
axios.get('http://localhost:3000/api/hitters/search?depth_position=3B&minPoints=2')
	.then(function(response){
		// console.log(response)
		return response.data
	})

// C
var catcherPromise = 
axios.get('http://localhost:3000/api/hitters/search?depth_position=C&minPoints=2')
	.then(function(response){
		// console.log(response)
		return response.data
	})

// P

var pitcherPromise =
axios.get('http://localhost:3000/api/pitchers/search?minPoints=2')
	.then(function(response){
		// console.log(response)
		return response.data
	})

q.all([firstBasePromise, secondBasePromise, shortStopPromise, thirdBasePromise, catcherPromise, pitcherPromise])
	.spread(function(firstBaseArray, secondBaseArray, shortStopArray, thirdBaseArray, catcherArray, pitcherArray){

		// ARRAY MERGING GOES HERE
		
		console.log(firstBaseArray.length)
		console.log(secondBaseArray.length)
		console.log(shortStopArray.length)
		console.log(thirdBaseArray.length)
		console.log(catcherArray.length)
		console.log(pitcherArray.length)

	}).catch(function(e) {
		console.warn(e)
	});


