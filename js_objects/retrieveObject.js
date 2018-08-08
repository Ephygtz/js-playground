/*
Write code to print the following
	* Izoh
	* Ephra
	* Mufasa
	* Favorite color is baby blue
  from the following object
*/
"use strict";

let someObject = {
	friends : [
		{name : "Izoh"}, 
		{name : "Ephra"}, 
		{name : "Mufasa"}
		], 
	color : "baby blue", 
	isEvil: true
};

//my solution
var pals = someObject.friends;
pals.forEach(function(item){
	console.log(item["name"]);
});
console.log("Favourite color is " + someObject.color);

//ephraim's solution
// let concatenatedString = ` * ${someObject.friends[0]["name"]}  
// 				${someObject.friends[1]["name"]} ${someObject.friends[1]["name"]} '\n' 
// 				${someObject.friends[1]["name"]}`;
// console.log(concatenatedString);
console.log(" * " + someObject.friends[0]["name"] + "\n * " + 
	someObject.friends[1]["name"] + "\n * " + someObject.friends[2]["name"] + 
	"\n Favorite color is " + someObject.color);
