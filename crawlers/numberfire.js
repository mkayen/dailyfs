/* NumberFire Crawler */

'use strict';
var cheerio = require("cheerio");
var request = require("request");
var json = require("json");

// JSON Crawler (Not needed while data is cached)

request('https://www.numberfire.com/mlb/fantasy/fantasy-baseball-projections/batters', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html)
    var variable = $('script')[1].children[0].data
   	var data = variable.substring(variable.indexOf("= ")+2, variable.indexOf(";"))
   	console.log(data);
  }
});