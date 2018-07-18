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


//an array of movies
let movies = [{title: "Deadpool", rating: 4.5, haswatched: true},
			  {title: "Infinity War", rating: 4.4, haswatched: false},
			  {title: "Ragnarok", rating: 4.8, haswatched: true},
			  {title: "Incredibles", rating: 4.2, haswatched: false}];

 //my solution
// movies.forEach(function(item) {
// 	if(item["haswatched"] === true){
// 		console.log(`You have watched ${item.title} rating - ${item.rating}`);
// 	}else{
// 		console.log(`You have NOT watched ${item.title} rating - ${item.rating}`);
// 	}
	
// });

//another solution
for (let i =0; i < movies.length; i++){
	if (movies[i].haswatched){
		console.log(`You have watched "${movies[i].title}" rating - ${movies[i].rating}`);
	}else{
		console.log(`You have NOT watched "${movies[i].title}" rating - ${movies[i].rating}`);
	}
}