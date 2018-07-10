/*
Write code to print the following
	* Izoh
	* Ephra
	* Mufasa
	* Favorite color is baby blue
  from the following object
*/

var someObject = {
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