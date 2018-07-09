/* movieDB Exercise
	Create an array of movie objects
		*Each movie should have a title, rating and hasWatched properties.
		Iterate through the array and print out something like this :-
			* You have WATCHED "Frozen" - 4.5 stars
			* You have HAVE NOT WATCHED "Game Of Thrones " - 5 stars
			* You have HAVE NOT WATCHED "Suits " - 3.2 stars
			* You have WATCHED "Star Wars " - 4.5 stars

			USE YOUR OWN MOVIES!
*/

"use strict";
const movieDb = [
	{title : "The gods must be crazy", rating : 3.5, hasWatched : true},
	{title : "GOT", rating : 5, hasWatched : true},
	{title : "Rick and Morty", rating : 4.5, hasWatched : false},
	{title : "Hacker", rating : 2, hasWatched : false},
	{title : "DEn of Thieves", rating : 4.8, hasWatched : true},
	{title : "12 Stronh", rating : 5, hasWatched : true}
];

console.log(movieDb);
for(let i = 0; i < movieDb.length; i++){
	//Start building the string
	let output = "You have ";
	//check if watched is true
	if(movieDb[i].hasWatched){
		output += " WATCHED ";
	} else {
		output += " HAVE NOT WATCHED ";
	}
	output += " \" " + movieDb[i].title + " \" - " + movieDb[i].rating + " stars.";
	console.log(output);
}