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
const moviesDb = [
	{title : "The gods must be crazy", rating : 3.5, hasWatched : true},
	{title : "GOT", rating : 5, hasWatched : true},
	{title : "Rick and Morty", rating : 4.5, hasWatched : false},
	{title : "Hacker", rating : 2, hasWatched : false},
	{title : "DEn of Thieves", rating : 4.8, hasWatched : true},
	{title : "12 Stronh", rating : 5, hasWatched : true}
];


// console.log(moviesDb);
//Using a forLoop
for(let i = 0; i < moviesDb.length; i++){
	//Start building the string
	let output = "You have ";
	//check if watched is true
	if(moviesDb[i].hasWatched){
		output += " WATCHED ";
	} else {
		output += " HAVE NOT WATCHED ";
	}
	output += " \" " + moviesDb[i].title + " \" - " + moviesDb[i].rating + " stars.";
	console.log(output);
}
console.log("\n *********************** \n ");

//Using a forEach loop
moviesDb.forEach((movie) => {
	let buildString = `You have `;
	if(movie.hasWatched){
		buildString += ` WATCHED `;
	}else {
		buildString += ` HAVE NOT WATCHED `;
	}
	buildString += ` \" ${movie.title} \" ${movie.rating} stars.`;
	console.log(buildString);
});
