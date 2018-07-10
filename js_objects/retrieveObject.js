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

<<<<<<< HEAD
//my solution
var pals = someObject.friends;
pals.forEach(function(item){
	console.log(item["name"]);
});
console.log("Favourite color is " + someObject.color);
=======
// let concatenatedString = ` * ${someObject.friends[0]["name"]}  
// 				${someObject.friends[1]["name"]} ${someObject.friends[1]["name"]} '\n' 
// 				${someObject.friends[1]["name"]}`;
// console.log(concatenatedString);
console.log(" * " + someObject.friends[0]["name"] + "\n * " + 
	someObject.friends[1]["name"] + "\n * " + someObject.friends[2]["name"] + 
	"\n Favorite color is " + someObject.color);
>>>>>>> e918d08bb82b55390d4de8b8d9276d48ed0c3d32
