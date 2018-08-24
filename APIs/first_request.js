"use strict";
const request = require('request');

request("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(err, response, body){
	if(!err && response.statusCode == 200){
		let returnedData = JSON.parse(body);
		console.log("The weather in sanFran is ....")
		console.log(returnedData["query"]["results"]["channel"]["item"]["condition"]["text"]);
	}
});