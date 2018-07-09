/*
Write code to print the following
	* Izoh
	* Ephra
	* Mufasa
	* Favorite color is baby blue
  from the following object
*/
"use strict"
var someObject = {
	friends : [
		{name : "Izoh"}, 
		{name : "Ephra"}, 
		{name : "Mufasa"}
		], 
	color : "baby blue", 
	isEvil: true
};


console.log(" * " + someObject.friends[0]["name"] + "\n * " + 
	someObject.friends[1]["name"] + "\n * " + someObject.friends[2]["name"] + 
	"\n Favorite color is " + someObject.color);